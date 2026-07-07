import { MotionReveal } from "@/components/motion/reveal";
import { SELECTED_IMPACT } from "@/lib/home-content";

export function SelectedImpact() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[var(--content-max)] px-[max(1.25rem,env(safe-area-inset-left))] py-[clamp(3rem,8vw,5rem)]">
      <MotionReveal>
        <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight text-celestial-fg">
          Selected Impact
        </h2>
      </MotionReveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SELECTED_IMPACT.map((stat, index) => (
          <MotionReveal key={stat.label} delay={index * 60}>
            <div className="celestial-glass flex h-full flex-col items-center justify-center rounded-[20px] px-5 py-8 text-center">
              <p className="text-[clamp(2.25rem,5vw,3rem)] font-bold tracking-tight text-celestial-fg">
                {stat.value}
              </p>
              <p className="mt-2 text-[15px] leading-[1.4] text-celestial-muted">
                {stat.label}
              </p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
