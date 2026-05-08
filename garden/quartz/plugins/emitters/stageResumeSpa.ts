import path from "path"
import fs from "fs"
import { styleText } from "util"
import { QuartzEmitterPlugin } from "../types"
import { BuildCtx } from "../../util/ctx"
import { FilePath, joinSegments } from "../../util/path"

/** Repo-local: copy interactive résumé CRA output into Quartz `public/resume/` (matches deploy `build.sh`). */
async function* stageResumeIntoPublic(ctx: BuildCtx): AsyncGenerator<FilePath> {
  const { argv } = ctx
  const resumeBuild = path.resolve(process.cwd(), "..", "resumeContent", "build")
  const destRoot = joinSegments(argv.output, "resume") as FilePath

  try {
    await fs.promises.access(path.join(resumeBuild, "index.html"), fs.constants.R_OK)
  } catch {
    console.log(
      styleText(
        "yellow",
        "[StageResumeSpa] resumeContent/build/ not found — skipping /resume (build the SPA once: cd ../resumeContent && npm ci && npm run build — or run ./build.sh from repo root).",
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
    yield* stageResumeIntoPublic(ctx)
  },
  async *partialEmit(ctx, _content, _resources, _changeEvents) {
    yield* stageResumeIntoPublic(ctx)
  },
})
