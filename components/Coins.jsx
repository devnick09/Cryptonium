import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 5rem;
  width: 80%;
  border-bottom: 1px solid #2e2e2e;
  padding: 0 2rem;
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;

  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.8rem;
  }
  h1 {
    font-size: 1rem;
    width: 9rem;
  }
  p {
    text-transform: uppercase;
  }
`;

const CoinData = styled.table`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
  .coin_price {
    width: 130px;
    display: flex;
    padding-right: 1rem;
  }
  .coin_volume {
    width: 155px;
    display: flex;
  }
  .mark_cap {
    width: 230px;
  }
  .coin_percent {
    width: 100px;
  }
  .red {
    color: #f00606;
  }
  .green {
    color: #13c783;
  }
`;

const Coins = ({
  key,
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Container>
      <CoinRow>
        <Coin>
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </Coin>
        <CoinData>
          <p className="coin_price">${price.toLocaleString()}</p>
          <p className="coin_volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin_percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin_percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="mark_cap">Mkt Cap : ${marketcap.toLocaleString()}</p>
        </CoinData>
      </CoinRow>
    </Container>
  );
};

export default Coins;
