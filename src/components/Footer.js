import React from 'react';
import { Breadcrumb, BreadcrumbItem,

} from 'reactstrap';

import Newsletter from './Newsletter';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer bg-brown" style={{backgroundImage:"url('"+process.env.PUBLIC_URL + "/pictures/brand/footer.png')"}}>
        <div className="container breadWrapper text-center">
          <Breadcrumb className={"bg-brown"}>
            <div className="footWrapper text-center">
              <BreadcrumbItem ><a href="#">Impresszum</a></BreadcrumbItem>
              <BreadcrumbItem ><a href="#">Adatvédelmi Tájékoztató</a></BreadcrumbItem>
              <BreadcrumbItem ><a href="#">Általános Szerződési Feltételek</a></BreadcrumbItem>
            </div>
          </Breadcrumb>
        </div>
        <Newsletter />
        <div className="container text-center footEnd">
          <h3 className="lead text-brown">Az élmény, melyet érdemes megosztani</h3>
          <img className="marT" src={process.env.PUBLIC_URL + "/pictures/brand/face.png"} alt="facebook"/>
          <img className="marT" src={process.env.PUBLIC_URL + "/pictures/brand/insta.png"} alt="instagramm"/>
          <img className="footerLogo" src={process.env.PUBLIC_URL + "/pictures/brand/footerBrand.png"} alt="B54 Caffe, Bistro & Bakery"/>
        </div>
      </div>
    );
  }
}

export default Footer;
