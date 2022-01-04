import { useState } from "react";
import Coins from "./Coins";

export default function CoinList({ filteredCoins }) {
  // const [pageNum, SetPageNum] = useState(0);

  // const coinsPerPage = 10;
  // const pageVisited = pageNum*coinsPerPage;

  // const displayUsers = filteredCoins.slice(pageVisited, pageVisited + coinsPerPage).map((coin)=>{})

  return (
    <>
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}
