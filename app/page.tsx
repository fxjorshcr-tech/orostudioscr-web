"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Camera, Video, Clock, Users, Check, Phone, Mail, MapPin, 
  Instagram, Facebook, Monitor, Shirt, HardHat, FileCheck, 
  GraduationCap, Lock, Wrench, HeadphonesIcon,
  ClipboardCheck, RefreshCw, Shield, TrendingUp, Award, 
  DollarSign, Zap, Heart, Star, ArrowRight, Building2, 
  Handshake, Target, Sparkles, Plane, Megaphone, BarChart3,
  Globe, Network, BadgeCheck, UserCheck
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
      offices: "Oficinas",
      services: "Servicios",
      gallery: "Galería",
      process: "Proceso",
      contact: "Contacto",
    },
    // Hero
    hero: {
      badge: "+20 años de experiencia en fotografía de aventura",
      title1: "Aliados Estratégicos en",
      titleHighlight: "Fotografía",
      title2: "para Parques de Aventura",
      subtitle: "En Orostudios CR somos apasionados por capturar los momentos que hacen únicas las experiencias de aventura en Costa Rica.",
      cta1: "Contáctenos",
      cta2: "Ver Nuestro Trabajo",
    },
    // About
    about: {
      label: "Nosotros",
      title1: "En Orostudios CR somos apasionados por capturar",
      titleHighlight: "momentos únicos",
      p1: "Somos una empresa costarricense con más de 20 años de experiencia brindando servicios fotográficos profesionales en el sector turístico, especialmente en tours de canopy y actividades de aventura.",
      p2: "Durante este tiempo hemos trabajado con más de 18 parques de canopy en todo el país, desarrollando un modelo de operación que permite a las empresas ofrecer a sus visitantes recuerdos de alta calidad sin preocuparse por logística, equipo o personal.",
      p3: "Actualmente operamos con oficinas propias y personal fijo en los principales parques con los que colaboramos, asegurando un servicio consistente y de excelencia. Nuestro enfoque es ser aliados estratégicos de los parques: ayudamos a convertir la fotografía en un canal adicional de rentabilidad, reforzando su imagen de marca y generando contenido profesional que puede ser utilizado en redes sociales y campañas de marketing.",
      stat1: "Años de Experiencia",
      stat2: "Parques Atendidos",
      stat3: "Entrega Máxima",
      highlight1: "Modelo de operación que permite a las empresas ofrecer a sus visitantes recuerdos de alta calidad sin preocuparse por logística, equipo o personal.",
      highlight2: "Combinamos tecnología de vanguardia, procesos optimizados, y un equipo humano altamente capacitado.",
    },
    // Offices
    offices: {
      label: "Nuestras Oficinas",
      title1: "Contamos con presencia permanente en",
      titleHighlight: "parques de aventura de Costa Rica",
      subtitle: "Nuestra filosofía combina tecnología de vanguardia, procesos optimizados, y un equipo humano altamente capacitado, para garantizar que cada visitante se lleve un recuerdo de calidad, y que cada parque reciba un servicio confiable, seguro y rentable.",
      quality: "Recuerdos de calidad",
      reliable: "Servicio confiable",
    },
    parks: [
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
        description: "Capturamos la emoción pura del canopy entre el verde intenso del Volcán Arenal. Vive la adrenalina y lleva contigo imágenes únicas de tu experiencia.",
      },
      {
        id: "skyline",
        name: "Skyline Canopy Tour",
        location: "Santa Cruz, Guanacaste",
        description: "Altura, velocidad y paisajes impresionantes. Nuestro equipo captura cada salto y sonrisa desde el mejor ángulo.",
      },
      {
        id: "poas",
        name: "Poas Adventure Park",
        location: "Poás, Alajuela",
        description: "Inmortaliza tu conexión con el volcán y la selva tropical. Nuestro equipo de fotógrafos convierte tu aventura en recuerdos épicos.",
      },
    ],
    // Services
    services: {
      label: "Por qué escogernos",
      title1: "Definición de servicios",
      titleHighlight: "(Fotografía y Video)",
      serviceTitle: "Nuestro Servicio incluye:",
      trainingTitle: "Capacitación y estándares",
      fastDelivery: "Entrega rápida de fotos",
      personalAttention: "Atención personalizada",
    },
    serviceIncludes: [
      "Contratación, capacitación y supervisión de todo el personal",
      "Instalación, mantenimiento y actualización de equipos",
      "Captura profesional de imágenes y videos",
      "Edición y optimización de material para venta y uso en redes",
      "Atención personalizada al cliente durante y después del tour",
      "Entrega del material en un plazo máximo de 24 horas",
    ],
    trainingStandards: [
      "Fotografía de aventura",
      "Protocolos de seguridad específicos de cada parque",
      "Captura profesional de imágenes y videos",
      "Atención al cliente y experiencia de servicio",
      "Uso de herramientas tecnológicas y software de edición",
    ],
    // How It Works
    howItWorks: {
      label: "Proceso de Venta",
      title1: "¿Cómo",
      titleHighlight: "funciona",
      title2: "?",
      subtitle: "Una experiencia fluida para el cliente, desde que llega hasta que se lleva sus recuerdos",
      steps: [
        {
          number: "01",
          title: "Llegada al parque",
          description: "El cliente llega y pasa por la recepción del parque donde se registra para iniciar su aventura.",
        },
        {
          number: "02",
          title: "Presentación del servicio",
          description: "Nuestro equipo de fotógrafos se presenta y explica que los acompañarán durante todo el tour, capturando fotos y videos profesionales de su experiencia.",
        },
        {
          number: "03",
          title: "El tour comienza",
          description: "Los guías del parque llevan a los clientes mientras nuestros fotógrafos los acompañan, listos para capturar cada momento del recorrido.",
        },
        {
          number: "04",
          title: "Captura profesional",
          description: "Fotografiamos y grabamos en todos los puntos estratégicos: canopy, puentes colgantes, rappel, tirolesas y más. Cada sonrisa, cada emoción queda inmortalizada.",
        },
        {
          number: "05",
          title: "Experiencia de compra",
          description: "Al regresar, el cliente va directamente al espacio de fotografía donde sus fotos y videos ya están corriendo en las pantallas, listos para ver y comprar al instante.",
        },
      ],
    },
    // Gallery
    gallery: {
      label: "Nuestro Trabajo",
      title1: "Explore algunas de",
      titleHighlight: "nuestras fotos",
      subtitle: "Descubre nuestra variedad de proyectos fotográficos, mostrando nuestra experiencia en capturar momentos únicos de aventura y naturaleza, con la mejor calidad para recuerdos inolvidables.",
    },
    galleryImages: [
      "Recuerdos únicos con la mejor calidad de imagen",
      "Más que fotos, experiencias que revives al mirarlas",
      "Capturamos tu mejor momento en plena aventura",
      "Adrenalina y emoción, inmortalizadas para siempre",
      "Colores vibrantes que reflejan cada instante",
      "Fotografía profesional rodeada de naturaleza",
    ],
    // Process
    process: {
      label: "Cómo Trabajamos",
      title1: "Un proceso",
      titleHighlight: "simple y eficiente",
      subtitle: "Nos encargamos de todo para que usted no tenga que preocuparse por nada.",
    },
    processSteps: [
      {
        number: "01",
        title: "Instalación",
        description: "Llegamos, instalamos nuestro equipo y capacitamos al personal. Usted no mueve un dedo.",
      },
      {
        number: "02",
        title: "Operación",
        description: "Cubrimos todos los horarios del parque, capturamos cada momento y atendemos a los visitantes.",
      },
      {
        number: "03",
        title: "Resultados",
        description: "Usted recibe renta mensual, contenido profesional para sus redes y clientes satisfechos.",
      },
    ],
    // Benefits
    benefits: {
      label: "Beneficios",
      title1: "Beneficios para el parque",
      titleHighlight: "(Arrendatario)",
      qualityBadge: "Servicio calidad 5 estrellas",
      qualityText: "Nuestra filosofía combina tecnología de vanguardia, procesos optimizados, y un equipo humano altamente capacitado, para garantizar que cada visitante se lleve un recuerdo de calidad, y que cada parque reciba un servicio confiable, seguro y rentable.",
    },
    parkBenefits: [
      "Contenido digital de alta calidad listo para redes sociales y plataformas de comunicación con permisos para usarse con firma del cliente.",
      "Servicio de valor agregado para sus clientes sin costo operativo.",
      "Asistencia operativa los 7 días de la semana en todas las actividades que involucren cables.",
      "Servicio especial con drones y tomas profesionales cada 4 meses, para actualizar material promocional.",
      "Gestión de autorizaciones de uso de imagen mediante documento firmado al momento de la compra.",
      "Renta mensual por el espacio.",
    ],
    equipmentCards: [
      {
        category: "Equipo",
        title: "Tecnología",
        description: "Proveemos todo el equipo tecnológico para la operación: cámaras, pantallas, equipo de sonido, papelería, arneses certificados y más. En caso de utilizar equipos del parque, Orostudios CR asume total responsabilidad de su uso y cuidado.",
      },
      {
        category: "Equipo",
        title: "Uniformes",
        description: "Uniformes corporativos propios para todo el equipo, garantizando una imagen profesional y alineada con la marca.",
      },
      {
        category: "Equipo",
        title: "Seguridad",
        description: "Equipos de seguridad (cascos, arneses, poleas, etc.) provistos y gestionados por nosotros, asegurando uso correcto y seguro.",
      },
      {
        category: "Personal",
        title: "Pólizas",
        description: "Todo el personal estará: Asegurado por la CCSS, cubierto por pólizas de riesgos del trabajo (INS), contratado cumpliendo disposiciones del Ministerio de Trabajo.",
      },
      {
        category: "Personal",
        title: "Capacitaciones",
        description: "Capacitaciones continuas para personal actual y nuevos ingresos.",
      },
      {
        category: "Personal",
        title: "Confidencialidad",
        description: "Firma de contrato de confidencialidad, que garantiza: Uso exclusivo de fotografías para el parque. Protección de información sensible de la operación.",
      },
    ],
    // CTA
    cta: {
      title1: "¿Listo para hacer crecer",
      titleHighlight: "su parque",
      subtitle: "Agende una reunión sin compromiso y descubra cuánto puede generar su parque con nuestro modelo de fotografía profesional.",
      callNow: "Agendar Reunión",
      sendEmail: "Enviar Email",
    },
    // Leaders
    leaders: {
      label: "Líderes en Costa Rica",
      title1: "La empresa",
      titleHighlight: "#1 en fotografía",
      title2: "para parques de aventura",
      subtitle: "Con más de dos décadas de trayectoria, somos la empresa más grande y con más experiencia en servicios fotográficos para el sector de turismo de aventura en Costa Rica.",
      selective: "Trabajamos con parques selectos",
      selectiveText: "Actualmente aceptando nuevos socios estratégicos para 2025. Nuestro modelo exclusivo garantiza atención personalizada y resultados comprobados.",
      stat1Value: "#1",
      stat1Label: "En Costa Rica",
      stat2Value: "20+",
      stat2Label: "Años de experiencia",
      stat3Value: "4",
      stat3Label: "Parques activos",
    },
    // Model
    model: {
      label: "Nuestro Modelo",
      title1: "Una alianza donde",
      titleHighlight: "todos ganan",
      youProvide: "Usted Aporta",
      youProvideItems: ["Espacio dentro de su parque", "Flujo de visitantes"],
      weProvide: "Nosotros Aportamos",
      weProvideItems: ["Personal capacitado", "Todo el equipo tecnológico", "Operación completa 7/7", "Gestión de ventas", "Contenido para sus redes"],
      youReceive: "Usted Recibe",
      youReceiveItems: ["Renta mensual garantizada", "Contenido profesional gratis para redes", "Servicio de valor para sus clientes", "Cero preocupaciones operativas", "Aumento de seguidores y engagement"],
    },
    // Zero Risk
    zeroRisk: {
      label: "Cero Riesgo",
      title1: "100% responsabilidad nuestra,",
      titleHighlight: "0% riesgo para usted",
      subtitle: "La responsabilidad de venta es totalmente de OroStudios CR. Usted no invierte en personal, equipos ni operación. Nosotros asumimos todo el riesgo operativo y comercial.",
      card1Title: "Sin inversión inicial",
      card1Text: "No necesita comprar equipos, contratar personal ni capacitar a nadie. Nosotros llegamos listos para operar.",
      card2Title: "Sin riesgo operativo",
      card2Text: "Todo el personal está asegurado y capacitado. Las pólizas, permisos y responsabilidades corren por nuestra cuenta.",
      card3Title: "Sin riesgo comercial",
      card3Text: "Si las ventas son bajas, el riesgo es nuestro. Usted recibe su renta mensual sin importar el volumen de ventas.",
    },
    // Social Growth
    socialGrowth: {
      label: "Crecimiento Digital",
      title1: "Impulse sus",
      titleHighlight: "redes sociales",
      title2: "con contenido profesional",
      subtitle: "Cada foto y video que capturamos se convierte en contenido de alta calidad para sus plataformas digitales, atrayendo más visitantes a su parque.",
      benefit1: "Contenido diario para sus redes",
      benefit2: "Fotos y videos profesionales gratis",
      benefit3: "Mayor visibilidad online",
      benefit4: "Más reservas y visitantes",
      droneTitle: "Sesión profesional con dron incluida",
      droneText: "Sin costo adicional, al menos cada 6 meses realizamos una sesión completa y profesional con tomas de dron incluidas para actualizar el contenido promocional de su empresa.",
    },
    // Marketing
    marketing: {
      label: "Marketing",
      title1: "Impulsamos el",
      titleHighlight: "marketing de su parque",
      subtitle: "Más que fotografía, somos su aliado en crecimiento digital",
      option1Title: "Apoyo Incluido",
      option1Subtitle: "Con nuestro servicio estándar",
      option1Items: ["Contenido regular para redes sociales", "Material promocional de calidad", "Fotos y videos de sus actividades", "Cobertura de eventos especiales"],
      option2Title: "Plan Completo",
      option2Subtitle: "Según negociación",
      option2Items: ["Estrategia de marketing digital completa", "Gestión profesional de redes sociales", "Campañas publicitarias en Meta/Google", "Diseño y branding", "Reportes mensuales de rendimiento"],
      option2Badge: "Premium",
    },
    // Leverage
    leverage: {
      label: "Apalancamiento",
      title1: "Apalanque su negocio",
      titleHighlight: "con nosotros",
      subtitle: "Nuestra presencia en su parque genera valor más allá de la fotografía",
      benefit1Title: "Credibilidad de marca",
      benefit1Text: "Asociarse con una empresa de 20+ años de trayectoria refuerza la imagen profesional de su parque.",
      benefit2Title: "Red de contactos",
      benefit2Text: "Acceso a nuestra red de contactos en el sector turístico de Costa Rica.",
      benefit3Title: "Experiencia a su servicio",
      benefit3Text: "Dos décadas de conocimiento en turismo de aventura trabajando para el éxito de su negocio.",
      benefit4Title: "Presencia profesional",
      benefit4Text: "Personal capacitado y uniformado que eleva la percepción de calidad de su parque.",
    },
    // Footer
    footer: {
      description: "Aliados estratégicos en fotografía para parques de aventura. Más de 20 años capturando momentos únicos en Costa Rica.",
      contactTitle: "Contacto",
      socialTitle: "Redes Sociales",
      copyright: "Grupo Oroz CR. Todos los derechos reservados.",
    },
  },
  en: {
    // Nav
    nav: {
      offices: "Locations",
      services: "Services",
      gallery: "Gallery",
      process: "Process",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "+20 years of experience in adventure photography",
      title1: "Strategic Partners in",
      titleHighlight: "Photography",
      title2: "for Adventure Parks",
      subtitle: "At Orostudios CR we are passionate about capturing the moments that make adventure experiences in Costa Rica unique.",
      cta1: "Contact Us",
      cta2: "See Our Work",
    },
    // About
    about: {
      label: "About Us",
      title1: "At Orostudios CR we are passionate about capturing",
      titleHighlight: "unique moments",
      p1: "We are a Costa Rican company with more than 20 years of experience providing professional photography services in the tourism sector, especially in canopy tours and adventure activities.",
      p2: "During this time we have worked with more than 18 canopy parks throughout the country, developing an operation model that allows companies to offer their visitors high-quality memories without worrying about logistics, equipment or staff.",
      p3: "We currently operate with our own offices and permanent staff at the main parks we collaborate with, ensuring consistent and excellent service. Our approach is to be strategic partners for the parks: we help turn photography into an additional profitability channel, reinforcing their brand image and generating professional content that can be used on social media and marketing campaigns.",
      stat1: "Years of Experience",
      stat2: "Parks Served",
      stat3: "Maximum Delivery",
      highlight1: "Operation model that allows companies to offer their visitors high-quality memories without worrying about logistics, equipment or staff.",
      highlight2: "We combine cutting-edge technology, optimized processes, and a highly trained human team.",
    },
    // Offices
    offices: {
      label: "Our Locations",
      title1: "We have a permanent presence in",
      titleHighlight: "adventure parks in Costa Rica",
      subtitle: "Our philosophy combines cutting-edge technology, optimized processes, and a highly trained human team, to ensure that every visitor takes home a quality memory, and that every park receives a reliable, safe and profitable service.",
      quality: "Quality memories",
      reliable: "Reliable service",
    },
    parks: [
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
        description: "We capture the pure emotion of the canopy among the intense green of Arenal Volcano. Experience the adrenaline and take unique images of your experience with you.",
      },
      {
        id: "skyline",
        name: "Skyline Canopy Tour",
        location: "Santa Cruz, Guanacaste",
        description: "Height, speed and impressive landscapes. Our team captures every jump and smile from the best angle.",
      },
      {
        id: "poas",
        name: "Poas Adventure Park",
        location: "Poás, Alajuela",
        description: "Immortalize your connection with the volcano and the tropical jungle. Our team of photographers turns your adventure into epic memories.",
      },
    ],
    // Services
    services: {
      label: "Why Choose Us",
      title1: "Service Definition",
      titleHighlight: "(Photography and Video)",
      serviceTitle: "Our Service includes:",
      trainingTitle: "Training and Standards",
      fastDelivery: "Fast photo delivery",
      personalAttention: "Personalized attention",
    },
    serviceIncludes: [
      "Hiring, training and supervision of all staff",
      "Installation, maintenance and equipment updates",
      "Professional image and video capture",
      "Editing and optimization of material for sales and social media use",
      "Personalized customer service during and after the tour",
      "Material delivery within a maximum of 24 hours",
    ],
    trainingStandards: [
      "Adventure photography",
      "Safety protocols specific to each park",
      "Professional image and video capture",
      "Customer service and service experience",
      "Use of technological tools and editing software",
    ],
    // How It Works
    howItWorks: {
      label: "Sales Process",
      title1: "How does it",
      titleHighlight: "work",
      title2: "?",
      subtitle: "A seamless experience for the customer, from arrival to taking home their memories",
      steps: [
        {
          number: "01",
          title: "Arrival at the park",
          description: "The customer arrives and goes through the park's reception where they register to start their adventure.",
        },
        {
          number: "02",
          title: "Service presentation",
          description: "Our photography team introduces themselves and explains that they will accompany them throughout the tour, capturing professional photos and videos of their experience.",
        },
        {
          number: "03",
          title: "The tour begins",
          description: "The park guides lead the customers while our photographers accompany them, ready to capture every moment of the journey.",
        },
        {
          number: "04",
          title: "Professional capture",
          description: "We photograph and record at all strategic points: canopy, hanging bridges, rappelling, zip lines and more. Every smile, every emotion is immortalized.",
        },
        {
          number: "05",
          title: "Purchase experience",
          description: "Upon returning, the customer goes directly to the photography area where their photos and videos are already playing on the screens, ready to view and purchase instantly.",
        },
      ],
    },
    // Gallery
    gallery: {
      label: "Our Work",
      title1: "Explore some of",
      titleHighlight: "our photos",
      subtitle: "Discover our variety of photographic projects, showcasing our experience in capturing unique moments of adventure and nature, with the best quality for unforgettable memories.",
    },
    galleryImages: [
      "Unique memories with the best image quality",
      "More than photos, experiences you relive when looking at them",
      "We capture your best moment in full adventure",
      "Adrenaline and emotion, immortalized forever",
      "Vibrant colors that reflect every moment",
      "Professional photography surrounded by nature",
    ],
    // Process
    process: {
      label: "How We Work",
      title1: "A",
      titleHighlight: "simple and efficient",
      title2: "process",
      subtitle: "We take care of everything so you don't have to worry about anything.",
    },
    processSteps: [
      {
        number: "01",
        title: "Installation",
        description: "We arrive, install our equipment and train the staff. You don't lift a finger.",
      },
      {
        number: "02",
        title: "Operation",
        description: "We cover all park hours, capture every moment and serve visitors.",
      },
      {
        number: "03",
        title: "Results",
        description: "You receive monthly rent, professional content for your social media and satisfied customers.",
      },
    ],
    // Benefits
    benefits: {
      label: "Benefits",
      title1: "Benefits for the park",
      titleHighlight: "(Leaseholder)",
      qualityBadge: "5-star quality service",
      qualityText: "Our philosophy combines cutting-edge technology, optimized processes, and a highly trained human team, to ensure that every visitor takes home a quality memory, and that every park receives a reliable, safe and profitable service.",
    },
    parkBenefits: [
      "High-quality digital content ready for social media and communication platforms with permissions for use with client signature.",
      "Value-added service for your clients at no operational cost.",
      "Operational assistance 7 days a week in all activities involving cables.",
      "Special service with drones and professional shots every 4 months, to update promotional material.",
      "Management of image use authorizations through a document signed at the time of purchase.",
      "Monthly rent for the space.",
    ],
    equipmentCards: [
      {
        category: "Equipment",
        title: "Technology",
        description: "We provide all technological equipment for the operation: cameras, screens, sound equipment, stationery, certified harnesses and more. If using park equipment, Orostudios CR assumes full responsibility for its use and care.",
      },
      {
        category: "Equipment",
        title: "Uniforms",
        description: "Own corporate uniforms for the entire team, guaranteeing a professional image aligned with the brand.",
      },
      {
        category: "Equipment",
        title: "Safety",
        description: "Safety equipment (helmets, harnesses, pulleys, etc.) provided and managed by us, ensuring correct and safe use.",
      },
      {
        category: "Staff",
        title: "Insurance",
        description: "All staff will be: Insured by CCSS, covered by occupational risk policies (INS), hired in compliance with Ministry of Labor regulations.",
      },
      {
        category: "Staff",
        title: "Training",
        description: "Continuous training for current staff and new hires.",
      },
      {
        category: "Staff",
        title: "Confidentiality",
        description: "Signing of confidentiality agreement, which guarantees: Exclusive use of photographs for the park. Protection of sensitive operation information.",
      },
    ],
    // CTA
    cta: {
      title1: "Ready to grow",
      titleHighlight: "your park",
      subtitle: "Schedule a no-obligation meeting and discover how much your park can generate with our professional photography model.",
      callNow: "Schedule Meeting",
      sendEmail: "Send Email",
    },
    // Leaders
    leaders: {
      label: "Leaders in Costa Rica",
      title1: "The",
      titleHighlight: "#1 photography company",
      title2: "for adventure parks",
      subtitle: "With more than two decades of experience, we are the largest and most experienced company in photography services for the adventure tourism sector in Costa Rica.",
      selective: "We work with select parks",
      selectiveText: "Currently accepting new strategic partners for 2025. Our exclusive model guarantees personalized attention and proven results.",
      stat1Value: "#1",
      stat1Label: "In Costa Rica",
      stat2Value: "20+",
      stat2Label: "Years of experience",
      stat3Value: "4",
      stat3Label: "Active parks",
    },
    // Model
    model: {
      label: "Our Model",
      title1: "A partnership where",
      titleHighlight: "everyone wins",
      youProvide: "You Provide",
      youProvideItems: ["Space within your park", "Visitor flow"],
      weProvide: "We Provide",
      weProvideItems: ["Trained staff", "All technological equipment", "Full 7/7 operation", "Sales management", "Content for your social media"],
      youReceive: "You Receive",
      youReceiveItems: ["Guaranteed monthly rent", "Free professional content for social media", "Value-added service for your clients", "Zero operational worries", "Increased followers and engagement"],
    },
    // Zero Risk
    zeroRisk: {
      label: "Zero Risk",
      title1: "100% our responsibility,",
      titleHighlight: "0% risk for you",
      subtitle: "Sales responsibility is entirely OroStudios CR's. You don't invest in staff, equipment or operations. We assume all operational and commercial risk.",
      card1Title: "No initial investment",
      card1Text: "No need to buy equipment, hire staff or train anyone. We arrive ready to operate.",
      card2Title: "No operational risk",
      card2Text: "All staff is insured and trained. Policies, permits and responsibilities are on us.",
      card3Title: "No commercial risk",
      card3Text: "If sales are low, the risk is ours. You receive your monthly rent regardless of sales volume.",
    },
    // Social Growth
    socialGrowth: {
      label: "Digital Growth",
      title1: "Boost your",
      titleHighlight: "social media",
      title2: "with professional content",
      subtitle: "Every photo and video we capture becomes high-quality content for your digital platforms, attracting more visitors to your park.",
      benefit1: "Daily content for your social media",
      benefit2: "Free professional photos and videos",
      benefit3: "Greater online visibility",
      benefit4: "More bookings and visitors",
      droneTitle: "Professional drone session included",
      droneText: "At no additional cost, at least every 6 months we conduct a complete professional session with drone footage included to update your company's promotional content.",
    },
    // Marketing
    marketing: {
      label: "Marketing",
      title1: "We boost your",
      titleHighlight: "park's marketing",
      subtitle: "More than photography, we are your ally in digital growth",
      option1Title: "Included Support",
      option1Subtitle: "With our standard service",
      option1Items: ["Regular content for social media", "Quality promotional material", "Photos and videos of your activities", "Special events coverage"],
      option2Title: "Complete Plan",
      option2Subtitle: "Subject to negotiation",
      option2Items: ["Complete digital marketing strategy", "Professional social media management", "Advertising campaigns on Meta/Google", "Design and branding", "Monthly performance reports"],
      option2Badge: "Premium",
    },
    // Leverage
    leverage: {
      label: "Leverage",
      title1: "Leverage your business",
      titleHighlight: "with us",
      subtitle: "Our presence in your park generates value beyond photography",
      benefit1Title: "Brand credibility",
      benefit1Text: "Partnering with a company with 20+ years of experience reinforces your park's professional image.",
      benefit2Title: "Contact network",
      benefit2Text: "Access to our network of contacts in Costa Rica's tourism sector.",
      benefit3Title: "Experience at your service",
      benefit3Text: "Two decades of knowledge in adventure tourism working for your business success.",
      benefit4Title: "Professional presence",
      benefit4Text: "Trained and uniformed staff that elevates the quality perception of your park.",
    },
    // Footer
    footer: {
      description: "Strategic partners in photography for adventure parks. More than 20 years capturing unique moments in Costa Rica.",
      contactTitle: "Contact",
      socialTitle: "Social Media",
      copyright: "Grupo Oroz CR. All rights reserved.",
    },
  },
};

