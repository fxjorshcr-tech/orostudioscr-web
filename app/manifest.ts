import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orostudioscr | Fotografía y contenido digital",
    short_name: "Orostudioscr",
    description:
      "Fotografía profesional para parques de aventura, bodas y eventos, páginas web y gestión de redes sociales en Costa Rica.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    lang: "es-CR",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
