import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SurahCard from "@/components/SurahCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="px-16 py-8">
        <SurahCard nomor={1} nama={'Al Fatihah'} arti={'Pembuka'} arab={'الفاتحة'} lokasi={'Makkiyyah'} jumlahAyat={7} />
      </div>
    </main>
  )
}
