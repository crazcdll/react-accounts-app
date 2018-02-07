import React, { Component } from 'react'
import Record from './Record'
import * as RecordsAPI from '../utils/recordsAPI'
import RecordForm from './RecordForm'

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

  addRecord (record) {
    console.log(record)
    this.setState({
      records: [
        ...this.state.records,
        record,
      ],
      error: null,
      isLoaded: true,
    })
  }

  updateRecord (record, data) {
    const recordIndex = this.state.records.indexOf(record)
    const newRecords = this.state.records.map((item, index) => {
      if (index !== recordIndex) {
        return item
      }
      return {
        ...item,
        ...data,
      }
    })
    this.setState({
      records: newRecords,
    })
    console.log(record)
  }

  render () {
    const {error, isLoaded, records} = this.state
    let recordsComponent

    if (error) {
      recordsComponent = <div>Error: { error.message }</div>
    } else if (!isLoaded) {
      recordsComponent = <div>Loading...</div>
    } else {
      recordsComponent = (
        <div className="App">
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              { records.map(
                (record, i) => <Record key={ record.id } record={ record }
                                       handleEditRecord={ this.updateRecord.bind(
                                         this) } />) }
            </tbody>
          </table>
        </div>
      )
    }

    return (
      <div>
        <h2>Accounts</h2>
        <RecordForm handleNewRecord={ this.addRecord.bind(this) } />
        { recordsComponent }
      </div>
    )
  }
}

export default Records
