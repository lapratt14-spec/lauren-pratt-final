/*
 * Style reminder: Alpine Editorial Modernism.
 * Use asymmetry, deep green hierarchy, refined serif headlines, warm neutrals,
 * and restrained interactions that make the site feel like a premium recruiting profile.
 */
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Mail,
  Music4,
  NotebookPen,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";

const profileStats = [
  { label: "GPA", value: "3.83 / 4.00" },
  { label: "Expected Graduation", value: "Spring 2027" },
  { label: "Scholarships", value: "Fall 2025 · Winter 2026" },
];

const strengths = [
  "Financial statement exposure through analyst shadowing",
  "Leadership under real-world service responsibilities",
  "Clear communication in fast-paced customer settings",
  "Professional polish shaped by academic discipline and initiative",
];

const experiencePreview = [
  {
    title: "Analyst Shadowing",
    organization: "Goodhue Boat Company",
    summary:
      "Built familiarity with how income statements, balance sheets, and cash flow statements connect in practice.",
  },
  {
    title: "Cashier",
    organization: "The Yum Yum Shop",
    summary:
      "Helped maintain efficient service during busy shifts while supporting smooth team coordination.",
  },
  {
    title: "Marketing Intern",
    organization: "Goodhue Boat Company",
    summary:
      "Created digital and print materials in Canva while learning how brand standards support professional communication.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay pointer-events-none fixed inset-0 opacity-30" />

      <header className="sticky top-0 z-40 border-b border-[rgba(27,67,50,0.12)] bg-[rgba(248,246,240,0.88)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-4 py-5">
          <div>
            <p className="section-label">Lauren Pratt</p>
            <p className="text-sm uppercase tracking-[0.28em] text-[rgba(27,67,50,0.58)]">Accounting Student Portfolio</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-[rgba(27,67,50,0.68)] lg:flex">
            <a href="#profile" className="transition hover:text-[var(--ink)]">Profile</a>
            <a href="#experience" className="transition hover:text-[var(--ink)]">Experience</a>
            <a href="#leadership" className="transition hover:text-[var(--ink)]">Leadership</a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/resume" className="hidden rounded-full border border-[rgba(27,67,50,0.16)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(27,67,50,0.3)] hover:bg-white md:inline-flex">
              View résumé
            </Link>
            <a
              href="https://www.linkedin.com/in/lauren-pratt-3aa5ab275"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--ink-soft)]"
            >
              LinkedIn
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[rgba(27,67,50,0.12)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,242,0.9),rgba(248,246,240,0.94))]" />
          <div className="container relative grid gap-10 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:py-20">
            <aside className="space-y-6 lg:pr-4">
              <div className="space-y-4">
                <p className="section-label">Editorial profile</p>
                <h1 className="font-display text-5xl leading-none text-[var(--ink)] md:text-6xl lg:text-[5.4rem]">
                  A thoughtful start to an accounting career.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-[rgba(27,67,50,0.78)]">
                  Lauren Pratt is an undergraduate business student building an accounting-centered professional
                  identity through academic excellence, early analytical exposure, leadership, and disciplined service.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {profileStats.map((stat) => (
                  <div key={stat.label} className="stat-chip min-h-[104px] flex-col items-start justify-between">
                    <span>{stat.label}</span>
                    <strong className="text-base leading-6 text-[var(--ink)]">{stat.value}</strong>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/resume" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--ink)]">
                  Read the full résumé
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[rgba(27,67,50,0.16)] bg-white/70 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[rgba(27,67,50,0.3)]">
                  Contact Lauren
                </a>
              </div>
            </aside>

            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="hero-card relative min-h-[440px] overflow-hidden p-0">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663033384199/Gt37cq9MCSVXufEkrnXxcH/lauren-hero-accounting-oJZDhn929nZU3at42JTjQ6.webp"
                  alt="Abstract editorial accounting scene"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(248,246,240,0.2),rgba(27,67,50,0.12))]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/45 bg-[rgba(248,246,240,0.78)] p-6 shadow-[0_24px_60px_rgba(27,67,50,0.18)] backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[rgba(27,67,50,0.48)]">Professional direction</p>
                  <p className="mt-3 text-2xl font-semibold text-[var(--ink)]">
                    Accounting-focused, detail-minded, and ready to grow in analytical environments.
                  </p>
                </div>
              </article>

              <div className="space-y-5">
                <article className="portrait-frame">
                  <img
                    src="/manus-storage/lauren-pratt-headshot_9753d3d0.webp"
                    alt="Lauren Pratt portrait"
                    className="h-[350px] w-full rounded-[1.7rem] object-cover object-center"
                  />
                </article>
                <article className="hero-card bg-[var(--ink)] p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.7)]">At a glance</p>
                  <p className="mt-4 text-lg leading-8 text-[rgba(255,255,255,0.86)]">
                    Lauren combines classroom discipline with people-centered experience and practical curiosity about
                    how businesses organize, communicate, and interpret financial information.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="container py-14 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <article className="ink-border bg-white/85 p-7 md:p-8">
              <div className="flex items-center gap-3 text-[var(--ink)]">
                <NotebookPen className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em]">Profile</p>
              </div>
              <h2 className="mt-5 font-display text-4xl text-[var(--ink)] md:text-[3.3rem]">Professional presence with room to grow.</h2>
              <p className="mt-5 text-base leading-8 text-[rgba(27,67,50,0.82)]">
                The goal of this site is not to overstate experience, but to present Lauren’s background with clarity,
                polish, and confidence. Her academic performance and scholarship recognition show consistency, while
                her work and leadership experiences show adaptability, accountability, and strong communication.
              </p>
              <blockquote className="mt-6 border-l border-[rgba(27,67,50,0.2)] pl-5 text-lg italic leading-8 text-[rgba(27,67,50,0.72)]">
                “The strongest early-career profiles do not just list experiences. They show evidence of discipline,
                initiative, and the ability to learn in real settings.”
              </blockquote>
            </article>

            <article className="ink-border bg-[rgba(243,240,231,0.88)] p-7 md:p-8">
              <div className="flex items-center gap-3 text-[var(--ink)]">
                <BadgeCheck className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em]">Strengths</p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {strengths.map((item) => (
                  <div key={item} className="stat-chip min-h-24 justify-start text-left leading-7">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="border-y border-[rgba(27,67,50,0.12)] bg-[rgba(243,240,231,0.56)] py-14 lg:py-18">
          <div className="container">
            <div className="max-w-3xl">
              <p className="section-label">Selected experience</p>
              <h2 className="mt-4 font-display text-4xl text-[var(--ink)] md:text-[3.4rem]">
                Early roles that reflect analysis, communication, and composure.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {experiencePreview.map((item) => (
                <article key={item.title} className="hero-card bg-white/88 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-[rgba(27,67,50,0.48)]">{item.organization}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--ink)]">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[rgba(27,67,50,0.82)]">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="container py-14 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <article className="hero-card overflow-hidden p-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663033384199/Gt37cq9MCSVXufEkrnXxcH/lauren-resume-accent-Lw94Cm73Ktk4io8qjCDia8.webp"
                alt="Refined accounting desk setup"
                className="h-full min-h-[340px] w-full object-cover"
              />
            </article>

            <article className="ink-border bg-white/88 p-7 md:p-8">
              <div className="flex items-center gap-3 text-[var(--ink)]">
                <GraduationCap className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em]">Leadership & service</p>
              </div>
              <h2 className="mt-5 font-display text-4xl text-[var(--ink)] md:text-[3.1rem]">Leadership grounded in responsibility.</h2>
              <p className="mt-5 text-base leading-8 text-[rgba(27,67,50,0.82)]">
                As a full-time missionary in Denver, Lauren led and trained teams, organized meetings, evaluated
                progress, and supported individuals through goal planning. That experience sharpened the steady,
                dependable mindset that also matters in business and accounting settings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="stat-chip">Team mentoring</span>
                <span className="stat-chip">Goal planning</span>
                <span className="stat-chip">Performance evaluation</span>
                <span className="stat-chip">Communication</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="border-t border-[rgba(27,67,50,0.12)] bg-[var(--ink)] py-14 text-white lg:py-18">
          <div className="container grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <p className="section-label text-[rgba(255,255,255,0.64)]">Contact</p>
              <h2 className="mt-4 font-display text-4xl md:text-[3.6rem]">Connect with Lauren.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.82)]">
                For networking, recruiting, or professional opportunities, Lauren can be reached directly by email or through LinkedIn.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a href="mailto:lapratt14@gmail.com" className="rounded-[1.5rem] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.06)] p-6 transition hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.09)]">
                <Mail className="h-5 w-5" />
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[rgba(255,255,255,0.62)]">Email</p>
                <p className="mt-3 text-lg font-semibold">lapratt14@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/lauren-pratt-3aa5ab275"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.06)] p-6 transition hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.09)]"
              >
                <BriefcaseBusiness className="h-5 w-5" />
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[rgba(255,255,255,0.62)]">LinkedIn</p>
                <p className="mt-3 text-lg font-semibold">Professional profile</p>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[rgba(27,67,50,0.12)] bg-[rgba(248,246,240,0.92)] py-6">
          <div className="container flex flex-col gap-4 text-sm text-[rgba(27,67,50,0.62)] md:flex-row md:items-center md:justify-between">
            <p>Lauren Pratt portfolio site for an information systems web development project.</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/resume" className="inline-flex items-center gap-2 transition hover:text-[var(--ink)]">
                Résumé
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="/scratch.html" className="inline-flex items-center gap-2 transition hover:text-[var(--ink)]">
                Scratch page
                <Music4 className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
