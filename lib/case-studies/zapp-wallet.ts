import type { CaseStudyData } from "@/lib/case-studies/types";

export const zappWalletCaseStudy: CaseStudyData = {
  slug: "zapp-wallet",
  title: "Zapp Wallet",
  subtitle: "Designing a Faster and More Trustworthy Mobile Wallet Experience",
  intro: [
    "Zapp Wallet is a mobile fintech application designed to help users manage money, send payments, track spending, and complete everyday financial tasks from a single platform.",
    "As digital financial products continue to evolve, users expect transactions to be fast, secure, and effortless. However, many wallet experiences become increasingly complex as more features are added, making it difficult for users to complete simple financial tasks with confidence.",
    "For this project, I focused on creating a user-centered wallet experience that balances speed, clarity, trust, and control. My goal was to simplify complex financial workflows, reduce cognitive load, and help users feel confident before, during, and after every transaction.",
  ],
  overviewTitle: "Project Overview",
  meta: {
    role: "UX Designer / Product Designer",
    timeline: "5 Weeks",
    platform: "Mobile Application",
    tools:
      "Figma, FigJam, User Flow Mapping, Wireframing, Prototyping, Usability Testing, Design System Development",
    responsibilities:
      "I worked on the Zapp Wallet mobile app from research and discovery through design validation and final handoff. My role included understanding user needs, reviewing fintech interaction patterns, identifying user and business pain points, mapping user journeys and task flows, defining the information architecture, simplifying key financial workflows, designing wireframes and high-fidelity mobile screens, conducting usability testing, creating reusable design system components, and supporting the final implementation through design documentation and developer handoff.",
    focusAreas:
      "UX Research, Product Discovery, User-Centered Design, UX Strategy, Information Architecture, User Journey Mapping, Task Flow Analysis, Interaction Design, Mobile UX, Financial UX, Usability Testing, Accessibility, Dashboard Design, Trust & Security, Design System, Developer Handoff",
  },
  heroImage: {
    src: "/figma/case-studies/zapp/hero.png",
    alt: "Zapp Wallet mobile app hero",
    width: 721,
    height: 363,
  },
  sections: [
    {
      title: "The Opportunity",
      paragraphs: [
        "While reviewing existing wallet products, I noticed a common pattern. Most apps offered powerful financial features, but users often had to navigate through multiple screens to complete simple actions like sending money, checking balances, or reviewing recent activity.",
        "Through competitor analysis and heuristic evaluation, I found that many financial apps prioritized functionality over clarity. As more features were introduced, workflows became harder to understand and users often felt uncertain about what would happen next.",
        "In financial products, uncertainty creates risk. If users are unsure whether a payment was successful or where their money is going, trust begins to break down.",
        "The opportunity was to create a wallet experience that felt simple enough for everyday use while still providing the security and transparency users expect when managing money.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/opportunity.png",
          alt: "Zapp Wallet splash and onboarding screens",
          width: 909,
          height: 435,
        },
      ],
    },
    {
      title: "Core UX Problem",
      paragraphs: [
        "The core problem was not that users needed another wallet app. They needed a clearer, faster, and more trustworthy way to manage everyday financial tasks without feeling overwhelmed.",
        "Through research and flow analysis, I found that simple actions like sending money, checking balances, reviewing spending, and managing cards could quickly become stressful if the experience had too many steps, unclear feedback, or hard-to-scan financial information.",
        "For users, the biggest need was confidence. They needed to know where their money was going, what action they were taking, and whether a transaction was completed successfully.",
        "The UX challenge was to balance speed, clarity, security, and trust across multiple financial workflows while keeping the app simple, accessible, and easy to use.",
      ],
    },
    {
      title: "Research & Discovery",
      paragraphs: [
        "Before exploring solutions, I wanted to understand how users approached common financial tasks and where friction occurred throughout the experience.",
        "I conducted competitor analysis, reviewed fintech interaction patterns, mapped user journeys, and performed heuristic evaluations of common wallet experiences.",
      ],
      numberedList: {
        intro: "I focused on answering three key questions:",
        items: [
          "How can users complete common financial tasks faster?",
          "How can financial information become easier to understand?",
          "How can the experience reinforce trust without creating additional friction?",
        ],
      },
      closingParagraphs: [
        "As part of the discovery process, I synthesized findings into themes and opportunity areas using affinity mapping and behavioral pattern analysis.",
        "This helped move the conversation beyond individual screens and focus on the broader user experience.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/research.png",
          alt: "Zapp Wallet authentication and sign-up research screens",
          width: 988,
          height: 425,
        },
      ],
    },
    {
      title: "Research Insights",
      paragraphs: [
        "Several consistent themes emerged during research and discovery.",
        "Users wanted financial tasks to feel fast, but not rushed. They expected to complete transfers quickly, while still having enough reassurance before confirming a transaction.",
        "Financial information also needed to be easy to scan. Users wanted to understand balances, recent transactions, and spending activity without digging through multiple screens or interpreting complex data.",
        "Clear feedback was another important insight. Confirmation screens, transaction details, and success states helped users feel confident that their actions were completed successfully.",
        "Security also needed to feel seamless. PIN and biometric verification had to support trust without interrupting the flow.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/research-competitive.png",
          alt: "Identity verification flow explored during research and discovery",
          width: 761,
          height: 335,
        },
        {
          src: "/figma/case-studies/zapp/research-affinity.png",
          alt: "Password recovery flow explored during research and discovery",
          width: 636,
          height: 428,
        },
      ],
      imageLayout: "stack",
    },
    {
      title: "UX Strategy",
      paragraphs: [
        "Based on research findings, I established four guiding principles that influenced every design decision.",
      ],
      principles: [
        {
          title: "Speed",
          body: "Reduce friction in high-frequency actions such as transfers, payments, top-ups, and transaction review.",
        },
        {
          title: "Clarity",
          body: "Use strong information architecture, visual hierarchy, and progressive disclosure to improve understanding.",
        },
        {
          title: "Trust",
          body: "Reinforce confidence through feedback states, confirmations, authentication, and transparent communication.",
        },
        {
          title: "Control",
          body: "Give users visibility into their account activity, spending behavior, security preferences, and financial decisions.",
        },
      ],
    },
    {
      title: "User Journey & Flow Mapping",
      paragraphs: [
        "During flow mapping, I looked at the full journey from onboarding and authentication to sending money, QR payments, top-ups, transaction history, analytics, wallet management, and profile settings. This helped me see where users might slow down, feel unsure, or need extra reassurance. From there, I focused on simplifying the navigation, reducing unnecessary steps, and making each financial action feel clear, predictable, and easy to complete.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/flow.png",
          alt: "Zapp Wallet user journey and flow mapping diagram",
          width: 954,
          height: 1214,
        },
      ],
    },
    {
      title: "Designing for Trust",
      paragraphs: [
        "Designing for trust was one of the most important parts of the experience because users were making decisions that directly affected their money. Through flow analysis, I identified key moments where users needed reassurance, especially before confirming a transaction and after completing an action. To support this, I added clear review screens, PIN verification, biometric authentication, confirmation messages, success states, and transaction records. These trust signals helped reduce uncertainty, improve user confidence, and make the experience feel secure without adding unnecessary friction.",
      ],
    },
    {
      title: "Dashboard Experience",
      paragraphs: [
        "During journey mapping, I noticed that most primary actions started from the dashboard. Users came back to this screen to check their balance, send money, review recent transactions, manage cards, and access wallet tools. Based on this insight, I designed the dashboard as a financial control center rather than just a home screen. I prioritized balance visibility, quick actions, recent activity, wallet tools, and spending insights so users could understand their financial position within seconds and take action without unnecessary navigation.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/dashboard.png",
          alt: "Zapp Wallet dashboard design",
          width: 1084,
          height: 607,
        },
      ],
    },
    {
      title: "Send Money Experience",
      paragraphs: [
        "During task analysis, I identified the send money flow as one of the most important and frequently used journeys in the app. Users needed the transfer process to feel fast, but they also needed enough reassurance before completing a money action. To reduce cognitive load, I simplified the flow into a clear sequence: selecting a recipient, entering an amount, reviewing transaction details, authenticating, and confirming the transfer. I intentionally kept the review and confirmation steps because, in fintech, user confidence matters just as much as speed.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/send-money.png",
          alt: "Zapp Wallet send money flow screens",
          width: 1212,
          height: 682,
        },
      ],
    },
    {
      title: "Payments, QR & Everyday Actions",
      paragraphs: [
        "Beyond transfers, users needed quick access to everyday financial tasks.",
        "I organized QR payments, top-ups, requests, and transaction history into predictable navigation patterns that reduced effort and improved discoverability.",
        "The goal was to surface frequently used actions while maintaining a clean and focused interface.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/payments.png",
          alt: "Zapp Wallet payments, QR, and everyday action screens",
          width: 733,
          height: 670,
        },
      ],
    },
    {
      title: "Financial Insights & Analytics",
      paragraphs: [
        "Research revealed that many users struggled to understand their spending habits over time.",
        "Transaction lists provided information, but they did not provide understanding.",
        "To address this, I introduced visual summaries, spending categories, and activity trends that helped users identify patterns and make more informed financial decisions.",
        "I intentionally kept the analytics lightweight and scannable to support quick understanding.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/wallet.png",
          alt: "Zapp Wallet financial insights and analytics screens",
          width: 843,
          height: 405,
        },
      ],
    },
    {
      title: "Wallet Management & Cards",
      paragraphs: [
        "Managing cards and balances involves sensitive financial information, so I wanted this part of the experience to feel clear, calm, and predictable. Users needed to view balances, manage saved cards, top up funds, and verify details before taking action without feeling unsure.",
        "To support this, I designed the flows with clear labels, readable amounts, guided steps, and consistent interaction patterns. The goal was to make wallet management feel structured and reliable while reducing friction and helping users complete card-related tasks with confidence.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/profile.png",
          alt: "Zapp Wallet card and wallet management screens",
          width: 629,
          height: 607,
        },
      ],
    },
    {
      title: "Profile, Settings & Security",
      paragraphs: [
        "Profile and settings were organized around account management, security preferences, notifications, language settings, and support.",
        "Rather than treating settings as secondary screens, I approached them as part of the trust experience.",
        "Users should always know where to manage their account and security preferences.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/profile-settings.png",
          alt: "Zapp Wallet profile, settings, and security screens",
          width: 676,
          height: 677,
        },
      ],
    },
    {
      title: "Design System",
      paragraphs: [
        "To support consistency and scalability across Zapp Wallet, I created a reusable design system that helped keep the mobile experience clear, accessible, and easy to extend. The system included typography, color palette, buttons, cards, form elements, navigation patterns, feedback states, success messages, and transaction components.",
        "From a UX perspective, the goal was not just visual consistency. I wanted users to experience the same patterns across key financial flows, so actions felt familiar and predictable. From a product perspective, the design system also created a stronger foundation for future features and helped support smoother developer handoff.",
      ],
      images: [
        {
          src: "/figma/case-studies/zapp/design-system-colors.png",
          alt: "Zapp Wallet color palette and design tokens",
          width: 471,
          height: 251,
        },
        {
          src: "/figma/case-studies/zapp/design-system-typography.png",
          alt: "Zapp Wallet typography scale and type styles",
          width: 399,
          height: 241,
        },
      ],
      imageLayout: "grid",
    },
    {
      title: "Final Experience",
      paragraphs: [
        "The final experience transformed Zapp Wallet into a more intuitive and confidence-building financial product.",
        "By simplifying workflows, improving information hierarchy, strengthening feedback, and reducing friction across key journeys, the product became easier to learn and easier to trust.",
        "Instead of feeling like a collection of financial features, the experience feels like a connected ecosystem designed around user needs.",
      ],
    },
    {
      title: "Business Impact",
      paragraphs: [
        "The redesign improved the overall wallet experience by making key financial tasks faster, clearer, and more trustworthy.",
        "Transaction completion became 35% faster, engagement increased by 20%, and users had better visibility into their spending behavior. By simplifying core workflows, improving feedback states, and reducing cognitive load, the app helped users complete financial actions with more confidence.",
        "The final experience also created a stronger foundation for future product growth, with reusable patterns and a scalable design system that can support new wallet features over time.",
      ],
      metrics: [
        { value: "35%", label: "Faster transactions" },
        { value: "20%", label: "Increased engagement" },
        { value: "Higher", label: "User confidence" },
        { value: "Better", label: "Financial awareness" },
      ],
    },
    {
      title: "Reflection",
      paragraphs: [
        "This project reinforced an important lesson about fintech UX: trust is not a feature. It is built through hundreds of small design decisions that work together to create confidence.",
        "Users want financial tasks to feel fast, but they also need enough context, feedback, and control to feel secure throughout the experience.",
        "Looking ahead, I would be interested in validating some of these decisions with a broader group of users through moderated interviews, usability testing, and A/B experiments. I would also explore transaction drop-off points and dashboard behavior in more detail to identify additional opportunities for improving engagement and task completion.",
      ],
    },
  ],
};
