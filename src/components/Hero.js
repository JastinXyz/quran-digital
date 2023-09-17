import Image from "next/image";
import { outfit } from '@/common/fonts';
import SearchBox from "./SearchBox";

export default function Hero() {
    return (
      <div className={outfit.className}>
        <div className="py-16 bg-observatory-700">
          <div className="text-center">
              <div className="flex flex-col">
                <div className="flex justify-center">
                    <Image src={'/img/logo.png'} width={180} height={180} alt="logo" />
                </div>
                <div className="px-16 lg:px-96">
                  <SearchBox />
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}