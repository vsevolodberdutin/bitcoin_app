import React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts'

import { format, parseISO, subDays } from 'date-fns'

//   const data = [];
//   for (let num = 30; num >= 0; num--) {
//     data.push({
//       date: subDays(new Date(), num).toISOString().substr(0, 10),
//       value: 1 + Math.random(),
//     });
//   }

export default function Overview(apiData) {
  console.log('apidata', apiData.props)
  console.log('data date', apiData?.props[0]?.Date)
  console.log('data value', apiData?.props[0]?.Close)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={apiData.props}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="Close" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="Date"
          tickCount={100}
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            let newStr = ''
            if (str) {
              const arr = str.split(/[\s\/:]+/)
              newStr = [arr[1],arr[2]].join('/') + " " + [arr[3],arr[4]].join(':')
            }
            return newStr
          }}
        />

        <YAxis
          datakey="Close"
          axisLine={false}
          tickLine={false}
          tickCount={10000}
          type="number"
          domain={['dataMin - 100', 'dataMax']}
          tickFormatter={(number) => `${number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>${payload[0]?.value.toFixed(2)} CLOSE</p>
      </div>
    )
  }
  return null
}
