import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const SITE_URL = "https://www.orostudioscr.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Orostudioscr | Fotografía para parques de aventura y agencia digital en Costa Rica",
    template: "%s | Orostudioscr",
  },
  description:
    "Más de 20 años de fotografía profesional para parques de aventura en Costa Rica. También páginas web, gestión de redes sociales y producción de contenido para cualquier negocio.",
  keywords: [
    "fotografía parques de aventura Costa Rica",
    "fotografía canopy",
    "Orostudioscr",
    "Grupo Oroz",
    "agencia digital San Carlos",
    "páginas web Costa Rica",
    "fotografía de bodas Costa Rica",
    "La Fortuna",
    "Arenal",
  ],
  authors: [{ name: "Orostudioscr" }],
  creator: "Orostudioscr",
  publisher: "Grupo Oroz CR",
  alternates: {
    canonical: "/",
    languages: { "es-CR": "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Orostudioscr",
    title: "Orostudioscr | Contenido visual y digital que impulsa tu negocio",
    description:
      "La empresa #1 en fotografía para parques de aventura en Costa Rica. Páginas web, redes sociales y producción de contenido profesional.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orostudioscr | Contenido visual y digital en Costa Rica",
    description:
      "Fotografía para parques de aventura, bodas y eventos, páginas web y gestión de redes sociales.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "photography",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Orostudioscr",
  alternateName: "Orostudios CR",
  url: SITE_URL,
  description:
    "Fotografía profesional para parques de aventura, bodas y eventos, además de páginas web, redes sociales y producción de contenido.",
  telephone: "+506 6175-2273",
  email: "gerencia@orostudioscr.com",
  parentOrganization: { "@type": "Organization", name: "Grupo Oroz CR" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Carlos",
    addressRegion: "Alajuela",
    addressCountry: "CR",
  },
  areaServed: { "@type": "Country", name: "Costa Rica" },
  priceRange: "$$",
  knowsLanguage: ["es", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
