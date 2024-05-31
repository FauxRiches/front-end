import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="overflow-hidden w-screen h-[100svh]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* <a href="#" className="block -m-1.5 p-1.5"> */}
          <Image
            src="/images/logo.webp"
            alt="FauxRiches logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          {/* </a> */}
          <Link href="/login" className="block text-sm font-semibold leading-6 text-white">
            Se connecter <span aria-hidden="true">&rarr;</span>
          </Link>
        </nav>
      </header>
      <main className="relative isolate h-full overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <Image
          src="/images/concert-background.avif"
          alt=""
          fill
          className="absolute inset-0 -z-10 brightness-50 blur-sm object-cover"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Retrouvez nous le vendredi 21 juin 2024 à Lyon.
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                FAUXRICHES
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Découvrez nos dernières créations, plongez dans notre
                discographie et rejoignez notre communauté de fans passionnés.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="default" size="lg">

                  Découvrir notre discographie
                </Button>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Spotify <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
