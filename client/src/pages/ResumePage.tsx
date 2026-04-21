/*
 * Style reminder: Alpine Editorial Modernism.
 * This page should read like a refined recruiting dossier with ledger-line accents,
 * warm ivory surfaces, dark green typography, and elegant editorial spacing.
 */
import { ArrowLeft, BriefcaseBusiness, GraduationCap, HeartHandshake, Mail, Sparkles } from "lucide-react";
import { Link } from "wouter";

const experience = [
  {
    role: "Analyst Shadowing",
    org: "Goodhue Boat Company",
    location: "Wolfeboro, NH",
    period: "Jun 2025 – Jul 2025",
    details:
      "Observed and practiced with a financial analyst while constructing and connecting income statements, balance sheets, and cash flow statements.",
  },
  {
    role: "Cashier",
    org: "The Yum Yum Shop",
    location: "Wolfeboro, NH",
    period: "Jul 2023 – Aug 2023",
    details:
      "Supported team operations during high-volume evening shifts and helped maintain efficient service during long customer lines.",
  },
  {
    role: "Marketing Intern",
    org: "Goodhue Boat Company",
    location: "Wolfeboro, NH",
    period: "Jul 2021 – Aug 2021",
    details:
      "Designed digital and print advertisements in Canva and applied formal brand guidelines to create cohesive promotional materials.",
  },
];

const leadership = [
  {
    title: "Full-time Missionary",
    org: "The Church of Jesus Christ of Latter-day Saints",
    location: "Denver, CO",
    period: "Aug 2023 – Mar 2025",
    details:
      "Led and trained teams of missionaries through organized meetings, one-on-one mentoring, performance evaluation, and goal planning.",
  },
];

const skills = [
  "Accounting foundations and financial statement literacy",
  "Leadership, mentoring, and team coordination",
  "Canva and brand-guideline application",
  "Elementary proficiency in Spanish",
  "Strong written and verbal communication",
  "Adaptability in fast-paced customer-facing environments",
];

