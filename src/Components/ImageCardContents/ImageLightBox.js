import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Lightbox from 'react-images';


export default class ImageLightBox extends React.Component {
  state = { modalIsOpen: false }
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  }

  displayImage = () => {
      return this.props.filteredPics.reduce((array, pic) => {
        const obj = {src: ''}
        obj.src = pic.img_url
        array.push(obj)
        return array
    },[])
  }

  render() {
    console.log(this.displayImage())
    const { modalIsOpen } = this.state;
    return (
      <Lightbox images={this.displayImage()} />
    );
  }
}
      // <ModalGateway>
      //   {modalIsOpen ? (
      //     <Modal onClose={this.toggleModal}>
      //       <Carousel views={this.displayImage()} />
      //     </Modal>
      //   ) : null}
      // </ModalGateway>