import { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import './BitInfo.css'

function BitInfo({ match }) {
  const [data, setData] = useState()
  // console.log(data)
  const apiSubscribe = {
    type: 'SUBSCRIBE',
    instruments: ['cc-btc-usd-cccagg'],
  }
  const apiUnsubscribe = {
    type: 'UNSUBSCRIBE',
    instruments: ['cc-btc-usd-cccagg'],
  }
  let t = undefined
  useEffect(() => {
    const socket = new WebSocket('wss://wstest.fxempire.com?token=btctothemoon')

    socket.onopen = function(e) {
      // console.log("[open]");
      // console.log("Send data to the server");
      socket.send(JSON.stringify(apiSubscribe));
    };

    socket.onmessage = function(event) {
      const json = JSON.parse(event.data)
      setData(json.["cc-btc-usd-cccagg"])

      // console.log('json', json.["cc-btc-usd-cccagg"])
    };

    return () => {
      socket.close(1000, JSON.stringify(apiUnsubscribe))
      // console.log("close")
    }
  },[])


  return (
    <div className='wrapperInfo'>
      <div className='priceBlock'>
        <div className='price'>${data?.last}</div>
        <div className='changeBlock'>
          <div className='change'>+{data?.change.toFixed(2)}</div>
          <div className='changeProcent'>(+{data?.percentChange}%)</div>
        </div>
      </div>
      <div className='date'>{moment(data?.lastUpdate).format("MMM D, YYYY hh:mm:ss [UTC]")}</div>
    </div>
  )
}

export default BitInfo
