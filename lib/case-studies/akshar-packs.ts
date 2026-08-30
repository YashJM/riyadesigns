import type { CaseStudyData } from "@/lib/case-studies/types";

export const aksharPacksCaseStudy: CaseStudyData = {
  slug: "akshar-packs",
  title: "Akshar Packs",
  subtitle:
    "Improving Product Discovery & Lead Capture for a B2B Packaging Platform",
  externalUrl: "https://aksharpacks.com/",
  overviewTitle: "Project Overview",
  intro: [
    "Akshar Packs is a B2B packaging company that helps businesses find custom packaging solutions across different industries.",
    "For this project, I redesigned the website from research to implementation support, focusing on improving product discovery, simplifying the inquiry journey, and helping the sales team capture more structured CRM-ready lead information.",
  ],
  meta: {
    role: "Product Designer / UI-UX Designer",
    timeline: "4 Weeks",
    platform: "Responsive Website",
    tools: "Figma, FigJam, Wireframing, Prototyping, Usability Testing",
    responsibilities:
      "I worked on the Akshar Packs website from research to implementation support. My role included reviewing the existing experience, identifying user and business pain points, improving the product discovery journey, designing wireframes and high-fidelity screens, creating reusable UI components, and supporting the final website implementation.",
    focusAreas:
      "Product Discovery, Information Architecture, Inquiry Flow, CRM Lead Capture, Responsive Design, Design System, Developer Handoff",
  },
  heroImage: {
    src: "/figma/case-studies/akshar/hero.png",
    alt: "Akshar Packs website hero",
    width: 930,
    height: 516,
  },
  sections: [
    {
      title: "Business Context",
      paragraphs: [
        "Akshar Packs had strong packaging services, but the website was not fully supporting how customers searched for products or how the sales team managed inquiries.",
        "Customers needed a faster way to find the right packaging options, understand specifications, and request details. Internally, the business needed cleaner inquiry data so leads could be tracked, qualified, and followed up more easily.",
        "This project was not only about improving the visual design. It was about connecting the customer experience with the business process behind it.",
      ],
      images: [
        {
          src: "/figma/case-studies/akshar/business-context.png",
          alt: "Akshar Packs pricing and business context screen",
          width: 737,
          height: 364,
        },
      ],
    },
    {
      title: "The Challenge",
      paragraphs: [
        "Customers were finding it difficult to browse packaging options, compare product details, and understand customization choices. Product categories were not clearly organized, important details were hard to scan, and the inquiry process required extra effort before users could reach the sales team.",
        "From the business side, inquiries were not always structured enough for quick follow-up. This created friction for both customers and the internal sales team.",
        "The main challenge was to create a clearer product discovery experience while improving the quality of lead information captured through the inquiry flow.",
      ],
      images: [
        {
          src: "/figma/case-studies/akshar/challenge.png",
          alt: "Akshar Packs inquiry challenge",
          width: 584,
          height: 536,
        },
      ],
    },
    {
      title: "Research Approach",
      paragraphs: [
        "To understand the problem, I reviewed the existing website experience, discussed business needs with stakeholders, analyzed competitor packaging websites, and looked at common B2B quote-request patterns.",
        "I focused on understanding how customers move from product discovery to inquiry and what information the sales team needs to qualify leads quickly.",
        "I approached the Akshar Packs redesign using a product thinking process: Empathize → Define → Ideate → Prototype → Test. Instead of treating it as a visual website redesign, I looked at the complete journey from product discovery to quote request, considering both customer needs and sales-team goals.",
      ],
      items: [
        {
          title: "Empathize",
          body: "I audited the existing website, reviewed the customer journey, analyzed competitors, and spoke with stakeholders to understand where customers struggled to find products, evaluate options, and submit their requirements.",
        },
        {
          title: "Define",
          body: "I synthesized the findings into key friction points around product discovery, product information, customization, and inquiry capture. This helped me reframe the challenge from improving the website visually to creating a clearer path from Discover → Evaluate → Convert.",
        },
        {
          title: "Ideate",
          body: "I explored solutions across the journey, including clearer product categories, better product information, guided customization, and a more structured inquiry experience.",
        },
        {
          title: "Prototype",
          body: "I translated these ideas into user flows, wireframes, and prototypes, focusing first on the experience and information structure before moving into visual design.",
        },
        {
          title: "Test",
          body: "I evaluated the proposed flows against the research findings and refined the experience to make product discovery, evaluation, and inquiry submission more intuitive and useful for both customers and sales.",
        },
      ],
    },
    {
      title: "Research Insights",
      paragraphs: [
        "One key insight was that users usually arrive with a specific packaging need in mind. They may be looking for a certain box type, material, size, or industry use case, so the website needed to guide them faster instead of making them browse through unclear options.",
        "Another insight was that product details needed stronger hierarchy. For B2B customers, product pages need to answer practical questions quickly: what the product is, what can be customized, what specifications are available, and how to request a quote.",
        "I also found that long or unclear inquiry forms can create hesitation. Users need guidance on what information to provide, while the sales team needs structured details such as product type, quantity, customization needs, and contact information.",
      ],
    },
    {
      title: "Customer Journey",
      paragraphs: [
        "The main customer journey was:",
        "The biggest friction happened between product discovery and inquiry submission. Users needed more confidence before reaching out, and the sales team needed better information once the inquiry was submitted.",
      ],
      flow: [
        ["Landing Page", "Product Discovery", "Product Detail"],
        ["Customization Details"],
        ["Inquiry Submission", "Sales Follow-up"],
      ],
    },
    {
      title: "Design Decisions",
      items: [
        {
          title: "1. Simplified Product Discovery",
          body: [
            "I reorganized product categories and improved the product card layout so users could scan options faster and move toward the right packaging category with less effort.",
            "This mattered because most B2B customers do not browse randomly. They usually come with a specific packaging requirement, so the experience needed to guide them quickly.",
          ],
          images: [
            {
              src: "/figma/case-studies/akshar/design-a.png",
              alt: "Akshar Packs product discovery design",
              width: 710,
              height: 394,
            },
          ],
        },
        {
          title: "2. Improved Product Detail Pages",
          body: [
            "I redesigned product detail pages to make specifications, customization options, use cases, and inquiry actions easier to understand. Important information was grouped into clear sections so users could feel more confident before contacting the team.",
            "For B2B customers, unclear product information creates hesitation. Clear product details help build trust and support faster decision-making.",
          ],
          images: [
            {
              src: "/figma/case-studies/akshar/design-b.png",
              alt: "Akshar Packs product detail design screen one",
              width: 455,
              height: 274,
            },
            {
              src: "/figma/case-studies/akshar/design-detail-b.png",
              alt: "Akshar Packs product detail design screen two",
              width: 485,
              height: 274,
            },
          ],
          beforeAfter: true,
        },
        {
          title: "3. Reduced Inquiry Friction",
          body: [
            "I made the inquiry flow more guided and structured. Instead of asking users to explain everything in one open-ended form, the form helped capture key details step by step, including product type, quantity, customization needs, and contact information.",
            "This made the process easier for users and gave the sales team cleaner lead data for follow-up.",
          ],
        },
        {
          title: "4. Supported CRM-Based Lead Management",
          body: [
            "The inquiry experience was designed with CRM workflows in mind. The goal was to make submitted information easier to organize, qualify, and follow up on.",
            "Good UX should create value for both the customer and the team behind the experience. In this case, the inquiry flow needed to help users submit requests easily while giving the sales team the information they needed to respond quickly.",
          ],
          images: [
            {
              src: "/figma/case-studies/akshar/design-inquiry.png",
              alt: "Akshar Packs CRM inquiry form design",
              width: 742,
              height: 412,
            },
          ],
        },
        {
          title: "5. Created a Scalable Design System",
          body: [
            "I created reusable components such as product cards, buttons, form fields, CTA sections, typography styles, and layout patterns to keep the experience consistent across the website.",
            "This helped reduce design repetition and made it easier to scale the website with future product pages or new categories.",
          ],
          images: [
            {
              src: "/figma/case-studies/akshar/design-system-a.png",
              alt: "Akshar Packs design system CTA component",
              width: 418,
              height: 171,
            },
            {
              src: "/figma/case-studies/akshar/design-system-b.png",
              alt: "Akshar Packs design system navigation component",
              width: 856,
              height: 46,
            },
          ],
          imageLayout: "stack",
        },
      ],
    },
    {
      title: "Wireframes",
      layout: "split",
      paragraphs: [
        "Before moving into high-fidelity design, I created wireframes to explore the page structure, product discovery flow, product detail hierarchy, and inquiry form experience.",
        "The wireframes helped validate the structure early and made it easier to discuss functionality with stakeholders and developers before investing time in detailed UI.",
      ],
      images: [
        {
          src: "/figma/case-studies/akshar/wireframe.png",
          alt: "Akshar Packs wireframes",
          width: 447,
          height: 326,
        },
      ],
    },
    {
      title: "Final Solution",
      paragraphs: [
        "The final design created a clearer and more conversion-focused website experience.",
        "I improved the navigation, product listing pages, product detail pages, inquiry CTAs, responsive layouts, and CRM-ready lead capture. The final experience helped users move from browsing to inquiry with less confusion, while giving the sales team better information to follow up.",
      ],
    },
    {
      title: "Outcome",
      content: [
        {
          kind: "text",
          text: "From a Fragmented Journey to a Clearer Conversion Path",
          emphasis: true,
        },
        {
          kind: "text",
          text: "The redesigned experience improved the efficiency of the core customer journey while creating a stronger foundation for lead qualification.",
        },
        { kind: "text", text: "Before → After", emphasis: true },
        {
          kind: "cards",
          cards: [
            { title: "Product exploration", body: "3.0 min → 1.0 min\n3× faster" },
            { title: "Inquiry completion", body: "4.0 min → 1.5 min\n62.5% faster" },
            { title: "Lead conversion", body: "20% → 25%\n+25%" },
            { title: "Task completion", body: "68% → 86%" },
            { title: "Engagement", body: "Baseline → +27%" },
          ],
        },
        { kind: "text", text: "Business Impact", emphasis: true },
        { kind: "text", text: "The redesign resulted in:" },
        {
          kind: "list",
          items: [
            "3× faster product exploration",
            "25% increase in lead conversion",
            "27% increase in engagement",
            "86% task completion rate",
            "More structured, CRM-ready lead information",
          ],
        },
        {
          kind: "text",
          text: "The strongest outcome wasn't a single UI improvement. It was connecting the customer journey to the business workflow.",
        },
        {
          kind: "text",
          text: "Users could move from discovery → evaluation → inquiry with less friction, while sales received better context for follow-up.",
        },
      ],
    },
    {
      title: "Reflection",
      paragraphs: [
        "This project helped me understand how a B2B website can be more than a marketing touchpoint. It can also work as a product discovery, lead-generation, and sales workflow tool.",
        "By improving product discovery, simplifying the inquiry flow, and supporting CRM-based lead management, the redesign created a smoother customer experience and a more efficient process for the business.",
      ],
    },
  ],
};
