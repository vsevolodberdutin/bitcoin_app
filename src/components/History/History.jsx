import React from 'react'
import { Table, Tag, Space, Typography } from 'antd'

function History(props) {

    const columns = [
        {
          title: 'Date',
          dataIndex: 'Date',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.Date.split(/[\s\/:]+/).join('') - b.Date.split(/[\s\/:]+/).join(''),
        },
        {
          title: 'High',
          dataIndex: 'High',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.High - b.High,
        },
        {
          title: 'Low',
          dataIndex: 'Low',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.Low - b.Low,
        },
        {
          title: 'Open',
          dataIndex: 'Open',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.Open - b.Open,
        },
        {
          title: 'Close',
          dataIndex: 'Close',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.Close - b.Close,
        },
    
      ];
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    return (
        <div>
          <Typography style={{fontWeight: 600, fontSize: 30, margin: "30px 0 20px"}}>BTC/USD Historical Rates</Typography>
          <Table columns={columns} dataSource={props.props} onChange={onChange} /> 
        </div>
    )
}

export default History
