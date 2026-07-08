import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Paquetes", href: "/#paquetes" },
  { name: "Clientes", href: "/#clientes" },
  { name: "Testimonios", href: "/#testimonios" },
];

export default function NotFound() {
  return (
    <main className="overflow-x-hidden bg-white text-black">
      <header className="fixed left-0 top-0 z-50 w-full bg-black">
        <nav className="flex w-full items-center justify-between px-8 py-5 md:px-10 lg:px-12">
          <Link href="/#inicio" className="flex items-center gap-4 text-white">
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

            <Link
              href="/#contacto"
              className="rounded-full bg-[#ff5a00] px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-black"
            >
              Agendar cita
            </Link>
          </div>

          <Link
            href="/#contacto"
            className="rounded-full bg-[#ff5a00] px-5 py-3 text-xs font-black text-white md:hidden"
          >
            Cita
          </Link>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#ff5a00] px-6 pb-24 pt-36">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-10 h-[520px] w-[260px] rotate-[22deg] rounded-full bg-white/20" />
          <div className="absolute left-[38%] top-[-60px] h-[520px] w-[260px] rotate-[22deg] rounded-full bg-black/10" />
          <div className="absolute right-[-80px] top-0 h-[650px] w-[270px] rotate-[22deg] rounded-full bg-white/20" />
          <div className="absolute bottom-[-180px] left-[20%] h-[360px] w-[900px] rounded-[100%] bg-black/10" />
        </div>

        <h1 className="pointer-events-none absolute left-4 top-[18%] select-none text-[28vw] font-black leading-none tracking-[-0.1em] text-white/12">
          404
        </h1>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1fr_0.9fr]">
          <div className="relative z-20">
            <p className="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-wide text-black shadow-lg md:text-sm">
              Página no encontrada
            </p>

            <h2 className="max-w-5xl text-[18vw] font-black uppercase leading-[0.78] tracking-[-0.1em] text-black md:text-[10vw] lg:text-[132px]">
              Oops,
              <br />
              error 404
            </h2>

            <h3 className="mt-7 max-w-4xl text-[10vw] font-black uppercase leading-[0.86] tracking-[-0.07em] text-white md:text-[5vw] lg:text-[64px]">
              Aquí no hay nada
              <br />
              por ahora
            </h3>

            <p className="mt-7 max-w-xl text-base font-semibold leading-7 text-black/75 md:text-lg">
              Parece que esta página se perdió en el backend. Puedes volver al
              inicio o revisar nuestros paquetes de contenido.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#inicio"
                className="rounded-full bg-black px-8 py-4 text-center text-sm font-black uppercase text-white transition hover:scale-105 hover:bg-white hover:text-black"
              >
                Volver al inicio
              </Link>

              <Link
                href="/paquetes"
                className="rounded-full border-2 border-black px-8 py-4 text-center text-sm font-black uppercase text-black transition hover:bg-black hover:text-white"
              >
                Ver paquetes
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden min-h-[580px] items-center justify-center md:flex">
            <div className="relative h-[520px] w-[520px] lg:h-[640px] lg:w-[640px]">
              <div className="absolute right-8 top-20 h-28 w-28 rounded-full bg-black lg:h-32 lg:w-32" />
              <div className="absolute bottom-24 left-20 h-28 w-28 rounded-full bg-white lg:h-32 lg:w-32" />

              <Image
  src="/assets/mapaches/404.png"
  alt="Mapache 404 de Mapache Studio"
  fill
  className="object-contain drop-shadow-2xl"
  priority
/>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/51900000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-black text-lg font-black text-white shadow-xl transition hover:scale-110 hover:bg-[#25D366]"
        >
          W
        </a>
      </section>

      <section
        id="contacto"
        className="relative overflow-visible bg-black px-6 pb-28 pt-32 text-white"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[170px] w-[300px] -translate-x-1/2 -translate-y-[58%] md:h-[240px] md:w-[420px] md:-translate-y-[83%]">
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
              href="https://wa.me/51900000000"
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