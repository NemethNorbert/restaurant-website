import React from 'react';
import Slider from 'react-slick';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';


class Homepage extends React.PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
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
      <div className="">
        <div className="container">
          <h1>Homepage</h1>
          <Slider {...settings}>
            <div><img src="../pictures/picture1.png" alt="kaja"/></div>
            <div><img src="../pictures/picture2.png" alt="kaja"/></div>
            <div><img src="../pictures/picture3.png" alt="kaja"/></div>
            <div><img src="../pictures/picture4.png" alt="kaja"/></div>
            <div><img src="../pictures/picture5.png" alt="kaja"/></div>
            <div><img src="../pictures/picture6.png" alt="kaja"/></div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Homepage;
