import React, { Component } from 'react';
import Header from '../components/Public/HeaderComponents'
import Slider from '../components/Public/SliderComponents'

class Home extends Component {
  render() {
    return (
      <>
          <Header title='Hello world!'/>
          <Slider/>
      </>
    );
  }
}

export default Home;