import React, { Component } from 'react';
import Rheostat from 'rheostat';

import './Slider.css';

class Slider extends Component {

  constructor() {
    super();
    this.state = {
      sliderState: [2000],
      fireBullet: false,
      expandBullet: false,
      isBulletExpanded: false
    }
    setTimeout(
      () => this.setState({ fireBullet: true }),
      10
    )
  }

  setValue = (e) => {
    this.setState({ sliderState: e.values })
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({ expandBullet: true }),
      2500
    );
    setTimeout(
      () => this.setState({ isBulletExpanded: true }),
      3000
    )
  }

  render() {
    const { sliderState, fireBullet, expandBullet, isBulletExpanded } = this.state;

    let bulletStyle = 'bullet';

    if (fireBullet) bulletStyle += ' bullet-move';
    if (expandBullet) bulletStyle += ' bullet-expanded';

    return (
      <div>
        <Battery sliderState={sliderState} />
        <p>Slider value {sliderState}</p>
        <div className='slider-container'>
          <div className='slider-wrapper'>
            <Rheostat
              min={0}
              max={4000}
              values={sliderState}
              onValuesUpdated={this.setValue}
              snap
              snapPoints={[0, 1000, 2000, 3000, 4000]}
            />
            <img src='./assets/img/handle-curve.svg' className='below-slider' style={{ left: sliderState * 0.025 + '%' }} />
            {/* <div className='below-slider' style={{ left: sliderState * 0.025 + '%' }} /> */}
            {/* <div className={bulletStyle}>
              {isBulletExpanded && <p style={{color: 'white'}}>{sliderState}</p>}
            </div> */}
            <Pits />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;

const Pits = () => (
  <div className='pits'>
    <div style={{left: 0 + '%'}} className='pit' />
    <div style={{left: 25 + '%'}} className='pit' />
    <div style={{left: 50 + '%'}} className='pit' />
    <div style={{left: 75 + '%'}} className='pit' />
    <div style={{left: 100 + '%'}} className='pit' />
  </div>
)

class Battery extends Component {
  render() {

    const { sliderState } = this.props;

    let bat1 = 'battery';
    let bat2 = 'battery';
    let bat3 = 'battery';
    let bat4 = 'battery';

    let bg1;
    let bg2;
    let bg3;
    let bg4;

    if (sliderState > 0) {
      bg1 = `rgb(0,128,0, ${sliderState / 1000})`;
    }
    if (sliderState > 999) {
      bg2 = `rgb(0,128,0, ${(sliderState - 1000) / 1000})`;
    }
    if (sliderState > 1999) {
      bg3 = `rgb(0,128,0, ${(sliderState - 2000) / 1000})`;
    }
    if (sliderState > 2999) {
      bg4 = `rgb(0,128,0, ${(sliderState - 3000) / 1000})`;
    }

    return (
      <div className='battery-wrapper'>
        <div style={{ backgroundColor: bg1 }} className={bat1} />
        <div style={{ backgroundColor: bg2 }} className={bat2} />
        <div style={{ backgroundColor: bg3 }} className={bat3} />
        <div style={{ backgroundColor: bg4 }} className={bat4} />
        <div className='battery-nob' />
      </div>
    )
  }
}