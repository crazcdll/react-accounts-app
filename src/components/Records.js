import React, { Component } from 'react'
import Record from './Record'
import * as RecordsAPI from '../utils/recordsAPI'

class Records extends Component {
  constructor () {
    super()
    this.state = {
      records: [],
      error: null,
      isLoaded: false,
    }
  }

  componentDidMount () {
    RecordsAPI.getALL().then(
      response => {
        console.log(response.data)
        this.setState({
          records: response.data,
          isLoaded: true,
        })
      },
    ).catch(error => {
      this.setState({
        isLoaded: true,
        error,
      })
    })
  }

  render () {
    const {error, isLoaded, records} = this.state

    if (error) {
      return <div>Error: { error.message }</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
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
              { records.map(
                (record, i) => <Record key={ record.id } { ...record } />) }
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default Records
