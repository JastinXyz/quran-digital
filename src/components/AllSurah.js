import axios from "axios";
import { outfit } from '@/common/fonts';
import useSWR from "swr";
import SurahCard from "./SurahCard";
import Link from "next/link";

const fetcher = url => axios(url).then(x => x.data);
export default function AllSurah() {
    const { data, error } = useSWR('https://quran-api.jstnlt.my.id/surah?withoutAyat=1', fetcher)

    if (error) return <div className={`${outfit.className} p-8`}>Gagal memuat... Coba lagi dalam beberapa saat!</div>
    if (!data) return <div className={`${outfit.className} p-8`}>loading...</div>
    return (
        <>
            <div className="bg-base-200 px-4 md:px-8 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
               {data.map((x, idx) => {
                return (
                    <div key={idx}>
                        <Link href={`/${x.nomor}`}>
                            <SurahCard nomor={x.nomor} nama={x.nama.latin} arti={x.arti} arab={x.nama.arab} lokasi={x.lokasi} jumlahAyat={x.jumlah_ayat} />
                        </Link>
                    </div>
                )
               })}
            </div>
        </>
    )
}