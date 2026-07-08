"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

type Plan = {
  nombre: string;
  precio: string;
  incluye: string[];
  sirve: string;
  ideal: string;
};

type Rubro = {
  id: string;
  etiqueta: string;
  titulo: string;
  subtitulo: string;
  enfoque: string;
  imagen: string;
  planes: Plan[];
};

const rubros: Rubro[] = [
  {
    id: "gastronomia",
    etiqueta: "Restaurantes, cafeterías y comida",
    titulo: "Gastronomía",
    subtitulo:
      "Restaurantes, pollerías, cevicherías, cafeterías, sangucherías, dark kitchens y restobares.",
    enfoque:
      "Contenido enfocado en despertar antojo, mostrar platos, preparación, ambiente, atención, promociones, delivery y carta digital.",
    imagen: "/assets/mapaches/mapache-gastronomia.png",
    planes: [
      {
        nombre: "Presencia Gastronómica",
        precio: "Desde S/. 490 / mes",
        incluye: [
          "4 reels verticales editados",
          "10 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "1 visita de producción al mes",
          "Hasta 2.5 horas de producción en el local",
        ],
        sirve:
          "Activar las redes del negocio, mostrar los platos principales, tener contenido semanal y empezar a verse más profesional sin una inversión alta.",
        ideal:
          "Restaurantes pequeños, cafeterías, pollerías, sangucherías o negocios que recién están ordenando su presencia digital.",
      },
      {
        nombre: "Antojo Constante",
        precio: "Desde S/. 790 / mes",
        incluye: [
          "8 reels verticales editados",
          "20 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "Recomendación básica de orden de publicación",
          "2 visitas de producción al mes",
        ],
        sirve:
          "Publicar con más frecuencia, mostrar platos diferentes, grabar preparación, ambiente, atención, promociones y contenido con el personal del local.",
        ideal:
          "Restaurantes con movimiento constante, restobares, cevicherías, cafeterías activas o negocios que desean mantenerse presentes todas las semanas.",
      },
      {
        nombre: "Marca que Antoja",
        precio: "Desde S/. 1,150 / mes",
        incluye: [
          "12 reels verticales editados",
          "35 a 40 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "Recomendación básica de calendario de publicación",
          "3 visitas de producción al mes",
        ],
        sirve:
          "Tener contenido constante para reels, historias, promociones, delivery, carta digital y campañas. Permite que el restaurante tenga una imagen activa durante todo el mes.",
        ideal:
          "Restaurantes medianos, marcas gastronómicas con buena rotación, restobares o locales que quieren competir fuerte en redes.",
      },
    ],
  },
  {
    id: "belleza",
    etiqueta: "Estética, belleza y cuidado personal",
    titulo: "Belleza y Estética",
    subtitulo:
      "Salones, barberías, spas, uñas, cejas, pestañas, maquillaje y centros de estética.",
    enfoque:
      "Contenido enfocado en transformación, detalle, resultados, procesos, limpieza visual, antes y después, confianza y aspiración.",
    imagen: "/assets/mapaches/mapache-belleza.png",
    planes: [
      {
        nombre: "Estilo Base",
        precio: "Desde S/. 520 / mes",
        incluye: [
          "4 reels verticales editados",
          "10 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "1 visita de producción al mes",
        ],
        sirve:
          "Mostrar los servicios principales, resultados finales, detalles del local y generar una imagen más estética y confiable.",
        ideal:
          "Barberías, salones pequeños, especialistas en uñas, cejas, pestañas o negocios de belleza que quieren empezar a verse más profesionales.",
      },
      {
        nombre: "Glamour Activo",
        precio: "Desde S/. 850 / mes",
        incluye: [
          "8 reels verticales editados",
          "20 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "2 visitas de producción al mes",
        ],
        sirve:
          "Mostrar procesos, antes y después, tips, resultados, promociones, atención al cliente y contenido con el staff.",
        ideal:
          "Spas, barberías activas, centros de estética, salones de belleza y negocios que desean publicar de forma constante.",
      },
      {
        nombre: "Belleza Dominante",
        precio: "Desde S/. 1,250 / mes",
        incluye: [
          "12 reels verticales editados",
          "35 a 40 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "Recomendación básica de calendario de publicación",
          "3 visitas de producción al mes",
        ],
        sirve:
          "Construir una imagen visual fuerte, mostrar variedad de servicios, posicionar al local como referente y generar contenido constante para promociones y campañas.",
        ideal:
          "Centros de estética completos, barberías premium, salones con varios servicios o negocios de belleza que quieren verse más exclusivos.",
      },
    ],
  },
  {
    id: "salud",
    etiqueta: "Clínicas, consultorios y veterinarias",
    titulo: "Salud y Veterinarias",
    subtitulo:
      "Clínicas dentales, veterinarias, consultorios, laboratorios, centros médicos y especialistas.",
    enfoque:
      "Contenido enfocado en confianza, autoridad, educación, instalaciones, atención profesional, equipo humano, testimonios autorizados y explicación de servicios.",
    imagen: "/assets/mapaches/mapache-salud.png",
    planes: [
      {
        nombre: "Presencia Profesional",
        precio: "Desde S/. 650 / mes",
        incluye: [
          "4 reels verticales editados",
          "10 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "1 visita de producción al mes",
        ],
        sirve:
          "Presentar al equipo, mostrar instalaciones, explicar servicios básicos y empezar a generar confianza en pacientes o clientes.",
        ideal:
          "Veterinarias pequeñas, consultorios, odontólogos, médicos independientes o especialistas que quieren ordenar su imagen profesional.",
      },
      {
        nombre: "Clínica Conectada",
        precio: "Desde S/. 1,100 / mes",
        incluye: [
          "8 reels verticales editados",
          "20 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "2 visitas de producción al mes",
        ],
        sirve:
          "Crear contenido educativo, resolver dudas frecuentes, mostrar procedimientos simples, presentar al staff y reforzar la confianza del público.",
        ideal:
          "Clínicas dentales, veterinarias con varios servicios, laboratorios, centros de salud o consultorios que quieren tener presencia constante.",
      },
      {
        nombre: "Autoridad Total",
        precio: "Desde S/. 1,600 / mes",
        incluye: [
          "12 reels verticales editados",
          "35 a 40 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "Recomendación básica de calendario de publicación",
          "3 visitas de producción al mes",
        ],
        sirve:
          "Posicionar a la clínica o veterinaria como referente, educar al público, mostrar especialidades, testimonios autorizados, infraestructura y calidad del servicio.",
        ideal:
          "Clínicas, veterinarias grandes, centros especializados o marcas de salud que quieren proyectar autoridad y confianza profesional.",
      },
    ],
  },
  {
    id: "fitness",
    etiqueta: "Gimnasios, entrenamiento y bienestar",
    titulo: "Fitness y Bienestar",
    subtitulo:
      "Gimnasios, boxes, academias de baile, artes marciales, entrenamiento funcional y bienestar físico.",
    enfoque:
      "Contenido enfocado en energía, disciplina, comunidad, entrenadores, clases, rutinas, transformación física y motivación.",
    imagen: "/assets/mapaches/mapache-fitness.png",
    planes: [
      {
        nombre: "Rutina Base",
        precio: "Desde S/. 490 / mes",
        incluye: [
          "4 reels verticales editados",
          "10 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "1 visita de producción al mes",
        ],
        sirve:
          "Mostrar entrenadores, espacios, clases, máquinas, rutinas básicas y activar la presencia del gimnasio en redes.",
        ideal:
          "Gimnasios pequeños, entrenadores personales, academias o centros funcionales que están empezando a generar contenido.",
      },
      {
        nombre: "Fuerza Activa",
        precio: "Desde S/. 790 / mes",
        incluye: [
          "8 reels verticales editados",
          "20 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "2 visitas de producción al mes",
        ],
        sirve:
          "Mostrar clases grupales, entrenadores, rutinas, tips, ambiente, comunidad y resultados de alumnos.",
        ideal:
          "Gimnasios con movimiento constante, academias de baile, boxes de entrenamiento o centros deportivos que buscan captar nuevos inscritos.",
      },
      {
        nombre: "Transformación Épica",
        precio: "Desde S/. 1,150 / mes",
        incluye: [
          "12 reels verticales editados",
          "35 a 40 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "Recomendación básica de calendario de publicación",
          "3 visitas de producción al mes",
        ],
        sirve:
          "Mantener presencia constante, mostrar diferentes horarios, clases, entrenadores, testimonios, retos y campañas de inscripción.",
        ideal:
          "Gimnasios grandes, centros fitness con varias clases, academias activas o marcas deportivas que quieren dominar su zona.",
      },
    ],
  },
  {
    id: "retail",
    etiqueta: "Boutiques, tiendas y venta por redes",
    titulo: "Boutiques y Retail",
    subtitulo:
      "Tiendas de ropa, calzado, accesorios, maquillaje, showrooms y negocios de venta por redes.",
    enfoque:
      "Contenido enfocado en productos, outfits, lanzamientos, promociones, catálogo, tendencias, hauls, combinaciones y venta inmediata.",
    imagen: "/assets/mapaches/mapache-retail.png",
    planes: [
      {
        nombre: "Estilo Esencial",
        precio: "Desde S/. 450 / mes",
        incluye: [
          "4 reels verticales editados",
          "10 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "1 visita de producción al mes",
        ],
        sirve:
          "Mostrar productos destacados, nuevas prendas, promociones y ordenar la imagen visual de la tienda.",
        ideal:
          "Boutiques pequeñas, tiendas de accesorios, emprendimientos de ropa o negocios que venden por Instagram, Facebook o WhatsApp.",
      },
      {
        nombre: "Showroom Activo",
        precio: "Desde S/. 720 / mes",
        incluye: [
          "8 reels verticales editados",
          "20 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "2 visitas de producción al mes",
        ],
        sirve:
          "Mostrar nuevas colecciones, outfits, promociones, cambios de temporada, productos con modelo y contenido más dinámico para redes.",
        ideal:
          "Boutiques con llegada constante de mercadería, tiendas con showroom o marcas que quieren vender más por redes.",
      },
      {
        nombre: "Tendencia Total",
        precio: "Desde S/. 990 / mes",
        incluye: [
          "12 reels verticales editados",
          "35 a 40 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "Recomendación básica de calendario de publicación",
          "3 visitas de producción al mes",
        ],
        sirve:
          "Mantener un catálogo visual activo, mostrar varios productos, impulsar campañas, generar contenido para promociones y mantener a la tienda presente en redes.",
        ideal:
          "Boutiques con alta rotación, tiendas de ropa consolidadas, showrooms activos o marcas que quieren verse más profesionales.",
      },
    ],
  },
  {
    id: "eventos",
    etiqueta: "Discotecas, bares y eventos nocturnos",
    titulo: "Bares, Discotecas y Eventos",
    subtitulo:
      "Discotecas, bares, restobares, conciertos, activaciones, aniversarios e inauguraciones.",
    enfoque:
      "Contenido enfocado en ambiente, público, barra, luces, DJ, shows, energía, aftermovies, eventos y expectativa para próximas fechas.",
    imagen: "/assets/mapaches/mapache-nocturno.png",
    planes: [
      {
        nombre: "Fiebre de Fin de Semana",
        precio: "Desde S/. 550 / mes",
        incluye: [
          "4 reels verticales editados",
          "10 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "1 cobertura mensual de hasta 2.5 horas",
        ],
        sirve:
          "Mostrar el ambiente del local, barra, público, música, atención y momentos destacados de una noche clave.",
        ideal:
          "Bares, restobares pequeños, locales nocturnos o negocios que tienen eventos puntuales durante el mes.",
      },
      {
        nombre: "Club Activo",
        precio: "Desde S/. 950 / mes",
        incluye: [
          "8 reels verticales editados",
          "20 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "2 coberturas al mes",
        ],
        sirve:
          "Crear expectativa semanal, mostrar aftermovies, público, DJs, promociones, activaciones y fechas especiales.",
        ideal:
          "Discotecas, bares con eventos constantes, restobares activos o locales que quieren atraer público cada fin de semana.",
      },
      {
        nombre: "Imperio Nocturno",
        precio: "Desde S/. 1,350 / mes",
        incluye: [
          "12 reels verticales editados",
          "35 a 40 fotos editadas",
          "Portadas simples para reels",
          "Texto breve sugerido para publicación",
          "Recomendación básica de calendario de publicación",
          "3 a 4 coberturas planificadas al mes",
        ],
        sirve:
          "Cubrir varias fechas importantes, alimentar redes de forma constante, generar expectativa, mostrar ambiente lleno y mantener activa la marca del local.",
        ideal:
          "Discotecas grandes, bares con agenda semanal, eventos recurrentes o marcas nocturnas que necesitan contenido fuerte todo el mes.",
      },
    ],
  },
];

