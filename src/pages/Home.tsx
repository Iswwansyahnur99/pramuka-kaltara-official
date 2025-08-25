import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChairmanWelcome from "@/components/ChairmanWelcome";
import LatestNews from "@/components/LatestNews";
import UpcomingEvents from "@/components/UpcomingEvents";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ChairmanWelcome />
      <LatestNews />
      <UpcomingEvents />
      <GallerySection />
      <Footer />
    </div>
  );
}