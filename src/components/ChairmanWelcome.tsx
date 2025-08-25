import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ketuaPortrait from "@/assets/ketua-kwarda-portrait.jpg";

export default function ChairmanWelcome() {
  return (
    <section className="py-12 bg-gradient-to-r from-scout-brown/5 to-scout-green/5">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Chairman Photo */}
            <div className="relative h-96 md:h-auto">
              <img
                src={ketuaPortrait}
                alt="Ketua Kwartir Daerah Pramuka Kalimantan Utara"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-scout-brown/20 to-transparent"></div>
            </div>

            {/* Welcome Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-2">
                  Sambutan Ketua Kwarda
                </h2>
                <div className="w-16 h-1 bg-scout-maroon"></div>
              </div>

              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Selamat datang di portal resmi Kwartir Daerah Gerakan Pramuka 
                  Kalimantan Utara. Sebagai wadah pembinaan generasi muda, kami 
                  berkomitmen untuk terus mengembangkan karakter kepramukaan 
                  yang berlandaskan Pancasila dan UUD 1945.
                </p>
                <p>
                  Melalui portal ini, kami menyajikan informasi terkini mengenai 
                  kegiatan kepramukaan di Kalimantan Utara serta menjadi sarana 
                  komunikasi yang efektif antara Kwarda dengan seluruh jajaran 
                  dan masyarakat.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/profil/sambutan">
                  <Button variant="scout" className="w-full sm:w-auto">
                    Baca Selengkapnya
                  </Button>
                </Link>
                <Link to="/profil">
                  <Button variant="scout-outline" className="w-full sm:w-auto">
                    Profil Lengkap
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}