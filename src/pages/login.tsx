import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from '@/store/authStore';
import axios from "axios";
import { useRouter } from "next/router";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, logout, isLoggedIn } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/login_check", {
      username,
      password
    })
      .then(function (response) {
        login({ id: response.data.id, name: username, token: response.data.token, refreshToken: response.data.refresh_token });
        router.push("/discover");
      console.log("Login successful:", response);
    })
    .catch(function (error) {
      console.log("Login error:", error);
    });
  };


  return (
    <main className="inline-flex w-full min-h-[100svh] bg-background text-foreground">
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
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight">
          Se connecter à votre compte
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <Checkbox id="remember" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Se souvenir de moi
                </label>
              </div>
            </div>

            <div className="text-sm leading-6">
              <a
                href="#"
                className="font-semibold text-primary hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>
          </div>

          <Button variant="default" type="submit" className="w-full dark">
            Se connecter
          </Button>
        </form>

        <div className="flex justify-center items-center gap-4 mt-8">
          <span className="w-full h-px border-t border-gray-200 hidden xs:block" />
          <Link
            href="/"
            className="text-primary whitespace-nowrap text-sm font-medium leading-6"
          >
            &larr; Retour en arrière
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
