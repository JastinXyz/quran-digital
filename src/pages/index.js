import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SearchHit from "@/components/SearchHit";

export default function Home() {
  return (
    <main className="bg-base-200 min-h-screen">
      <Navbar />
      <Hero />
      <SearchHit />
    </main>
  )
}