const incluidos = [
  "Producción audiovisual",
  "Fotografía comercial",
  "Edición de videos",
  "Edición de fotos",
  "Portada simple para reels",
  "Texto breve sugerido para publicación",
  "Entrega mediante Google Drive",
  "1 ronda de cambios menores",
];

const noIncluidos = [
  "Flyers elaborados",
  "Carruseles avanzados",
  "Community management",
  "Publicación diaria",
  "Respuesta de mensajes",
  "Gestión de pauta publicitaria",
  "Diseño de marca",
  "Branding completo",
  "Regrabaciones por cambio de idea del cliente",
];

const menuItems = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Paquetes", href: "/#paquetes" },
  { name: "Clientes", href: "/#clientes" },
  { name: "Testimonios", href: "/#testimonios" },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="group flex h-full flex-col rounded-[2.2rem] border border-black/10 bg-white p-7 text-black transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-2xl">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#ff5a00]">
        Paquete
      </p>

      <h3 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
        {plan.nombre}
      </h3>

      <p className="mt-4 inline-flex w-fit rounded-full bg-[#ff5a00] px-5 py-2 text-sm font-black uppercase text-white">
        {plan.precio}
      </p>

      <div className="mt-7">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-black/50 transition group-hover:text-white/50">
          Incluye
        </p>

        <ul className="mt-4 space-y-3">
          {plan.incluye.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm font-semibold leading-6 text-black/70 transition group-hover:text-white/75"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff5a00]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7 border-t border-black/10 pt-6 transition group-hover:border-white/10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff5a00]">
          Sirve para
        </p>
        <p className="mt-3 text-sm font-medium leading-6 text-black/65 transition group-hover:text-white/70">
          {plan.sirve}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ff5a00]">
          Ideal para
        </p>
        <p className="mt-3 text-sm font-medium leading-6 text-black/65 transition group-hover:text-white/70">
          {plan.ideal}
        </p>
      </div>

      <a
        href={`https://wa.me/51971731985?text=${encodeURIComponent(
          `Hola, quiero cotizar el paquete ${plan.nombre} de Mapache Studio.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex w-fit rounded-full bg-black px-6 py-3 text-sm font-black uppercase text-white transition group-hover:bg-[#ff5a00]"
      >
        Cotizar
      </a>
    </article>
  );
}

