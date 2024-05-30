import Image from "next/image";

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
              src="/images/main_logo.png"
              alt="FauxRiches logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          {/* </a> */}
          <a href="#" className="block text-sm font-semibold leading-6 text-white">
            Se connecter <span aria-hidden="true">&rarr;</span>
          </a>
        </nav>
      </header>
      <main className="relative isolate h-full overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <Image
          src="/images/concert-background.avif"
          alt=""
          fill={true}
          className="absolute inset-0 -z-10 brightness-50 blur-sm object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Retrouvez nous le vendredi 21 juin 2024 à Lyon.{" "}
                <a href="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  En savoir plus <span aria-hidden="true">&rarr;</span>
                </a>
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
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Découvrir notre discographie
                </a>
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