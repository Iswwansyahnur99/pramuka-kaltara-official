import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Eye } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Kemah Besar Kwartir Daerah 2024 Sukses Digelar",
    excerpt: "Kemah Besar Kwarda Kalimantan Utara diikuti lebih dari 2.000 peserta dari seluruh Kwarcab...",
    date: "15 Maret 2024",
    category: "Kegiatan",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    views: 1250
  },
  {
    id: 2,
    title: "Pelatihan Pembina Pramuka Tingkat Provinsi",
    excerpt: "Workshop peningkatan kapasitas pembina pramuka dilaksanakan untuk meningkatkan kualitas pembinaan...",
    date: "10 Maret 2024",
    category: "Pelatihan",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=250&fit=crop",
    views: 890
  },
  {
    id: 3,
    title: "Program Peduli Lingkungan Goes to School",
    excerpt: "Kwarda Kaltara menggelar program edukasi lingkungan di sekolah-sekolah untuk meningkatkan kesadaran...",
    date: "5 Maret 2024",
    category: "Program",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
    views: 675
  },
  {
    id: 4,
    title: "Rapat Koordinasi Kwarcab Se-Kalimantan Utara",
    excerpt: "Koordinasi program kerja tahun 2024 dan evaluasi kegiatan berjalan dengan baik...",
    date: "1 Maret 2024",
    category: "Rapat",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
    views: 524
  }
];

export default function LatestNews() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-4xl text-scout-brown mb-4">
            Berita & Kegiatan Terbaru
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Informasi terkini mengenai kegiatan dan program Gerakan Pramuka di Kalimantan Utara
          </p>
          <div className="w-24 h-1 bg-scout-maroon mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsData.map((news) => (
            <Card key={news.id} className="card-scout hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-scout-brown text-white">
                    {news.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="font-bold text-lg leading-tight text-scout-brown group-hover:text-scout-maroon transition-colors line-clamp-2">
                  {news.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {news.views}
                  </div>
                </div>
                
                <Link to={`/berita/${news.id}`}>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto text-scout-brown hover:text-scout-maroon">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/berita">
            <Button size="lg" variant="scout">
              Lihat Semua Berita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}