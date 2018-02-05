import React, { Component } from 'react'
import Record from './Record'

class Records extends Component {
  constructor () {
    super()
    this.state = {
      records: [
        {'id': 1, 'date': '2018-01-01', 'title': '收入', 'amount': 20},
        {'id': 2, 'date': '2018-01-02', 'title': '意外收入', 'amount': 200},
        {'id': 3, 'date': '2018-01-02', 'title': '意外收入', 'amount': 2000},
      ],
    }
  }

  render () {
    return (
      <div className="App">
        <h2>Accounts</h2>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
            { this.state.records.map(
              (record, i) => <Record key={ record.id } record={ record } />) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Records
