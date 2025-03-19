
export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  description: string;
  details: string;
  categories: string[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Brand Identity Design",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    date: "January 2023",
    description: "Modern identity system for an innovative tech startup",
    details: "Created a comprehensive brand identity system including logo design, typography, color palette, and brand guidelines. The project involved extensive research on competitor brands and market positioning to create a distinctive visual language that communicates the brand's innovative approach and values.",
    categories: ["Branding", "Identity", "Logo Design"]
  },
  {
    id: "02",
    title: "Editorial Layout",
    thumbnail: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2070&auto=format&fit=crop",
    date: "March 2023",
    description: "Magazine design exploring minimalist aesthetics",
    details: "Developed a clean and sophisticated editorial design for a print and digital magazine. The project focused on creating a harmonious balance between typography, whitespace, and visual elements to enhance readability while maintaining a strong aesthetic appeal. Special attention was paid to grid systems and typographic hierarchy.",
    categories: ["Editorial", "Print", "Typography"]
  },
  {
    id: "03",
    title: "Packaging Design",
    thumbnail: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=2032&auto=format&fit=crop",
    date: "June 2023",
    description: "Sustainable packaging for premium cosmetics",
    details: "Designed eco-friendly packaging for a premium cosmetic brand that balances sustainability with luxury aesthetics. The design incorporates recycled materials with a sophisticated finish, showcasing how sustainable choices can enhance rather than compromise brand positioning. The project included designing the primary packaging, outer box, and supporting materials.",
    categories: ["Packaging", "Sustainable Design", "Luxury"]
  },
  {
    id: "04",
    title: "UI/UX Design System",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    date: "August 2023",
    description: "Comprehensive design system for a finance app",
    details: "Created a scalable design system for a financial technology application that improves user experience while maintaining brand consistency. The system includes component libraries, interaction patterns, and accessibility guidelines. The project involved extensive user research and testing to ensure the design solutions addressed real user needs and pain points.",
    categories: ["UI/UX", "Design System", "Digital"]
  },
  {
    id: "05",
    title: "Motion Graphics",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    date: "October 2023",
    description: "Animated explainer video for tech product",
    details: "Developed concept, storyboard, and animation for a product explainer video that simplifies complex technological concepts. The animation style uses minimalist design elements with strategic motion to guide viewer attention and enhance understanding. The project required close collaboration with copywriters to align visual storytelling with verbal messaging.",
    categories: ["Motion Graphics", "Animation", "Explainer"]
  },
  {
    id: "06",
    title: "Website Redesign",
    thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
    date: "December 2023",
    description: "Modern, responsive website for architecture firm",
    details: "Redesigned the online presence for a leading architecture firm, focusing on creating an immersive digital showcase for their portfolio. The website features a minimalist design with thoughtful interactions and transitions that enhance the user experience without distracting from the architectural work. The responsive design ensures optimal viewing across all devices.",
    categories: ["Web Design", "Responsive", "Portfolio"]
  }
];
