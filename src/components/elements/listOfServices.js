import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ListOfServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: require('../entries/list-of-services.json'),
            relatedWorks: require('../entries/related-works.json'),
            tabs: [],
            activeTiles: [],
            activeTab: "",
            activeRelatedWork: ""
        };
    }

    componentDidMount() {
        let getTabs = Object.keys(this.state.entries);
        let active = getTabs[0];
        let activeWork = active.replace(" ", "-").toLowerCase();
        let relatedTiles = this.getRelatedTiles(activeWork);
        this.setState({
            tabs: getTabs,
            activeTab: active,
            activeRelatedWork: activeWork,
            activeTiles: relatedTiles
        });
    }

    getRelatedTiles(type) {
        let tiles = [];
        this.state.relatedWorks.filter(works => works.services === type).forEach(work => {
            tiles.push(work);
        });
        return tiles;
    }

    handleTabClick(title) {
        let activeWork = title.replace(" ", "-").toLowerCase();
        let relatedTiles = this.getRelatedTiles(activeWork);

        this.setState({
            activeTab: title,
            activeRelatedWork: activeWork,
            activeTiles: relatedTiles
        });

        this.slider.slickGoTo(0, true);
    }

    render() {

        var slickSettings = {
            dots: true,
            arrows: false,
            draggable: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                        arrows: false,
                        draggable: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        var activeTab = this.state.activeTab;
        var entries = this.state.entries[activeTab] === undefined ? {} : this.state.entries[activeTab];

        return (
            <>
                <div className="list-of-services-wrapper">
                    <div className="list-of-services-image">
                        <img src="./static/images/component-images/List of Services.png" alt="capabilities" />
                    </div>
                    <div className="tabs">
                        <select className="form-control mobile" value={this.state.activeTab} onChange={event => this.handleTabClick(event.target.value)} name="list-services" id="list-services-dropdown">
                            {this.state.tabs.map((title, key) => (
                                <option key={key} value={title}>
                                    {title.toLowerCase()}
                                </option>
                            ))}
                        </select>
                        <ul className="desktop">
                            {this.state.tabs.map((title, key) => (
                                <li key={key}>
                                    <a href="#/" className={this.state.activeTab === title ? "active" : "not-active"} onClick={() => this.handleTabClick(title)}>{title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tab-pane">
                        <div className="tab-title">/ {this.state.activeTab} /</div>
                        <div className="tab-items">
                            <Slider ref={slider => (this.slider = slider)} {...slickSettings}>
                                {Object.keys(entries).map((entry_key, key) => {
                                    let data = entries[entry_key];
                                    let data_key = key;
                                    return (
                                        <div className="slick-wrapper" key={data_key}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-image">
                                                        <img src={data.img} alt={entry_key} />
                                                    </div>
                                                    <div className="card-desc">
                                                        <div className="card-inner-title">
                                                            {entry_key}
                                                        </div>
                                                        <div className="card-inner-desc">
                                                            {data.description.map((desc, descKey) => (
                                                                <p key={descKey}>{desc}</p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                            {Object.keys(entries).length <= 3 && <ul className="slick-dots desktop" style={{ display: "block" }}><li className="slick-active"><button>1</button></li></ul>}
                        </div>
                    </div>
                </div>
                <div className="related-works">
                    <div className="related-work-wrapper">
                        <div className="related-work-title">
                            / Related Work /
                            <span>
                                <a href="#work-desc">
                                    View all Works
                                </a>
                            </span>
                        </div>
                        <div className="related-work-tabs">
                            {this.state.activeTiles.length !== 0 && this.state.activeTiles.map((work, key) => (
                                <div className="related-work-holder" key={key}>
                                    <a href="#/">
                                        <div className="related-work-image">
                                            <img src={work.image} alt={work.name} />
                                        </div>
                                        <div className="related-work-desc-wrapper">
                                            <div className="related-work-title">
                                                {work.name}
                                            </div>
                                            <div className="related-work-tags">
                                                {work.capabilityFocus}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                            {this.state.activeTiles.length === 0 && <div className="no-result-found">Coming Soon!</div>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}