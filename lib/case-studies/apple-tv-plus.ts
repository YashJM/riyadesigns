import type { CaseStudyData } from "@/lib/case-studies/types";

export const appleTvPlusCaseStudy: CaseStudyData = {
  slug: "apple-tv-plus",
  title: "Apple TV+",
  subtitle: "From Endless Browsing to Confident Watching",
  intro: [
    "Apple TV+ offers an incredible library of movies, TV shows, live sports, and Apple Originals, yet finding something worth watching isn't always as enjoyable as watching it. As streaming libraries continue to grow, many people spend more time scrolling through recommendations, comparing titles, or switching between streaming platforms than actually pressing play.",
    "For this conceptual project, I wanted to understand why that happens. Instead of redesigning the interface, I approached the challenge from both a Product Designer and UX Research perspective to uncover what makes content discovery feel overwhelming. By combining user research, product thinking, and inclusive design, I explored how Apple TV+ could help people make faster, more confident decisions while making accessibility a natural part of the discovery experience rather than an afterthought.",
  ],
  meta: {
    role: "Product Designer / UX Researcher",
    platform: "Apple TV+ (tvOS, iOS, iPadOS & macOS)",
    tools: "Figma, FigJam, Miro",
    scope:
      "End-to-End Product Design — from user research and product strategy to final designs and validation.",
    responsibilities:
      "Led research, strategy, and end-to-end product design.",
    focusAreas:
      "Content Discovery, Inclusive Design, Accessibility, Product Strategy, Usability Testing",
  },
  heroImage: {
    src: "/figma/case-studies/apple-tv/hero.png",
    alt: "Apple TV+ content discovery concept",
  },
  sections: [
    {
      title: "The Problem",
      paragraphs: [
        "It started with something I had experienced myself.",
        "After opening Apple TV+, I expected to quickly find something to watch. Instead, I spent nearly twenty minutes scrolling through recommendations, opening different titles, and eventually switching between streaming platforms without making a decision.",
        "Rather than assuming this was only my experience, I wanted to understand whether others felt the same way.",
        "As I spoke with people who regularly used streaming services, a clear pattern began to emerge. Most users didn't struggle because there wasn't enough content—they struggled because there was too much of it. Endless rows of recommendations, repeated suggestions, and a lack of context made choosing something to watch feel surprisingly difficult.",
        "The research also uncovered another challenge. Users who relied on accessibility features such as Audio Descriptions, Closed Captions, or VoiceOver often had to open multiple titles before knowing whether a movie or show met their needs. Accessibility wasn't difficult to use—it was difficult to find.",
        "That changed how I framed the problem. This wasn't about helping people discover more content. It was about helping them make confident decisions, while ensuring everyone could discover content in a way that worked for them.",
      ],
      images: [
        {
          src: "/figma/case-studies/apple-tv/research.png",
          alt: "Apple TV+ research findings",
        },
      ],
    },
    {
      title: "Goal",
      paragraphs: [
        "I didn't want to design another recommendation engine or simply reorganize the interface. My goal was to create a content discovery experience that helps people spend less time searching and more time enjoying something they'll genuinely want to watch.",
        "Success meant reducing decision fatigue, building trust in recommendations, and creating a discovery experience that encourages users to make confident decisions while supporting engagement across the Apple TV+ ecosystem.",
        "I wanted every design decision to be grounded in real user insights. That meant simplifying the browsing journey, making accessibility visible from the start, and creating an experience that feels intuitive, inclusive, and effortless for everyone, regardless of how they discover or consume content.",
      ],
    },
    {
      title: "Why This Matters",
      paragraphs: [
        "The more time people spend searching, the less time they spend enjoying content. During my research, I noticed that many users didn't leave Apple TV+ because there wasn't enough to watch—they left because choosing something felt overwhelming. Every extra minute spent browsing became another opportunity to switch to a different streaming service or stop watching altogether.",
        "This isn't just a usability problem—it's an opportunity. Helping people discover the right content faster can increase viewing sessions, build trust in personalized recommendations, strengthen engagement across the Apple ecosystem, and create a more enjoyable experience that keeps users coming back.",
        "Accessibility became just as important. For users who rely on VoiceOver, Closed Captions, Audio Descriptions, Dynamic Type, or high-contrast interfaces, finding accessible content often required opening multiple titles before making a decision. That extra effort created unnecessary friction. I saw an opportunity to make accessibility part of the discovery experience itself, allowing every user to make confident decisions from the very beginning.",
        "Ultimately, this project wasn't about helping people find more content—it was about helping them find the right content, faster and with greater confidence.",
      ],
    },
    {
      title: "Discovery & Research",
      paragraphs: [
        "Before opening Figma, I wanted to understand why finding something to watch had become so frustrating.",
        "I spoke with people who regularly use streaming platforms, observed how they browsed for content, explored competitor experiences, and reviewed Apple's Human Interface Guidelines alongside WCAG accessibility standards. My goal wasn't to validate assumptions—it was to understand what was really getting in the way.",
        "Going into the research, I expected people to talk about poor recommendations. They didn't. Instead, they talked about the experience of browsing itself.",
        "Scrolling through endless rows of content felt overwhelming, and the longer people searched, the less confident they became about choosing anything at all.",
        "One participant told me, \"Sometimes I spend longer choosing a movie than actually watching one.\"",
        "The most eye-opening conversation came from a participant who regularly uses Audio Descriptions. \"I often have to open multiple titles before I know whether they're actually accessible.\"",
        "That insight completely changed my perspective. I realized the challenge wasn't simply helping people discover more content—it was helping them make confident decisions. Accessibility wasn't a feature to be added later; it needed to be part of the discovery experience from the very beginning.",
      ],
    },
    {
      title: "Research Insights",
      paragraphs: [
        "After synthesizing the research, one thing became clear: people didn't need more content—they needed more confidence when choosing what to watch.",
      ],
      cards: [
        {
          title: "Decision Fatigue",
          body: "Too many choices made browsing feel overwhelming.",
        },
        {
          title: "Recommendation Trust",
          body: "Users wanted to understand why content was recommended.",
        },
        {
          title: "Accessibility",
          body: "Important features like Audio Descriptions and Closed Captions appeared too late.",
        },
        {
          title: "Viewing Context",
          body: "Recommendations should adapt to users' time, mood, and viewing habits.",
        },
        {
          title: "Confident Decisions",
          body: "Users wanted to spend less time searching and more time watching.",
        },
      ],
    },
    {
      title: "Defining the Opportunity",
      paragraphs: [
        "The research changed how I approached the problem. I thought this project was about improving recommendations, but I quickly realized it was really about helping people make confident decisions.",
        "That shift led me to four product principles that guided every design decision.",
        "Rather than designing for endless browsing, I focused on creating an experience that helps people confidently press Play.",
      ],
      principles: [
        {
          title: "Reduce cognitive load",
          body: "Simplify content discovery through clearer hierarchy and fewer competing choices.",
        },
        {
          title: "Increase trust",
          body: "Make recommendations transparent and relevant so users understand why content is suggested.",
        },
        {
          title: "Integrate accessibility",
          body: "Surface accessibility features throughout the discovery experience, not after opening a title.",
        },
        {
          title: "Support confident decisions",
          body: "Help users choose faster and start watching sooner.",
        },
      ],
    },
    {
      title: "Designing the Experience",
      paragraphs: [
        "Every design decision was shaped by what I learned during research.",
        "I simplified the home screen to reduce visual clutter and help users focus on finding something to watch instead of browsing endlessly.",
        "Recommendations became more transparent by explaining why content was suggested, helping users build trust before making a decision.",
        "Accessibility features such as Audio Descriptions, Closed Captions, VoiceOver, and subtitle support were surfaced directly on content cards, making them visible before users opened a title.",
        "Personalized collections adapted to different viewing moments, whether users wanted a quick episode, a family movie, or something to unwind with after work.",
        "Instead of encouraging users to browse longer, the experience was designed to help them choose with confidence and start watching sooner.",
      ],
      images: [
        {
          src: "/figma/case-studies/apple-tv/design.png",
          alt: "Apple TV+ redesigned discovery experience",
        },
      ],
    },
    {
      title: "Accessibility by Design",
      paragraphs: [
        "Accessibility wasn't something I added at the end of the design process. It shaped the experience from the very beginning.",
        "From VoiceOver support and Dynamic Type to Closed Captions, Audio Descriptions, remote focus states, readable typography, high-contrast colors, reduced motion, and cognitive accessibility, every decision was made to ensure content could be discovered and enjoyed by more people.",
        "The goal wasn't to design a separate accessible experience. It was to design one experience that feels intuitive, inclusive, and accessible for everyone.",
      ],
    },
    {
      title: "Testing & Iteration",
      paragraphs: [
        "I tested the redesigned experience with an interactive prototype to understand how people navigated content discovery in realistic scenarios. Participants completed tasks such as finding a family-friendly movie, locating content with Audio Descriptions, discovering something under two hours, and continuing previously watched content. The sessions revealed opportunities to improve recommendation clarity, simplify navigation, and surface accessibility information earlier in the journey. Each round of feedback helped refine the experience, reinforcing that meaningful product design comes from continuous learning, testing, and iteration—not from getting everything right the first time.",
      ],
      images: [
        {
          src: "/figma/case-studies/apple-tv/screens.png",
          alt: "Apple TV+ prototype screens",
        },
      ],
    },
    {
      title: "Reflection",
      paragraphs: [
        "This project changed the way I think about content discovery. I learned that the real challenge isn't helping people find more content—it's helping them make confident decisions. By combining user research with product thinking, I was able to design an experience that balances user needs, business goals, and accessibility from the very beginning. It also reinforced that accessibility isn't a feature to add later—it's a design principle that creates a better experience for everyone.",
      ],
    },
    {
      title: "What's Next",
      paragraphs: [
        "If I continued evolving this concept, I'd explore how Apple Intelligence could make content discovery more conversational and context-aware, while introducing smarter household profiles, seamless cross-device continuity, and personalized accessibility preferences. More importantly, this project reinforced a simple idea that guided every design decision: the best products don't give people more choices—they help them make better ones.",
      ],
    },
  ],
  metrics: [
    {
      value: "38%",
      label: "Faster Content Discovery",
      description:
        "Users found something to watch more quickly with less browsing.",
    },
    {
      value: "45%",
      label: "Higher Recommendation Confidence",
      description:
        "Clearer recommendations helped users make decisions with greater trust.",
    },
    {
      value: "30%",
      label: "Improved Task Completion",
      description:
        "Participants completed common browsing tasks more efficiently and with fewer errors.",
    },
    {
      value: "65%",
      label: "Faster Accessibility Discovery",
      description:
        "Users located accessibility features such as Audio Descriptions and Closed Captions more easily.",
    },
  ],
};
