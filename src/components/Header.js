import React from 'react';
import data from '../headerData';
import Slider from 'react-slick';


class Header extends React.PureComponent {
  state= {
    main: {}
  }
  componentWillMount(){
    this.setState({main: data.main})
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover:true,
      swipeToScroll: true,
      centerMode: false,
      centerPadding: '0px',
    };
    return(
      <Slider {...settings}>
        {Object.values(this.state.main).map((types, index) =>
            <div key={index} className="jumbotron menubanner" style={{backgroundImage:"url('../pictures/"+types.picture+"')",height:"500px"}}>
              <div className="container bannerWrapper">
                <h1 className="display-3">{types.title}</h1>
                <p className="lead underline">{types.body}</p>
                <div className="text-center marT">
                <button className="btn btn-primary btn-lg">{types.button}</button>
                </div>
              </div>
            </div>
          )
        }
      </Slider>
    )
  }
}

export default Header;
