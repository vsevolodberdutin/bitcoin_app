import React, {useState, useEffect} from 'react'
import { Select, Button } from 'antd'

import { getDataMin, getDataHour, getDataWeek } from "../../api/api"
import History from '../History/History'
import Overview from '../Overview/Overview'

function Tab() {
    
  const [timeperiod, setTimeperiod] = useState('1 hour')
  const [apiDataMin, setApiDataMin] = useState([])
  const [apiDataHour, setApiDataHour] = useState([])
  const [apiDataWeek, setApiDataWeek] = useState([])

  // console.log(timeperiod)

  const time = ['5 minutes', '1 hour', '1 week']

  const { Option } = Select

  useEffect(() => {
    getDataMin().then((data) => {
        setApiDataMin( [...apiDataMin,...data])
    });
    getDataHour().then((data) => {
          setApiDataHour( [...apiDataMin,...data])
    });
    getDataWeek().then((data) => {
          setApiDataWeek( [...apiDataMin,...data])
    });
  }, []);


  function renderSwitchHis(param) {
    switch(param) {
      case time[0]:
        return  <History props={apiDataMin}/>
      case time[1]:
        return  <History props={apiDataHour}/>
      case time[2]:
        return  <History props={apiDataWeek}/>
      default:
        return time[1]
    }
  }
  function renderSwitchOver(param) {
    switch(param) {
      case time[0]:
        return  <Overview props={apiDataMin}/>
      case time[1]:
        return  <Overview props={apiDataHour}/>
      case time[2]:
        return  <Overview props={apiDataWeek}/>
      default:
        return time[1]
    }
  }

const targetDivOver = document.getElementById("switchOver")
const targetDivHist = document.getElementById("switchHist")

function fOver() {
  if (targetDivOver.style.display == "none") {
    targetDivOver.style.display = "block"
    targetDivHist.style.display = "none"
  } 
}
function fHist() {
  if (targetDivHist.style.display == "none") {
    targetDivHist.style.display = "block"
    targetDivOver.style.display = "none"
  } 
}

  return (
    <div>
      <Button id="btnOver" onClick={() => fOver()}>Overview tab</Button>
      <Button id="btnHis" onClick={() => fHist()}>History tab</Button>
      <hr />

      <Select
        defaultValue="1 hour"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimeperiod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))} 
      </Select>
      <hr style={{marginBottom:40}}/>

<div id="switchOver" style={{'display': 'block'}}> {renderSwitchOver(timeperiod)}</div>

<div id="switchHist" style={{'display': 'none'}}> {renderSwitchHis(timeperiod)}</div>
     
    </div>
  )
}

export default Tab
