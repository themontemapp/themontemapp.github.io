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
      <div className='slider-block'>
        {/* <Battery sliderState={sliderState} /> */}
        <BatteryNew sliderState={sliderState}/>
        {/* <p>Slider value {sliderState}</p> */}
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
    <div style={{ left: 0 + '%' }} className='pit' />
    <div style={{ left: 25 + '%' }} className='pit' />
    <div style={{ left: 50 + '%' }} className='pit' />
    <div style={{ left: 75 + '%' }} className='pit' />
    <div style={{ left: 100 + '%' }} className='pit' />
  </div>
)

class Battery extends Component {
  render() {

    const { sliderState } = this.props;

    let bat1 = 'battery';
    let bat2 = 'battery';
    let bat3 = 'battery';
    let bat4 = 'battery';

    let bg1 = 0;
    let bg2 = 0;
    let bg3 = 0;
    let bg4 = 0;

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

const BatteryNew = ({ sliderState }) => {

  // if (sliderState > 0) bg1 = `rgb(0,128,0, ${sliderState / 1000})`;
  // if (sliderState > 999) bg2 = `rgb(0,128,0, ${(sliderState - 1000) / 1000})`;
  // if (sliderState > 1999) bg3 = `rgb(0,128,0, ${(sliderState - 2000) / 1000})`;
  // if (sliderState > 2999) bg4 = `rgb(0,128,0, ${(sliderState - 3000) / 1000})`;

  let bg1 = 0;
  let bg2 = 0;
  let bg3 = 0;
  let bg4 = 0;

  if (sliderState > 0) bg1 = `${sliderState / 1000}`;
  if (sliderState > 999) bg2 = `${(sliderState - 1000) / 1000}`;
  if (sliderState > 1999) bg3 = `${(sliderState - 2000) / 1000}`;
  if (sliderState > 2999) bg4 = `${(sliderState - 3000) / 1000}`;

  //console.log(bg1);

  return (
    <div className='battery-wrapper'>
      <svg width="166px" height="84px" viewBox="0 0 166 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>5A4596AE-FACD-4FBA-9A08-E44469A64F8D</title>
        <desc>Created with sketchtool.</desc>
        <defs>
          <path d="M20,0 L355,0 C366.045695,-2.02906125e-15 375,8.954305 375,20 L375,248 L0,248 L0,20 C-1.3527075e-15,8.954305 8.954305,2.02906125e-15 20,0 Z" id="path-1"></path>
          <filter x="-6.4%" y="-6.5%" width="112.8%" height="119.4%" filterUnits="objectBoundingBox" id="filter-3">
            <feOffset dx="0" dy="8" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.24 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
            <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2"></feColorMatrix>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
              <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
            </feMerge>
          </filter>
          <path d="M153,18 L157,18 C159.761424,18 162,20.2385763 162,23 L162,57 C162,59.7614237 159.761424,62 157,62 L153,62 C152.447715,62 152,62.4477153 152,63 L152,71 C152,75.9705627 147.970563,80 143,80 L10,80 C4.4771525,80 6.76353751e-16,75.5228475 0,70 L0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 L143,-1.77635684e-15 C147.970563,-2.6894344e-15 152,4.02943725 152,9 L152,17 C152,17.5522847 152.447715,18 153,18 Z" id="path-4"></path>
          <path d="M153,20 L157,20 C158.656854,20 160,21.3431458 160,23 L160,57 C160,58.6568542 158.656854,60 157,60 L153,60 C151.343146,60 150,61.3431458 150,63 L150,71 C150,74.8659932 146.865993,78 143,78 L9,78 C5.13400675,78 2,74.8659932 2,71 L2,9 C2,5.13400675 5.13400675,2 9,2 L143,2 C146.865993,2 150,5.13400675 150,9 L150,17 C150,18.6568542 151.343146,20 153,20 Z" id="path-6"></path>
        </defs>
        <g id="Experimentation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Battery-slider" transform="translate(-105.000000, -756.000000)">
            <g id="Bottom" transform="translate(0.000000, 670.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <g id="Rectangle-6">
                <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-1"></use>
                <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1"></use>
              </g>
              <g id="Battery" mask="url(#mask-2)">
                <g transform="translate(107.000000, 88.000000)">
                  <mask id="mask-5" fill="white">
                    <use xlinkHref="#path-4"></use>
                  </mask>
                  <use id="Border" stroke="#262B3D" strokeWidth="4" fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-4"></use>
                  <mask id="mask-7" fill="white">
                    <use xlinkHref="#path-6"></use>
                  </mask>
                  <g id="Inside-mask" stroke="none" fill="none"></g>
                  <rect fillOpacity={bg1} id="Charge-1" stroke="none" fill="#00E9BA" fillRule="evenodd" mask="url(#mask-7)" x="6" y="6" width="32" height="68" rx="4"></rect>
                  <rect fillOpacity={bg2} id="Charge-2" stroke="none" fill="#00E9BA" fillRule="evenodd" mask="url(#mask-7)" x="42" y="6" width="32" height="68" rx="4"></rect>
                  <rect fillOpacity={bg3} id="Charge-3" stroke="none" fill="#00E9BA" fillRule="evenodd" mask="url(#mask-7)" x="78" y="6" width="32" height="68" rx="4"></rect>
                  <rect fillOpacity={bg4} id="Charge-4" stroke="none" fill="#00E9BA" fillRule="evenodd" mask="url(#mask-7)" x="114" y="6" width="32" height="68" rx="4"></rect>
                  <path d="M151,25 L151,56" id="Tip-line" stroke="#262B3D" strokeWidth="2" fill="none" strokeLinecap="round" mask="url(#mask-7)"></path>
                  <g id="Effects" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" mask="url(#mask-7)">
                    <g id="Highlights" transform="translate(46.000000, 9.000000)" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M0.5,1.5 L8.5,1.5" id="Line-3"></path>
                      <path d="M46.5,1.5 L53.5,1.5" id="Line-3"></path>
                      <path d="M11.5,1.5 L14.5,1.5" id="Line-3"></path>
                      <path d="M79,1 L94,1 C95.1045695,1 96,1.8954305 96,3 L96,18" id="Line-3"></path>
                    </g>
                    <rect id="Lights" fillOpacity="0.25" fill="#FFFFFF" style={{ mixBlendMode: 'overlay' }} x="0" y="0" width="150" height="24"></rect>
                    <g id="Dark-shadow" transform="translate(2.000000, 39.000000)" fill="#000000" fillOpacity="0.1">
                      <path d="M0,0 C2.66666667,5.33333333 6,8 10,8 C14,8 58.6666667,8 144,8 L144.000013,27.999996 C144.000014,30.2091361 142.209153,31.9999991 140.000013,32.0000002 C140.000012,32.0000002 140.000011,32.0000002 140.000011,32.0000002 C57.2703644,32.0000001 13.9370275,32 10,32 C6,32 2.66666667,29.3333333 0,24 L0,0 Z"></path>
                      <rect id="Rectangle-8" x="148" y="8" width="11" height="6"></rect>
                    </g>
                  </g>
                  <g id="Lightning-icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" mask="url(#mask-7)">
                    <g transform="translate(76.000000, 37.500000) rotate(-270.000000) translate(-76.000000, -37.500000) translate(61.500000, 8.500000)">
                      <path d="M12.8586701,34.6124298 L7.69282336,56.9977655 C7.63073012,57.2668362 7.7985185,57.5352976 8.0675892,57.5973908 C8.277293,57.645784 8.4944359,57.5545594 8.60665987,57.3709202 L28.5351125,24.760725 C28.6791069,24.5250977 28.6048239,24.2173535 28.3691966,24.0733591 C28.2906926,24.0253844 28.200474,24 28.1084716,24 L15.6769796,24 C15.4008373,24 15.1769796,23.7761424 15.1769796,23.5 C15.1769796,23.4501576 15.1844322,23.4005954 15.1990901,23.3529571 L21.9175221,1.51805319 C21.9987317,1.2541221 21.8506066,0.974330324 21.5866755,0.893120759 C21.3718404,0.827017647 21.1393008,0.912398673 21.0182845,1.10181563 L0.491429908,33.2308054 C0.342757814,33.4635095 0.410879253,33.772676 0.643583399,33.9213481 C0.723974381,33.972709 0.817380698,34 0.912778038,34 L12.3714745,34 C12.6476168,34 12.8714745,34.2238576 12.8714745,34.5 C12.8714745,34.5378404 12.8671788,34.5755584 12.8586701,34.6124298 Z" id="Path-2" fill="#262B3D"></path>
                      <polygon id="Path-4" fill="#768C9A" points="4 32 6 32 17 10"></polygon>
                      <polygon id="Path-5" fill="#768C9A" points="12 31 16 31 10 54 21 28"></polygon>
                    </g>
                  </g>
                </g >
              </g >
            </g >
          </g >
        </g >
      </svg >
    </div>
  )
}