import React from 'react';

class About extends React.PureComponent {
  render() {
    return (
      <div className="gapfix">
        <div className="row clearfix cubeWrapper">
            <div className="cubeline text-center bg-white-h">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-left text-white cubetext">
                <h3 className="lead text-center">Így készítjük mi...</h3>
                <hr className="hr bg-brown"/>
                <div className="text-center">Csakis a legkiválóbb alapanyagokból dolgozunk. Minősített beszállítóink és partnereink neve garancia. Nálunk a francia sütemény valóban Franciaországból érkezik, az olasz sonka és kolbász pedig Olaszországból.
Minden hozzávalót gondosan válogatunk össze. Csak a legfrissebbek, legízletesebbek jöhetnek szóba. Olyan biztosak vagyunk vállalásunkban, hogy ételeinket előtted, látványkonyhánkban készítjük el.</div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-right cubepicture">
                <img src={process.env.PUBLIC_URL + "/pictures/brand/ingredients_pic1.png"} className="" />
              </div>
            </div>
            <div className="cubeline text-center bg-white-h">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-right text-white cubetext">
                <div className="text-center">Felszeretltségben sem ismerünk kompromisszumot. Eszközeink egyszerre ötvözik a csúcstechnológiát és a bevállt klasszikusokat.  Ahogyan ételeink is. Valódi időtálló receptek épp annyira megbolondítva, hogy minden falat izgalmas és harmónikus ízélménnyé váljon.</div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-left cubepicture">
                <img src={process.env.PUBLIC_URL + "/pictures/brand/latvanykonyaha_pic2.png"} className="" />
              </div>
            </div>
          </div>

          <div className="row text-align bg-clear pad line">
            <div className="lineWrapper mobfixer bg-chef">
              <h3 className="lead text-center">A stáb</h3>
              <hr className="hr bg-brown"/>
              <div className="padB text-center">Ezért adtuk a receptek elkészítését igazán szakavatott kezekbe.<br />
              Chefünk, Zoltán már 30 éve hódol hivatásszerűen szenvedélyének, a konyhaművészetnek. Titka, hogy minden hozzávalót a saját ízlése szerint, úgy készít el,minta magának és szeretteinek tenné. S nekik csak a legjobb jár. Így vendégeinknek sem kell beérniük kevesebbel.<br/>
              Vallja, hogy a jó étel elkészítése csapatmunka. Nálunk az eredeti receptet és a gondosan megválogatott össztevőket a szakszerű előkészítés, a szemet gyönyörködtető tálalás és a figyelmes kiszolgálás teszi teljessé.
              </div>
            </div>
          </div>

          <div className="row clearfix cubeWrapper">
              <div className="cubeline text-center bg-white-h">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-left text-white cubetext">
                  <h3 className="lead text-center">Frissen, melegében</h3>
                  <hr className="hr bg-brown"/>
                  <div className="text-center">Francia péktermékeinket minden reggel magunk sütjük házi pékségünkben. A friss baguettekből, panninikból, croissantokból és ciabattákból készítjük el szendvicseinket, meleg kenyer várja, hogy hazavidd és  frissen sült finomságok integetnek neked a pultról.</div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-right cubepicture">
                  <img src={process.env.PUBLIC_URL + "/pictures/brand/breadmaking_pic4.png"} className="" />
                </div>
              </div>
              <div className="cubeline text-center bg-white-h">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-right text-white cubetext">
                  <div className="text-center">Felszeretltségben sem ismerünk kompromisszumot. Eszközeink egyszerre ötvözik a csúcstechnológiát és a bevállt klasszikusokat.  Ahogyan ételeink is. Valódi időtálló receptek épp annyira megbolondítva, hogy minden falat izgalmas és harmónikus ízélménnyé váljon.</div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 float-left cubepicture">
                  <img src={process.env.PUBLIC_URL + "/pictures/brand/theplace_pic5.png"} className="" />
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default About;
