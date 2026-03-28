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
  const [first, ...rest] = label.trim().split(" ")
  const restText = rest.join(" ")

  return (
    <FadeIn delay={0.2}>
      <div
        style={{ fontFamily: "var(--font-space-grotesk)" }}
        className={cn(
          "relative my-4 items-baseline gap-1.5 sm:text-lg",
          className
        )}
      >
        <span className="relative mr-2">
          <span className={`text-${color}`}>{first}</span>
          <span
            style={{ background: color }}
            className={`absolute -bottom-1 left-0 h-[2.5px] w-full max-w-18 bg-${color}`}
          />
        </span>
        {restText && (
          <span className={`text-${color} shrink-0`}>{restText}</span>
        )}
      </div>
    </FadeIn>
  )
}
