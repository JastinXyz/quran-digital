import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function NextPreviousButton({ data }) {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2 py-8">
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
  )
}
