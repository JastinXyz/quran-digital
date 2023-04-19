import { philosopher } from '@/common/fonts';
import { GoMarkGithub } from 'react-icons/go';
import Link from 'next/link';

export default function Navbar() {
    return (
      <>
        <div className="navbar bg-[#018870] text-white">
          <div className="flex-1">
            <Link href={'/'} className={`${philosopher.className} ml-5 normal-case text-xl font-bold`}>
                Al-Quran Digital
            </Link>
          </div>
          <div className="flex-none">
            <Link href="https://github.com/JastinXyz/quran-digital" target='__blank' className='mr-5'>
              <GoMarkGithub className='hover:fill-gray-700 transition delay-100 w-5 h-5' />
            </Link>
          </div>
        </div>
      </>
    );
}