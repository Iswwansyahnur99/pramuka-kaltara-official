import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Smartphone, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-scout-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-scout-brown font-bold text-xl">KD</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Kwartir Daerah</h3>
                <p className="text-scout-gold">Gerakan Pramuka Kalimantan Utara</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Portal resmi Kwartir Daerah Gerakan Pramuka Kalimantan Utara. 
              Menjadi pusat informasi kegiatan kepramukaan dan layanan keterbukaan 
              informasi publik untuk masyarakat Kalimantan Utara.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-scout-maroon rounded-full flex items-center justify-center hover:bg-scout-maroon-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-scout-maroon rounded-full flex items-center justify-center hover:bg-scout-maroon-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-scout-maroon rounded-full flex items-center justify-center hover:bg-scout-maroon-light transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-scout-maroon rounded-full flex items-center justify-center hover:bg-scout-maroon-light transition-colors">
                <Smartphone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <nav className="space-y-3">
              <Link to="/profil" className="block text-gray-300 hover:text-scout-gold transition-colors">
                Profil Organisasi
              </Link>
              <Link to="/berita" className="block text-gray-300 hover:text-scout-gold transition-colors">
                Berita & Artikel
              </Link>
              <Link to="/agenda" className="block text-gray-300 hover:text-scout-gold transition-colors">
                Agenda Kegiatan
              </Link>
              <Link to="/galeri" className="block text-gray-300 hover:text-scout-gold transition-colors">
                Galeri Dokumentasi
              </Link>
              <Link to="/download" className="block text-gray-300 hover:text-scout-gold transition-colors">
                Download Center
              </Link>
              <Link to="/ppid" className="block text-gray-300 hover:text-scout-gold transition-colors">
                Layanan PPID
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-scout-gold mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Jl. Mulawarman No. 123<br />
                  Tanjung Selor, Kalimantan Utara<br />
                  77212
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-scout-gold flex-shrink-0" />
                <p className="text-gray-300 text-sm">(0552) 123-456</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-scout-gold flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@kwarda-kaltara.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-scout-brown-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Kwartir Daerah Gerakan Pramuka Kalimantan Utara. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-scout-gold text-sm transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/ppid" className="text-gray-300 hover:text-scout-gold text-sm transition-colors">
              Keterbukaan Informasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}