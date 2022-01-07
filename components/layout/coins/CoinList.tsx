import React from 'react'
import Coins from './Coins'

const CoinList = ({filteredCoins}) => {
    console.log(filteredCoins)
    return (
        <>
            {filteredCoins && filteredCoins.map((coin, index) => (
                <Coins
                    key={index}
                    name={coin.name}
                    id={coin.id}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    volume={coin.total_volume}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                />
            ))}
        </>
    )
}

export default CoinList
