import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Riya Designs for UI/UX and product strategy work.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-12 pt-10 md:px-10 md:pt-16">
      <h1 className="text-4xl font-bold md:text-6xl">Contact</h1>
      <p className="mt-4 text-lg leading-8 text-muted">
        Have a project in mind? Let&apos;s create something impactful together.
      </p>
      <div className="mt-10 rounded-3xl border border-line bg-surface p-8">
        <p className="text-lg font-semibold">Preferred channels</p>
        <div className="mt-4 space-y-3 text-base">
          <p>
            Email:{" "}
            <a
              className="underline"
              href="mailto:hello@riyadesigns.studio"
            >
              hello@riyadesigns.studio
            </a>
          </p>
          <p>
            Linkedin:{" "}
            <a
              className="underline"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/riya-patel
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
