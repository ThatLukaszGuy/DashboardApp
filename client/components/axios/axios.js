// all api request options

// env keys
const NewsKey = process.env.NEXT_PUBLIC_NEWSKEY 

// options
const newsOptions = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': NewsKey
    }
  };

// coingecko api 
const coinGecko = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const coinGeckoExchange = 'https://api.coingecko.com/api/v3/exchanges'

const coinGeckoSol = 'https://api.coingecko.com/api/v3/coins/solana?localization=usa&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'

// last weeks data
const coinGeckoHistoryEth = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=6&interval=daily'

const coinGeckoHistoryBtc = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=6&interval=daily'


export { 
  newsOptions, 
  coinGecko, 
  coinGeckoExchange,
  coinGeckoHistoryBtc,
  coinGeckoHistoryEth,
  coinGeckoSol
}
