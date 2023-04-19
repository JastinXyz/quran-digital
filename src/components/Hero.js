import Image from "next/image";
import { outfit } from '@/common/fonts';
import SearchBox from "./SearchBox";

export default function Hero() {
    return (
      <div className={outfit.className}>
        <div className="hero py-16 bg-[#018870]">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="flex flex-col mx-auto">
                <div className="flex justify-center">
                    <Image src={'/img/logo.png'} width={180} height={180} alt="logo" />
                </div>
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}