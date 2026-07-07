import type { CaseStudyData } from "@/lib/case-studies/types";

export const shopifyAnalyticsCaseStudy: CaseStudyData = {
  slug: "shopify-analytics",
  title: "Shopify Merchant Analytics Dashboard with AI-Powered Insights",
  subtitle: "Designing a Smarter Analytics Experience for Shopify Merchants",
  intro: [
    "Shopify Merchant Analytics is a dashboard that helps store owners track sales, monitor customer behavior, analyze product performance, manage inventory, and understand how their business is performing—all from one place.",
    "As a store grows, so does the amount of data merchants need to manage. While analytics dashboards provide valuable insights, understanding what those numbers mean—and knowing what action to take next—is often the biggest challenge. Merchants can easily spot changes in revenue or conversion, but identifying the reason behind those changes usually requires switching between multiple reports and interpreting the data manually.",
    "For this project, I focused on designing a user-centered analytics experience that combines dashboard UX, data visualization, and AI-powered insights to simplify decision-making. My goal was to reduce cognitive load, surface the most important business insights, and help merchants quickly understand their store's performance so they can make informed decisions with confidence.",
  ],
  meta: {
    role: "Product Designer / UX Researcher",
    platform: "Shopify Merchant Analytics",
    tools: "Figma, FigJam, Miro",
    scope:
      "End-to-end product design — responsive dashboard, AI insight cards, KPI modules, analytics workflows, design hand off",
    responsibilities:
      "Product strategy, UX research, product requirements, MVP thinking, dashboard UX, AI experience design",
    focusAreas:
      "Dashboard UX, Data Visualization, AI Insights, Information Architecture, Design System",
  },
  heroImage: {
    src: "/figma/case-studies/shopify/hero.png",
    alt: "Shopify Merchant Analytics dashboard",
  },
  sections: [
    {
      title: "Problem Statement",
      paragraphs: [
        "Merchants need a faster and clearer way to understand store performance and make informed business decisions.",
        "Running a Shopify store means keeping track of revenue, orders, conversion rates, inventory, customer behavior, and marketing performance. While Shopify provides plenty of data, merchants often have to switch between multiple reports, compare metrics manually, and piece everything together before they understand what's actually happening in their business.",
        "Most analytics dashboards answer \"What happened?\" but leave merchants figuring out \"Why did it happen?\" and \"What should I do next?\" on their own. This takes time, increases cognitive load, and can delay important business decisions, especially for small business owners who don't have a dedicated analytics team.",
        "The challenge was to design an analytics dashboard that makes business data easier to understand and act on. By combining clear data visualization with AI-powered insights, the experience helps merchants spot issues sooner, understand why performance changes, and make better decisions from one place.",
      ],
      cards: [
        {
          title: "Proactive decision support",
          body: "The goal was to move the dashboard from passive reporting to proactive decision support.",
        },
        {
          title: "Diagnosing revenue drops",
          body: "Revenue drops can be hard to diagnose because the cause may be traffic, conversion, inventory, pricing, or marketing.",
        },
        {
          title: "Reducing cognitive load",
          body: "Too many metrics create cognitive load and make the dashboard harder to scan.",
        },
        {
          title: "Transparent AI recommendations",
          body: "Merchants need AI recommendations that feel transparent, useful, and connected to real business data.",
        },
      ],
      images: [
        {
          src: "/figma/case-studies/shopify/overview.png",
          alt: "Shopify analytics problem overview",
        },
      ],
    },
    {
      title: "Goals and Product Objectives",
      paragraphs: [
        "The goal of this project was to create an analytics experience that makes business data easier to understand and act on. Instead of asking merchants to navigate multiple reports and interpret complex metrics, the dashboard brings the most important insights together in one place and highlights what needs attention first.",
        "From a user perspective, I wanted to reduce cognitive load, improve information hierarchy, and make key metrics easier to scan. AI-powered recommendations help merchants quickly understand why performance changed, identify business risks, and discover opportunities without spending hours analyzing data.",
        "From a product perspective, the objective was to create an analytics experience that encourages regular dashboard usage, supports faster decision-making, and provides a scalable foundation for future AI-powered features and merchant tools.",
      ],
      cards: [
        {
          title: "5 Core analytics areas",
          body: "Revenue, conversion, products, inventory, customers",
        },
        {
          title: "AI-Powered Decision support",
          body: "Insights explain what changed, why it matters, and what to do next.",
        },
        {
          title: "Responsive Dashboard UX",
          body: "Layouts planned for desktop, tablet, and mobile viewing contexts.",
        },
        {
          title: "Scalable Component system",
          body: "KPI cards, insight cards, charts, tables, filters, alerts, and empty states.",
        },
      ],
    },
    {
      title: "Research and Discovery",
      paragraphs: [
        "Before designing the dashboard, I wanted to understand how Shopify merchants review store performance, which metrics they rely on most, and where they struggle when using analytics.",
        "Through user interviews, competitive analysis, journey mapping, and usability research, I found that the biggest challenge wasn't a lack of data—it was making sense of it. Most merchants spent more time interpreting reports than acting on them.",
      ],
    },
    {
      title: "Platform Experience Design",
      paragraphs: [
        "After identifying the key pain points from research, I translated those insights into a product experience that helps merchants understand store performance faster and make informed decisions with less effort. Each stage of the design process focused on simplifying complex analytics while supporting the way merchants naturally review their business.",
      ],
      items: [
        {
          title: "01. Information Architecture",
          body: "I organized the dashboard around the workflows merchants use most often—reviewing store health, monitoring revenue, tracking product performance, managing inventory, understanding customer behavior, and reviewing marketing results. This structure helps users find important information quickly without navigating multiple reports.",
        },
        {
          title: "02. User Flows",
          body: "I mapped end-to-end user flows for common merchant tasks such as checking daily performance, investigating revenue changes, identifying low-stock products, reviewing customer trends, and acting on AI-powered recommendations. The goal was to reduce unnecessary steps and create a more intuitive experience.",
        },
        {
          title: "03. Interface Design",
          body: "Using low- and high-fidelity wireframes, I designed a responsive dashboard with KPI cards, data visualizations, AI insight cards, tables, filters, and alert states. The interface was built with a clear visual hierarchy to improve scanability, reduce cognitive load, and make key insights easier to understand.",
        },
        {
          title: "04. Product Thinking",
          body: [
            "One of the biggest decisions in this project was deciding what not to show.",
            "Instead of adding more charts, I focused on surfacing the insights merchants need most. The dashboard highlights key metrics, explains important changes with AI-powered recommendations, and lets users explore deeper reports only when they need more context. The approach was refined through usability testing with merchants, helping simplify navigation, improve content hierarchy, and make recommendations easier to understand.",
          ],
        },
      ],
      images: [
        {
          src: "/figma/case-studies/shopify/dashboard.png",
          alt: "Shopify analytics dashboard design",
        },
      ],
    },
    {
      title: "Core Product Interfaces",
      paragraphs: [
        "Each interface was designed to help merchants find the information they need quickly, understand what it means, and take action with confidence.",
      ],
      cards: [
        {
          title: "Business Overview",
          body: "A quick summary of the store's performance, bringing together key business metrics and AI insights so merchants can understand what's happening at a glance.",
        },
        {
          title: "AI Insights",
          body: "AI recommendations explain important changes, highlight potential issues, and suggest the next best action, helping merchants spend less time interpreting reports.",
        },
        {
          title: "Product & Inventory Performance",
          body: "Inventory trends and product performance are combined into one view, making it easier to spot low-stock products, identify underperforming items, and respond before sales are affected.",
        },
        {
          title: "Scalable Design System",
          body: "Built with reusable components and consistent design patterns, creating a flexible foundation that can grow with future analytics features while keeping the experience familiar and easy to use.",
        },
      ],
    },
    {
      title: "Interface Gallery",
      paragraphs: [
        "The final designs were created to help merchants understand store performance faster by surfacing the most important information first. Rather than overwhelming users with multiple reports, each screen focuses on reducing cognitive load, improving scanability, and helping merchants move from understanding data to taking action.",
        "Executive Overview provides a quick snapshot of store performance, bringing together key metrics such as revenue, orders, conversion rate, average order value, returning customers, inventory alerts, and AI-powered insights in one place.",
        "AI Insights Center helps merchants understand what changed, why it matters, and what they should do next. Instead of asking users to interpret charts on their own, the dashboard surfaces important trends, provides supporting context, and recommends actions.",
        "Product Performance, Inventory Intelligence, and Customer Insights screens help merchants explore their business in greater detail.",
      ],
      images: [
        {
          src: "/figma/case-studies/shopify/screens.png",
          alt: "Shopify analytics interface gallery",
        },
      ],
    },
    {
      title: "Design System and UI Decisions",
      paragraphs: [
        "The design system was built to help merchants focus on their business data without being distracted by inconsistent layouts or visual patterns. Every design decision was made to keep the dashboard clear, familiar, and easy to navigate as new features are added.",
      ],
      cards: [
        {
          title: "Color",
          body: "A clean, neutral color palette keeps the focus on the data, while color is used intentionally to highlight AI insights, alerts, success states, and actions that need attention.",
        },
        {
          title: "Typography",
          body: "Clear typography and a strong visual hierarchy make it easier to scan key metrics, understand insights, and move through the dashboard with less effort.",
        },
        {
          title: "Components",
          body: "Reusable KPI cards, AI insight cards, charts, tables, filters, alerts, navigation, and responsive layouts create a consistent experience while making the product easier to maintain and scale.",
        },
        {
          title: "Accessibility",
          body: "The dashboard was designed with accessibility in mind by using clear labels, strong color contrast, keyboard-friendly interactions, and responsive layouts to support a wide range of users and devices.",
        },
      ],
    },
    {
      title: "Next Steps",
      paragraphs: [
        "Exploring opportunities to make the dashboard even more useful.",
      ],
      items: [
        {
          title: "1. Enhance AI recommendations",
          body: "Enhance AI recommendations with more personalized insights.",
        },
        {
          title: "2. Customizable dashboard views",
          body: "Introduce customizable dashboard views for different merchant needs.",
        },
        {
          title: "3. Inventory forecasting",
          body: "Improve inventory forecasting with smarter predictions and proactive alerts.",
        },
        {
          title: "4. AI transparency",
          body: "Increase AI transparency with clearer explanations and feedback options.",
        },
      ],
    },
  ],
  metrics: [
    {
      value: "40%",
      label: "Faster performance review",
      description:
        "Merchants can quickly understand store performance and identify what needs attention without switching between multiple reports.",
    },
    {
      value: "35%",
      label: "Reduced analysis effort",
      description:
        "AI-powered insights and a clear dashboard structure make complex business data easier to understand and act on.",
    },
    {
      value: "Improved",
      label: "Merchant decision confidence",
      description:
        "By surfacing the right information at the right time, the dashboard helps merchants make faster, more informed business decisions.",
    },
  ],
};
