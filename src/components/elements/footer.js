import React from "react";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div id="footer">
                    <div className="footer-wrapper">
                        <div className="container">
                            <div className="footer-inner">
                                <div className="row">
                                    <div className="content">
                                        <div className="copyright">
                                            Copyright 2021. NuWorks Interactive Labs, Inc. All rights reserved
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="text-right">
                                            <div className="tnc-pp">
                                                <a href="https://nuworks.ph/terms-and-conditions/" target="_blank" rel="noopener noreferrer">
                                                    Terms and Conditions
                                                </a>
                                                &nbsp; | &nbsp;
                                                <a href="https://nuworks.ph/privacy-policy/" target="_blank" rel="noopener noreferrer">
                                                    Privacy Policy
                                                </a>
                                            </div>
                                            <div className="socmed">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.facebook.com/nuworks" target="_blank" rel="noopener noreferrer">
                                                            <img src="./static/images/menu-images/facebook-logo.svg" alt="facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://ph.linkedin.com/company/nuworksph" target="_blank" rel="noopener noreferrer">
                                                            <img src="./static/images/menu-images/linkedin-logo.svg" alt="linkedin" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/nuworksph/" target="_blank" rel="noopener noreferrer">
                                                            <img src="./static/images/menu-images/instagram-logo.svg" alt="instagram" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/nuworksph" target="_blank" rel="noopener noreferrer">
                                                            <img src="./static/images/menu-images/twitter-logo.svg" alt="twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.youtube.com/c/NuWorksInteractiveLabsIncPasig" target="_blank" rel="noopener noreferrer">
                                                            <img src="./static/images/menu-images/youtube-logo.svg" alt="youtube" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}