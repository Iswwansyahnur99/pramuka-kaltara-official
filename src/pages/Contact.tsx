import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Smartphone,
  Send
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-scout-green to-scout-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-5xl mb-4">
            Kontak & Media Sosial
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Hubungi kami untuk informasi, pengaduan, atau kerjasama
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-scout text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <MapPin className="h-12 w-12 text-scout-brown mx-auto mb-4" />
                <h3 className="font-bold text-xl text-scout-brown">Alamat Sekretariat</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Jl. Mulawarman No. 123<br />
                  Tanjung Selor, Kalimantan Utara<br />
                  77212, Indonesia
                </p>
              </CardContent>
            </Card>

            <Card className="card-scout text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Phone className="h-12 w-12 text-scout-brown mx-auto mb-4" />
                <h3 className="font-bold text-xl text-scout-brown">Telepon</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>Kantor:</strong> (0552) 123-456<br />
                  <strong>Fax:</strong> (0552) 123-457<br />
                  <strong>Emergency:</strong> 0812-3456-7890
                </p>
              </CardContent>
            </Card>

            <Card className="card-scout text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-scout-brown mx-auto mb-4" />
                <h3 className="font-bold text-xl text-scout-brown">Email</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>Umum:</strong><br />
                  info@kwarda-kaltara.org<br />
                  <strong>PPID:</strong><br />
                  ppid@kwarda-kaltara.org
                </p>
              </CardContent>
            </Card>

            <Card className="card-scout text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Clock className="h-12 w-12 text-scout-brown mx-auto mb-4" />
                <h3 className="font-bold text-xl text-scout-brown">Jam Layanan</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <strong>Senin - Jumat:</strong><br />
                  08:00 - 16:00 WITA<br />
                  <strong>Sabtu:</strong><br />
                  08:00 - 12:00 WITA
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-scout">
              <CardHeader>
                <h2 className="font-playfair font-bold text-2xl text-scout-brown">
                  Formulir Pengaduan & Saran
                </h2>
                <p className="text-gray-600">
                  Sampaikan kritik, saran, atau pengaduan Anda kepada kami
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input id="name" placeholder="Nama lengkap" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="nama@email.com" className="mt-2" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">No. Telepon</Label>
                      <Input id="phone" placeholder="08xxx-xxxx-xxxx" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subjek *</Label>
                      <Input id="subject" placeholder="Subjek pesan" className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tuliskan pesan, kritik, saran, atau pengaduan Anda" 
                      className="mt-2" 
                      rows={5} 
                    />
                  </div>
                  
                  <Button className="w-full" variant="scout" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Kirim Pesan
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    * Wajib diisi. Pesan akan dibalas maksimal 3x24 jam
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Map & Location */}
            <div className="space-y-8">
              <Card className="card-scout">
                <CardHeader>
                  <h2 className="font-playfair font-bold text-2xl text-scout-brown">
                    Lokasi Sekretariat
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-scout-brown/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-scout-brown">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <p className="font-semibold">Peta Lokasi</p>
                      <p className="text-sm">Jl. Mulawarman No. 123, Tanjung Selor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Sekretariat Kwarda Kaltara berlokasi di pusat kota Tanjung Selor, 
                    mudah dijangkau dengan kendaraan pribadi maupun transportasi umum.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="card-scout">
                <CardHeader>
                  <h2 className="font-playfair font-bold text-2xl text-scout-brown">
                    Media Sosial Resmi
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://facebook.com/kwarda.kaltara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-scout-brown/5 transition-colors"
                    >
                      <Facebook className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-semibold text-scout-brown">Facebook</p>
                        <p className="text-xs text-gray-500">@kwarda.kaltara</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://instagram.com/kwarda_kaltara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-scout-brown/5 transition-colors"
                    >
                      <Instagram className="h-8 w-8 text-pink-600" />
                      <div>
                        <p className="font-semibold text-scout-brown">Instagram</p>
                        <p className="text-xs text-gray-500">@kwarda_kaltara</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://youtube.com/@kwardakaltara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-scout-brown/5 transition-colors"
                    >
                      <Youtube className="h-8 w-8 text-red-600" />
                      <div>
                        <p className="font-semibold text-scout-brown">YouTube</p>
                        <p className="text-xs text-gray-500">Kwarda Kaltara</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://tiktok.com/@kwarda.kaltara" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-scout-brown/5 transition-colors"
                    >
                      <Smartphone className="h-8 w-8 text-gray-800" />
                      <div>
                        <p className="font-semibold text-scout-brown">TikTok</p>
                        <p className="text-xs text-gray-500">@kwarda.kaltara</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}