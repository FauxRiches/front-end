
import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from '@/store/authStore';
import { useRouter } from "next/router";

import { Menu, CircleUser } from "lucide-react";
import ThemeSelector from "@/components/theme-selector";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from "react";
export default function Header() {
  const { user, login, logout, isLoggedIn } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }, [router, isLoggedIn]);

  const logoutUser = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image
          src="/images/logo.webp"
          alt="FauxRiches logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="sr-only">4Riches</span>
      </Link>
      <Link
        href="dashboard"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </Link>
    </nav>
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Image
              src="/images/logo.webp"
              alt="FauxRiches logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="sr-only">4Riches</span>
          </Link>
          <Link
            href="dashboard"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
    <div className="flex w-full items-center md:ml-auto">
      <div className="ml-auto">
        <ThemeSelector />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logoutUser}
            >Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
  );
}