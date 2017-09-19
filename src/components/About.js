import React from 'react';

import Slider from 'react-slick';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class About extends React.PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      responsive: [ { breakpoint: 576, settings: { slidesToShow: 1, centerPadding:0,  } }, { breakpoint: 665, settings: { slidesToShow: 1 } }, { breakpoint: 1092, settings: { slidesToShow: 2, } }, { breakpoint: 1400, settings: { slidesToShow: 3 } } ],
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: true,
      pauseOnHover:true,
      focusOnSelect: true,
      nextArrow: <RightArrow {...this.props} />,
      prevArrow: <LeftArrow {...this.props} />
    };
    return (
      <div>
        <div className="container" style={{width:"90%"}}>
          <h1>AboutPage</h1>
          <Slider {...settings}>
            <div><img className="SliderImg" src="../pictures/picture1.png" alt="kaja"/></div>
            <div><img className="SliderImg" src="../pictures/picture2.png" alt="kaja"/></div>
            <div><img className="SliderImg" src="../pictures/picture3.png" alt="kaja"/></div>
            <div><img className="SliderImg" src="../pictures/picture4.png" alt="kaja"/></div>
            <div><img className="SliderImg" src="../pictures/picture5.png" alt="kaja"/></div>
            <div><img className="SliderImg" src="../pictures/picture6.png" alt="kaja"/></div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default About;
