import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Eye, ArrowRight, Search, Filter } from "lucide-react";

const newsCategories = ["Semua", "Kegiatan", "Pelatihan", "Program", "Rapat", "Pengumuman"];

const allNews = [
  {
    id: 1,
    title: "Kemah Besar Kwartir Daerah 2024 Sukses Digelar",
    excerpt: "Kemah Besar Kwarda Kalimantan Utara diikuti lebih dari 2.000 peserta dari seluruh Kwarcab dengan berbagai kegiatan menarik dan edukatif. Kegiatan berlangsung selama 5 hari dengan antusiasme tinggi dari peserta.",
    date: "15 Maret 2024",
    category: "Kegiatan",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    views: 1250,
    author: "Humas Kwarda",
    featured: true
  },
  {
    id: 2,
    title: "Pelatihan Pembina Pramuka Tingkat Provinsi",
    excerpt: "Workshop peningkatan kapasitas pembina pramuka dilaksanakan untuk meningkatkan kualitas pembinaan. Diikuti 150 pembina dari seluruh Kalimantan Utara dengan materi terkini seputar kepramukaan modern.",
    date: "10 Maret 2024",
    category: "Pelatihan",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    views: 890,
    author: "Tim Pelatihan",
    featured: false
  },
  {
    id: 3,
    title: "Program Peduli Lingkungan Goes to School",
    excerpt: "Kwarda Kaltara menggelar program edukasi lingkungan di sekolah-sekolah untuk meningkatkan kesadaran. Program ini telah mengunjungi 25 sekolah dan menjangkau 2.500 siswa di seluruh Kaltara.",
    date: "5 Maret 2024",
    category: "Program",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    views: 675,
    author: "Divisi Lingkungan",
    featured: false
  },
  {
    id: 4,
    title: "Rapat Koordinasi Kwarcab Se-Kalimantan Utara",
    excerpt: "Koordinasi program kerja tahun 2024 dan evaluasi kegiatan berjalan dengan baik. Hasil rapat menghasilkan 15 program prioritas yang akan dilaksanakan sepanjang tahun 2024.",
    date: "1 Maret 2024",
    category: "Rapat",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
    views: 524,
    author: "Sekretaris Kwarda",
    featured: false
  },
  {
    id: 5,
    title: "Pengumuman Penerimaan Anggota Baru Tahun 2024",
    excerpt: "Kwarda Kaltara membuka pendaftaran anggota baru periode 2024 dengan syarat dan ketentuan yang telah ditetapkan. Pendaftaran dibuka mulai 20 Maret hingga 20 April 2024.",
    date: "20 Februari 2024",
    category: "Pengumuman",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    views: 1100,
    author: "Bagian Keanggotaan",
    featured: false
  },
  {
    id: 6,
    title: "Bakti Sosial Peduli Bencana Banjir Kaltara",
    excerpt: "Tim relawan Pramuka Kaltara turun langsung membantu korban banjir dengan menyalurkan bantuan logistik. Bantuan berupa sembako, obat-obatan, dan perlengkapan darurat untuk 500 KK terdampak.",
    date: "15 Februari 2024",
    category: "Kegiatan",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    views: 950,
    author: "Tim Relawan",
    featured: true
  }
];

export default function News() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-scout-maroon to-scout-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-5xl mb-4">
            Berita & Artikel
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Informasi terkini seputar kegiatan dan program Gerakan Pramuka Kalimantan Utara
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Cari berita atau artikel..." 
                  className="pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className={`${
                    category === "Semua" 
                      ? "bg-scout-brown text-white border-scout-brown" 
                      : "hover:bg-scout-brown hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-scout-brown/5">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-8 text-center">
            Berita Utama
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {allNews.filter(news => news.featured).map((news) => (
              <Card key={news.id} className="card-scout hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-scout-maroon text-white">
                      {news.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-scout-gold text-scout-brown">
                      Utama
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="font-bold text-2xl leading-tight text-scout-brown group-hover:text-scout-maroon transition-colors">
                    {news.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {news.date}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {news.views}
                      </div>
                    </div>
                    <p className="text-scout-brown font-medium">{news.author}</p>
                  </div>
                  
                  <Link to={`/berita/${news.id}`}>
                    <Button className="w-full" variant="scout">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-12 text-center">
            Semua Berita
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.filter(news => !news.featured).map((news) => (
              <Card key={news.id} className="card-scout hover:shadow-xl transition-all duration-300 group">
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
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>{news.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-scout-brown font-medium">{news.author}</p>
                    <Link to={`/berita/${news.id}`}>
                      <Button variant="ghost" size="sm" className="text-scout-brown hover:text-scout-maroon p-0">
                        Baca <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="scout-outline">
              <Filter className="mr-2 h-5 w-5" />
              Muat Lebih Banyak
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}