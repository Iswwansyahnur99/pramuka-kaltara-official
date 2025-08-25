import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Book } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-scout-brown to-scout-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-5xl mb-4">
            Profil Organisasi
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Mengenal lebih dalam Kwartir Daerah Gerakan Pramuka Kalimantan Utara
          </p>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-8 text-center">
              Sejarah Pramuka Kalimantan Utara
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Gerakan Pramuka Kalimantan Utara dimulai bersamaan dengan pembentukan 
                Provinsi Kalimantan Utara pada tahun 2012. Sebagai provinsi termuda 
                di Indonesia, Kalimantan Utara membangun struktur kepramukaan yang 
                solid dan profesional untuk membina generasi muda.
              </p>
              
              <p className="mb-6">
                Kwartir Daerah Pramuka Kalimantan Utara resmi terbentuk pada tahun 
                2013 dengan dukungan penuh dari Pemerintah Provinsi dan Kwartir 
                Nasional. Sejak awal, Kwarda Kaltara berkomitmen untuk mengembangkan 
                kepramukaan yang berkualitas dan berdampak positif bagi masyarakat.
              </p>
              
              <p>
                Kini, Kwarda Kaltara membina lebih dari 15.000 anggota pramuka 
                yang tersebar di 5 kabupaten/kota dengan 50+ kwartir cabang dan 
                ratusan kwartir ranting yang aktif melaksanakan kegiatan kepramukaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 bg-scout-brown/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="card-scout">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-scout-brown" />
                  <h3 className="font-playfair font-bold text-2xl text-scout-brown">Visi</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Menjadi Kwartir Daerah terdepan dalam membentuk generasi muda 
                  Kalimantan Utara yang berkarakter, beriman, bertakwa, berakhlak 
                  mulia, dan siap mengabdi untuk kemajuan bangsa dan negara."
                </p>
              </CardContent>
            </Card>

            <Card className="card-scout">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Book className="h-8 w-8 text-scout-brown" />
                  <h3 className="font-playfair font-bold text-2xl text-scout-brown">Misi</h3>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-scout-maroon rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Menyelenggarakan pendidikan kepramukaan yang berkualitas
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-scout-maroon rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mengembangkan karakter dan kepribadian generasi muda
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-scout-maroon rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Membangun kerjasama dengan berbagai pihak
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-scout-maroon rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Melestarikan budaya dan lingkungan hidup
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Kerja */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-12 text-center">
            Program Kerja Unggulan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Pembinaan Karakter",
                icon: Users,
                description: "Program pembentukan karakter melalui kegiatan kepramukaan yang terstruktur dan berkelanjutan.",
                badge: "Prioritas Utama"
              },
              {
                title: "Pendidikan Lingkungan",
                icon: Award,
                description: "Edukasi pelestarian lingkungan hidup dan pembangunan berkelanjutan untuk generasi muda.",
                badge: "Program Inovasi"
              },
              {
                title: "Pemberdayaan Masyarakat",
                icon: Target,
                description: "Kegiatan bakti sosial dan pemberdayaan masyarakat sebagai wujud pengabdian pramuka.",
                badge: "Dampak Sosial"
              }
            ].map((program, index) => (
              <Card key={index} className="card-scout hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-scout-brown/10 rounded-full mb-4 mx-auto">
                    <program.icon className="h-8 w-8 text-scout-brown" />
                  </div>
                  <Badge variant="secondary" className="mb-2 bg-scout-gold text-scout-brown">
                    {program.badge}
                  </Badge>
                  <h3 className="font-bold text-xl text-scout-brown">{program.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}