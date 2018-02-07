import React, { Component } from 'react'

export default class RecordForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
      title: '',
      amount: '',
    }
  }

  validSubmit () {
    return this.state.date && this.state.title && this.state.amount
  }

  handleChange (event) {
    // let name, obj
    // name = event.target.name
    // this.setState((
    //   obj = {},
    //     obj['' + name] = event.target.value,
    //     obj
    // ))

    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render () {
    return (
      <form action="" className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Date"
                 name="date" value={ this.state.date }
                 onChange={ this.handleChange.bind(this) } />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Title"
                 name="title" value={ this.state.title }
                 onChange={ this.handleChange.bind(this) } />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Amount"
                 name="amount" value={ this.state.amount }
                 onChange={ this.handleChange.bind(this) } />
        </div>
        <button type="submit" className="btn btn-primary"
                disabled={ !this.validSubmit() }>Create Record
        </button>
      </form>
    )
  }
}
