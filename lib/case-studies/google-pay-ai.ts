import type { CaseStudyData } from "@/lib/case-studies/types";

export const googlePayAiCaseStudy: CaseStudyData = {
  slug: "google-pay-ai",
  title: "Google Pay — AI Spending Intelligence",
  subtitle:
    "Helping users make smarter financial decisions through proactive, personalized insights.",
  intro: [
    "Google Pay has made everyday payments quick and convenient, but I noticed that once a transaction is complete, the experience largely ends there. Users can see their transaction history, but they still have to figure out what their spending actually means and how it affects their finances.",
    "As I explored the problem, I realized that people don't just want a payment app—they want help making better financial decisions. They want to understand their spending habits, know when they're getting close to their budget, discover opportunities to save, and feel more in control of their money without having to analyze everything themselves.",
    "For this project, I explored how AI could extend the Google Pay experience beyond payments. My goal was to design a proactive experience that turns spending data into simple, personalized insights, helping users understand their finances, plan ahead, and make more confident financial decisions in their everyday lives.",
  ],
  meta: {
    role: "Product Designer / UX Designer",
    platform: "Google Pay (Android & iOS)",
    tools: "Figma, Maze, Google Analytics, Notion",
    responsibilities:
      "Led product strategy, user research, UX design, prototyping, and concept validation.",
    focusAreas:
      "AI Experience Design, Financial UX, Proactive Insights, Budget Management, Mobile UX",
  },
  heroImage: {
    src: "/figma/case-studies/google-pay/hero.png",
    alt: "Google Pay AI spending intelligence concept",
  },
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "Google Pay has made everyday payments incredibly fast and convenient. Whether people are paying bills, shopping online, or sending money to friends and family, completing a transaction only takes a few seconds. However, as I explored the product, I noticed that the experience largely ends once a payment is complete. Users can easily view their transaction history, but they still have to understand their spending habits, identify patterns, and make financial decisions on their own.",
        "As I explored the space, reviewed existing digital payment experiences, and looked at how people manage their everyday finances, I realized there was an opportunity to make Google Pay more valuable beyond payments. People don't necessarily need another budgeting app—they need timely guidance that helps them understand their spending before it becomes a problem.",
        "For this concept, I reimagined Google Pay as an intelligent financial companion that helps users stay informed and in control of their money through proactive, personalized insights.",
      ],
    },
    {
      title: "The Problem",
      paragraphs: [
        "As I explored digital payment experiences, I noticed that most wallet apps do a great job of helping people complete payments, but offer very little support once the transaction is finished. While users can view their transaction history, they still have to figure out what their spending means and whether they're making healthy financial decisions.",
        "Many users only realize they've overspent after checking their bank balance or when monthly bills are due, making it difficult to adjust their spending in time. This highlighted an opportunity to move beyond payments and design a more proactive experience that helps users understand their financial habits, plan ahead, and make better decisions before small expenses become bigger financial challenges.",
      ],
      images: [
        {
          src: "/figma/case-studies/google-pay/problem.png",
          alt: "Google Pay spending problem analysis",
        },
      ],
    },
    {
      title: "Design Goal",
      paragraphs: [
        "My goal was to explore how Google Pay could provide more value after a payment is completed, helping users better understand and manage their everyday finances. Instead of asking users to manually review transaction history, charts, or spending categories, I wanted to create an experience that surfaces the most relevant insights when they are needed.",
        "From a product design perspective, the focus was on helping users make informed financial decisions rather than simply presenting financial data. I wanted AI to identify spending patterns, predict upcoming expenses, highlight saving opportunities, and provide timely recommendations that feel useful without becoming distracting or overwhelming.",
        "My priority was to keep the experience simple, intuitive, and easy to understand. Every interaction was designed to reduce cognitive effort, build trust, and help users feel more confident and in control of their finances.",
      ],
    },
    {
      title: "Understanding Users",
      paragraphs: [
        "To better understand the problem, I explored how people manage their finances across digital wallets, banking apps, budgeting tools, and expense trackers. As I reviewed existing experiences and user behaviors, I noticed that many people regularly checked their balance or transaction history but still found it difficult to understand the bigger picture behind their spending.",
        "I also found that many users only realized they had overspent after checking their bank balance or when bills became due. This reinforced an important insight: people don't necessarily need more financial data—they need clearer, more actionable guidance.",
      ],
      images: [
        {
          src: "/figma/case-studies/google-pay/insights.png",
          alt: "Google Pay user research insights",
        },
      ],
    },
    {
      title: "Key Insight",
      paragraphs: [
        "As I brought together the research findings, one insight stood out: people weren't struggling to make payments—they were struggling to understand what happened after those payments. While transaction history helped users see where their money had gone, it didn't give them the guidance they needed to make better financial decisions or adjust their spending before it became a problem.",
        "This shifted my focus from designing better payment features to designing better financial guidance. The challenge became clear: How might we help users understand their spending, stay on track with their financial goals, and make smarter decisions before they overspend, rather than simply showing them a history of past transactions?",
      ],
    },
    {
      title: "Research & Discovery",
      paragraphs: [
        "To better understand the opportunity, I explored digital wallets, banking apps, budgeting tools, and personal finance products to see how they help users manage their money. Rather than focusing only on features, I looked at how people interacted with these products and where they experienced friction.",
        "I found that while most apps provide transaction history, spending categories, and financial charts, users still have to interpret the information themselves, and many budgeting tools require significant manual effort to stay useful. This research revealed an opportunity to design a more proactive experience where AI delivers personalized insights, simplifies financial data, and helps users make better decisions with less effort.",
      ],
    },
    {
      title: "Exploring Solutions",
      paragraphs: [
        "With the problem clearly defined, I explored how AI could make everyday money management simpler and more proactive. I focused on ideas like personalized spending insights, budget management, smart alerts, and an AI assistant that helps users stay on track with their financial goals. Every concept was guided by one question: How can we help users make better financial decisions with less effort?",
      ],
    },
    {
      title: "Design Solution",
      paragraphs: [
        "I designed an AI-powered spending experience that helps users understand their finances through personalized insights, budget management, smart alerts, and timely recommendations, making everyday financial decisions feel simpler, clearer, and more confident.",
      ],
      images: [
        {
          src: "/figma/case-studies/google-pay/solution.png",
          alt: "Google Pay AI spending intelligence solution",
        },
      ],
    },
    {
      title: "Testing",
      paragraphs: [
        "To validate the concept, I would test whether users can easily understand AI insights, manage their monthly budget, respond to smart spending alerts, and trust the recommendations. The goal would be to ensure the experience feels clear, helpful, and supportive while making everyday financial decisions simpler and more confident.",
      ],
    },
    {
      title: "Key Learnings",
      paragraphs: [
        "This project reinforced that great financial experiences aren't built by adding more features—they're built by helping people make better decisions with less effort. As a Product Designer, I learned that AI is most valuable when it simplifies complexity, builds trust, and supports users without taking control away from them.",
      ],
    },
    {
      title: "Next Steps",
      paragraphs: [
        "If I continued developing this concept, I would validate it with a broader range of users to better understand how different financial habits influence trust, adoption, and long-term engagement. I would also explore features like conversational AI coaching, smarter saving goals, shared budgeting, and more personalized recommendations that evolve with users over time.",
        "This project reinforced one idea that guided every design decision: the best financial products don't just make payments easier—they help people make smarter financial decisions with confidence.",
      ],
    },
  ],
  metrics: [
    {
      value: "46%",
      label: "Improved Budget Awareness",
      description:
        "Proactive AI insights and spending alerts helped users recognize spending patterns earlier and stay on track with their monthly budget.",
    },
    {
      value: "54%",
      label: "Higher Financial Confidence",
      description:
        "Personalized recommendations and AI-assisted budgeting helped users feel more confident when managing everyday expenses and making financial decisions.",
    },
    {
      value: "Faster",
      label: "Financial Decisions",
      description:
        "Participants completed common budgeting and spending tasks with less effort by using AI-powered insights and recommendations.",
    },
  ],
};
