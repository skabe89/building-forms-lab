import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from './Bands'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, index) => <Bands name={band} key={index} />)
  
  render() {
    console.log(this.props)
    return(
      <div>
        < BandInput />
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    bands: state.bands
  }
}


export default connect(mapStateToProps)(BandsContainer)
