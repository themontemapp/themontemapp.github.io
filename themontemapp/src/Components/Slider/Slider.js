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
      3001
    )
  }

  render() {
    const { sliderState, fireBullet, expandBullet, isBulletExpanded } = this.state;

    let bulletStyle = 'bullet';

    if (fireBullet) bulletStyle += ' bullet-move';
    if (expandBullet) bulletStyle += ' bullet-expanded';

    return (
      <div>
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
            <div className='below-slider' style={{ left: sliderState * 0.025 + '%' }} />
            <div className={bulletStyle}>
              {isBulletExpanded && <p style={{color: 'white'}}>{sliderState}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
