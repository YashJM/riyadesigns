import type { CaseStudyData } from "@/lib/case-studies/types";

export const appleTvPlusCaseStudy: CaseStudyData = {
  slug: "apple-tv-plus",
  title: "Apple TV+",
  subtitle: "From Endless Browsing to Confident Watching",
  tagline: "Re-imagining Content Discovery Through Inclusive & Accessible Design",
  intro: [
    "Apple TV+ offers an incredible library of movies, TV shows, live sports, and Apple Originals, yet finding something worth watching isn't always as enjoyable as watching it. As streaming libraries continue to grow, many people spend more time scrolling through recommendations, comparing titles, or switching between streaming platforms than actually pressing play.",
    "For this conceptual project, I wanted to understand why that happens. Instead of redesigning the interface, I approached the challenge from both a Product Designer and UX Research perspective to uncover what makes content discovery feel overwhelming. By combining user research, product thinking, and inclusive design, I explored how Apple TV+ could help people make faster, more confident decisions while making accessibility a natural part of the discovery experience rather than an afterthought.",
  ],
  meta: {
    role: "Product Designer / UX Researcher",
    roleDetail: "Led research, strategy, and end-to-end product design.",
    tools: "Figma, FigJam, Miro",
    toolsDetail: "Used for research, ideation, prototyping, and testing.",
    platform: "Apple TV+ (tvOS, iOS, iPadOS & macOS)",
    platformDetail:
      "Designed a seamless, accessible content discovery experience across Apple devices",
    scope: "End-to-End Product Design",
    scopeDetail:
      "From user research and product strategy to final designs and validation.",
  },
  heroImage: {
    src: "/figma/case-studies/apple-tv/hero.png",
    alt: "Apple TV+ content discovery concept across TV, tablet, and mobile",
    width: 856,
    height: 571,
  },
  sections: [
    {
      title: "Project Overview",
      paragraphs: [
        "Streaming platforms have given us more content than ever before, but finding something worth watching has become increasingly difficult. Instead of enjoying content, many users spend valuable time scrolling through endless recommendations, comparing streaming services, or struggling to decide what to watch next.",
        "I wanted to explore how Apple TV+ could help people spend less time browsing and more time confidently watching. By understanding user behavior, applying product thinking, and designing with accessibility in mind, I explored opportunities to simplify content discovery, build trust in recommendations, and create a more inclusive viewing experience.",
      ],
    },
    {
      title: "The Problem",
      content: [
        { kind: "text", text: "It started with something I had experienced myself." },
        {
          kind: "text",
          text: "After opening Apple TV+, I expected to quickly find something to watch. Instead, I spent nearly twenty minutes scrolling through recommendations, opening different titles, and eventually switching between streaming platforms without making a decision.",
        },
        {
          kind: "text",
          text: "Rather than assuming this was only my experience, I wanted to understand whether others felt the same way.",
        },
        {
          kind: "text",
          text: "As I spoke with people who regularly used streaming services, a clear pattern began to emerge. Most users didn't struggle because there wasn't enough content—they struggled because there was too much of it. Endless rows of recommendations, repeated suggestions, and a lack of context made choosing something to watch feel surprisingly difficult.",
        },
        {
          kind: "text",
          text: "The research also uncovered another challenge. Users who relied on accessibility features such as Audio Descriptions, Closed Captions, or VoiceOver often had to open multiple titles before knowing whether a movie or show met their needs. Accessibility wasn't difficult to use—it was difficult to find.",
        },
        { kind: "text", text: "That changed how I framed the problem." },
        {
          kind: "list",
          items: [
            "This wasn't about helping people discover more content.",
            "It was about helping them make confident decisions, while ensuring everyone could discover content in a way that worked for them.",
            "That insight became the foundation for every product decision that followed.",
          ],
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/problem-home.png",
              alt: "Apple TV+ home screen annotated with four problems — endless scrolling, repeated recommendations, no context or guidance, and accessibility hard to find",
              width: 1078,
              height: 716,
            },
          ],
        },
        {
          kind: "images",
          layout: "grid",
          images: [
            {
              src: "/figma/case-studies/apple-tv/typical-journey.png",
              alt: "The typical journey — open Apple TV+, scroll and browse, open multiple titles, can't decide, switch platform",
              width: 1042,
              height: 182,
            },
            {
              src: "/figma/case-studies/apple-tv/research-revealed.png",
              alt: "What the research revealed — 7/10 felt overwhelmed, 65% spend more time browsing than watching, 48% check multiple titles for accessibility features, 42% switch platforms",
              width: 446,
              height: 194,
            },
          ],
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
      images: [
        {
          src: "/figma/case-studies/apple-tv/goal.png",
          alt: "Apple TV+ goals and success measures — less time searching, confident decisions, accessible for everyone",
          width: 720,
          height: 631,
        },
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
      content: [
        {
          kind: "text",
          text: "Before opening Figma, I wanted to understand why finding something to watch had become so frustrating.",
        },
        {
          kind: "text",
          text: "I spoke with people who regularly use streaming platforms, observed how they browsed for content, explored competitor experiences, and reviewed Apple's Human Interface Guidelines alongside WCAG accessibility standards. My goal wasn't to validate assumptions—it was to understand what was really getting in the way.",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/research-plan.png",
              alt: "Research plan — research questions, methods, 12 participants aged 18–65, and a two-week timeline",
              width: 515,
              height: 261,
            },
          ],
        },
        {
          kind: "text",
          text: "Going into the research, I expected people to talk about poor recommendations.",
        },
        { kind: "text", text: "They didn't." },
        {
          kind: "text",
          text: "Instead, they talked about the experience of browsing itself.",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/viewer-photo.png",
              alt: "A viewer browsing Apple TV+ on a living room television",
              width: 515,
              height: 188,
            },
          ],
        },
        {
          kind: "text",
          text: "Scrolling through endless rows of content felt overwhelming, and the longer people searched, the less confident they became about choosing anything at all.",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/decision-fatigue.png",
              alt: "Decision fatigue — 20 minutes or more spent browsing to decide, with too many choices and not enough clarity",
              width: 515,
              height: 204,
            },
          ],
        },
        { kind: "text", text: "One participant told me," },
        {
          kind: "text",
          text: "\"Sometimes I spend longer choosing a movie than actually watching one.\"",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/quote-time.png",
              alt: "Participant quote — \"Sometimes I spend longer choosing a movie than actually watching one.\"",
              width: 515,
              height: 160,
            },
          ],
        },
        { kind: "text", text: "Another said," },
        {
          kind: "text",
          text: "\"I usually check two or three streaming apps before deciding what to watch.\"",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/app-hopping.png",
              alt: "Cross-platform behaviour — users move from Apple TV+ to Netflix, Disney+, and Prime Video before returning to Apple TV+",
              width: 515,
              height: 135,
            },
          ],
        },
        {
          kind: "text",
          text: "The most eye-opening conversation came from a participant who regularly uses Audio Descriptions.",
        },
        {
          kind: "text",
          text: "\"I often have to open multiple titles before I know whether they're actually accessible.\"",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/accessibility-loop.png",
              alt: "The accessibility loop — browse, open a title, no Audio Description, go back, open another title, still not available, repeat",
              width: 515,
              height: 158,
            },
          ],
        },
        { kind: "text", text: "That insight completely changed my perspective." },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/affinity-map.png",
              alt: "Affinity map — overwhelm and decision fatigue, accessibility challenges, trust and confidence, cross-platform behaviour, and what users really want",
              width: 515,
              height: 205,
            },
          ],
        },
        {
          kind: "text",
          text: "I realized the challenge wasn't simply helping people discover more content—it was helping them make confident decisions.",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/problem-opportunity.png",
              alt: "Reframing the problem as an opportunity — from too many choices and low confidence to better guidance, high confidence, and a better experience",
              width: 515,
              height: 139,
            },
          ],
        },
        {
          kind: "text",
          text: "Accessibility wasn't a feature to be added later; it needed to be part of the discovery experience from the very beginning.",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/coda-accessibility.png",
              alt: "CODA title card surfacing Audio Description, Closed Captions, VoiceOver support, and multiple languages up front",
              width: 515,
              height: 154,
            },
          ],
        },
        {
          kind: "text",
          text: "That shift became the foundation for every product decision that followed.",
        },
        {
          kind: "images",
          images: [
            {
              src: "/figma/case-studies/apple-tv/process-flow.png",
              alt: "Process flow — research, insights, opportunity, product strategy, design, prototype, and testing, anchored by confidence, accessibility, and trust",
              width: 515,
              height: 121,
            },
          ],
        },
      ],
    },
    {
      title: "Research Insights",
      paragraphs: [
        "After synthesizing the research, one thing became clear: people didn't need more content—they needed more confidence when choosing what to watch.",
      ],
      cardLayout: "stack",
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
      content: [
        {
          kind: "text",
          text: "The research changed how I approached the problem. I thought this project was about improving recommendations, but I quickly realized it was really about helping people make confident decisions.",
        },
        {
          kind: "text",
          text: "That shift led me to four product principles that guided every design decision.",
        },
        {
          kind: "list",
          items: [
            "Reduce cognitive load through simplified content discovery.",
            "Increase trust with transparent and relevant recommendations.",
            "Integrate accessibility throughout the discovery experience.",
            "Support faster and more confident viewing decisions.",
          ],
        },
        {
          kind: "text",
          text: "Rather than designing for endless browsing, I focused on creating an experience that helps people confidently press Play.",
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
          src: "/figma/case-studies/apple-tv/design-ui.png",
          alt: "Apple TV+ redesigned discovery experience — simplified home, transparent recommendations, and visible accessibility",
          width: 560,
          height: 1069,
        },
      ],
    },
    {
      title: "Accessibility by Design",
      paragraphs: [
        "Accessibility wasn't something I added at the end of the design process.",
        "It shaped the experience from the very beginning.",
        "From VoiceOver support and Dynamic Type to Closed Captions, Audio Descriptions, remote focus states, readable typography, high-contrast colors, reduced motion, and cognitive accessibility, every decision was made to ensure content could be discovered and enjoyed by more people.",
        "The goal wasn't to design a separate accessible experience.",
        "It was to design one experience that feels intuitive, inclusive, and accessible for everyone.",
      ],
      images: [
        {
          src: "/figma/case-studies/apple-tv/accessibility.png",
          alt: "Apple TV+ built-in accessibility support — Closed Captions, Audio Descriptions, Sign Language, VoiceOver, Dynamic Type, and high contrast",
          width: 760,
          height: 466,
        },
      ],
    },
    {
      title: "Testing & Iteration",
      paragraphs: [
        "I tested the redesigned experience with an interactive prototype to understand how people navigated content discovery in realistic scenarios. Participants completed tasks such as finding a family-friendly movie, locating content with Audio Descriptions, discovering something under two hours, and continuing previously watched content. The sessions revealed opportunities to improve recommendation clarity, simplify navigation, and surface accessibility information earlier in the journey. Each round of feedback helped refine the experience, reinforcing that meaningful product design comes from continuous learning, testing, and iteration—not from getting everything right the first time.",
      ],
      images: [
        {
          src: "/figma/case-studies/apple-tv/testing-wide.png",
          alt: "Apple TV+ testing process — Recruitment, Task-Based Scenarios, Think-Aloud Sessions, Feedback Analysis, and Iterate & Refine",
          width: 682,
          height: 176,
        },
      ],
    },
    {
      title: "Impact",
      paragraphs: [
        "The outcomes below are based on prototype usability testing and concept validation, not live production data.",
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
          value: "65%",
          label: "Faster Accessibility Discovery",
          description:
            "Users located accessibility features such as Audio Descriptions and Closed Captions more easily.",
        },
        {
          value: "30%",
          label: "Improved Task Completion",
          description:
            "Participants completed common browsing tasks more efficiently and with fewer errors.",
        },
      ],
      metricsFootnote:
        "These results suggest that a simpler, more transparent, and accessible discovery experience can help users spend less time searching and more time enjoying content.",
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
};
