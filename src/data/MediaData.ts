
export interface MediaItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  projectDetails: {
    software: string;
    // Removed other EXIF fields
  };
  aboutProject: string;
  tags: string[];
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "MORNING LIGHT",
    date: "2023-06-15",
    description: "Early morning light through urban architecture creates dramatic shadows and highlights.",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2070&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Photoshop CC 2023",
    },
    aboutProject: "This project explores the interplay of light and shadow in urban environments. The early morning sun creates dramatic contrasts that highlight architectural elements often overlooked during regular daylight hours.",
    tags: ["architecture", "morning", "urban", "light"]
  },
  {
    id: 2,
    title: "URBAN GEOMETRY",
    date: "2023-07-22",
    description: "Geometric patterns in contemporary architecture with strong contrast.",
    imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2071&auto=format&fit=crop",
    projectDetails: {
      software: "Adobe Lightroom & Photoshop",
    },
    aboutProject: "Urban Geometry focuses on the abstract patterns found within modern city architecture. The high contrast processing emphasizes the geometric shapes that form the visual language of contemporary urban design.",
    tags: ["architecture", "geometry", "urban", "contrast"]
  },
  {
    id: 3,
    title: "DESERT VISTA",
    date: "2023-05-03",
    description: "Minimalist landscape of desert formations at dusk.",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop",
    projectDetails: {
      software: "Capture One Pro & Affinity Photo",
    },
    aboutProject: "Desert Vista captures the serene simplicity of arid landscapes as daylight fades. The minimalist approach highlights the subtle textures and shapes that define these seemingly barren but visually rich environments.",
    tags: ["landscape", "desert", "minimalist", "dusk"]
  }
];
