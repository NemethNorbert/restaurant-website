import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle } from 'reactstrap';

class ProductCard extends React.PureComponent {
  render() {
    const {meals} = this.props;
    return (
      <div className=" py-3 col-xl-6 col-md-12 float-left">
        <Card className={'myCard'}>
          <div className='row'>
            <div className="col-lg-4 col-md-4 col-sm-4  col-xs-12">
              <CardImg top width="100%" src={process.env.PUBLIC_URL + "/pictures/"+meals.picture+".png"} className={'specialCard float-left'} alt="Kaja" />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 cardText">
            <CardBlock className={'px-3'}>
              <CardTitle>{meals.name}</CardTitle>
              {/*<CardSubtitle className={'extra'}>{meals.contain.join(', ')}</CardSubtitle>*/}
              <CardText>{meals.body}</CardText>
              <CardTitle className={"maR price"}>{meals.price+",-"}</CardTitle>
            </CardBlock>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
