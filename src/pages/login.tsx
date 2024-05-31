import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Login() {
  const {setTheme } = useTheme();

  return (
    <main className="inline-flex w-full min-h-[100svh] dark:bg-black">
      <div className="mx-auto w-full max-w-xl flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <Link href="/" className="block w-fit">
          <Image
            src="/images/logo.webp"
            alt="FauxRiches logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Se connecter à votre compte
        </h2>
        <Button
          variant="default"
          className="w-full"
          onClick={() => setTheme("light")}
        >light</Button>
        <Button
          variant="default"
          className="w-full"
          onClick={() => setTheme("dark")}
        >dark</Button>
        <form action="#" method="POST" className="space-y-6 mt-10">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Adresse email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mot de passe
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-gray-700"
              >
                Se souvenir de moi
              </label>
            </div>

            <div className="text-sm leading-6">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <Button variant="default" className="w-full dark">
            Se connecter
          </Button>
        </form>

        <div className="flex justify-center items-center gap-4 mt-8">
          <span className="w-full h-px border-t border-gray-200 hidden xs:block" />
          <Link
            href="/"
            className="text-gray-900 whitespace-nowrap text-sm font-medium leading-6"
          >
            Retour en arrière
          </Link>
          <span className="w-full h-px border-t border-gray-200 hidden xs:block" />
        </div>
      </div>
      <div className="relative hidden lg:block w-full max-w-[50%]">
        <Image
          src="/images/poster.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw"
          priority
          className="object-cover"
        />
      </div>
    </main>
  );
}
