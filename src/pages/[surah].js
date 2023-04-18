import { useRouter } from "next/router"
import axios from "axios";
import { Philosopher, Outfit } from 'next/font/google';
import useSWR from "swr";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const fetcher = url => axios(url).then(x => x.data);
const outfit = Outfit({ weight: ['400', '700'], subsets: ['latin'] });
const philosopher = Philosopher({ weight: ['400', '700'], subsets: ['latin'] });

export default function Surah() {
    let router = useRouter();
    let { surah } = router.query;

    const { data, error } = useSWR('https://quran-api.jstnlt.my.id/surah/' + surah, fetcher)

    if (error) return <div className={`${outfit.className} p-8`}>Gagal memuat... Coba lagi dalam beberapa saat!</div>
    if (!data) return <div className={`${outfit.className} p-8`}>loading...</div>

    return (
      <main className={outfit.className}>
        <Navbar />
        <div className="px-24">
          <div className="flex justify-between py-8">
            {data.surah_sebelumnya ? (
              <Link
                href={`/${data.surah_sebelumnya.nomor}`}
                className="btn btn-sm rounded-full font-normal normal-case btn-accent btn-outline hover:!text-white"
              >
                <MdChevronLeft /> Surah Sebelumnya {`(${data.surah_sebelumnya.nama.latin})`}
              </Link>
            ) : (
              <div></div>
            )}
            {data.surah_selanjutnya ? (
              <Link
                href={`/${data.surah_selanjutnya.nomor}`}
                className="btn btn-sm rounded-full font-normal normal-case btn-accent btn-outline hover:!text-white"
              >
                Surah Selanjutnya {`(${data.surah_selanjutnya.nama.latin})`} <MdChevronRight />
              </Link>
            ) : (
              <div></div>
            )}
          </div>

          <h2 className={`text-3xl text-center font-bold`}>{data.nama.latin} <span className="text-sm">{data.nama.arab}</span></h2>
          <p className="text-center">{data.arti} - {data.jumlah_ayat} Ayat</p>

          <div className="py-16">
            {data.ayat.map((x, idx) => {
                return (
                    <div className="py-8">
                        <section key={idx} id={x.id}>
                            <div className="text-right">
                                <p className="text-3xl">{x.arab}</p>
                                <p>{x.latin}</p>
                            </div>
                            <div className="pt-8">
                                <p>{x.nomor}. {x.arti}</p>
                                {x.fn ? <p className="mt-2 italic text-xs font-bold">Footnote:<br/>{x.fn}</p> : ''}
                            </div>
                        </section>
                        <div className="divider"></div>
                    </div>
                )
            })}
          </div>
        </div>
      </main>
    );
}