const processIcons = [Wrench, Camera, Target];
const equipmentIcons = [Monitor, Shirt, HardHat, FileCheck, GraduationCap, Lock];

// ============================================
// COMPONENT
// ============================================
export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activePark, setActivePark] = useState("ama");
  const [lang, setLang] = useState<Lang>("es");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  const t = translations[lang];
  const currentPark = t.parks.find(p => p.id === activePark) || t.parks[0];
  const parkImages = { ecoglide: IMAGES.ecoglide, skyline: IMAGES.skyline, ama: IMAGES.ama, poas: IMAGES.poas };
  const galleryImageSrcs = [IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4, IMAGES.gallery5, IMAGES.gallery6];

  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* ==================== NAVIGATION ==================== */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            <img src={IMAGES.logo} alt="OroStudios CR" className="h-20 sm:h-28 w-auto" />
            
            <div className="hidden lg:flex items-center gap-6">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors"
                >
                  {value}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <div className="flex items-center bg-zinc-800 rounded-full p-1">
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${
                    lang === "es" 
                      ? "bg-orange-500 text-black" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${
                    lang === "en" 
                      ? "bg-orange-500 text-black" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              <a
                href="tel:+50660982244"
                className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>+506 6098-2244</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="relative h-screen min-h-[600px]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            style={{ minWidth: '100%', minHeight: '100%' }}
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-transparent to-zinc-950" />
        </div>

        {/* Offices Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-sm border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-3 sm:gap-x-6 sm:gap-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white font-medium truncate">Arenal Mundo Aventura</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white font-medium truncate">Ecoglide Arenal Park</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white font-medium truncate">Skyline Canopy Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                <span className="text-white font-medium truncate">Poas Adventure Park</span>
                <span className="text-orange-500 text-[10px] sm:text-xs font-semibold">Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== A COMPANY BY ==================== */}
      <section id="company" className="py-16 px-4 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="relative bg-zinc-900/60 backdrop-blur-xl border border-orange-500/20 rounded-3xl px-12 py-10 shadow-2xl shadow-orange-500/5">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-3xl" />
            
            {/* Content */}
            <div className="relative flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-500/50" />
                <span className="text-zinc-400 text-xs tracking-[0.3em] uppercase font-medium">A company by</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-500/50" />
              </div>
              
              <img 
                src={IMAGES.grupoOroz} 
                alt="Grupo Oroz" 
                className="h-32 sm:h-40 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section className="py-24 px-4 bg-zinc-950">
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
            <a
              href="#contact"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#gallery"
              className="w-full sm:w-auto border border-zinc-600 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-orange-500/10"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* ==================== LEADERS ==================== */}
      <section className="py-24 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.leaders.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.leaders.title1}{" "}
              <span className="text-orange-500">{t.leaders.titleHighlight}</span>{" "}
              {t.leaders.title2}
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.leaders.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-orange-500/30">
              <div className="text-5xl font-bold text-orange-500 mb-2">{t.leaders.stat1Value}</div>
              <div className="text-zinc-400">{t.leaders.stat1Label}</div>
            </div>
            <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <div className="text-5xl font-bold text-orange-500 mb-2">{t.leaders.stat2Value}</div>
              <div className="text-zinc-400">{t.leaders.stat2Label}</div>
            </div>
            <div className="text-center p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800">
              <div className="text-5xl font-bold text-orange-500 mb-2">{t.leaders.stat3Value}</div>
              <div className="text-zinc-400">{t.leaders.stat3Label}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Award className="w-10 h-10 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{t.leaders.selective}</h3>
              <p className="text-zinc-400">{t.leaders.selectiveText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ZERO RISK ==================== */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.zeroRisk.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.zeroRisk.title1}{" "}
              <span className="text-orange-500">{t.zeroRisk.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.zeroRisk.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.zeroRisk.card1Title}</h3>
              <p className="text-zinc-400">{t.zeroRisk.card1Text}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.zeroRisk.card2Title}</h3>
              <p className="text-zinc-400">{t.zeroRisk.card2Text}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.zeroRisk.card3Title}</h3>
              <p className="text-zinc-400">{t.zeroRisk.card3Text}</p>
            </div>
          </div>

          {/* Big Zero Risk Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500/20 to-green-500/5 border border-green-500/30 rounded-full px-8 py-4">
              <Shield className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-500">0% {lang === "es" ? "RIESGO PARA SU PARQUE" : "RISK FOR YOUR PARK"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MODEL ==================== */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.model.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.model.title1}{" "}
              <span className="text-orange-500">{t.model.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* You Provide */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-zinc-400" />
                </div>
                <h3 className="text-xl font-bold">{t.model.youProvide}</h3>
              </div>
              <ul className="space-y-3">
                {t.model.youProvideItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-400">
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* We Provide */}
            <div className="bg-zinc-900 border border-orange-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">{t.model.weProvide}</h3>
              </div>
              <ul className="space-y-3">
                {t.model.weProvideItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-4 h-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* You Receive */}
            <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">{t.model.youReceive}</h3>
              </div>
              <ul className="space-y-3">
                {t.model.youReceiveItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <Star className="w-4 h-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL GROWTH ==================== */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.socialGrowth.label}</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                {t.socialGrowth.title1}{" "}
                <span className="text-orange-500">{t.socialGrowth.titleHighlight}</span>{" "}
                {t.socialGrowth.title2}
              </h2>
              <p className="text-zinc-400 text-lg mb-8">{t.socialGrowth.subtitle}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  <span className="text-zinc-300">{t.socialGrowth.benefit1}</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <Camera className="w-6 h-6 text-orange-500" />
                  <span className="text-zinc-300">{t.socialGrowth.benefit2}</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  <span className="text-zinc-300">{t.socialGrowth.benefit3}</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <Users className="w-6 h-6 text-orange-500" />
                  <span className="text-zinc-300">{t.socialGrowth.benefit4}</span>
                </div>
              </div>

              {/* Drone Session Highlight */}
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Plane className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{t.socialGrowth.droneTitle}</h3>
                    <p className="text-zinc-400">{t.socialGrowth.droneText}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.verticalEco} alt="Canopy adventure" className="rounded-2xl w-full aspect-[3/4] object-cover" />
              <img src={IMAGES.canopyEco} alt="Canopy experience" className="rounded-2xl w-full aspect-[3/4] object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MARKETING ==================== */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.marketing.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.marketing.title1}{" "}
              <span className="text-orange-500">{t.marketing.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.marketing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Option 1: Included Support */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center">
                  <Megaphone className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t.marketing.option1Title}</h3>
                  <p className="text-zinc-500">{t.marketing.option1Subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {t.marketing.option1Items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Option 2: Complete Plan */}
            <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-8 relative">
              <div className="absolute -top-3 right-6">
                <span className="bg-orange-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                  {t.marketing.option2Badge}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t.marketing.option2Title}</h3>
                  <p className="text-zinc-500">{t.marketing.option2Subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {t.marketing.option2Items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OFFICES ==================== */}
      <section id="offices" className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.offices.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.offices.title1}{" "}
              <span className="text-orange-500">{t.offices.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.offices.subtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {t.parks.map((park) => (
              <button
                key={park.id}
                onClick={() => setActivePark(park.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activePark === park.id
                    ? "bg-orange-500 text-black"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {park.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src={parkImages[currentPark.id as keyof typeof parkImages]}
                alt={currentPark.name}
                className="w-full h-full object-cover"
              />
              {currentPark.id === "poas" && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <span className="bg-orange-500 text-black font-bold px-6 py-3 rounded-full text-lg">
                    Coming Soon 2026
                  </span>
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
                  {t.offices.quality}
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Check className="w-5 h-5 text-orange-500" />
                  {t.offices.reliable}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.services.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.services.title1}{" "}
              <span className="text-orange-500">{t.services.titleHighlight}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Camera className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-bold">{t.services.serviceTitle}</h3>
              </div>
              <ul className="space-y-4">
                {t.serviceIncludes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-bold">{t.services.trainingTitle}</h3>
              </div>
              <ul className="space-y-4">
                {t.trainingStandards.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-zinc-300">{t.services.fastDelivery}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-zinc-300">{t.services.personalAttention}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.howItWorks.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.howItWorks.title1}{" "}
              <span className="text-orange-500">{t.howItWorks.titleHighlight}</span>
              {t.howItWorks.title2}
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.howItWorks.subtitle}</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/50 to-orange-500 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-24">
              {t.howItWorks.steps.map((step, index) => {
                const images = [IMAGES.hero, IMAGES.horizontal2, IMAGES.horizontal3, IMAGES.canopyEco, IMAGES.ama];
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.number} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                    {/* Image */}
                    <div className="w-full lg:w-5/12">
                      <div className="rounded-2xl overflow-hidden aspect-video">
                        <img 
                          src={images[index]} 
                          alt={step.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-orange-500/30">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-5/12">
                      <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-8 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                          <span className="lg:hidden w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">
                            {step.number}
                          </span>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-zinc-400 text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section id="gallery" className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.gallery.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.gallery.title1}{" "}
              <span className="text-orange-500">{t.gallery.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-2xl mx-auto">{t.gallery.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImageSrcs.map((src, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
                onClick={() => setActiveImage(src)}
              >
                <img
                  src={src}
                  alt={t.galleryImages[index]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{t.galleryImages[index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveImage(null)}
        >
          <img src={activeImage} alt="Enlarged image" className="max-w-full max-h-full object-contain rounded-lg" />
          <button
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors"
            onClick={() => setActiveImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ==================== PROCESS ==================== */}
      <section id="process" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.process.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.process.title1}{" "}
              <span className="text-orange-500">{t.process.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-4 max-w-3xl mx-auto">{t.process.subtitle}</p>
          </div>

          <div className="space-y-8">
            {t.processSteps.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <div
                  key={step.number}
                  className="group bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-8 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-bold text-orange-500/30 group-hover:text-orange-500/50 transition-colors">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 bg-orange-500/10 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center transition-colors">
                        <Icon className="w-7 h-7 text-orange-500 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== LEVERAGE ==================== */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">{t.leverage.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              {t.leverage.title1}{" "}
              <span className="text-orange-500">{t.leverage.titleHighlight}</span>
            </h2>
            <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto">{t.leverage.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BadgeCheck className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t.leverage.benefit1Title}</h3>
              <p className="text-zinc-400 text-sm">{t.leverage.benefit1Text}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t.leverage.benefit2Title}</h3>
              <p className="text-zinc-400 text-sm">{t.leverage.benefit2Text}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t.leverage.benefit3Title}</h3>
              <p className="text-zinc-400 text-sm">{t.leverage.benefit3Text}</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{t.leverage.benefit4Title}</h3>
              <p className="text-zinc-400 text-sm">{t.leverage.benefit4Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.horizontal3} alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Zero Risk Reminder */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-green-500 text-sm font-medium">0% {lang === "es" ? "riesgo para su parque" : "risk for your park"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t.cta.title1}{" "}
            <span className="text-orange-500">{t.cta.titleHighlight}</span>?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+50660982244"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              {t.cta.callNow}
            </a>
            <a
              href="mailto:gerencia@orostudioscr.com?subject=Solicitud de reunión - Parque de aventura"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-zinc-600 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-orange-500/10"
            >
              <Mail className="w-5 h-5" />
              {t.cta.sendEmail}
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer id="contact" className="bg-zinc-900 border-t border-zinc-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={IMAGES.logo} alt="OroStudios CR" className="h-24 w-auto mb-6" />
              <p className="text-zinc-400 leading-relaxed">{t.footer.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{t.footer.contactTitle}</h4>
              <div className="space-y-4">
                <a href="tel:+50660982244" className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors">
                  <Phone className="w-5 h-5" />
                  +506 6098-2244
                </a>
                <a href="mailto:orostudioscr@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors">
                  <Mail className="w-5 h-5" />
                  orostudioscr@gmail.com
                </a>
                <a href="mailto:gerencia@orostudioscr.com" className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors">
                  <Mail className="w-5 h-5" />
                  gerencia@orostudioscr.com
                </a>
                <a href="mailto:gabrielorozco@grupooroz.com" className="flex items-center gap-3 text-zinc-400 hover:text-orange-500 transition-colors">
                  <Mail className="w-5 h-5" />
                  gabrielorozco@grupooroz.com
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="w-5 h-5" />
                  San Carlos, Alajuela, Costa Rica
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">{t.footer.socialTitle}</h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-black" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-zinc-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-zinc-400 group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}