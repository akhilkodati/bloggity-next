export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Minimalism",
    description: "Exploring the beauty of simplicity in modern design and life.",
    content: "Minimalism isn't just about having less – it's about making room for more of what matters. In this exploration of minimalist principles, we'll discover how reducing physical and digital clutter can lead to increased clarity, focus, and purpose in both design and daily life. The key lies in thoughtful curation and intentional choices, creating spaces and experiences that truly resonate with our core values and aspirations.",
    date: "March 12, 2024"
  },
  {
    id: "2",
    title: "Design Systems That Scale",
    description: "Building robust and flexible design systems for modern applications.",
    content: "A well-crafted design system is the backbone of any successful digital product. It provides consistency, speeds up development, and ensures a cohesive user experience across all touchpoints. This post delves into the essential components of a scalable design system, from atomic elements to complex patterns, and how to maintain it as your product evolves.",
    date: "March 10, 2024"
  },
  {
    id: "3",
    title: "The Future of User Interfaces",
    description: "Emerging trends and predictions in UI design for the next decade.",
    content: "As technology continues to evolve at an unprecedented pace, the way we interact with digital interfaces is undergoing a dramatic transformation. From gesture-based controls to voice interfaces and augmented reality, we're entering a new era of human-computer interaction. This post explores the most promising trends and technologies that will shape the future of user interfaces.",
    date: "March 8, 2024"
  },
  {
    id: "4",
    title: "AI in Modern Web Development",
    description: "How artificial intelligence is transforming the way we build websites.",
    content: "Artificial intelligence is revolutionizing web development, from automated testing to intelligent code completion and even UI generation. This comprehensive guide explores the current state of AI in web development, practical applications, and what the future might hold for developers and designers alike.",
    date: "March 6, 2024"
  },
  {
    id: "5",
    title: "Performance Optimization Techniques",
    description: "Essential strategies for building lightning-fast web applications.",
    content: "Website performance is crucial for user experience and SEO. This in-depth article covers advanced optimization techniques, from code splitting and lazy loading to image optimization and caching strategies. Learn how to measure, monitor, and improve your web application's performance.",
    date: "March 4, 2024"
  },
  {
    id: "6",
    title: "The Rise of Micro-Frontends",
    description: "Understanding the benefits and challenges of micro-frontend architecture.",
    content: "Micro-frontends are changing how we build and scale large web applications. This article examines the architectural pattern, its benefits and drawbacks, and provides practical guidance for implementing micro-frontends in your organization.",
    date: "March 2, 2024"
  },
  {
    id: "7",
    title: "Accessibility First Development",
    description: "Building inclusive web experiences for all users.",
    content: "Web accessibility is not just a nice-to-have feature – it's a necessity. This comprehensive guide covers WCAG guidelines, practical implementation techniques, and tools for testing and maintaining accessible web applications. Learn how to make your web content available to everyone.",
    date: "February 28, 2024"
  },
  {
    id: "8",
    title: "State Management Evolution",
    description: "Modern approaches to managing application state.",
    content: "State management in web applications has evolved significantly over the years. From Redux to React Query and everything in between, this article explores different state management solutions, their use cases, and how to choose the right approach for your project.",
    date: "February 26, 2024"
  }
];