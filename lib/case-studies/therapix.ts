import type { CaseStudyData } from "@/lib/case-studies/types";

export const therapixCaseStudy: CaseStudyData = {
  slug: "therapix",
  title: "Therapix",
  subtitle: "Designing a AI-Powered Clinical Documentation Experience",
  tagline:
    "Turning a time-consuming documentation process into a workflow that feels almost effortless.",
  overviewTitle: "Project Overview",
  intro: [
    "Healthcare professionals spend a large part of their day documenting patient interactions. The challenge isn't just writing the note. They need to capture the right information, structure it correctly, review it carefully, stay compliant, and do all of this without losing focus on the patient in front of them.",
    "That was the problem I wanted to solve with Therapix. I designed Therapix from 0→1 across both the marketing website and the clinical web application — creating the customer-facing experience that explains the product and the in-product experience that makes the workflow actually work.",
    "The principle I kept coming back to was simple: Let clinicians focus on the conversation. Let AI take care of the documentation.",
    "Therapix allows clinicians to record patient interactions, generate structured SOAP notes, review and edit AI-generated content, complete forms, manage patient history, and move finalized documentation into their existing workflows.",
  ],
  meta: {
    role: "Product Designer / UX Designer",
    roleDetail:
      "Led product strategy, user research, UX design, prototyping, and concept validation for a 0→1 AI-powered clinical documentation experience.",
    tools: "Figma, FigJam, Notion, Maze",
    toolsDetail:
      "Used for product mapping, user flows, wireframing, prototyping, usability testing, research synthesis, and design documentation.",
    platform: "Web Application & Website",
    platformDetail:
      "Designed an AI-powered clinical documentation experience that helps healthcare professionals capture, structure, review, and manage clinical notes with less friction.",
  },
  heroImage: {
    src: "/figma/case-studies/therapix/hero.png",
    alt: "Therapix marketing website hero — AI-Powered Clinical Documentation for Allied Health",
    width: 924,
    height: 450,
  },
  sections: [
    {
      title: "The challenge",
      paragraphs: [
        "The interesting part wasn't designing the AI. It was figuring out how much control clinicians should have over it — and how that experience should work across the product. Clinical documentation is sensitive. A small mistake in an AI-generated note isn't the same as a typo in a typical SaaS product. The clinician still needs to understand, verify, and ultimately take responsibility for what goes into the record.",
        "That meant the experience had to balance three things: Speed — reduce the amount of manual documentation. Control — make it easy for clinicians to review and change the output. Trust — make AI-generated information feel transparent rather than like a black box.",
        "This shaped one of the biggest decisions I made early on: AI shouldn't replace the clinician's workflow. It should make the workflow easier.",
      ],
      images: [
        {
          src: "/figma/case-studies/therapix/challenge.png",
          alt: "Therapix multi-device clinical workflow — laptop and phone showing a SOAP note",
          width: 876,
          height: 385,
        },
      ],
    },
    {
      title: "Starting with the workflow, not the AI",
      paragraphs: [
        "For a 0→1 product, I wanted to understand the entire documentation journey before thinking about individual screens. I broke the experience down into:",
        "That helped me identify where AI could genuinely remove effort and where the clinician still needed to stay in control. I then translated that workflow into a web application experience where clinicians could move between documentation, patient history, forms, templates, and AI-assisted workflows without feeling like they were switching between disconnected tools. Rather than creating a separate “AI experience,” I integrated AI into the moments where it could actually help.",
        "The goal was for Therapix to feel less like: “Here is an AI tool.” and more like: “Here is a faster way to complete something you already do every day.” That distinction influenced everything from the information architecture to the interaction model.",
      ],
      flow: [
        [
          "Record",
          "Understand",
          "Generate",
          "Review",
          "Edit",
          "Finalize",
          "Transfer",
        ],
      ],
      images: [
        {
          src: "/figma/case-studies/therapix/workflow-steps.png",
          alt: "Therapix marketing site — Record, Edit, Done 3-step process",
          width: 745,
          height: 361,
        },
        {
          src: "/figma/case-studies/therapix/wireframes.jpg",
          alt: "Early wireframe sketches exploring the Therapix web application layout",
          width: 957,
          height: 489,
        },
      ],
      imageLayout: "stack",
    },
    {
      title: "Designing trust into the workflow",
      paragraphs: [
        "One of the biggest UX questions was what should happen after AI generates something. I deliberately avoided making the generated note feel final. The flow became:",
        "Within the web application, clinicians can make changes directly or use Ask AI to refine parts of the documentation. This human-in-the-loop approach gave AI an important role without giving it the final say. For me, that was the right balance: Automation where it saves time. Control where accuracy matters.",
      ],
      flow: [["AI generates", "Clinician reviews", "Clinician edits", "Clinician approves"]],
      images: [
        {
          src: "/figma/case-studies/therapix/trust-usage.png",
          alt: "Therapix dashboard and usage limits screens showing transparent, reviewable AI output",
          width: 1013,
          height: 398,
        },
      ],
    },
    {
      title: "Reducing cognitive load",
      paragraphs: [
        "Clinicians don't need another complicated dashboard to manage during a busy day. So I focused the core experience around a small number of obvious actions:",
      ],
      numberedList: {
        intro: "The core actions:",
        items: [
          "Record — Capture the patient interaction.",
          "Generate — Turn the conversation into a structured SOAP note.",
          "Review — See what AI understood and verify the information.",
          "Edit — Make changes manually or use Ask AI.",
          "Done — Finalize the documentation and move it into the existing workflow.",
        ],
      },
      closingParagraphs: [
        "The web application provides the space for these deeper workflows — from reviewing documentation and patient history to completing forms and managing multiple records. Instead of exposing every capability at once, I designed the experience so that the next action was usually obvious.",
      ],
      images: [
        {
          src: "/figma/case-studies/therapix/record-action.png",
          alt: "Therapix mobile app with the prominent Record action highlighted",
          width: 569,
          height: 500,
        },
      ],
    },
    {
      title: "Making AI feel like an assistant, not a chatbot",
      paragraphs: [
        "Another question I explored was how AI should behave inside a clinical product. I didn't want Therapix to feel like a chatbot sitting beside the workflow. The more useful opportunity was to make AI context-aware. Once a SOAP note exists, the same clinical context can help with other documentation tasks — such as referral letters, patient instructions, treatment plans, and other forms of clinical communication.",
        "That changed how I thought about the AI experience. It wasn't simply: “Generate something for me.” It became: “Help me finish my clinical work.” That shift made AI feel much more useful without making it the center of the product.",
      ],
      images: [
        {
          src: "/figma/case-studies/therapix/ai-features.png",
          alt: "Therapix marketing site — Multiple Recording Support, SOAP Generation, and Form Automation feature cards",
          width: 829,
          height: 406,
        },
      ],
    },
    {
      title: "Designing a web application around real clinical workflows",
      paragraphs: [
        "Because Therapix is more than a single AI interaction, the web application became the foundation for the broader clinical workflow.",
      ],
      numberedList: {
        intro: "I designed the experience to support:",
        items: [
          "Multiple patient recordings",
          "Structured SOAP note generation",
          "Patient history",
          "Templates and documentation workflows",
          "Automated WSIB/MVA forms",
          "AI-assisted editing",
          "Review and approval",
          "Cross-platform access",
          "EMR transfer",
        ],
      },
      closingParagraphs: [
        "The challenge was keeping all of these capabilities accessible without turning the product into an overwhelming clinical dashboard. Instead of forcing everyone through one rigid process, I designed the system to provide a consistent foundation while allowing clinicians to work in ways that fit their needs. That became an important product principle: Standardize the system. Personalize the workflow.",
      ],
      images: [
        {
          src: "/figma/case-studies/therapix/system-flow.png",
          alt: "Full system flowchart — from landing page through SOAP note generation, review, editing, and EMR export",
          width: 1042,
          height: 103,
        },
      ],
    },
    {
      title: "Accessibility as part of the product",
      paragraphs: [
        "Accessibility wasn't something I wanted to add at the end of the design process. Because Therapix is used throughout a clinician's day, I designed the experience to make information easy to read, understand, and interact with — without adding unnecessary friction.",
        "I built accessibility into the design from the start, focusing on WCAG 2.1 AA, clear information hierarchy, readable typography, color contrast, keyboard navigation, responsive behavior, screen-reader considerations, and plain-language interactions. I also designed an accessible recording interaction with a clear prominent button, making it easy for clinicians to start and stop recordings and capture patient information through voice without relying on typing. The goal was to make Therapix inclusive, intuitive, and easy to use in real-world clinical workflows.",
      ],
    },
    {
      title: "The result",
      paragraphs: [
        "The final experience turns a documentation-heavy process into a much clearer workflow:",
        "What started as a complex 0→1 AI product became a web-based clinical workflow where each step has a clear purpose. I brought together AI-powered SOAP generation, multiple recordings, automated WSIB/MVA forms, AI-assisted editing, patient history, and EMR transfer, while keeping the clinician in control of the final documentation. The result is a product that doesn't ask clinicians to learn a completely new way of working — it simply makes the work they already do faster, clearer, and easier to manage.",
      ],
      flow: [["Talk", "Record", "AI generates", "Review", "Edit", "Done"]],
      images: [
        {
          src: "/figma/case-studies/therapix/final-dashboard.png",
          alt: "The final Therapix web application dashboard",
          width: 779,
          height: 373,
        },
      ],
    },
    {
      title: "Impact",
      paragraphs: [
        "The simplified recording and AI-assisted documentation experience also made information capture easier and reduced friction across the clinician's workflow. Most importantly, the design shifted documentation from a time-consuming task into a more streamlined part of the clinical process, giving clinicians more time to focus on their patients.",
      ],
      metrics: [
        { value: "30%", label: "Faster documentation" },
        { value: "35%", label: "Less manual documentation" },
        { value: "25%", label: "Improved workflow efficiency" },
      ],
    },
    {
      title: "What I learned",
      paragraphs: [
        "AI should empower, not overwhelm. The best AI experiences make users more capable rather than making AI the hero.",
        "Keep humans in control. AI can accelerate the work, but clinicians should always have the ability to review, edit, and approve the final output.",
        "Reduce friction, not just clicks. The goal was to make documentation feel lighter by simplifying complex administrative tasks and keeping AI in the background.",
        "0→1 is about making complexity understandable. I wasn't just designing an AI interface — I was turning a complex idea into a workflow people could understand, trust, and actually use.",
      ],
    },
  ],
};
