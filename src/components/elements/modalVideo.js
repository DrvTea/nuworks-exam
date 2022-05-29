import React from "react";
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default class ModalVideo extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <>
                <div className="content">
                    <div className="our-story-video">
                        <div className="middle" id="manifesto-video" style={{ cursor: "pointer" }}>
                            <img src="./static/images/component-images/Group 5816.png" alt="we-are-makers" onClick={this.handleOpenModal} style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.showModal}
                        contentLabel="Our Story Youtube Video"
                        onRequestClose={this.handleCloseModal}
                        className="our-story-modal"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={this.handleCloseModal} style={{cursor: "pointer"}}>
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <iframe width="100%" frameborder="0" height="550" src="https://www.youtube.com/embed/lU_ytGp00NU" className="embed-responsive-item" title="YouTube video player" allowFullScreen={true}></iframe>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="content">
                    <div className="our-story-text">
                        <div className="our-story-title">
                            <img src="./static/images/component-images/Our Story.png" alt="our-story" />
                        </div>
                        <div className="our-story-desc">
                            NuWorks was founded in 2009, with the vision to provide meaningful human experiences to brands, consumers and the society. We developed and maintain a robust service portfolio with capabilities spanning the full spectrum of technology-driven marketing.
                            <br /><br />
                            An independent agency since inception, we are fortunate to grow into one of the biggest full-suite advertising and innovations agencies in the Philippines. Here is how we got there.
                        </div>
                    </div>
                </div>
            </>
        );
    }
}