export default function PaquetesPage() {
  const [menuHidden, setMenuHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const lastScroll = useRef(0);

  useEffect(() => {
    lastScroll.current = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isTop = currentScroll <= 20;

      setScrolled(!isTop);

      if (!isTop && currentScroll > lastScroll.current && currentScroll > 90) {
        setMenuHidden(true);
      } else {
        setMenuHidden(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    setMouse({ x, y });
  };

  return (
    <main className="overflow-x-hidden bg-white text-black">
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          menuHidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-black" : "bg-transparent"}`}
      >
        <nav className="flex w-full items-center justify-between px-8 py-5 md:px-10 lg:px-12">
          <Link href="/#inicio" className="flex items-center gap-4 text-white">
            <div className="relative h-12 w-12">
              <Image
                src="/assets/isotipo.svg"
                alt="Mapache Studio"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden leading-tight sm:block">
              <p className="text-base font-black tracking-tight text-white">
                MAPACHE STUDIO
              </p>
              <p className="text-xs font-bold text-white/80">
                Marketing & Contenido
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-white md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-black text-white transition hover:text-[#ff5a00]"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="#contacto"
              className={`rounded-full px-6 py-3 text-sm font-black text-white transition ${
                scrolled
                  ? "bg-[#ff5a00] hover:bg-white hover:text-black"
                  : "bg-black hover:bg-white hover:text-black"
              }`}
            >
              Agendar cita
            </a>
          </div>

          <a
            href="#contacto"
            className="rounded-full bg-black px-5 py-3 text-xs font-black text-white md:hidden"
          >
            Cita
          </a>
        </nav>
      </header>

      <section
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden bg-[#ff5a00] px-6 pb-28 pt-40"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-10 h-[520px] w-[260px] rotate-[22deg] rounded-full bg-white/20" />
          <div className="absolute left-[38%] top-[-60px] h-[520px] w-[260px] rotate-[22deg] rounded-full bg-black/10" />
          <div className="absolute right-[-80px] top-0 h-[650px] w-[270px] rotate-[22deg] rounded-full bg-white/20" />
          <div className="absolute bottom-[-180px] left-[20%] h-[360px] w-[900px] rounded-[100%] bg-black/10" />
        </div>

        <h1 className="pointer-events-none absolute left-4 top-36 select-none text-[17vw] font-black leading-none tracking-[-0.08em] text-white/12">
          PAQUETES
        </h1>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div
            style={{
              transform: `translate(${mouse.x * -28}px, ${mouse.y * -28}px)`,
            }}
            className="relative z-20 transition-transform duration-150 ease-out"
          >
            <p className="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-wide text-black shadow-lg md:text-sm">
              Cotización por rubro
            </p>

            <h2 className="max-w-5xl text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-black md:text-[7.5vw] lg:text-[96px]">
              Elige el paquete
              <br />
              para tu negocio
            </h2>

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-black/75">
              Revisa las propuestas de contenido mensual para restaurantes,
              belleza, salud, fitness, retail y eventos. Todo está organizado en
              una sola página para que encuentres rápido lo que necesitas.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {rubros.map((rubro) => (
                <a
                  key={rubro.id}
                  href={`#${rubro.id}`}
                  className="rounded-full bg-black px-5 py-3 text-xs font-black uppercase text-white transition hover:bg-white hover:text-black"
                >
                  {rubro.titulo}
                </a>
              ))}
            </div>
          </div>

          <div className="relative z-10 hidden min-h-[560px] items-center justify-center overflow-visible md:flex">
            <div
              style={{
                transform: `translate(${mouse.x * 85}px, ${
                  mouse.y * 85
                }px) rotate(${mouse.x * 8}deg)`,
              }}
              className="relative h-[560px] w-[560px] overflow-visible transition-transform duration-150 ease-out lg:h-[700px] lg:w-[700px]"
            >
              <div className="absolute right-16 top-24 h-28 w-28 rounded-full bg-black lg:h-32 lg:w-32" />
              <div className="absolute bottom-28 left-24 h-28 w-28 rounded-full bg-white lg:h-32 lg:w-32" />

              <Image
                src="/assets/mapaches/mapache-paquetes.png"
                alt="Mapache paquetes"
                fill
                sizes="(max-width: 768px) 0px, 700px"
                className="object-contain drop-shadow-2xl"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/51971731985"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-black text-white shadow-xl transition hover:scale-110 hover:bg-[#25D366]"
        >
          W
        </a>
      </section>

      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff5a00]">
              Todos los paquetes incluyen
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {incluidos.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/75"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff5a00]">
              Servicios adicionales
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {noIncluidos.map((item) => (
                <p
                  key={item}
                  className="rounded-2xl bg-white/5 px-4 py-3 text-sm font-semibold text-white/75"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {rubros.map((rubro, index) => (
        <section
          key={rubro.id}
          id={rubro.id}
          className={`scroll-mt-24 px-6 py-28 ${
            index % 2 === 0 ? "bg-white text-black" : "bg-[#f7f7f7] text-black"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-10 md:grid-cols-[1fr_340px]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff5a00]">
                  {rubro.etiqueta}
                </p>

                <h2 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
                  {rubro.titulo}
                </h2>

                <p className="mt-5 max-w-3xl text-lg font-bold leading-8 text-black/70">
                  {rubro.subtitulo}
                </p>

                <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-black/60">
                  {rubro.enfoque}
                </p>
              </div>

              <div className="relative mx-auto h-[260px] w-[260px] md:h-[320px] md:w-[320px]">
                <Image
                  src={rubro.imagen}
                  alt={rubro.titulo}
                  fill
                  sizes="(max-width: 768px) 260px, 320px"
                  className="object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </div>

            <div className="mt-16 grid gap-7 lg:grid-cols-3">
              {rubro.planes.map((plan) => (
                <PlanCard key={plan.nombre} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section
        id="contacto"
        className="relative overflow-visible bg-black px-6 pb-28 pt-32 text-white"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[170px] w-[300px] -translate-x-1/2 -translate-y-[58%] md:h-[240px] md:w-[420px] md:-translate-y-[83%]">
          <Image
            src="/assets/mapaches/mapache-footer.png"
            alt="Mapache asomándose de Mapache Studio"
            fill
            sizes="(max-width: 768px) 300px, 420px"
            className="object-contain drop-shadow-2xl"
            unoptimized
          />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff5a00]">
            Contacto
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
            ¿Listo para vender más?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Escríbenos y cuéntanos qué necesita tu marca. Te ayudamos a crear
            una presencia digital más profesional.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/51971731985"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#ff5a00] px-9 py-4 text-sm font-black uppercase text-white transition hover:scale-105 hover:bg-white hover:text-black"
            >
              Hablar por WhatsApp
            </a>

            <a
              href="https://www.instagram.com/somos.mapachestudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white/30 px-9 py-4 text-sm font-black uppercase text-white transition hover:scale-105 hover:bg-white hover:text-black"
            >
              Ver Instagram
            </a>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-sm font-bold text-white/50">
              © 2026 Mapache Studio. Marketing, contenido y producción visual.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}