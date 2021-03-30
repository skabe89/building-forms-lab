// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor(){
    super();
    this.state = {
      name: ""
    }
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
    this.props.addBand(this.state)
    this.setState({name: ""})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e) }>
          <label>Add Band: </label>
          <input type="text" onChange={ (e) => this.handleChange(e) } value={this.state.name} />
          <input type="submit" /> 
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
})

export default connect(null, mapDispatchToProps)(BandInput)
