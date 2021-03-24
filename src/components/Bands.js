import React, { Component } from 'react';
import Band from './Band'


export default class Bands extends Component {


    render() {
      return this.props.bands.map((band, idx) => <Band key={idx} band={band} deleteBand={this.props.deleteBand}/>)
  }
}
