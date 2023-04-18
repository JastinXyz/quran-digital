import Image from "next/image";
import { FcSearch } from "react-icons/fc";
import { Outfit } from "next/font/google";

const outfit = Outfit({ weight: ['400'], subsets: ['latin'] });

export default function Hero() {
    return (
      <div className={outfit.className}>
        <div className="hero py-16 bg-[#018870] text-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="flex flex-col mx-auto">
                <div className="flex justify-center">
                    <Image src={'/img/logo.png'} width={180} height={180} alt="logo" />
                </div>
                <div className="relative mt-8">
                    <FcSearch className="absolute w-[22px] h-[22px] ml-4 my-3" />
                    <input type="text" placeholder="Cari surah..." className="input input-bordered w-96 rounded-full pl-12 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}