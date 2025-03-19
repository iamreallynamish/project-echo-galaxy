
export interface MediaItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
    iso: number;
  };
  tags: string[];
}

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "MORNING LIGHT",
    date: "2023-06-15",
    description: "Early morning light through urban architecture creates dramatic shadows and highlights.",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2070&auto=format&fit=crop",
    exif: {
      camera: "FUJIFILM X-T4",
      lens: "XF 23mm f/1.4 R LM WR",
      focalLength: "23mm",
      aperture: "f/5.6",
      shutterSpeed: "1/250s",
      iso: 160
    },
    tags: ["architecture", "morning", "urban", "light"]
  },
  {
    id: 2,
    title: "URBAN GEOMETRY",
    date: "2023-07-22",
    description: "Geometric patterns in contemporary architecture with strong contrast.",
    imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2071&auto=format&fit=crop",
    exif: {
      camera: "FUJIFILM X-T4",
      lens: "XF 16-55mm f/2.8 R LM WR",
      focalLength: "35mm",
      aperture: "f/8.0",
      shutterSpeed: "1/125s",
      iso: 400
    },
    tags: ["architecture", "geometry", "urban", "contrast"]
  },
  {
    id: 3,
    title: "DESERT VISTA",
    date: "2023-05-03",
    description: "Minimalist landscape of desert formations at dusk.",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop",
    exif: {
      camera: "FUJIFILM X-T4",
      lens: "XF 10-24mm f/4 R OIS WR",
      focalLength: "14mm",
      aperture: "f/11",
      shutterSpeed: "1/60s",
      iso: 200
    },
    tags: ["landscape", "desert", "minimalist", "dusk"]
  }
];
