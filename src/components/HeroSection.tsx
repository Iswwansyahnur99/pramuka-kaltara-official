import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-scout-activities.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kegiatan Pramuka Kalimantan Utara"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-section"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Bersatu, Berkarya, 
            <span className="block text-scout-gold">Mengabdi untuk Indonesia</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
            Kwartir Daerah Gerakan Pramuka Kalimantan Utara - 
            Membangun karakter generasi muda untuk masa depan bangsa
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/profil">
              <Button size="lg" variant="scout" className="text-lg px-8 py-4">
                Tentang Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/berita">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-scout-brown text-lg px-8 py-4"
              >
                Berita Terbaru
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-2">15,000+</h3>
              <p className="text-white/90">Anggota Pramuka</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-2">50+</h3>
              <p className="text-white/90">Kwartir Cabang</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-2">10+</h3>
              <p className="text-white/90">Program Unggulan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}