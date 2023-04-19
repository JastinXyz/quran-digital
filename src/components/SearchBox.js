import { FcSearch } from "react-icons/fc";
import { connectSearchBox } from "react-instantsearch-dom";

function SearchBox({ refine }) {
  return (
    <div className="relative mt-8">
      <FcSearch className="absolute w-[22px] h-[22px] ml-4 my-3" />
      <input
        type="text"
        placeholder="Cari surah..."
        className="input input-bordered md:w-96 rounded-full pl-12 text-black"
        onChange={(e) => refine(e.currentTarget.value)}
      />
    </div>
  );
}

export default connectSearchBox(SearchBox);
