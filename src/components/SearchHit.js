import { connectStateResults } from 'react-instantsearch-dom';
import { outfit } from '@/common/fonts';
import Link from 'next/link';
import SurahCard from './SurahCard';
import AllSurah from './AllSurah';

function SearchHits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;
  return searchState.query && validQuery ? (
    <div className={'search-hits'}>
      {searchResults?.hits.length === 0 && <div className={`${outfit.className} p-8`}>Pencarian tidak ditemukan!</div>}
      {searchResults?.hits.length > 0 &&
        <div className="bg-base-200 px-4 md:px-8 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {searchResults.hits.map((hit) => (
                <div key={hit.objectID}>
                    <Link href={`/${hit.nomor}`}>
                        <SurahCard nomor={hit.nomor} nama={hit.latin} arti={hit.arti} arab={hit.arab} lokasi={hit.lokasi} jumlahAyat={hit.jumlah_ayat} />
                    </Link>
                </div>
            ))}
        </div>}
    </div>
  ) : (
    <AllSurah />
  );
}
export default connectStateResults(SearchHits);