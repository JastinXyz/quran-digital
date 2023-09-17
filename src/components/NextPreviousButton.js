import { MdChevronLeft, MdChevronRight, MdHome } from "react-icons/md";
import Link from "next/link";

export default function NextPreviousButton({ data, homeButton = false }) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2 py-8">
      {data.surah_sebelumnya ? (
        <Link
          href={`/${data.surah_sebelumnya.nomor}`}
          className="btn btn-sm rounded-full font-normal normal-case btn-accent btn-outline hover:!text-white"
        >
          <MdChevronLeft /> Surah Sebelumnya {`(${data.surah_sebelumnya.nama.latin})`}
        </Link>
      ) : ("")}
      {
        homeButton ? (
          <Link
              href={`/`}
              className="btn btn-sm rounded-full font-normal normal-case btn-accent btn-outline hover:!text-white"
          >
              <MdHome className="mr-1" /> Halaman Awal
          </Link>
        ) : ("")
      }
      {data.surah_selanjutnya ? (
        <Link
          href={`/${data.surah_selanjutnya.nomor}`}
          className="btn btn-sm rounded-full font-normal normal-case btn-accent btn-outline hover:!text-white"
        >
          Surah Selanjutnya {`(${data.surah_selanjutnya.nama.latin})`} <MdChevronRight />
        </Link>
      ) : ("")}
    </div>
  )
}
