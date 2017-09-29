import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

export default class Galeria extends React.PureComponent {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
    render() {
	return (
    <div style={{marginTop:"-30px"}}>
	    <Gallery photos={PHOTO_SET} onClick={this.openLightbox}/>
      <Lightbox
          theme={{ container: { background: 'rgba(0, 0, 0, 0.85)' } }}
          images={PHOTO_SET.map(x => ({ ...x, srcset: x.srcSet, caption: x.title }))}
          backdropClosesModal={true}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          width={1600}
          />
      </div>
	);
    }
}
const PHOTO_SET = [
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 300,
    height: 300,
    alt: 'image 1',
  },
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery2.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 300,
    height: 300,
    alt: 'image 2',
  },
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery3.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 381,
    height: 324,
    alt: 'image 3',
  },
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery4.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 300,
    height: 300,
    alt: 'image 4',
  },
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery5.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 381,
    height: 324,
    alt: 'image 5',
  },
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery6.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 300,
    height: 300,
    alt: 'image 6',
  },
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery7.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 381,
    height: 124,
    alt: 'image 7',
  },
  {
    src: 'https://norbert.emid.hu/feltolt/norbert/gallery8.jpg',

    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 300,
    height: 300,
    alt: 'image 8',
  }
];
