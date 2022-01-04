import { useState } from "react";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  const allCoins = filteredCoins.filter((coin) => {
    if (search == "") {
      return coin;
    } else if (coin.name.toLowerCase().includes(search.toLowerCase())) {
      return coin;
    }
  });

  return (
    <div className="coin_app">
      <Layout>
        <SearchBar type="text" placeholder="Search" onChange={SearchHandler} />
        <CoinList filteredCoins={allCoins} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
}
