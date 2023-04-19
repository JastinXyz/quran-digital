import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SearchHit from "@/components/SearchHit";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home — Quran Digital</title>
      </Head>
      <main className="bg-base-200 min-h-screen">
        <Navbar />
        <Hero />
        <SearchHit />
      </main>
    </>
  )
}
