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
  }
];