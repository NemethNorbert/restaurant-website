import React from 'react';
import Slider from 'react-slick';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import {NavLink} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Homepage extends React.PureComponent {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: false,
      pauseOnHover:true,
      focusOnSelect: true,
      nextArrow: <RightArrow {...this.props} />,
      prevArrow: <LeftArrow {...this.props} />
    };
    return (
      <div className="">
        <div className="row menuWrapper clearfix">
          <div className="container">
            <div className="menuBox text-center">
              <div className="menuTitle">
                <p className="lead">Térj be hozzánk</p>
                <p className="menuText">Elegáns kényelem, figyelmes kiszolgálást és a bisztrók üde, ráérős hangulata fogad a plázai forgatagban is. Ropogós szendvicsek, friss saláták és francia finomságok várják, hogy belefeledkezz az ízek kavalkádjába.</p>
              </div>
            </div>
            <NavLink to={process.env.PUBLIC_URL+'/Pekseg'} tag={RRNavLink}  className="menu menu1">
              <div className="menuImage"></div>
              <div className="wrapp text-center">
                <div className="menuTitle">
                  <h3 className="lead">Pékség</h3>
                  <p className="menuText">francia pékárú</p>
                </div>
              </div>
            </NavLink>
            <NavLink to={process.env.PUBLIC_URL+'/Etelek'} tag={RRNavLink}  className="menu menu2">
              <div className="menuImage"></div>
              <div className="wrapp text-center">
                <div className="menuTitle">
                  <h3 className="lead">Ételek</h3>
                  <p className="menuText">francia pékárú</p>
                </div>
              </div>
            </NavLink>

            <NavLink to={process.env.PUBLIC_URL+'/Italok'} tag={RRNavLink} className="menu small1">
              <div className="menuImage"></div>
              <div className="wrapp text-center">
                <div className="menuTitle">
                  <h3 className="lead">Italok</h3>
                  <p className="menuText">francia pékárú</p>
                </div>
              </div>
            </NavLink>
            <NavLink to={process.env.PUBLIC_URL+'/Etelek'} tag={RRNavLink} className="menu small2">
              <div className="menuImage"></div>
              <div className="wrapp text-center">
                <div className="menuTitle">
                  <h3 className="lead">Desszertek</h3>
                  <p className="menuText">francia pékárú</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="row text-align bg-clear pad line">
          <div className="col-lg-4 col-md-4 lineWrapper">
            <h3 className="lead text-center">Mi a titkunk?</h3>
            <hr className="hr bg-brown"/>
            <div className="padB text-center">Egy csipetnyi Franciaország, egy kiskanálnyi Itália és a harmónikus ízek szenvedélyes szeretete.</div>
          </div>
          <div className="col-lg-4 col-md-4 text-center padB lineWrapper">
            <img src={process.env.PUBLIC_URL + "/pictures/brand/linepic1.png"} className="linepic"/>
          </div>
          <div className="col-lg-4 col-md-4 lineWrapper">
            <h3 className="lead text-center">Mániánk a minőség</h3>
            <hr className="hr bg-brown"/>
            <div className="padB text-center">Ha a minőség van terítéken, nem ismerünk pardont. Csakis a legkiválóbb alapanyagokból és eljárásokkal dolgozunk, gondosan válogatott és fejlesztett receptek alapján.</div>
            <NavLink to={process.env.PUBLIC_URL+'/About'} tag={RRNavLink}  className="btn btn-outline-brown">A titok</NavLink>
          </div>
        </div>


        <div className="row bigline bg-look text-center">
          <div className="col-lg-6 col-md-6 lineWrapper text-white pad">
            <h3 className="lead text-center">Menj biztosra!</h3>
            <hr className="hr bg-brown"/>
            <div className="padB text-center">Találd meg a kedvencedet villámgyorsan! Vegára vágysz vagy oda vagy az olasz szalámiért? Keress akár típusra vagy hozzávalóra is!</div>
          </div>
          <div className="col-lg-6 col-md-6 lineWrapper">
            <NavLink to={process.env.PUBLIC_URL+'/Etelek'} tag={RRNavLink}><img src={process.env.PUBLIC_URL + "/pictures/brand/biglinepic.png"} className="searchImg" /></NavLink>
          </div>
        </div>

        <div className="row text-align bg-clear pad line">
          <div className="col-lg-4 col-md-4 col-sm-6 lineWrapper bg-line2">
            <h3 className="lead text-center">Franciaországból a tányérodra</h3>
            <div className="padB text-center">frissen, ropogósan</div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 text-center padB lineWrapper">
            <img src={process.env.PUBLIC_URL + "/pictures/brand/linepic2.png"} className="linepic"/>

          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 lineWrapper mobfixer">
            <h3 className="lead text-center">Melegen ajánljuk</h3>
            <hr className="hr bg-brown"/>
            <div className="padB text-center">Francia receptúra alapján készült péktermékeinket minden reggel mi magunk sütjük házi pékségünkben. Mi sem természetesebb, hogy szendvicdseinket is a frissen sült bagettekből és ciabbatákból készítjük. Így lesz ropogós a szendvics, Párizst idéző a croissant és omlós a muffin.</div>
          </div>
        </div>

        <div className="container text-center" style={{width:"90%"}}>
          <NavLink to={process.env.PUBLIC_URL+'/Galeria'} tag={RRNavLink}><div className="galeria"><div className="galeriaText">Galéria</div></div></NavLink>
          <Slider {...settings} className="galeriaSlider">
            <div className="sliderBox text-white">
              <blockquote className="blockquote sliderText">
                <p className="mb-0">„Kurvajó minden”</p>
                <footer className="blockquote-footer text-silent">Rólunk írta - Egy random arc</footer>
              </blockquote>
            </div>
            <div className="sliderBox text-white">
              <blockquote className="blockquote sliderText">
                <p className="mb-0">„Igazi olasz sonka”</p>
                <footer className="blockquote-footer text-silent">Rólunk írta - Egy random arc</footer>
              </blockquote>
            </div>
            <div className="sliderBox text-white">
              <blockquote className="blockquote sliderText">
                <p className="mb-0">„Egy gasztronomiai csoda”</p>
                <footer className="blockquote-footer text-silent">Rólunk írta - Egy random arc</footer>
              </blockquote>
            </div>
            <div className="sliderBox text-white">
              <blockquote className="blockquote sliderText">
                <p className="mb-0">„Minden nap itt reggelizem”</p>
                <footer className="blockquote-footer text-silent">Rólunk írta - Egy random arc</footer>
              </blockquote>
            </div>
          </Slider>
        </div>

        <div className="row bigline bg-contact">
          <div className="col-lg-6 col-md-6 lineWrapper text-center">
            <NavLink to={process.env.PUBLIC_URL+'/Etelek'} tag={RRNavLink}><img src={process.env.PUBLIC_URL + "/pictures/brand/google.png"} className="google" /></NavLink>
          </div>
          <div className="col-lg-6 col-md-6 lineWrapper text-white pad">
            <h3 className="lead text-center">Elérhetőségeink</h3>
            <hr className="hr bg-brown"/>

              <table className="table cont text-center">
                <tbody>
                  <tr>
                    <th scope="row"><i className="fa fa-map-marker" aria-hidden="true"></i></th>
                    <td>1138 Budapest, Váci út 178.,<br />Duna Plaza II. emelet</td>
                  </tr>
                  <tr>
                    <th scope="row"><i className="fa fa-phone-square" aria-hidden="true"></i></th>
                    <td>(1) 465 1666</td>
                  </tr>
                  <tr>
                    <th scope="row"><i className="fa fa-envelope" aria-hidden="true"></i></th>
                    <td>B54@emid.hu</td>
                  </tr>
                </tbody>
              </table>
            <div className="pad text-center">
              <div><h3><i className="fa fa-clock-o" aria-hidden="true"></i> Nyitvatartás</h3></div>
              <div>Hétfőtől szombatig: 9.00-21.00<br/>vasárnap: 9.00-19.00</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Homepage;
