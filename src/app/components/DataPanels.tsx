import type React from "react"
export default function DataPanels({ children }: { children: React.ReactNode }) {
  return <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">{children}</section>
}
