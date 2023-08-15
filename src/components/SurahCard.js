import { outfit, philosopher, lpmq } from '@/common/fonts';

export default function SurahCard({ nomor, nama, arti, arab, lokasi, jumlahAyat }) {
    return (
        <>
            <div className="p-6 bg-white dark:bg-base-200 dark:text-white border-2 border-base-300 rounded-2xl flex w-full h-full items-center">
                <div className="flex-none pr-4">
                    <h1 className={`${philosopher.className} text-2xl font-bold`}>{nomor}</h1>
                </div>
                <div className="flex-1">
                    <div className='flex justify-between'>
                        <div>
                            <h2 className={`${philosopher.className} text-lg leading-none`}>{nama}</h2>
                            <p className={`${outfit.className} text-sm leading-none text-[#6C6C6C]`}>{arti}</p>
                        </div>
                        <div>
                            <h2 className={`${lpmq.className} text-lg leading-none text-right`}>{arab}</h2>
                            <p className={`${outfit.className} mt-1 text-sm leading-none text-[#6C6C6C] text-right`}>{lokasi} - {jumlahAyat} Ayat</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}