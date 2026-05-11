import path from "path"
import fs from "fs"
import { execSync } from "node:child_process"
import { styleText } from "util"
import { QuartzEmitterPlugin } from "../types"
import { BuildCtx } from "../../util/ctx"
import { FilePath, joinSegments } from "../../util/path"

function resumePackageRoot(): string {
  return path.resolve(process.cwd(), "..", "resumeContent")
}

/** Runs `npm run build` in resumeContent so `build/` matches source before copy. */
function runResumeProductionBuild(): void {
  const root = resumePackageRoot()
  console.log(
    styleText("cyan", "[StageResumeSpa] npm run build in resumeContent/ (set QUARTZ_SKIP_RESUME_BUILD=1 to skip)…"),
  )
  try {
    execSync("npm run build", {
      cwd: root,
      stdio: "inherit",
      env: process.env,
      shell: true,
      windowsHide: true,
    })
  } catch (e) {
    const err = e as { status?: number }
    throw new Error(
      `[StageResumeSpa] resumeContent build failed (exit ${err.status ?? "unknown"}). Install deps: cd ../resumeContent && npm ci`,
    )
  }
}

/** Repo-local: build (full emit only) and copy interactive résumé CRA output into Quartz `public/resume/`. */
async function* stageResumeIntoPublic(
  ctx: BuildCtx,
  opts: { buildFirst: boolean },
): AsyncGenerator<FilePath> {
  const { argv } = ctx
  const resumeRoot = resumePackageRoot()
  const resumeBuild = path.join(resumeRoot, "build")
  const destRoot = joinSegments(argv.output, "resume") as FilePath

  try {
    await fs.promises.access(path.join(resumeRoot, "package.json"), fs.constants.R_OK)
  } catch {
    console.log(
      styleText("yellow", "[StageResumeSpa] resumeContent/ not found — skipping /resume (incomplete clone)."),
    )
    return
  }

  if (opts.buildFirst && process.env.QUARTZ_SKIP_RESUME_BUILD !== "1") {
    runResumeProductionBuild()
  }

  try {
    await fs.promises.access(path.join(resumeBuild, "index.html"), fs.constants.R_OK)
  } catch {
    console.log(
      styleText(
        "yellow",
        "[StageResumeSpa] resumeContent/build/ missing — skipping /resume (install deps: cd ../resumeContent && npm ci, then run quartz build without QUARTZ_SKIP_RESUME_BUILD).",
      ),
    )
    return
  }

  await fs.promises.rm(destRoot, { recursive: true, force: true })
  await fs.promises.cp(resumeBuild, destRoot, { recursive: true })
  console.log(styleText("green", "[StageResumeSpa] staged interactive résumé → public/resume/"))
  yield destRoot
}

export const StageResumeSpa: QuartzEmitterPlugin = () => ({
  name: "StageResumeSpa",
  async *emit(ctx, _content, _resources) {
    yield* stageResumeIntoPublic(ctx, { buildFirst: true })
  },
  async *partialEmit(ctx, _content, _resources, _changeEvents) {
    yield* stageResumeIntoPublic(ctx, { buildFirst: false })
  },
})
