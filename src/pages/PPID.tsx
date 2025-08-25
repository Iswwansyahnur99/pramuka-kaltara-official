import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  FileText, 
  Clock, 
  Globe, 
  AlertTriangle, 
  Download, 
  Send,
  Shield,
  Users,
  Scale
} from "lucide-react";

export default function PPID() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-scout-brown to-scout-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-5xl mb-4">
            PPID Kwarda Kaltara
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pejabat Pengelola Informasi dan Dokumentasi - Layanan Keterbukaan Informasi Publik
          </p>
        </div>
      </section>

      {/* Profil PPID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-6">
              Profil PPID Kwarda Kaltara
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              PPID Kwartir Daerah Pramuka Kalimantan Utara dibentuk berdasarkan 
              Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik 
              untuk memberikan layanan informasi yang transparan dan akuntabel 
              kepada masyarakat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-scout">
              <CardHeader className="text-center">
                <Scale className="h-12 w-12 text-scout-brown mx-auto mb-4" />
                <h3 className="font-bold text-xl text-scout-brown">Dasar Hukum</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• UU No. 14 Tahun 2008</li>
                  <li>• PP No. 61 Tahun 2010</li>
                  <li>• Perkap No. 3 Tahun 2020</li>
                  <li>• SK Kwarda No. 01/2024</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-scout">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-scout-brown mx-auto mb-4" />
                <h3 className="font-bold text-xl text-scout-brown">Struktur PPID</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-scout-maroon">PPID Utama</p>
                    <p className="text-gray-600">Ketua Kwarda</p>
                  </div>
                  <div>
                    <p className="font-semibold text-scout-maroon">PPID Pelaksana</p>
                    <p className="text-gray-600">Sekretaris Kwarda</p>
                  </div>
                  <div>
                    <p className="font-semibold text-scout-maroon">Admin PPID</p>
                    <p className="text-gray-600">Staff Administrasi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-scout">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-scout-brown mx-auto mb-4" />
                <h3 className="font-bold text-xl text-scout-brown">Tugas & Fungsi</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mengelola informasi publik</li>
                  <li>• Melayani permohonan informasi</li>
                  <li>• Mengklasifikasi dokumen</li>
                  <li>• Menyediakan akses informasi</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kategori Informasi */}
      <section className="py-16 bg-scout-brown/5">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-12 text-center">
            Kategori Informasi Publik
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Informasi Berkala */}
            <Card className="card-scout hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-scout-brown" />
                  <div>
                    <h3 className="font-bold text-xl text-scout-brown">Informasi Berkala</h3>
                    <Badge className="bg-scout-green text-white">Rutin</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Informasi yang wajib disediakan dan diumumkan secara berkala
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Laporan Kegiatan Tahunan</li>
                  <li>• Laporan Keuangan</li>
                  <li>• Program Kerja Kwarda</li>
                  <li>• Struktur Organisasi</li>
                  <li>• Profil Pimpinan</li>
                </ul>
                <Button className="w-full mt-4" variant="scout-outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Dokumen
                </Button>
              </CardContent>
            </Card>

            {/* Informasi Serta Merta */}
            <Card className="card-scout hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-scout-maroon" />
                  <div>
                    <h3 className="font-bold text-xl text-scout-brown">Informasi Serta Merta</h3>
                    <Badge className="bg-scout-maroon text-white">Darurat</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Informasi yang dapat mengancam hajat hidup orang banyak
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Pengumuman Darurat</li>
                  <li>• Peringatan Keselamatan</li>
                  <li>• Informasi Bencana</li>
                  <li>• Pengumuman Penting</li>
                  <li>• Protokol Kesehatan</li>
                </ul>
                <Button className="w-full mt-4" variant="scout-outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Lihat Pengumuman
                </Button>
              </CardContent>
            </Card>

            {/* Informasi Setiap Saat */}
            <Card className="card-scout hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-8 w-8 text-scout-green" />
                  <div>
                    <h3 className="font-bold text-xl text-scout-brown">Informasi Setiap Saat</h3>
                    <Badge className="bg-scout-gold text-scout-brown">24/7</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Informasi yang dapat diakses publik kapan saja
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Peraturan Organisasi</li>
                  <li>• Dokumentasi Kegiatan</li>
                  <li>• Data Statistik</li>
                  <li>• Prosedur Layanan</li>
                  <li>• FAQ Kepramukaan</li>
                </ul>
                <Button className="w-full mt-4" variant="scout-outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Akses Informasi
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form Permohonan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair font-bold text-3xl text-scout-brown mb-8 text-center">
              Formulir Permohonan Informasi
            </h2>
            
            <Card className="card-scout">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input id="name" placeholder="Masukkan nama lengkap" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="nama@email.com" className="mt-2" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">No. Telepon</Label>
                      <Input id="phone" placeholder="08xxx-xxxx-xxxx" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="identity">No. Identitas (KTP/SIM)</Label>
                      <Input id="identity" placeholder="Nomor identitas" className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Alamat</Label>
                    <Textarea id="address" placeholder="Alamat lengkap" className="mt-2" rows={3} />
                  </div>
                  
                  <div>
                    <Label htmlFor="info-request">Informasi yang Dimohon *</Label>
                    <Textarea 
                      id="info-request" 
                      placeholder="Deskripsikan secara detail informasi yang Anda butuhkan" 
                      className="mt-2" 
                      rows={4} 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="purpose">Tujuan Penggunaan Informasi *</Label>
                    <Textarea 
                      id="purpose" 
                      placeholder="Jelaskan tujuan penggunaan informasi yang dimohon" 
                      className="mt-2" 
                      rows={3} 
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full" variant="scout" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Kirim Permohonan
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    * Wajib diisi. Permohonan akan diproses maksimal 10 hari kerja
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}