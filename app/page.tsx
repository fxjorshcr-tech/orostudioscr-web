"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Camera, Video, Clock, Users, Check, Phone, Mail, MapPin, 
  Instagram, Facebook, Monitor, Shirt, HardHat, FileCheck, 
  GraduationCap, Lock, Wrench, HeadphonesIcon,
  ClipboardCheck, RefreshCw, Shield, TrendingUp, Award, 
  DollarSign, Zap, Heart, Star, ArrowRight, Building2, 
  Handshake, Target, Sparkles, Plane, Megaphone, BarChart3,
  Globe, Network, BadgeCheck, UserCheck, Smartphone, Film,
  Hotel, UtensilsCrossed, Compass, ShoppingBag, Briefcase, Home as HomeIcon,
  CheckCircle, Search, Clock3, ShieldCheck, Send, Loader2, X,
  PartyPopper, Cake, GlassWater, Church, Music, Aperture,
  ChevronDown, Play, Palette, PenTool, MessageCircle
} from "lucide-react";

// ============================================
// IMAGES
// ============================================
const IMAGES = {
  logo: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/Orostudios%20CR%20Logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9Pcm9zdHVkaW9zIENSIExvZ28ucG5nIiwiaWF0IjoxNzY1MzgwODE2LCJleHAiOjE3OTY5MTY4MTZ9.tQQHhDBH5x_5kg1ddnzKcZch76TpcMznMgIG135xhg4",
  grupoOroz: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/logo-grupo-oroz-transparente.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9sb2dvLWdydXBvLW9yb3otdHJhbnNwYXJlbnRlLndlYnAiLCJpYXQiOjE3NjU4MDY4MDksImV4cCI6MTc5NzM0MjgwOX0.JxX1v1ry7F5ZE6QQY-uDxqLR-frWA1qmK5xkS6AurHw",
  heroVideo: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/Video%20de%20WhatsApp%202025-12-10%20a%20las%2010.15.38_4fdd5b22.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9WaWRlbyBkZSBXaGF0c0FwcCAyMDI1LTEyLTEwIGEgbGFzIDEwLjE1LjM4XzRmZGQ1YjIyLm1wNCIsImlhdCI6MTc2NTM4MzYyMCwiZXhwIjoxNzk2OTE5NjIwfQ.n4LfIx5qobVB3KMd0s9potMkV1gzilTYuKrCpHOLm2I",
  hero: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/HORIZONTAL1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9IT1JJWk9OVEFMMS53ZWJwIiwiaWF0IjoxNzY1ODE0MDM0LCJleHAiOjE3OTczNTAwMzR9.oeth-zHJG2WFel_FFGiI2iv2B6fjLNwbWke3ClUCeeQ",
  horizontal2: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/HORIZONTAL2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9IT1JJWk9OVEFMMi53ZWJwIiwiaWF0IjoxNzY1ODE0MDU2LCJleHAiOjE3OTczNTAwNTZ9.4BPfNhr7JxN57mO9gI-OWEFnYpci89iwWq0aEiBAOkY",
  horizontal3: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/HORIZONTAL3.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9IT1JJWk9OVEFMMy53ZWJwIiwiaWF0IjoxNzY1Mzc4NzU0LCJleHAiOjE3OTY5MTQ3NTR9.HnN9AMpd0Jv_r2u8WUEt0thbHnJZcbx35AQpGUPnT-0",
  gallery1: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/IMG-20251215-WA0018.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9JTUctMjAyNTEyMTUtV0EwMDE4LmpwZyIsImlhdCI6MTc2NTgxMTk4NywiZXhwIjoxNzk3MzQ3OTg3fQ.rwMORlW9znJztB4V9HY38rYDEkxuLwoiIvBLIqsCWUU",
  gallery2: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/IMG-20251215-WA0016.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9JTUctMjAyNTEyMTUtV0EwMDE2LmpwZyIsImlhdCI6MTc2NTgxMTk5OSwiZXhwIjoxNzk3MzQ3OTk5fQ.ktUrDrJx3wYfFDGZZOOzQDPVraEXTls0TWp-jF7SKzI",
  gallery3: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/IMG-20251215-WA0014.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9JTUctMjAyNTEyMTUtV0EwMDE0LmpwZyIsImlhdCI6MTc2NTgxMjAxNCwiZXhwIjoxNzk3MzQ4MDE0fQ.Hj56b-N87m6WMaejtwl1Gd2-jLxQThlLR_2nGyFxAEU",
  gallery4: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/IMG-20251215-WA0008.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9JTUctMjAyNTEyMTUtV0EwMDA4LmpwZyIsImlhdCI6MTc2NTgxMjA0MSwiZXhwIjoxNzk3MzQ4MDQxfQ.MAs_yltvXTG-aUyWCRTE1J2sm76C9g3Jf3QufEckd2w",
  gallery5: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/IMG-20251215-WA0006.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9JTUctMjAyNTEyMTUtV0EwMDA2LmpwZyIsImlhdCI6MTc2NTgxMjA1MywiZXhwIjoxNzk3MzQ4MDUzfQ.SnakkuB9T5IJq58wgYWYuc9omfpYNRkP-6fPRYi8K0E",
  gallery6: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/IMG-20251215-WA0005.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9JTUctMjAyNTEyMTUtV0EwMDA1LmpwZyIsImlhdCI6MTc2NTgxMjA2MywiZXhwIjoxNzk3MzQ4MDYzfQ.NPLyg7dlNmvwhzQ8t6Nww-9Xjj2x-F8HbfXoQQoKuWs",
  verticalEco: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/vertcal-eco.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy92ZXJ0Y2FsLWVjby53ZWJwIiwiaWF0IjoxNzY1NDY4Mjk5LCJleHAiOjE3OTcwMDQyOTl9.bHHlaj89iCcg6QLFo02fcCfZQ-2_ITuXoX9XART00sU",
  canopyEco: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/canopy-eco.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9jYW5vcHktZWNvLndlYnAiLCJpYXQiOjE3NjU0NjgzMTQsImV4cCI6MTc5NzAwNDMxNH0.H_T1TBuE6rJz4cEVe-y6N0ts7jhBGRCYlUCvvYarrrY",
  ecoglide: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/foto-eco-ofic.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9mb3RvLWVjby1vZmljLmpwZyIsImlhdCI6MTc2NTgxMzgzOCwiZXhwIjoxNzk3MzQ5ODM4fQ.6OB1D8_tmuNz6LKBVie-WT2N_0Nu7XXrU4Q6j4ipews",
  skyline: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/skyline-oficina.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9za3lsaW5lLW9maWNpbmEud2VicCIsImlhdCI6MTc2NTM3OTE3MCwiZXhwIjoxNzk2OTE1MTcwfQ.GDBP76-wL0YKrv_KxN_rXuUkZG0zvzjK_-IGCoRtT04",
  ama: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/ama-ofi.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9hbWEtb2ZpLnBuZyIsImlhdCI6MTc2NTgxMzc1NCwiZXhwIjoxNzk3MzQ5NzU0fQ.0xKVMbq34JB4iUP1orwfI40OaDBcQa1TEU9YS-Apom0",
  poas: "https://jrphapxnjpcepsecfsoe.supabase.co/storage/v1/object/sign/fotos/poas-adventure-park.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNDJiMjQ5Yy00YjhhLTQ5ZDAtOTJmMC1iNjlkMmI2MjFhODUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy9wb2FzLWFkdmVudHVyZS1wYXJrLndlYnAiLCJpYXQiOjE3NjUzNzkxMjUsImV4cCI6MTc5NjkxNTEyNX0.WCytgZ_KWoXIcKDfqlptpaRY2LlodAlMrT-IJlzvuLg",
};

