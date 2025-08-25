import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Jambore Daerah Kalimantan Utara 2024",
    date: "25-30 April 2024",
    time: "08:00 - 17:00 WITA",
    location: "Lapangan Merdeka Tanjung Selor",
    organizer: "Kwarda Kaltara",
    participants: "2000+ peserta",
    status: "Registrasi Dibuka",
    description: "Event pramuka terbesar di Kalimantan Utara dengan berbagai kompetisi dan kegiatan edukatif.",
    priority: "high"
  },
  {
    id: 2,
    title: "Workshop Pembina Muda Berprestasi",
    date: "15 April 2024",
    time: "09:00 - 16:00 WITA",
    location: "Aula Kwarda Kaltara",
    organizer: "Kwarda Kaltara",
    participants: "100 pembina",
    status: "Segera Dibuka",
    description: "Pelatihan khusus untuk pembina muda dalam mengembangkan kreativitas dan inovasi.",
    priority: "medium"
  },
  {
    id: 3,
    title: "Bakti Sosial Peduli Bencana",
    date: "8 April 2024",
    time: "06:00 - 12:00 WITA",
    location: "Wilayah Terdampak Banjir",
    organizer: "Kwarcab Tarakan",
    participants: "500 relawan",
    status: "Persiapan",
    description: "Kegiatan bakti sosial dalam rangka membantu korban bencana banjir di wilayah Kaltara.",
    priority: "high"
  }
];

export default function UpcomingEvents() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-scout-maroon text-white";
      case "medium": return "bg-scout-gold text-scout-brown";
      default: return "bg-scout-green text-white";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-scout-brown/5 to-scout-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-4xl text-scout-brown mb-4">
            Agenda Kegiatan Mendatang
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jadwal kegiatan dan event penting Gerakan Pramuka Kalimantan Utara
          </p>
          <div className="w-24 h-1 bg-scout-maroon mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="card-scout hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getPriorityColor(event.priority)}>
                    {event.status}
                  </Badge>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-scout-brown group-hover:text-scout-maroon transition-colors">
                  {event.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-scout-brown" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-scout-brown" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-scout-brown" />
                    {event.participants}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-3">Penyelenggara: {event.organizer}</p>
                  <Link to={`/agenda/${event.id}`}>
                    <Button variant="scout-outline" className="w-full">
                      Detail & Registrasi
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/agenda">
            <Button size="lg" variant="scout">
              Lihat Kalender Lengkap
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}