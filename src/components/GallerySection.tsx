import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Image as ImageIcon } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Kemah Besar Kwarda 2024",
    description: "Dokumentasi lengkap kegiatan Kemah Besar",
    thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    count: "45 Foto"
  },
  {
    id: 2,
    type: "video",
    title: "Workshop Pembina Muda",
    description: "Video dokumentasi pelatihan pembina",
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
    count: "5 Video"
  },
  {
    id: 3,
    type: "image",
    title: "Bakti Sosial Peduli Banjir",
    description: "Aksi nyata pramuka membantu sesama",
    thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
    count: "32 Foto"
  },
  {
    id: 4,
    type: "video",
    title: "Program Peduli Lingkungan",
    description: "Kampanye pelestarian alam Kaltara",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    count: "3 Video"
  }
];

export default function GallerySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-4xl text-scout-brown mb-4">
            Galeri Dokumentasi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kumpulan foto dan video kegiatan Gerakan Pramuka Kalimantan Utara
          </p>
          <div className="w-24 h-1 bg-scout-maroon mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="card-scout overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === "video" ? (
                    <Play className="h-12 w-12 text-white" />
                  ) : (
                    <ImageIcon className="h-12 w-12 text-white" />
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={`${item.type === "video" ? "bg-scout-maroon" : "bg-scout-green"} text-white`}>
                    {item.count}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-scout-brown mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {item.description}
                </p>
                <Link to={`/galeri/${item.id}`}>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto text-scout-brown hover:text-scout-maroon">
                    Lihat {item.type === "video" ? "Video" : "Foto"}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/galeri">
            <Button size="lg" variant="scout">
              Lihat Semua Galeri
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}