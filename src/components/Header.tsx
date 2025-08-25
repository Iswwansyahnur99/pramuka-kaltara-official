import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "/profil" },
  { name: "Berita & Artikel", href: "/berita" },
  { name: "Agenda", href: "/agenda" },
  { name: "Galeri", href: "/galeri" },
  { name: "Download", href: "/download" },
  { name: "PPID", href: "/ppid" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-scout-brown rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">KD</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-playfair font-bold text-xl text-scout-brown leading-tight">
                Kwartir Daerah
              </h1>
              <p className="text-sm text-scout-maroon font-medium">
                Gerakan Pramuka Kalimantan Utara
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-scout-brown bg-scout-brown/10"
                    : "text-gray-700 hover:text-scout-brown hover:bg-scout-brown/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-scout-brown bg-scout-brown/10"
                      : "text-gray-700 hover:text-scout-brown hover:bg-scout-brown/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}