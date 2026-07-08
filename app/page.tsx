"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

export default function Home() {
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

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Paquetes", href: "#paquetes" },
    { name: "Clientes", href: "#clientes" },
    { name: "Testimonios", href: "#testimonios" },
  ];

  const servicios = [
    {
      numero: "01",
      titulo: "Branding e Identidad Visual",
      descripcion:
        "Creamos marcas desde cero o renovamos negocios que necesitan verse más profesionales. Diseñamos logos, isotipos, paletas de color, tipografías y aplicaciones visuales para construir una identidad sólida.",
      imagen: "/assets/mapaches/mapache-branding.png",
    },
    {
      numero: "02",
      titulo: "Fotografía Comercial",
      descripcion:
        "Fotos profesionales de productos, platos, instalaciones, personal y catálogo para elevar el valor visual de tu negocio y hacer que tu marca se vea más atractiva, confiable y lista para vender.",
      imagen: "/assets/mapaches/mapache-fotografia.png",
    },
    {
      numero: "03",
      titulo: "Video para Redes",
      descripcion:
        "Reels, TikToks y videos verticales diseñados para captar atención, mostrar tus productos o servicios y mantener activa tu presencia en redes con contenido dinámico y de alta retención.",
      imagen: "/assets/mapaches/mapache-video.png",
    },
    {
      numero: "04",
      titulo: "Diseño Gráfico y Contenido Visual",
      descripcion:
        "Diseñamos flyers, menús digitales, banners, carruseles, historias y piezas promocionales alineadas a la esencia visual de tu marca para comunicar con más claridad e impacto.",
      imagen: "/assets/mapaches/mapache-diseno.png",
    },
    {
      numero: "05",
      titulo: "Paquetes Completos por Rubro",
      descripcion:
        "Soluciones mensuales que combinan fotografía, video y contenido estratégico para restaurantes, cafeterías, barberías, spas, clínicas, gimnasios, boutiques y negocios locales.",
      imagen: "/assets/mapaches/mapache-paquetes.png",
    },
    {
      numero: "06",
      titulo: "Gestión Digital y Publicidad",
      descripcion:
        "Soporte adicional para programar contenido, mantener activas tus redes, ordenar publicaciones, administrar presencia digital básica y configurar campañas publicitarias para crecer mejor.",
      imagen: "/assets/mapaches/mapache-gestion.png",
    },
    {
      numero: "07",
      titulo: "Eventos y Coberturas",
      descripcion:
        "Cobertura profesional para inauguraciones, aniversarios, activaciones, lanzamientos, ferias, eventos empresariales y momentos importantes que tu marca necesita registrar con calidad.",
      imagen: "/assets/mapaches/mapache-eventos.png",
    },
    {
      numero: "08",
      titulo: "Producciones Audiovisuales Especiales",
      descripcion:
        "Desarrollamos proyectos de mayor impacto como videos institucionales, documentales cortos, entrevistas, testimoniales, videoclips, spots publicitarios y campañas creativas.",
      imagen: "/assets/mapaches/mapache-produccion.png",
    },
  ];

  const rubros = [
    {
      titulo: "Gastronomía",
      descripcion:
        "Restaurantes, cafeterías, pollerías, cevicherías, restobares y dark kitchens que quieren despertar antojo y vender más.",
      imagen: "/assets/mapaches/mapache-gastronomia.png",
      href: "/paquetes#gastronomia",
    },
    {
      titulo: "Belleza y Estética",
      descripcion:
        "Barberías, salones, spas, uñas, cejas, pestañas y centros de estética que necesitan una imagen más aspiracional.",
      imagen: "/assets/mapaches/mapache-belleza.png",
      href: "/paquetes#belleza",
    },
    {
      titulo: "Salud y Veterinarias",
      descripcion:
        "Clínicas, consultorios, odontólogos, veterinarias y especialistas que quieren comunicar confianza y autoridad.",
      imagen: "/assets/mapaches/mapache-salud.png",
      href: "/paquetes#salud",
    },
    {
      titulo: "Fitness y Bienestar",
      descripcion:
        "Gimnasios, boxes, academias, entrenadores y centros deportivos que necesitan contenido con energía y comunidad.",
      imagen: "/assets/mapaches/mapache-fitness.png",
      href: "/paquetes#fitness",
    },
    {
      titulo: "Boutiques y Retail",
      descripcion:
        "Tiendas de ropa, accesorios, showrooms y marcas que venden por redes y necesitan catálogo visual constante.",
      imagen: "/assets/mapaches/mapache-retail.png",
      href: "/paquetes#retail",
    },
    {
      titulo: "Bares, Discotecas y Eventos",
      descripcion:
        "Locales nocturnos, activaciones, aniversarios, inauguraciones y eventos que necesitan contenido con impacto.",
      imagen: "/assets/mapaches/mapache-nocturno.png",
      href: "/paquetes#eventos",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-white text-black">
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          menuHidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-black" : "bg-transparent"}`}
      >
        <nav className="flex w-full items-center justify-between px-8 py-5 md:px-10 lg:px-12">
          <a href="#inicio" className="flex items-center gap-4 text-white">
            <div className="relative h-12 w-12">
              <Image
                src="/assets/isotipo.svg"
                alt="Mapache Studio"
                fill
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
          </a>

          <div className="hidden items-center gap-8 text-white md:flex">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-black text-white transition hover:text-[#ff5a00]"
              >
                {item.name}
              </a>
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
        id="inicio"
        onMouseMove={handleMouseMove}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#ff5a00] px-6 pt-28"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-10 h-[520px] w-[260px] rotate-[22deg] rounded-full bg-white/20" />
          <div className="absolute left-[38%] top-[-60px] h-[520px] w-[260px] rotate-[22deg] rounded-full bg-black/10" />
          <div className="absolute right-[-80px] top-0 h-[650px] w-[270px] rotate-[22deg] rounded-full bg-white/20" />
          <div className="absolute bottom-[-180px] left-[20%] h-[360px] w-[900px] rounded-[100%] bg-black/10" />
        </div>

        <h2 className="pointer-events-none absolute left-4 top-[18%] select-none text-[18vw] font-black leading-none tracking-[-0.08em] text-white/12">
          MAPACHE
        </h2>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1fr_1fr]">
          <div
            style={{
              transform: `translate(${mouse.x * -28}px, ${mouse.y * -28}px)`,
            }}
            className="relative z-20 transition-transform duration-150 ease-out"
          >
            <p className="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-wide text-black shadow-lg md:text-sm">
              Agencia de marketing y contenido
            </p>

            <h1 className="max-w-5xl text-[13vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-black md:text-[7.6vw] lg:text-[92px]">
              ¿Cansado de que
              <br />
              nada funcione?
            </h1>

            <h2 className="mt-7 max-w-4xl text-[11vw] font-black uppercase leading-[0.86] tracking-[-0.07em] text-white md:text-[5.5vw] lg:text-[68px]">
              Creamos contenidos
              <br />
              que venden
            </h2>

            <p className="mt-7 max-w-xl text-base font-semibold leading-7 text-black/75 md:text-lg">
              Convertimos ideas en contenido estratégico, visual y comercial
              para que tu marca se vea profesional, conecte mejor y consiga más
              clientes.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-full bg-black px-8 py-4 text-center text-sm font-black uppercase text-white transition hover:scale-105 hover:bg-white hover:text-black"
              >
                Agendar cita
              </a>

              <a
                href="#servicios"
                className="rounded-full border-2 border-black px-8 py-4 text-center text-sm font-black uppercase text-black transition hover:bg-black hover:text-white"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative z-10 hidden min-h-[620px] items-center justify-center md:flex">
            <div
              style={{
                transform: `translate(${mouse.x * 85}px, ${
                  mouse.y * 85
                }px) rotate(${mouse.x * 8}deg)`,
              }}
              className="relative h-[570px] w-[570px] transition-transform duration-150 ease-out lg:h-[660px] lg:w-[660px]"
            >
              <div className="absolute right-8 top-20 h-28 w-28 rounded-full bg-black lg:h-32 lg:w-32" />
              <div className="absolute bottom-20 left-16 h-28 w-28 rounded-full bg-white lg:h-32 lg:w-32" />

<Image
  src="/assets/mapaches/mapache-leyendo.png"
  alt="Mapache leyendo de Mapache Studio"
  fill
  sizes="(max-width: 768px) 0px, 660px"
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

      <section id="servicios" className="relative bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff5a00]">
            Servicios
          </p>

          <h2 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Lo que hacemos para que tu marca se vea, conecte y venda mejor
          </h2>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-black/65">
            En Mapache Studio combinamos estrategia, diseño, contenido y
            producción visual para ayudar a negocios, marcas y emprendimientos a
            crecer con una imagen más profesional y una comunicación más
            efectiva.
          </p>

          <div className="mt-28 grid gap-x-6 gap-y-24 md:grid-cols-2 lg:grid-cols-4">
            {servicios.map((servicio) => (
              <article
                key={servicio.numero}
                className="group relative min-h-[430px] overflow-visible rounded-[2.3rem] border border-black/10 bg-[#f7f7f7] px-6 pb-7 pt-28 transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute -top-20 left-1/2 z-30 h-[210px] w-[210px] -translate-x-1/2 transition duration-300 group-hover:-translate-y-4 group-hover:scale-110">
                  <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <p className="relative z-10 text-sm font-black tracking-[0.25em] text-[#ff5a00]">
                  {servicio.numero}
                </p>

                <h3 className="relative z-10 mt-4 text-2xl font-black uppercase leading-[0.95] tracking-[-0.04em]">
                  {servicio.titulo}
                </h3>

                <p className="relative z-10 mt-5 text-sm font-medium leading-6 text-black/65 transition group-hover:text-white/70">
                  {servicio.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="paquetes" className="relative bg-[#ff5a00] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-white">
            Paquetes
          </p>

          <h2 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-black md:text-7xl">
            ¿A qué te dedicas?
            <br />
            Tenemos paquetes adaptados a ti
          </h2>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-black/70">
            No todos los negocios necesitan el mismo contenido. Por eso
            adaptamos la fotografía, video, diseño y estrategia según tu rubro,
            tu ritmo y tus objetivos.
          </p>

          <div className="mt-28 grid gap-x-6 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
            {rubros.map((rubro) => (
              <Link
                key={rubro.titulo}
                href={rubro.href}
                className="group relative min-h-[330px] overflow-visible rounded-[2.3rem] border border-black/10 bg-white px-7 pb-8 pt-28 text-black transition duration-300 hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute -top-24 right-2 z-30 h-[230px] w-[230px] transition duration-300 group-hover:-translate-y-4 group-hover:rotate-3 group-hover:scale-110">
                  <Image
                    src={rubro.imagen}
                    alt={rubro.titulo}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <h3 className="relative z-10 max-w-[320px] text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em]">
                  {rubro.titulo}
                </h3>

                <p className="relative z-10 mt-5 max-w-[360px] text-base font-medium leading-7 text-black/65 transition group-hover:text-white/70">
                  {rubro.descripcion}
                </p>

                <p className="relative z-10 mt-7 text-sm font-black uppercase tracking-[0.25em] text-[#ff5a00]">
                  Ver paquetes →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/paquetes"
              className="inline-flex rounded-full bg-black px-9 py-4 text-sm font-black uppercase text-white transition hover:scale-105 hover:bg-white hover:text-black"
            >
              Explorar paquetes
            </Link>
          </div>
        </div>
      </section>

      <section
        id="clientes"
        className="min-h-screen bg-black px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#ff5a00]">
            Clientes
          </p>

          <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Marcas que confían en nuestro trabajo
          </h2>
        </div>
      </section>

      <section id="testimonios" className="min-h-screen bg-[#ff5a00] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-white">
            Testimonios
          </p>

          <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
            Lo que dicen nuestros clientes
          </h2>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-visible bg-black px-6 pb-28 pt-32 text-white"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[170px] w-[300px] -translate-x-1/2 -translate-y-[83%] md:h-[240px] md:w-[420px] md:-translate-y-[83%]">
          <Image
            src="/assets/mapaches/mapache-footer.png"
            alt="Mapache asomándose de Mapache Studio"
            fill
            className="object-contain drop-shadow-2xl"
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
              href="https://www.instagram.com/"
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