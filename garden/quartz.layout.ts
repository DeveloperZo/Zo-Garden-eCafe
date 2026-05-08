import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { Options } from "./quartz/components/Explorer"
import { FileTrieNode } from "./quartz/util/fileTrie"

/** Sidebar Explorer: hide noisy leaves; pin Home + résumé gateway first. */
const explorerOpts: Pick<Options, "filterFn" | "sortFn"> = {
  filterFn: (node) => {
    const s = node.slugSegment
    if (s === "tags") return false
    if (/^\d{2}-/.test(s)) return false
    if (/^tier-/.test(s)) return false
    if (s === "diagrams") return false
    return true
  },
  sortFn: (a, b) => {
    const priority = (n: FileTrieNode) => {
      const slug = n.data?.slug ?? ""
      if (slug === "index") return 0
      if (slug === "interactive-resume") return 1
      return 2
    }
    const pa = priority(a)
    const pb = priority(b)
    if (pa !== pb) return pa - pb

    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }

    if (!a.isFolder && b.isFolder) {
      return 1
    }
    return -1
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/DeveloperZo/Zo-Garden-eCafe",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs({ showCurrentPage: false }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerOpts),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ showCurrentPage: false }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(explorerOpts),
  ],
  right: [],
}
