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
      <div className="">
        <div className="row menuWrapper">

          <div className="float-left menuDisplay">
            <div className="menuBox text-center">
              <p className="menuTitle lead">Térj be hozzánk</p>
              <div className="specialhr"></div>
              <p className="menuText pad">Elegáns kényelem, figyelmes kiszolgálást és a bisztrók üde, ráérős hangulata fogad a plázai forgatagban is. Ropogós szendvicsek, friss saláták és francia finomságok várják, hogy belefeledkezz az ízek kavalkádjába.</p>
            </div>
            <div className="smallmenu1">
              <div className="grey-filter text-center">
                <p className="menuTitle lead">Pékség</p>
                <div className="specialhr"></div>
                <p className="menuText lead">francia pékárú</p>
              </div>
            </div>
            <div className="smallmenu2">
              <div className="grey-filter text-center">
                <p className="menuTitle lead">Ételek</p>
                <div className="specialhr"></div>
                <p className="menuText lead">francia pékárú</p>
              </div>
            </div>
          </div>
          <div className="float-right menuDisplay">
            <div className="menu1">
              <div className="grey-filter text-center">
                <p className="menuTitle lead">Pékség</p>
                <div className="specialhr"></div>
                <p className="menuText lead">francia pékárú</p>
              </div>
            </div>
            <div className="menu2">
              <div className="grey-filter text-center">
                <p className="menuTitle lead">Ételek</p>
                <div className="specialhr"></div>
                <p className="menuText lead">francia pékárú</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{width:"90%"}}>
          <h1>Homepage</h1>
          <Slider {...settings}>
            <div><img className="SliderImg" src={process.env.PUBLIC_URL + "/pictures/picture1.png"} alt="kaja"/></div>
            <div><img className="SliderImg" src={process.env.PUBLIC_URL + "/pictures/picture2.png"} alt="kaja"/></div>
            <div><img className="SliderImg" src={process.env.PUBLIC_URL + "/pictures/picture3.png"} alt="kaja"/></div>
            <div><img className="SliderImg" src={process.env.PUBLIC_URL + "/pictures/picture4.png"} alt="kaja"/></div>
            <div><img className="SliderImg" src={process.env.PUBLIC_URL + "/pictures/picture5.png"} alt="kaja"/></div>
            <div><img className="SliderImg" src={process.env.PUBLIC_URL + "/pictures/picture6.png"} alt="kaja"/></div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Homepage;
