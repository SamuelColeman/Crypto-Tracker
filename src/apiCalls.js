export const fetchCoinCards = async () => {
    try {
        const response = await fetch(`https://api.coinlore.net/api/tickers/`);
        const data = await response.json();
        console.log('data', data)
        return data.data;
    } catch(error) {
        console.log(error)
    }
}