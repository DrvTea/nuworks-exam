import React from "react";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0,
            menuState: "closed"
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = winScroll / height;

        if (scrolled === 0) {
            this.setState({
                scrollPosition: false,
            });
        } else {
            this.setState({
                scrollPosition: true,
            });
        }
    }

    handleOpenMenu(state) {
        this.setState({
            menuState: state
        });
    }

    render() {
        return (
            <>
                <div className="rotating-logo">
                    <a href="https://nuworks.ph/lets-connect/" target="_blank" rel="noreferrer noopener">
                        <img src="./static/images/Persistent-NW-Logo-GIF-v2.gif" alt="rotating-fixed-logo" />
                    </a>
                </div>
                <nav className={this.state.scrollPosition ? "navbar scrolled" : "navbar"}>
                    <div className="navbar-container">
                        <a className="navbar-brand" href="/">
                            <img src="./static/images/logos/NW logo white.png" alt="NW-logo" />
                        </a>
                        <a href="#/" id="open-nav" onClick={() => this.handleOpenMenu("open")}>
                            <img src="./static/images/icons/hamburger-icon.png" alt="hamburger-icon" />
                        </a>
                    </div>
                </nav>
                <div id="menu" className={this.state.menuState === "open" ? "open" : "closed"}>
                    <div className="menu-wrapper">
                        <div className="menu-close"><a href="#/" onClick={() => this.handleOpenMenu("close")}>X</a></div>
                        <div className="menu-list">
                            <div className="menu-inner">
                                <ul>
                                    <li><a href="#service-philosophy">Our Services</a></li>
                                    <li><a href="#works">Our Work</a></li>
                                    <li><a href="#about">About nuworks</a></li>
                                    <li><a href="/join-the-team/">Be One of Us</a></li>
                                    <li><a href="/lets-connect/">Let's Connect</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu-footer">
                            <div className="partners">
                                <a href="https://www.google.com/partners/agency?id=2893686766">
                                    <img src="./static/images/menu-images/google.png" alt="google" />
                                </a>
                                <a href="#/">
                                    <img src="./static/images/menu-images/facebook.png" alt="facebook" />
                                </a>
                            </div>
                            <div className="links">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/nuworks">
                                            <img src="./static/images/menu-images/facebook-logo.svg" alt="facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://ph.linkedin.com/company/nuworksph">
                                            <img src="./static/images/menu-images/linkedin-logo.svg" alt="linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/nuworksph/">
                                            <img src="./static/images/menu-images/instagram-logo.svg" alt="instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/nuworksph">
                                            <img src="./static/images/menu-images/twitter-logo.svg" alt="twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/c/NuWorksInteractiveLabsIncPasig">
                                            <img src="./static/images/menu-images/youtube-logo.svg" alt="youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tnc-pp">
                                <a href="/terms-and-conditions/">
                                    Terms and Conditions
                                </a>
                                &nbsp; | &nbsp;
                                <a href="/privacy-policy/">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};