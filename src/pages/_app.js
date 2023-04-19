import "@/styles/globals.css";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
);

export default function App({ Component, pageProps }) {
  return (
    <InstantSearch searchClient={searchClient} indexName="quran-digital">
      <Component {...pageProps} />
    </InstantSearch>
  );
}
