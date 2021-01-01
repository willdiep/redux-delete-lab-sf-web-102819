import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from './BandInput'
import Band from './Band'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map( band => {
    return (
      <Band key={band.id} band={band}  deleteBand={this.props.deleteBand} />
    )
  })

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />

          {this.renderBands()}
      </div>
    )
  }
}

// const mapStateToProps = ({ bands }) => ({ bands })
const mapStateToProps = (state) => {
  return {
    bands: state.bands,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBand: bandObj => dispatch({ type: 'ADD_BAND', payload: bandObj }),
  deleteBand: id => dispatch({ type: 'DELETE_BAND', payload: id })

  // band = { bandName: value }
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