const highlights = [
  "Brigham Young University – Marriott School of Business",
  "Expected graduation: Spring 2027",
  "GPA: 3.83 / 4.00",
  "Brigham Young Scholarship recipient, Fall 2025 and Winter 2026",
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay pointer-events-none fixed inset-0 opacity-30" />

      <header className="sticky top-0 z-40 border-b border-[rgba(27,67,50,0.12)] bg-[rgba(248,246,240,0.92)] backdrop-blur-xl">
        <div className="container flex items-center justify-between py-5">
          <div>
            <p className="section-label">Lauren Pratt</p>
            <p className="text-sm uppercase tracking-[0.28em] text-[rgba(27,67,50,0.62)]">Résumé &amp; Experience</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,67,50,0.14)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(27,67,50,0.3)] hover:bg-white">
              <ArrowLeft className="h-4 w-4" />
              Back Home
            </Link>
            <a
              href="https://www.linkedin.com/in/lauren-pratt-3aa5ab275"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--ink-soft)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[rgba(27,67,50,0.12)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(243,240,231,0.82),rgba(248,246,240,0.96))]" />
          <div className="container relative grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="section-label">Professional résumé</p>
                <h1 className="font-display text-5xl leading-none text-[var(--ink)] md:text-6xl">
                  A structured record of academic strength, leadership, and early financial experience.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[rgba(27,67,50,0.78)]">
                  Lauren Pratt is building an accounting profile grounded in scholarship, disciplined service,
                  and hands-on exposure to financial analysis. This page translates her résumé into a clear,
                  recruiter-friendly format that is easy to scan and easy to remember.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="hero-card bg-white/80 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgba(27,67,50,0.46)]">Highlight</p>
                    <p className="mt-3 text-base leading-7 text-[var(--ink)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[rgba(27,67,50,0.12)] bg-[var(--paper)] shadow-[0_28px_80px_rgba(27,67,50,0.14)]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663033384199/Gt37cq9MCSVXufEkrnXxcH/lauren-resume-accent-Lw94Cm73Ktk4io8qjCDia8.webp"
                alt="Editorial accounting workspace"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,67,50,0.08),rgba(27,67,50,0.3))]" />
            </div>
          </div>
        </section>

        <section className="container py-14 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <aside className="space-y-6">
              <div className="ink-border bg-white/85 p-7">
                <div className="flex items-center gap-3 text-[var(--ink)]">
                  <GraduationCap className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em]">Education</p>
                </div>
                <h2 className="mt-5 font-display text-4xl text-[var(--ink)]">Brigham Young University</h2>
                <p className="mt-2 text-base text-[rgba(27,67,50,0.78)]">Marriott School of Business, Provo, Utah</p>
                <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[rgba(27,67,50,0.5)]">Expected Graduation</p>
                <p className="mt-2 text-lg font-semibold text-[var(--ink)]">Spring 2027</p>
                <div className="mt-8 grid gap-3">
                  <div className="stat-chip justify-between"><span>GPA</span><strong>3.83 / 4.00</strong></div>
                  <div className="stat-chip justify-between"><span>Scholarship</span><strong>Fall 2025</strong></div>
                  <div className="stat-chip justify-between"><span>Scholarship</span><strong>Winter 2026</strong></div>
                </div>
              </div>

              <div className="ink-border bg-[var(--ink)] p-7 text-white">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.72)]">Contact</p>
                </div>
                <div className="mt-5 space-y-3 text-sm leading-7 text-[rgba(255,255,255,0.84)]">
                  <p>lapratt14@gmail.com</p>
                  <a href="https://www.linkedin.com/in/lauren-pratt-3aa5ab275" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b border-[rgba(255,255,255,0.32)] pb-1 text-white transition hover:border-white">
                    linkedin.com/in/lauren-pratt-3aa5ab275
                  </a>
                </div>
              </div>
            </aside>

            <div className="space-y-8">
              <section className="ink-border bg-white/85 p-7 md:p-8">
                <div className="flex items-center gap-3 text-[var(--ink)]">
                  <BriefcaseBusiness className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em]">Experience</p>
                </div>
                <div className="resume-timeline mt-7 space-y-8">
                  {experience.map((item) => (
                    <article key={`${item.role}-${item.period}`} className="relative pl-8">
                      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[var(--accent-strong)]" />
                      <p className="text-sm uppercase tracking-[0.18em] text-[rgba(27,67,50,0.5)]">{item.period}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-[var(--ink)]">{item.role}</h3>
                      <p className="mt-1 text-base font-medium text-[rgba(27,67,50,0.72)]">{item.org} · {item.location}</p>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-[rgba(27,67,50,0.82)]">{item.details}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="ink-border bg-white/85 p-7 md:p-8">
                <div className="flex items-center gap-3 text-[var(--ink)]">
                  <HeartHandshake className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em]">Leadership &amp; Service</p>
                </div>
                <div className="mt-7 space-y-6">
                  {leadership.map((item) => (
                    <article key={`${item.title}-${item.period}`} className="rounded-[1.5rem] border border-[rgba(27,67,50,0.1)] bg-[rgba(243,240,231,0.72)] p-6">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold text-[var(--ink)]">{item.title}</h3>
                          <p className="text-base text-[rgba(27,67,50,0.72)]">{item.org} · {item.location}</p>
                        </div>
                        <p className="text-sm uppercase tracking-[0.18em] text-[rgba(27,67,50,0.5)]">{item.period}</p>
                      </div>
                      <p className="mt-4 text-base leading-8 text-[rgba(27,67,50,0.82)]">{item.details}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="ink-border bg-white/85 p-7 md:p-8">
                <div className="flex items-center gap-3 text-[var(--ink)]">
                  <Sparkles className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em]">Awards, skills &amp; interests</p>
                </div>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {skills.map((skill) => (
                    <div key={skill} className="stat-chip min-h-16 justify-start text-left leading-7">
                      {skill}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-[rgba(27,67,50,0.82)]">
                  Lauren also participated in Leaders Now International, where she strengthened her leadership,
                  communication, and teamwork skills. Outside of class and work, she enjoys skiing and previously
                  played lacrosse, tennis, and surfed throughout high school.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
