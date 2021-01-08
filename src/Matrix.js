import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    // console.log(newColor)
    return (
      this.setState({
         selectedColor: newColor
      })
    )
  }

  genRow = (vals) => {
    return (
      vals.map( (val, idx) => { 
        return (
          <Cell key={idx} 
                color={val} 
                selectedColor={this.state.selectedColor} 
          />
        ) 
      } )
    )
  }

  genMatrix = () => {
    return (
      this.props.values.map( (rowVals, idx) => { 
        return (
          <div key={idx} className="row">
            {this.genRow(rowVals)}
          </div>
        )
      } )
    )
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}