// ============================================
// TRANSLATIONS
// ============================================
type Lang = "es" | "en";

const translations = {
  es: {
    // Nav
    nav: {
      services: "Servicios",
      parks: "Parques",
      agency: "Agencia Digital",
      gallery: "Galería",
      events: "Bodas y Eventos",
      contact: "Contacto",
    },
    // Hero
    hero: {
      badge: "+20 años creando contenido visual profesional",
      title1: "Contenido Visual y Digital",
      titleHighlight: "que Impulsa",
      title2: "tu Negocio",
      subtitle: "Fotografía profesional • Páginas web • Gestión de redes • Producción de contenido",
      cta1: "Nuestros Servicios",
      cta2: "Contáctenos",
    },
    // Services Grid
    servicesGrid: {
      label: "Nuestros Servicios",
      title1: "Soluciones completas en",
      titleHighlight: "contenido y marketing digital",
      subtitle: "Desde fotografía profesional hasta presencia digital completa. Todo lo que tu negocio necesita para destacar.",
      services: [
        {
          id: "parks",
          icon: "Camera",
          title: "Parques de Aventura",
          description: "Servicio fotográfico especializado con +20 años de experiencia. Operamos en 4 parques con personal permanente.",
          badge: "Especialidad #1",
        },
        {
          id: "weddings",
          icon: "Heart",
          title: "Bodas y Eventos",
          description: "Capturamos los momentos más importantes de tu vida. Fotografía y video profesional para bodas, quinceaños y eventos especiales.",
          badge: null,
        },
        {
          id: "web",
          icon: "Globe",
          title: "Páginas Web",
          description: "Diseño moderno, responsive y optimizado para Google. Tu negocio disponible 24/7 con reservas online.",
          badge: null,
        },
        {
          id: "social",
          icon: "Smartphone",
          title: "Redes Sociales",
          description: "Gestión completa: contenido, estrategia de crecimiento, respuesta a clientes y campañas publicitarias.",
          badge: null,
        },
        {
          id: "content",
          icon: "Film",
          title: "Producción de Contenido",
          description: "Fotografía comercial, video para redes, tomas con dron y edición profesional. Contenido que genera resultados.",
          badge: null,
        },
      ],
    },
    // Parks Section (consolidated)
    parks: {
      label: "Fotografía para Parques de Aventura",
      title1: "La empresa",
      titleHighlight: "#1 en fotografía",
      title2: "para parques de aventura",
      subtitle: "Con más de dos décadas de trayectoria, somos la empresa más grande y con más experiencia en servicios fotográficos para el sector de turismo de aventura en Costa Rica.",
      stat1Value: "#1",
      stat1Label: "En Costa Rica",
      stat2Value: "20+",
      stat2Label: "Años de experiencia",
      stat3Value: "4",
      stat3Label: "Parques activos",
      stat4Value: "18+",
      stat4Label: "Parques atendidos",
      // Zero Risk
      zeroRiskTitle: "100% responsabilidad nuestra, 0% riesgo para usted",
      zeroRiskSubtitle: "La responsabilidad de venta es totalmente de Orostudioscr. Usted no invierte en personal, equipos ni operación.",
      zeroRisk1Title: "Sin inversión inicial",
      zeroRisk1Text: "No necesita comprar equipos, contratar personal ni capacitar a nadie.",
      zeroRisk2Title: "Sin riesgo operativo",
      zeroRisk2Text: "Todo el personal está asegurado y capacitado. Las pólizas corren por nuestra cuenta.",
      zeroRisk3Title: "Sin riesgo comercial",
      zeroRisk3Text: "Si las ventas son bajas, el riesgo es nuestro. Usted recibe su renta mensual.",
      // Model
      modelTitle: "Una alianza donde todos ganan",
      youProvide: "Usted Aporta",
      youProvideItems: ["Espacio dentro de su parque", "Flujo de visitantes"],
      weProvide: "Nosotros Aportamos",
      weProvideItems: ["Personal capacitado", "Todo el equipo tecnológico", "Operación completa 7/7", "Gestión de ventas", "Contenido para sus redes"],
      youReceive: "Usted Recibe",
      youReceiveItems: ["Renta mensual garantizada", "Contenido profesional gratis", "Servicio de valor para sus clientes", "Cero preocupaciones operativas"],
      // Social Growth
      socialGrowthTitle: "Impulse sus redes sociales con contenido profesional",
      socialGrowthSubtitle: "Cada foto y video que capturamos se convierte en contenido de alta calidad para sus plataformas digitales.",
      socialBenefit1: "Contenido diario para sus redes",
      socialBenefit2: "Fotos y videos profesionales gratis",
      socialBenefit3: "Mayor visibilidad online",
      socialBenefit4: "Más reservas y visitantes",
      droneTitle: "Sesión profesional con dron incluida",
      droneText: "Sin costo adicional, cada 6 meses realizamos una sesión completa con tomas de dron para actualizar su contenido promocional.",
      // Marketing Options
      marketingTitle: "Impulsamos el marketing de su parque",
      marketingSubtitle: "Más que fotografía, somos su aliado en crecimiento digital",
      option1Title: "Apoyo Incluido",
      option1Subtitle: "Con nuestro servicio estándar",
      option1Items: ["Contenido regular para redes sociales", "Material promocional de calidad", "Fotos y videos de sus actividades", "Cobertura de eventos especiales"],
      option2Title: "Plan Completo",
      option2Subtitle: "Según negociación",
      option2Items: ["Estrategia de marketing digital completa", "Gestión profesional de redes sociales", "Campañas publicitarias en Meta/Google", "Diseño y branding", "Reportes mensuales de rendimiento"],
      option2Badge: "Premium",
      // Offices
      officesLabel: "Nuestras Oficinas",
      officesTitle: "Presencia permanente en parques de Costa Rica",
      officesSubtitle: "Nuestra filosofía combina tecnología de vanguardia, procesos optimizados, y un equipo humano altamente capacitado.",
      quality: "Recuerdos de calidad",
      reliable: "Servicio confiable",
      // Benefits
      benefitsTitle: "Beneficios para el parque",
      benefitsList: [
        "Contenido digital de alta calidad listo para redes sociales",
        "Servicio de valor agregado para sus clientes sin costo operativo",
        "Asistencia operativa los 7 días de la semana",
        "Servicio especial con drones cada 4 meses",
        "Gestión de autorizaciones de uso de imagen",
        "Renta mensual por el espacio",
      ],
      // Equipment Cards
      equipmentCards: [
        { category: "Equipo", title: "Tecnología", description: "Cámaras, pantallas, equipo de sonido, papelería, arneses certificados y más." },
        { category: "Equipo", title: "Uniformes", description: "Uniformes corporativos propios garantizando una imagen profesional." },
        { category: "Equipo", title: "Seguridad", description: "Equipos de seguridad provistos y gestionados por nosotros." },
        { category: "Personal", title: "Pólizas", description: "Personal asegurado por CCSS y cubierto por pólizas de riesgos del trabajo." },
        { category: "Personal", title: "Capacitaciones", description: "Capacitaciones continuas para personal actual y nuevos ingresos." },
        { category: "Personal", title: "Confidencialidad", description: "Contrato de confidencialidad para protección de información sensible." },
      ],
      // Service Includes
      serviceTitle: "Nuestro Servicio incluye:",
      serviceIncludes: [
        "Contratación, capacitación y supervisión de todo el personal",
        "Instalación, mantenimiento y actualización de equipos",
        "Captura profesional de imágenes y videos",
        "Edición y optimización de material para venta y redes",
        "Atención personalizada al cliente durante y después del tour",
        "Entrega del material en un plazo máximo de 24 horas",
      ],
      selectiveTitle: "Trabajamos con parques selectos",
      selectiveText: "Actualmente aceptando nuevos socios estratégicos para 2025. Nuestro modelo exclusivo garantiza atención personalizada y resultados comprobados.",
      ctaParks: "Solicitar Información",
    },
    parksList: [
      {
        id: "ama",
        name: "Arenal Mundo Aventura",
        location: "La Fortuna de San Carlos",
        description: "La naturaleza y la aventura se fusionan en cada toma. Revive tu recorrido por los cañones y cascadas con fotografías profesionales.",
      },
      {
        id: "ecoglide",
        name: "Ecoglide Arenal Park",
        location: "La Fortuna de San Carlos",
        description: "Capturamos la emoción pura del canopy entre el verde intenso del Volcán Arenal.",
      },
      {
        id: "skyline",
        name: "Skyline Canopy Tour",
        location: "Santa Cruz, Guanacaste",
        description: "Altura, velocidad y paisajes impresionantes. Nuestro equipo captura cada salto y sonrisa.",
      },
      {
        id: "poas",
        name: "Poas Adventure Park",
        location: "Poás, Alajuela",
        description: "Inmortaliza tu conexión con el volcán y la selva tropical.",
        comingSoon: true,
      },
    ],
    // Agency
    agency: {
      label: "Agencia Digital",
      title1: "Llevamos tu negocio al",
      titleHighlight: "mundo digital",
      subtitle: "No solo trabajamos con parques de aventura. Ayudamos a cualquier negocio a crecer con páginas web profesionales, gestión de redes sociales y contenido de alta calidad.",
      pillar1Title: "Páginas Web Profesionales",
      pillar1Desc: "Diseño moderno, responsive y optimizado para Google. Tu negocio disponible 24/7 con reservas online, integración con WhatsApp y panel fácil de administrar.",
      pillar2Title: "Gestión de Redes Sociales",
      pillar2Desc: "Creación de contenido, estrategia de crecimiento, respuesta a clientes y campañas publicitarias. Nos encargamos de todo.",
      pillar3Title: "Producción de Contenido",
      pillar3Desc: "Fotografía profesional, video para redes, tomas con dron y edición de alta calidad. Contenido que destaca.",
      whyWebTitle: "¿Por qué necesita una página web?",
      whyWeb1Title: "Credibilidad instantánea",
      whyWeb1Desc: "Los clientes confían más en negocios con presencia web profesional",
      whyWeb2Title: "Ventas 24/7",
      whyWeb2Desc: "Su negocio trabaja mientras usted descansa",
      whyWeb3Title: "Independencia",
      whyWeb3Desc: "No dependa solo de redes sociales que cambian sus reglas",
      whyWeb4Title: "Visibilidad en Google",
      whyWeb4Desc: "Aparezca cuando buscan sus servicios en su zona",
      businessTypesTitle: "Para todo tipo de negocios",
      businessTypesSubtitle: "Nuestros servicios digitales están diseñados para impulsar cualquier industria",
      businesses: ["Hoteles", "Restaurantes", "Tours", "Tiendas", "Servicios Profesionales", "Bienes Raíces"],
      agencyCta: "Solicitar Cotización",
    },
    // Gallery
    gallery: {
      label: "Nuestro Trabajo",
      title1: "Explore nuestro",
      titleHighlight: "portafolio",
      subtitle: "Descubre nuestra variedad de proyectos, mostrando nuestra experiencia en capturar momentos únicos con la mejor calidad.",
      filterAll: "Todo",
      filterAdventure: "Aventura",
      filterEvents: "Eventos",
      filterCommercial: "Comercial",
    },
    galleryImages: [
      { src: "gallery1", category: "adventure", title: "Canopy en acción" },
      { src: "gallery2", category: "adventure", title: "Adrenalina pura" },
      { src: "gallery3", category: "adventure", title: "Naturaleza viva" },
      { src: "gallery4", category: "events", title: "Momentos especiales" },
      { src: "gallery5", category: "commercial", title: "Contenido profesional" },
      { src: "gallery6", category: "adventure", title: "Aventura inolvidable" },
    ],
    // Process
    process: {
      label: "Cómo Trabajamos",
      title1: "Un proceso",
      titleHighlight: "simple y eficiente",
      title2: "",
      subtitle: "Nos adaptamos a tus necesidades, sea cual sea el servicio que necesites.",
      steps: [
        {
          number: "01",
          title: "Consulta Inicial",
          description: "Conversamos sobre tu proyecto, necesidades y objetivos. Entendemos tu visión para ofrecerte la mejor solución.",
        },
        {
          number: "02",
          title: "Propuesta Personalizada",
          description: "Preparamos una propuesta detallada con alcance, tiempos y presupuesto. Sin sorpresas, todo claro desde el inicio.",
        },
        {
          number: "03",
          title: "Ejecución Profesional",
          description: "Nuestro equipo ejecuta el proyecto con los más altos estándares de calidad. Tú te enfocas en tu negocio.",
        },
        {
          number: "04",
          title: "Entrega y Seguimiento",
          description: "Entregamos el trabajo final y nos aseguramos de que estés 100% satisfecho. Soporte continuo incluido.",
        },
      ],
    },
    // Weddings & Events
    events: {
      label: "Bodas y Eventos",
      title1: "Capturamos los momentos",
      titleHighlight: "más importantes",
      title2: "de tu vida",
      subtitle: "Desde bodas hasta quinceaños, cumpleaños y eventos corporativos. Cada momento merece ser inmortalizado con la mejor calidad.",
      servicesList: [
        { icon: "Church", title: "Bodas", description: "Cobertura completa desde la preparación hasta la fiesta" },
        { icon: "Cake", title: "Quinceaños", description: "Sesiones y cobertura del evento completo" },
        { icon: "PartyPopper", title: "Cumpleaños", description: "Fotografía profesional para celebraciones especiales" },
        { icon: "Briefcase", title: "Eventos Corporativos", description: "Cobertura de conferencias, lanzamientos y más" },
        { icon: "GlassWater", title: "Fiestas Privadas", description: "Capturamos la esencia de cada celebración" },
        { icon: "Camera", title: "Sesiones Especiales", description: "Pre-bodas, maternidad, familia y más" },
      ],
      whatWeOffer: "Lo que ofrecemos",
      offerList: [
        "Fotografía y video profesional",
        "Edición de alta calidad",
        "Tomas con dron (según ubicación)",
        "Entrega digital en alta resolución",
        "Álbumes impresos (opcional)",
        "Sesiones pre-evento incluidas",
      ],
      ctaEvents: "Consultar Disponibilidad",
    },
    // Contact
    contact: {
      label: "Contáctenos",
      title1: "¿Listo para hacer crecer",
      titleHighlight: "tu negocio",
      subtitle: "Complete el formulario y nos pondremos en contacto con usted en menos de 24 horas.",
      namePlaceholder: "Nombre completo",
      emailPlaceholder: "Correo electrónico",
      phonePlaceholder: "Teléfono",
      businessType: "Tipo de negocio",
      businessTypes: {
        park: "Parque de aventura",
        hotel: "Hotel / Hospedaje",
        restaurant: "Restaurante",
        tour: "Tour operador",
        store: "Tienda / Comercio",
        professional: "Servicios profesionales",
        realestate: "Bienes raíces",
        wedding: "Boda / Evento personal",
        corporate: "Evento corporativo",
        other: "Otro",
      },
      servicePlaceholder: "¿Qué servicio le interesa?",
      services: {
        photography: "Fotografía para parques",
        web: "Página web",
        social: "Gestión de redes sociales",
        content: "Producción de contenido",
        marketing: "Marketing digital completo",
        wedding: "Fotografía de boda/evento",
        all: "Varios servicios",
      },
      messagePlaceholder: "Cuéntenos sobre su proyecto o negocio...",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successMessage: "Pronto te contactamos",
      orContact: "O contáctenos directamente",
    },
    // Footer
    footer: {
      description: "Contenido visual y digital profesional para impulsar tu negocio. Más de 20 años de experiencia en Costa Rica.",
      contactTitle: "Contacto",
      socialTitle: "Redes Sociales",
      servicesTitle: "Servicios",
      copyright: "Grupo Oroz CR. Todos los derechos reservados.",
    },
  },
  en: {
    // Nav
    nav: {
      services: "Services",
      parks: "Parks",
      agency: "Digital Agency",
      gallery: "Gallery",
      events: "Weddings & Events",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "+20 years creating professional visual content",
      title1: "Visual and Digital Content",
      titleHighlight: "that Drives",
      title2: "Your Business",
      subtitle: "Professional photography • Websites • Social media management • Content production",
      cta1: "Our Services",
      cta2: "Contact Us",
    },
    // Services Grid
    servicesGrid: {
      label: "Our Services",
      title1: "Complete solutions in",
      titleHighlight: "content and digital marketing",
      subtitle: "From professional photography to complete digital presence. Everything your business needs to stand out.",
      services: [
        {
          id: "parks",
          icon: "Camera",
          title: "Adventure Parks",
          description: "Specialized photography service with +20 years of experience. We operate in 4 parks with permanent staff.",
          badge: "Specialty #1",
        },
        {
          id: "weddings",
          icon: "Heart",
          title: "Weddings & Events",
          description: "We capture the most important moments of your life. Professional photography and video for weddings, quinceañeras and special events.",
          badge: null,
        },
        {
          id: "web",
          icon: "Globe",
          title: "Websites",
          description: "Modern, responsive design optimized for Google. Your business available 24/7 with online bookings.",
          badge: null,
        },
        {
          id: "social",
          icon: "Smartphone",
          title: "Social Media",
          description: "Complete management: content, growth strategy, customer response and advertising campaigns.",
          badge: null,
        },
        {
          id: "content",
          icon: "Film",
          title: "Content Production",
          description: "Commercial photography, video for social media, drone footage and professional editing. Content that delivers results.",
          badge: null,
        },
      ],
    },
    // Parks Section
    parks: {
      label: "Photography for Adventure Parks",
      title1: "The",
      titleHighlight: "#1 photography company",
      title2: "for adventure parks",
      subtitle: "With more than two decades of experience, we are the largest and most experienced company in photography services for the adventure tourism sector in Costa Rica.",
      stat1Value: "#1",
      stat1Label: "In Costa Rica",
      stat2Value: "20+",
      stat2Label: "Years of experience",
      stat3Value: "4",
      stat3Label: "Active parks",
      stat4Value: "18+",
      stat4Label: "Parks served",
      // Zero Risk
      zeroRiskTitle: "100% our responsibility, 0% risk for you",
      zeroRiskSubtitle: "Sales responsibility is entirely Orostudioscr's. You don't invest in staff, equipment or operations.",
      zeroRisk1Title: "No initial investment",
      zeroRisk1Text: "No need to buy equipment, hire staff or train anyone.",
      zeroRisk2Title: "No operational risk",
      zeroRisk2Text: "All staff is insured and trained. Policies are on us.",
      zeroRisk3Title: "No commercial risk",
      zeroRisk3Text: "If sales are low, the risk is ours. You receive your monthly rent.",
      // Model
      modelTitle: "A partnership where everyone wins",
      youProvide: "You Provide",
      youProvideItems: ["Space within your park", "Visitor flow"],
      weProvide: "We Provide",
      weProvideItems: ["Trained staff", "All technological equipment", "Full 7/7 operation", "Sales management", "Content for your social media"],
      youReceive: "You Receive",
      youReceiveItems: ["Guaranteed monthly rent", "Free professional content", "Value-added service for your clients", "Zero operational worries"],
      // Social Growth
      socialGrowthTitle: "Boost your social media with professional content",
      socialGrowthSubtitle: "Every photo and video we capture becomes high-quality content for your digital platforms.",
      socialBenefit1: "Daily content for your social media",
      socialBenefit2: "Free professional photos and videos",
      socialBenefit3: "Greater online visibility",
      socialBenefit4: "More bookings and visitors",
      droneTitle: "Professional drone session included",
      droneText: "At no additional cost, every 6 months we conduct a complete session with drone footage to update your promotional content.",
      // Marketing Options
      marketingTitle: "We boost your park's marketing",
      marketingSubtitle: "More than photography, we are your ally in digital growth",
      option1Title: "Included Support",
      option1Subtitle: "With our standard service",
      option1Items: ["Regular content for social media", "Quality promotional material", "Photos and videos of your activities", "Special events coverage"],
      option2Title: "Complete Plan",
      option2Subtitle: "Subject to negotiation",
      option2Items: ["Complete digital marketing strategy", "Professional social media management", "Advertising campaigns on Meta/Google", "Design and branding", "Monthly performance reports"],
      option2Badge: "Premium",
      // Offices
      officesLabel: "Our Locations",
      officesTitle: "Permanent presence in Costa Rica parks",
      officesSubtitle: "Our philosophy combines cutting-edge technology, optimized processes, and a highly trained human team.",
      quality: "Quality memories",
      reliable: "Reliable service",
      // Benefits
      benefitsTitle: "Benefits for the park",
      benefitsList: [
        "High-quality digital content ready for social media",
        "Value-added service for your clients at no operational cost",
        "Operational assistance 7 days a week",
        "Special drone service every 4 months",
        "Management of image use authorizations",
        "Monthly rent for the space",
      ],
      // Equipment Cards
      equipmentCards: [
        { category: "Equipment", title: "Technology", description: "Cameras, screens, sound equipment, stationery, certified harnesses and more." },
        { category: "Equipment", title: "Uniforms", description: "Own corporate uniforms guaranteeing a professional image." },
        { category: "Equipment", title: "Safety", description: "Safety equipment provided and managed by us." },
        { category: "Staff", title: "Insurance", description: "Staff insured by CCSS and covered by occupational risk policies." },
        { category: "Staff", title: "Training", description: "Continuous training for current staff and new hires." },
        { category: "Staff", title: "Confidentiality", description: "Confidentiality agreement for protection of sensitive information." },
      ],
      // Service Includes
      serviceTitle: "Our Service includes:",
      serviceIncludes: [
        "Hiring, training and supervision of all staff",
        "Installation, maintenance and equipment updates",
        "Professional image and video capture",
        "Editing and optimization of material for sales and social media",
        "Personalized customer service during and after the tour",
        "Material delivery within a maximum of 24 hours",
      ],
      selectiveTitle: "We work with select parks",
      selectiveText: "Currently accepting new strategic partners for 2025. Our exclusive model guarantees personalized attention and proven results.",
      ctaParks: "Request Information",
    },
    parksList: [
      {
        id: "ama",
        name: "Arenal Mundo Aventura",
        location: "La Fortuna de San Carlos",
        description: "Nature and adventure merge in every shot. Relive your journey through the canyons and waterfalls with professional photographs.",
      },
      {
        id: "ecoglide",
        name: "Ecoglide Arenal Park",
        location: "La Fortuna de San Carlos",
        description: "We capture the pure emotion of the canopy among the intense green of Arenal Volcano.",
      },
      {
        id: "skyline",
        name: "Skyline Canopy Tour",
        location: "Santa Cruz, Guanacaste",
        description: "Height, speed and impressive landscapes. Our team captures every jump and smile.",
      },
      {
        id: "poas",
        name: "Poas Adventure Park",
        location: "Poás, Alajuela",
        description: "Immortalize your connection with the volcano and the tropical jungle.",
        comingSoon: true,
      },
    ],
    // Agency
    agency: {
      label: "Digital Agency",
      title1: "We take your business to the",
      titleHighlight: "digital world",
      subtitle: "We don't just work with adventure parks. We help any business grow with professional websites, social media management, and high-quality content.",
      pillar1Title: "Professional Websites",
      pillar1Desc: "Modern, responsive design optimized for Google. Your business available 24/7 with online bookings, WhatsApp integration, and an easy-to-manage dashboard.",
      pillar2Title: "Social Media Management",
      pillar2Desc: "Content creation, growth strategy, customer response, and advertising campaigns. We handle everything.",
      pillar3Title: "Content Production",
      pillar3Desc: "Professional photography, video for social media, drone footage, and high-quality editing. Content that stands out.",
      whyWebTitle: "Why do you need a website?",
      whyWeb1Title: "Instant credibility",
      whyWeb1Desc: "Customers trust businesses with a professional web presence more",
      whyWeb2Title: "Sales 24/7",
      whyWeb2Desc: "Your business works while you rest",
      whyWeb3Title: "Independence",
      whyWeb3Desc: "Don't rely only on social media that changes its rules",
      whyWeb4Title: "Google visibility",
      whyWeb4Desc: "Appear when people search for your services in your area",
      businessTypesTitle: "For all types of businesses",
      businessTypesSubtitle: "Our digital services are designed to boost any industry",
      businesses: ["Hotels", "Restaurants", "Tours", "Stores", "Professional Services", "Real Estate"],
      agencyCta: "Request Quote",
    },
    // Gallery
    gallery: {
      label: "Our Work",
      title1: "Explore our",
      titleHighlight: "portfolio",
      subtitle: "Discover our variety of projects, showcasing our experience in capturing unique moments with the best quality.",
      filterAll: "All",
      filterAdventure: "Adventure",
      filterEvents: "Events",
      filterCommercial: "Commercial",
    },
    galleryImages: [
      { src: "gallery1", category: "adventure", title: "Canopy in action" },
      { src: "gallery2", category: "adventure", title: "Pure adrenaline" },
      { src: "gallery3", category: "adventure", title: "Living nature" },
      { src: "gallery4", category: "events", title: "Special moments" },
      { src: "gallery5", category: "commercial", title: "Professional content" },
      { src: "gallery6", category: "adventure", title: "Unforgettable adventure" },
    ],
    // Process
    process: {
      label: "How We Work",
      title1: "A",
      titleHighlight: "simple and efficient",
      title2: "process",
      subtitle: "We adapt to your needs, whatever service you need.",
      steps: [
        {
          number: "01",
          title: "Initial Consultation",
          description: "We talk about your project, needs and objectives. We understand your vision to offer you the best solution.",
        },
        {
          number: "02",
          title: "Personalized Proposal",
          description: "We prepare a detailed proposal with scope, timelines and budget. No surprises, everything clear from the start.",
        },
        {
          number: "03",
          title: "Professional Execution",
          description: "Our team executes the project with the highest quality standards. You focus on your business.",
        },
        {
          number: "04",
          title: "Delivery and Follow-up",
          description: "We deliver the final work and make sure you are 100% satisfied. Continuous support included.",
        },
      ],
    },
    // Weddings & Events
    events: {
      label: "Weddings & Events",
      title1: "We capture the",
      titleHighlight: "most important",
      title2: "moments of your life",
      subtitle: "From weddings to quinceañeras, birthdays and corporate events. Every moment deserves to be immortalized with the best quality.",
      servicesList: [
        { icon: "Church", title: "Weddings", description: "Complete coverage from preparation to the party" },
        { icon: "Cake", title: "Quinceañeras", description: "Sessions and complete event coverage" },
        { icon: "PartyPopper", title: "Birthdays", description: "Professional photography for special celebrations" },
        { icon: "Briefcase", title: "Corporate Events", description: "Coverage of conferences, launches and more" },
        { icon: "GlassWater", title: "Private Parties", description: "We capture the essence of every celebration" },
        { icon: "Camera", title: "Special Sessions", description: "Pre-weddings, maternity, family and more" },
      ],
      whatWeOffer: "What we offer",
      offerList: [
        "Professional photography and video",
        "High quality editing",
        "Drone footage (location dependent)",
        "High resolution digital delivery",
        "Printed albums (optional)",
        "Pre-event sessions included",
      ],
      ctaEvents: "Check Availability",
    },
    // Contact
    contact: {
      label: "Contact Us",
      title1: "Ready to grow",
      titleHighlight: "your business",
      subtitle: "Fill out the form and we'll get back to you within 24 hours.",
      namePlaceholder: "Full name",
      emailPlaceholder: "Email address",
      phonePlaceholder: "Phone number",
      businessType: "Business type",
      businessTypes: {
        park: "Adventure park",
        hotel: "Hotel / Lodging",
        restaurant: "Restaurant",
        tour: "Tour operator",
        store: "Store / Retail",
        professional: "Professional services",
        realestate: "Real estate",
        wedding: "Wedding / Personal event",
        corporate: "Corporate event",
        other: "Other",
      },
      servicePlaceholder: "What service are you interested in?",
      services: {
        photography: "Photography for parks",
        web: "Website",
        social: "Social media management",
        content: "Content production",
        marketing: "Complete digital marketing",
        wedding: "Wedding/event photography",
        all: "Multiple services",
      },
      messagePlaceholder: "Tell us about your project or business...",
      submit: "Send Message",
      sending: "Sending...",
      successTitle: "Message sent!",
      successMessage: "We'll contact you soon",
      orContact: "Or contact us directly",
    },
    // Footer
    footer: {
      description: "Professional visual and digital content to boost your business. More than 20 years of experience in Costa Rica.",
      contactTitle: "Contact",
      socialTitle: "Social Media",
      servicesTitle: "Services",
      copyright: "Grupo Oroz CR. All rights reserved.",
    },
  },
};

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Heart,
  Globe,
  Smartphone,
  Film,
};

const eventIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Church,
  Cake,
  PartyPopper,
  Briefcase,
  GlassWater,
  Camera,
};

const processIcons = [MessageCircle, PenTool, Zap, CheckCircle];
const equipmentIcons = [Monitor, Shirt, HardHat, FileCheck, GraduationCap, Lock];
const businessTypeIcons = [Hotel, UtensilsCrossed, Compass, ShoppingBag, Briefcase, HomeIcon];

// ============================================
// COMPONENT
// ============================================
export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activePark, setActivePark] = useState("ama");
  const [lang, setLang] = useState<Lang>("es");
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [expandedParksSection, setExpandedParksSection] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Contact form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error al enviar el mensaje');

      setShowSuccessModal(true);
      setFormData({ name: "", email: "", phone: "", businessType: "", service: "", message: "" });
    } catch (error) {
      setSubmitError(lang === "es" ? "Error al enviar el mensaje. Por favor intente de nuevo." : "Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => setShowSuccessModal(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1;
  }, []);

  const t = translations[lang];
  const currentPark = t.parksList.find(p => p.id === activePark) || t.parksList[0];
  const parkImages: Record<string, string> = { ecoglide: IMAGES.ecoglide, skyline: IMAGES.skyline, ama: IMAGES.ama, poas: IMAGES.poas };
  
  const galleryImageSrcs: Record<string, string> = {
    gallery1: IMAGES.gallery1,
    gallery2: IMAGES.gallery2,
    gallery3: IMAGES.gallery3,
    gallery4: IMAGES.gallery4,
    gallery5: IMAGES.gallery5,
    gallery6: IMAGES.gallery6,
  };

  const filteredGallery = galleryFilter === "all" 
    ? t.galleryImages 
    : t.galleryImages.filter(img => img.category === galleryFilter);

  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* ==================== SUCCESS MODAL ==================== */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeSuccessModal} />
          <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <button onClick={closeSuccessModal} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.contact.successTitle}</h3>
              <p className="text-zinc-400 text-lg">{t.contact.successMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== NAVIGATION ==================== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img src={IMAGES.logo} alt="Orostudioscr" className="h-14 sm:h-16 w-auto" />
            
            <div className="hidden lg:flex items-center gap-6">
              {Object.entries(t.nav).map(([key, value]) => (
                <a key={key} href={`#${key}`} className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors">
                  {value}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-zinc-800 rounded-full p-1">
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${lang === "es" ? "bg-orange-500 text-black" : "text-zinc-400 hover:text-white"}`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${lang === "en" ? "bg-orange-500 text-black" : "text-zinc-400 hover:text-white"}`}
                >
                  EN
                </button>
              </div>

              <a href="tel:+50660982244" className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105">
                <Phone className="w-4 h-4" />
                <span>+506 6098-2244</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="relative h-screen min-h-[700px] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover object-center">
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/30 to-zinc-950" />
        </div>

        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-500 text-sm font-medium">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.hero.title1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.title2}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto mb-10">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#services" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                {t.hero.cta1}
              </a>
              <a href="#contact" className="w-full sm:w-auto border border-zinc-600 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-orange-500/10">
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </div>
      </section>

      {/* ==================== A COMPANY BY ==================== */}
      <section className="py-12 px-4 bg-zinc-950 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-500/50" />
            <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase font-medium">A company by</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-500/50" />
          </div>
          <img src={IMAGES.grupoOroz} alt="Grupo Oroz" className="h-24 sm:h-28 w-auto mt-4" />
        </div>
      </section>

      {/* ==================== SERVICES GRID ==================== */}
      <section id="services" className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.servicesGrid.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.servicesGrid.title1}{" "}
              <span className="text-orange-500">{t.servicesGrid.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.servicesGrid.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.servicesGrid.services.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              const isMainService = index === 0;
              return (
                <a
                  key={service.id}
                  href={`#${service.id === "parks" ? "parks" : service.id === "weddings" ? "events" : service.id === "web" || service.id === "social" || service.id === "content" ? "agency" : service.id}`}
                  className={`group relative bg-zinc-900 border rounded-2xl p-8 transition-all hover:scale-[1.02] ${
                    isMainService ? "border-orange-500/50 lg:col-span-2 lg:row-span-1" : "border-zinc-800 hover:border-orange-500/30"
                  }`}
                >
                  {service.badge && (
                    <span className="absolute -top-3 right-6 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    isMainService ? "bg-orange-500" : "bg-orange-500/10 group-hover:bg-orange-500"
                  }`}>
                    <Icon className={`w-8 h-8 transition-colors ${isMainService ? "text-black" : "text-orange-500 group-hover:text-black"}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-orange-500 font-medium">
                    <span>{lang === "es" ? "Ver más" : "Learn more"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PARKS SECTION (CONSOLIDATED) ==================== */}
      <section id="parks" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.parks.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.parks.title1}{" "}
              <span className="text-orange-500">{t.parks.titleHighlight}</span>{" "}
              {t.parks.title2}
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.parks.subtitle}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: t.parks.stat1Value, label: t.parks.stat1Label },
              { value: t.parks.stat2Value, label: t.parks.stat2Label },
              { value: t.parks.stat3Value, label: t.parks.stat3Label },
              { value: t.parks.stat4Value, label: t.parks.stat4Label },
            ].map((stat, i) => (
              <div key={i} className={`text-center p-6 rounded-2xl border ${i === 0 ? "bg-orange-500/10 border-orange-500/30" : "bg-zinc-900/50 border-zinc-800"}`}>
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-1">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Park Selector */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">{t.parks.officesTitle}</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {t.parksList.map((park) => (
                <button
                  key={park.id}
                  onClick={() => setActivePark(park.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activePark === park.id ? "bg-orange-500 text-black" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  }`}
                >
                  {park.name}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img src={parkImages[currentPark.id]} alt={currentPark.name} className="w-full h-full object-cover" />
                {"comingSoon" in currentPark && currentPark.comingSoon && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="bg-orange-500 text-black font-bold px-6 py-3 rounded-full text-lg">Coming Soon 2026</span>
                  </div>
                )}
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{currentPark.name}</h3>
                <div className="flex items-center gap-2 text-zinc-400">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  {currentPark.location}
                </div>
                <p className="text-zinc-300 text-lg leading-relaxed">{currentPark.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Check className="w-5 h-5 text-orange-500" />
                    {t.parks.quality}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Check className="w-5 h-5 text-orange-500" />
                    {t.parks.reliable}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Details */}
          <div className="text-center mb-8">
            <button
              onClick={() => setExpandedParksSection(!expandedParksSection)}
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              {expandedParksSection ? (lang === "es" ? "Ver menos detalles" : "Show less details") : (lang === "es" ? "Ver más detalles del servicio" : "Show more service details")}
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedParksSection ? "rotate-180" : ""}`} />
            </button>
          </div>

          {expandedParksSection && (
            <div className="space-y-16 animate-in fade-in slide-in-from-top-4 duration-500">
              {/* Zero Risk */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">{t.parks.zeroRiskTitle}</h3>
                <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-8">{t.parks.zeroRiskSubtitle}</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: t.parks.zeroRisk1Title, text: t.parks.zeroRisk1Text, icon: DollarSign },
                    { title: t.parks.zeroRisk2Title, text: t.parks.zeroRisk2Text, icon: Shield },
                    { title: t.parks.zeroRisk3Title, text: t.parks.zeroRisk3Text, icon: TrendingUp },
                  ].map((item, i) => (
                    <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-400 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
                    <Shield className="w-6 h-6 text-green-500" />
                    <span className="text-lg font-bold text-green-500">0% {lang === "es" ? "RIESGO PARA SU PARQUE" : "RISK FOR YOUR PARK"}</span>
                  </div>
                </div>
              </div>

              {/* Model */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">{t.parks.modelTitle}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-zinc-400" />
                      </div>
                      <h4 className="text-lg font-bold">{t.parks.youProvide}</h4>
                    </div>
                    <ul className="space-y-2">
                      {t.parks.youProvideItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                          <ArrowRight className="w-4 h-4 text-zinc-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-zinc-900 border border-orange-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                        <Handshake className="w-5 h-5 text-black" />
                      </div>
                      <h4 className="text-lg font-bold">{t.parks.weProvide}</h4>
                    </div>
                    <ul className="space-y-2">
                      {t.parks.weProvideItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                          <Check className="w-4 h-4 text-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                        <Target className="w-5 h-5 text-black" />
                      </div>
                      <h4 className="text-lg font-bold">{t.parks.youReceive}</h4>
                    </div>
                    <ul className="space-y-2">
                      {t.parks.youReceiveItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-white text-sm font-medium">
                          <Star className="w-4 h-4 text-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Growth */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.parks.socialGrowthTitle}</h3>
                  <p className="text-zinc-400 mb-6">{t.parks.socialGrowthSubtitle}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[t.parks.socialBenefit1, t.parks.socialBenefit2, t.parks.socialBenefit3, t.parks.socialBenefit4].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-3">
                        <Sparkles className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-zinc-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Plane className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t.parks.droneTitle}</h4>
                        <p className="text-zinc-400 text-sm">{t.parks.droneText}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img src={IMAGES.verticalEco} alt="Canopy" className="rounded-2xl w-full aspect-[3/4] object-cover" />
                  <img src={IMAGES.canopyEco} alt="Adventure" className="rounded-2xl w-full aspect-[3/4] object-cover mt-8" />
                </div>
              </div>

              {/* Marketing Options */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">{t.parks.marketingTitle}</h3>
                <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-8">{t.parks.marketingSubtitle}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                        <Megaphone className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{t.parks.option1Title}</h4>
                        <p className="text-zinc-500 text-sm">{t.parks.option1Subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {t.parks.option1Items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-zinc-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-6 relative">
                    <span className="absolute -top-3 right-6 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">{t.parks.option2Badge}</span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{t.parks.option2Title}</h4>
                        <p className="text-zinc-500 text-sm">{t.parks.option2Subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {t.parks.option2Items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-zinc-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-6">{t.parks.benefitsTitle}</h4>
                  <ul className="space-y-4">
                    {t.parks.benefitsList.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-6">{t.parks.serviceTitle}</h4>
                  <ul className="space-y-4">
                    {t.parks.serviceIncludes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Equipment Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.parks.equipmentCards.map((card, i) => {
                  const Icon = equipmentIcons[i];
                  return (
                    <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-orange-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <span className="text-orange-500 text-xs font-medium">{card.category}</span>
                          <h5 className="font-bold">{card.title}</h5>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-sm">{card.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Selective */}
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-10 h-10 text-black" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold mb-2">{t.parks.selectiveTitle}</h3>
                  <p className="text-zinc-400">{t.parks.selectiveText}</p>
                </div>
                <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-full transition-all hover:scale-105 whitespace-nowrap">
                  {t.parks.ctaParks}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== AGENCY ==================== */}
      <section id="agency" className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.agency.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.agency.title1}{" "}
              <span className="text-orange-500">{t.agency.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.agency.subtitle}</p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Globe, title: t.agency.pillar1Title, desc: t.agency.pillar1Desc },
              { icon: Smartphone, title: t.agency.pillar2Title, desc: t.agency.pillar2Desc },
              { icon: Film, title: t.agency.pillar3Title, desc: t.agency.pillar3Desc },
            ].map((pillar, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all group">
                <div className="w-16 h-16 bg-orange-500/10 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <pillar.icon className="w-8 h-8 text-orange-500 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Website */}
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">{t.agency.whyWebTitle}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: t.agency.whyWeb1Title, desc: t.agency.whyWeb1Desc },
                { icon: Clock3, title: t.agency.whyWeb2Title, desc: t.agency.whyWeb2Desc },
                { icon: Shield, title: t.agency.whyWeb3Title, desc: t.agency.whyWeb3Desc },
                { icon: Search, title: t.agency.whyWeb4Title, desc: t.agency.whyWeb4Desc },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-black" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Types */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.agency.businessTypesTitle}</h3>
            <p className="text-zinc-400 mb-12">{t.agency.businessTypesSubtitle}</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {t.agency.businesses.map((business, index) => {
                const Icon = businessTypeIcons[index];
                return (
                  <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/30 transition-all group">
                    <Icon className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-zinc-300 text-sm font-medium">{business}</span>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
              <Mail className="w-5 h-5" />
              {t.agency.agencyCta}
            </a>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section id="gallery" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.gallery.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.gallery.title1}{" "}
              <span className="text-orange-500">{t.gallery.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">{t.gallery.subtitle}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { key: "all", label: t.gallery.filterAll },
              { key: "adventure", label: t.gallery.filterAdventure },
              { key: "events", label: t.gallery.filterEvents },
              { key: "commercial", label: t.gallery.filterCommercial },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setGalleryFilter(filter.key)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  galleryFilter === filter.key ? "bg-orange-500 text-black" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredGallery.map((img, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
                onClick={() => setActiveImage(galleryImageSrcs[img.src])}
              >
                <img
                  src={galleryImageSrcs[img.src]}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{img.title}</p>
                    <span className="text-orange-500 text-sm capitalize">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Enlarged" className="max-w-full max-h-full object-contain rounded-lg" />
          <button className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors" onClick={() => setActiveImage(null)}>
            <X className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* ==================== PROCESS ==================== */}
      <section id="process" className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.process.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.process.title1}{" "}
              <span className="text-orange-500">{t.process.titleHighlight}</span>
              {t.process.title2 ? ` ${t.process.title2}` : ""}
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-3xl mx-auto">{t.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <div key={step.number} className="relative group">
                  <div className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-6 transition-all h-full">
                    <span className="text-5xl font-bold text-orange-500/20 group-hover:text-orange-500/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500 rounded-xl flex items-center justify-center my-4 transition-colors">
                      <Icon className="w-6 h-6 text-orange-500 group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-zinc-700" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== WEDDINGS & EVENTS ==================== */}
      <section id="events" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.events.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.events.title1}{" "}
              <span className="text-orange-500">{t.events.titleHighlight}</span>{" "}
              {t.events.title2}
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.events.subtitle}</p>
          </div>

          {/* Event Types Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {t.events.servicesList.map((service, index) => {
              const Icon = eventIcons[service.icon];
              return (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all group">
                  <div className="w-14 h-14 bg-orange-500/10 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-7 h-7 text-orange-500 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* What We Offer + Gallery */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.events.whatWeOffer}</h3>
              <ul className="space-y-4 mb-8">
                {t.events.offerList.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
                <Heart className="w-5 h-5" />
                {t.events.ctaEvents}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.gallery4} alt="Events" className="rounded-2xl w-full aspect-[3/4] object-cover" />
              <img src={IMAGES.horizontal2} alt="Celebrations" className="rounded-2xl w-full aspect-[3/4] object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.contact.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.contact.title1}{" "}
              <span className="text-orange-500">{t.contact.titleHighlight}</span>?
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder={t.contact.phonePlaceholder}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleFormChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{t.contact.businessType}</option>
                    {Object.entries(t.contact.businessTypes).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{t.contact.servicePlaceholder}</option>
                    {Object.entries(t.contact.services).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder={t.contact.messagePlaceholder}
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />

                {submitError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.contact.submit}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">{t.contact.orContact}</h3>
              
              <a href="tel:+50660982244" className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="w-6 h-6 text-orange-500 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">WhatsApp / Teléfono</p>
                  <p className="text-white font-semibold">+506 6098-2244</p>
                </div>
              </a>

              <a href="mailto:gerencia@orostudioscr.com" className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="w-6 h-6 text-orange-500 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Email</p>
                  <p className="text-white font-semibold">gerencia@orostudioscr.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">{lang === "es" ? "Ubicación" : "Location"}</p>
                  <p className="text-white font-semibold">San Carlos, Alajuela, Costa Rica</p>
                </div>
              </div>

              {/* Social */}
              <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-6">
                <h4 className="font-bold mb-4">{lang === "es" ? "Síguenos en redes" : "Follow us"}</h4>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
                    <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-black" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
                    <Facebook className="w-5 h-5 text-zinc-400 group-hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img src={IMAGES.logo} alt="Orostudioscr" className="h-20 w-auto mb-6" />
              <p className="text-zinc-400 leading-relaxed max-w-md">{t.footer.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{t.footer.servicesTitle}</h4>
              <ul className="space-y-3">
                <li><a href="#parks" className="text-zinc-400 hover:text-orange-500 transition-colors">{lang === "es" ? "Parques de Aventura" : "Adventure Parks"}</a></li>
                <li><a href="#events" className="text-zinc-400 hover:text-orange-500 transition-colors">{lang === "es" ? "Bodas y Eventos" : "Weddings & Events"}</a></li>
                <li><a href="#agency" className="text-zinc-400 hover:text-orange-500 transition-colors">{lang === "es" ? "Páginas Web" : "Websites"}</a></li>
                <li><a href="#agency" className="text-zinc-400 hover:text-orange-500 transition-colors">{lang === "es" ? "Redes Sociales" : "Social Media"}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{t.footer.contactTitle}</h4>
              <div className="space-y-3">
                <a href="tel:+50660982244" className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors">
                  <Phone className="w-4 h-4" />
                  +506 6098-2244
                </a>
                <a href="mailto:gerencia@orostudioscr.com" className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors">
                  <Mail className="w-4 h-4" />
                  gerencia@orostudioscr.com
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="w-4 h-4" />
                  San Carlos, Costa Rica
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} {t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-zinc-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 text-zinc-400 group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}