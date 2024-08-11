import Image from "next/image";
import Link from "next/link";
import { CircleUser, Menu, Store } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base w-[34px]"
        >
          <Store />
          <span className="sr-only">Facto Store</span>
        </Link>
        <Link
          href="/products"
          className="text-z-blue transition-colors hover:text-dark-blue hover:underline underline-offset-8"
        >
          Products
        </Link>
        <Link
          href="/products/customize"
          className="text-z-blue transition-colors hover:text-dark-blue hover:underline underline-offset-8"
        >
          Customize
        </Link>
        <Link
          href="/dashboard"
          className="text-z-blue transition-colors hover:text-dark-blue hover:underline underline-offset-8"
        >
          Dashboard
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold w-[154px]"
            >
              <Image
                src="/z.svg"
                alt="Z"
                width={154}
                height={40}
                priority
                className=""
              />
              <span className="sr-only">My Z</span>
            </Link>
            <Link
              href="/dashboard"
              className="text-z-blue hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/settings"
              className="text-z-blue hover:text-foreground"
            >
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-dove transition-colors hover:bg-slate-100"
              >
                <CircleUser className="h-5 w-5 text-z-blue hover:text-dark-blue" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
