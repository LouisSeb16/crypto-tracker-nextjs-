import React from 'react'
import Link from 'next/link';
import { styles } from '../../../styles'

interface Props{
    name: string;
    id: string;
    price: string;
    symbol: string;
    marketcap: any;
    volume: string;
    image: string;
    priceChange: any;
}

const Coins = ({name, id, price, symbol, marketcap, volume, image, priceChange}: Props) => {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
            <a className={styles.coin_link}>
                <div className={`container ${styles.coinContainer}`}>
                <div className={styles.coin_row}>
                    <div className={styles.coin}>
                    <img src={image} alt={name} className={styles.coin_img} />
                    <h1 className={styles.coin_h1}>{name}</h1>
                    <p className={styles.coin_symbol}>{symbol}</p>
                    </div>
                    <div className={styles.coin_data}>
                    <p className={styles.coin_price}>${price}</p>
                    <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className={(styles.coin_percent, styles.red)}>
                        {priceChange.toFixed(2)}%
                        </p>
                    ) : (
                        <p className={(styles.coin_percent, styles.green)}>
                        {priceChange.toFixed(2)}%
                        </p>
                    )}

                    <p className={styles.coin_marketcap}>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                    </div>
                </div>
                </div>
            </a>
        </Link>
    )
}

export default Coins
