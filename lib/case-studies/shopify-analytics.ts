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
    scope: "End-to-end product design",
    responsibilities:
      "Product strategy, UX research, product requirements, MVP thinking, dashboard UX, AI experience design. Tools supported user flows, journey mapping, wireframes, prototypes, usability testing, and design system work. Scope covered a responsive dashboard, AI insight cards, KPI modules, analytics workflows, and design handoff.",
    focusAreas:
      "Revenue tracking, product performance, customer insights, inventory intelligence",
  },
  heroImage: {
    src: "/figma/case-studies/shopify/hero.png",
    alt: "Shopify Merchant Analytics dashboard — store performance overview",
    width: 1536,
    height: 1024,
  },
  sections: [
    {
      title: "Project Overview",
      paragraphs: [
        "Designing a smarter analytics experience for Shopify merchants.",
        "Shopify Merchant Analytics is a dashboard that helps store owners monitor sales, track customer behavior, manage inventory, analyze product performance, and understand how their business is performing from one place.",
        "As businesses grow, so does the amount of data they need to manage. While merchants have access to valuable metrics, understanding what those numbers actually mean—and deciding what to do next—is often the biggest challenge. Many store owners spend more time navigating reports and interpreting data than taking action to improve their business.",
        "For this project, I focused on designing a user-centered analytics experience that combines dashboard UX, data visualization, and AI-powered insights. My goal was to simplify complex information, reduce cognitive load, and help merchants quickly understand store performance, identify opportunities, and make better business decisions with confidence.",
      ],
      cards: [
        {
          title: "Product",
          body: "A Shopify merchant analytics dashboard designed to help store owners monitor performance, understand risks, and find growth opportunities.",
        },
        {
          title: "User Experience",
          body: "The experience supports quick scanning, KPI tracking, AI-powered recommendations, product analysis, inventory intelligence, and customer insights.",
        },
        {
          title: "Product Objective",
          body: "The goal was to move the dashboard from passive reporting to proactive decision support.",
        },
        {
          title: "Design Approach",
          body: "The project combined UX research, information architecture, dashboard UX, data visualization, AI experience design, prototyping, usability testing, and scalable UI components.",
        },
      ],
    },
    {
      title: "Problem Statement",
      paragraphs: [
        "Merchants need a faster and clearer way to understand store performance and make informed business decisions.",
        "Running a Shopify store means keeping track of revenue, orders, conversion rates, inventory, customer behavior, and marketing performance. While Shopify provides plenty of data, merchants often have to switch between multiple reports, compare metrics manually, and piece everything together before they understand what's actually happening in their business.",
        'Most analytics dashboards answer "What happened?" but leave merchants figuring out "Why did it happen?" and "What should I do next?" on their own. This takes time, increases cognitive load, and can delay important business decisions, especially for small business owners who don\'t have a dedicated analytics team.',
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
          src: "/figma/case-studies/shopify/problem-overview.png",
          alt: "Shopify analytics problem statement — current challenges and merchant needs",
          width: 1536,
          height: 1024,
        },
      ],
    },
    {
      title: "Goals and Product Objectives",
      paragraphs: [
        "Designing a dashboard that helps merchants understand their business and make confident decisions.",
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
        "Understanding how merchants use analytics to make business decisions.",
        "Before designing the dashboard, I wanted to understand how Shopify merchants review store performance, which metrics they rely on most, and where they struggle when using analytics.",
        "Through user interviews, competitive analysis, journey mapping, and usability research, I found that the biggest challenge wasn't a lack of data—it was making sense of it. Most merchants spent more time interpreting reports than acting on them.",
        "Use strong information architecture, visual hierarchy, and progressive disclosure to improve understanding.",
      ],
      images: [
        {
          src: "/figma/case-studies/shopify/research.png",
          alt: "Shopify analytics research — user interviews, journey mapping, and competitive analysis",
          width: 1536,
          height: 1024,
        },
      ],
    },
    {
      title: "Platform Experience Design",
      paragraphs: [
        "Turning research insights into a smarter analytics experience.",
        "After identifying the key pain points from research, I translated those insights into a product experience that helps merchants understand store performance faster and make informed decisions with less effort. Each stage of the design process focused on simplifying complex analytics while supporting the way merchants naturally review their business.",
      ],
      items: [
        {
          title: "01. Information Architecture",
          body: "I organized the dashboard around the workflows merchants use most often—reviewing store health, monitoring revenue, tracking product performance, managing inventory, understanding customer behavior, and reviewing marketing results. This structure helps users find important information quickly without navigating multiple reports.",
          images: [
            {
              src: "/figma/case-studies/shopify/information-architecture.png",
              alt: "Shopify analytics information architecture and dashboard structure",
              width: 1536,
              height: 1024,
            },
          ],
        },
        {
          title: "02. User Flows",
          body: "I mapped end-to-end user flows for common merchant tasks such as checking daily performance, investigating revenue changes, identifying low-stock products, reviewing customer trends, and acting on AI-powered recommendations. The goal was to reduce unnecessary steps and create a more intuitive experience.",
          images: [
            {
              src: "/figma/case-studies/shopify/user-flows.png",
              alt: "Shopify analytics user flows for merchant tasks and AI recommendations",
              width: 1536,
              height: 1024,
            },
          ],
        },
        {
          title: "03. Interface Design",
          body: "Using low- and high-fidelity wireframes, I designed a responsive dashboard with KPI cards, data visualizations, AI insight cards, tables, filters, and alert states. The interface was built with a clear visual hierarchy to improve scanability, reduce cognitive load, and make key insights easier to understand.",
          images: [
            {
              src: "/figma/case-studies/shopify/interface-design-a.png",
              alt: "Shopify analytics interface design — dashboard wireframes, KPI modules, and responsive layouts",
              width: 1536,
              height: 1024,
            },
          ],
        },
        {
          title: "04. Product Thinking",
          body: [
            "One of the biggest decisions in this project was deciding what not to show.",
            "Instead of adding more charts, I focused on surfacing the insights merchants need most. The dashboard highlights key metrics, explains important changes with AI-powered recommendations, and lets users explore deeper reports only when they need more context. The approach was refined through usability testing with merchants, helping simplify navigation, improve content hierarchy, and make recommendations easier to understand.",
          ],
          images: [
            {
              src: "/figma/case-studies/shopify/screens.png",
              alt: "Shopify analytics product thinking — balancing depth, simplicity, and AI guidance",
              width: 1536,
              height: 1024,
            },
          ],
        },
      ],
    },
    {
      title: "Interface Gallery",
      paragraphs: [
        "Key screens from the Shopify Merchant Analytics experience.",
        "The final designs were created to help merchants understand store performance faster by surfacing the most important information first. Rather than overwhelming users with multiple reports, each screen focuses on reducing cognitive load, improving scanability, and helping merchants move from understanding data to taking action.",
        "The Executive Overview provides a quick snapshot of store performance, bringing together key metrics such as revenue, orders, conversion rate, average order value, returning customers, inventory alerts, and AI-powered insights in one place. This allows merchants to quickly assess the health of their business before exploring more detailed reports.",
        'The AI Insights Center helps merchants understand what changed, why it matters, and what they should do next. Instead of asking users to interpret charts on their own, the dashboard surfaces important trends, provides supporting context, and recommends actions. For example, it may highlight that "Your conversion rate dropped 12% this week because mobile users are abandoning checkout after shipping costs appear."',
        "The Product Performance, Inventory Intelligence, and Customer Insights screens help merchants explore their business in greater detail. Product Performance combines sales, traffic, and conversion data to identify top-performing and underperforming products.",
        "Inventory Intelligence highlights low-stock products, sales velocity, and reorder opportunities before inventory impacts sales. Customer Insights organizes key metrics such as new versus returning customers, repeat purchase rate, customer lifetime value, and retention trends, helping merchants better understand customer behavior and make more informed business decisions.",
      ],
      images: [
        {
          src: "/figma/case-studies/shopify/hero.png",
          alt: "Shopify Merchant Analytics executive overview dashboard",
          width: 1536,
          height: 1024,
        },
      ],
    },
    {
      title: "Core Product Interfaces",
      paragraphs: [
        "A simpler way for merchants to understand and act on their business data.",
        "Each interface was designed to help merchants find the information they need quickly, understand what it means, and take action with confidence.",
      ],
      items: [
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
      images: [
        {
          src: "/figma/case-studies/shopify/interface-gallery.png",
          alt: "Shopify Merchant Analytics core product interfaces — overview, AI insights, inventory, and design system",
          width: 1536,
          height: 1024,
        },
      ],
    },
    {
      title: "Design System and UI Decisions",
      paragraphs: [
        "Creating a consistent and easy-to-use experience across the dashboard.",
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
      title: "Outcome and Impact",
      paragraphs: [
        "A simpler and more actionable analytics experience for Shopify merchants.",
        "This project focused on making complex business data easier to understand and act on. By combining dashboard UX, AI-powered insights, and a clear information hierarchy, merchants can spend less time interpreting reports and more time making informed business decisions.",
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
    },
    {
      title: "Next Steps",
      paragraphs: [
        "Exploring opportunities to make the dashboard even more useful.",
      ],
      items: [
        {
          title: "01",
          body: "Enhance AI recommendations with more personalized insights.",
        },
        {
          title: "02",
          body: "Introduce customizable dashboard views for different merchant needs.",
        },
        {
          title: "03",
          body: "Improve inventory forecasting with smarter predictions and proactive alerts.",
        },
        {
          title: "04",
          body: "Increase AI transparency with clearer explanations and feedback options.",
        },
      ],
    },
  ],
};
