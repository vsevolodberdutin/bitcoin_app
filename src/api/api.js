// const API_KEY = process.env.API_KEY;

const baseURL = {
  min : "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd",
  hour : "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histohour?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd",
  week : "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/histoday?aggregate=7&e=CCCAGG&fsym=BTC&tsym=usd",
}

export const getDataMin = async () => {
  try {
    const res = await fetch(`${baseURL.min}&limit=30`)
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json()

    return json.data;
  } catch (error) {
    console.error("error in making request", error);
  }
}

export const getDataHour = async () => {
  try {
    const res = await fetch(`${baseURL.hour}&limit=30`)
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json()

    return json.data;
  } catch (error) {
    console.error("error in making request", error);
  }
}

export const getDataWeek = async () => {
  try {
    const res = await fetch(`${baseURL.week}&limit=30`)
    if (!res.ok) {
      console.error("failed", res.status);
      return;
    }
    const json = await res.json()

    return json.data;
  } catch (error) {
    console.error("error in making request", error);
  }
}



