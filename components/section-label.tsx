import { cn } from "@/lib/utils"
import FadeIn from "./animations/fade-in"

type SectionLabelProps = {
  label: string
  className?: string
  color?: string
}

export default function SectionLabel({
  label,
  className = "",
  color = "black",
}: SectionLabelProps) {
  return (
    <FadeIn delay={0.2}>
      <div
        style={{ fontFamily: "var(--font-space-grotesk)" }}
        className={cn("relative my-4 items-start gap-1 text-lg", className)}
      >
        <span className={`text-${color}`}>{label}</span>
        <div
          style={{ background: color }}
          className={`h-[2px] w-10 bg-${color}`}
        />
      </div>
    </FadeIn>
  )
}
