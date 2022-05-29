import React from "react";

export default class RelatedWorks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: require('../entries/related-works.json'),
            filteredEntries: require('../entries/related-works.json'),
            capabilityFocusFilter: "default",
            servicesFilter: "default"
        };
    }

    componentDidMount() {

    }

    handleSelectFilter(event, type) {
        let value = event.target.value;
        let entries = this.state.entries;
        let serviceFilter = this.state.servicesFilter;
        let capabilityFilter = this.state.capabilityFocusFilter;

        if (type === "capability") {
            capabilityFilter = value;
        } else {
            serviceFilter = value;
        }

        if (type === "capability" && value !== "") {
            entries = entries.filter(entry => entry.capabilityFocus === capabilityFilter)
        }

        if (type === "services" && value !== "") {
            entries = entries.filter(entry => entry.services === serviceFilter)
        }

        if (serviceFilter !== "" && serviceFilter !== "default") {
            entries = entries.filter(entry => entry.services === serviceFilter)
        }

        if (capabilityFilter !== "" && capabilityFilter !== "default") {
            entries = entries.filter(entry => entry.capabilityFocus === capabilityFilter)
        }

        this.setState({
            filteredEntries: entries,
            capabilityFocusFilter: capabilityFilter,
            servicesFilter: serviceFilter
        });

    }

    render() {
        return (
            <>
                <div className="work-wrapper">
                    <div className="work-cont">
                        <img src="./static/images/component-images/work.png" alt="work" />
                    </div>
                    <div className="work-desc-wrapper">
                        <div className="work-text">
                            From “to”, we “DO”. We have prided ourselves by our work that not only move the needle, but because it helps move the gears of economy. Through our work, we do help fulfill the needs of our clients, of people. This is what we do, these are some of the work we have done.
                        </div>
                    </div>
                    <div className="work-filter">
                        <div className="work-filter-wrapper">
                            <select className="form-control" value={this.state.capabilityFocusFilter} onChange={event => this.handleSelectFilter(event, "capability")} name="capability" id="capability-focus-dropdown">
                                <option value="default" disabled={true}>Filter by Capability Focus</option>
                                <option value="cx"> CX </option>
                                <option value="communications"> Communications </option>
                                <option value="commerce"> Commerce </option>
                                <option value="">All</option>
                            </select>
                        </div>
                        <div className="work-filter-wrapper">
                            <select className="form-control" value={this.state.servicesFilter} onChange={event => this.handleSelectFilter(event, "services")} name="services" id="services-dropdown">
                                <option value="default" disabled={true}>Filter by Services</option>
                                <option value="brand-strategy"> Brand Strategy </option>
                                <option value="content-production"> Content Production </option>
                                <option value="media"> Media </option>
                                <option value="creative"> Creative </option>
                                <option value="engagement"> Engagement </option>
                                <option value="ecommerce-marketing"> Ecommerce Marketing </option>
                                <option value="consulting"> Consulting </option>
                                <option value="analytics"> Analytics </option>
                                <option value="experience-design"> Experience Design </option>
                                <option value="technology"> Technology </option>
                                <option value="">All</option>
                            </select>
                        </div>
                    </div>
                    <div className="related-work-tabs">
                        <div id="loading-image" style={{ display: "none" }}>
                            <img src="/static/images/logo/ajax-loader.gif" alt="loader" />
                        </div>
                        <div className="related-work-wrapper">
                            {this.state.filteredEntries.length !== 0 && this.state.filteredEntries.map((entry, key) => {
                                return (
                                    <div className="related-work-holder" key={key}>
                                        <a href="#/">
                                            <div className="related-work-image">
                                                <img src={entry.image} alt={entry.name} />
                                            </div>
                                            <div className="related-work-desc-wrapper">
                                                <div className="related-work-title">{entry.name}</div>
                                                <div className="related-work-tags">{entry.capabilityFocus}</div>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                            {this.state.filteredEntries.length === 0 && <div className="no-result-found">Coming Soon!</div>}
                        </div>
                    </div>
                </div>
            </>
        );
    };
}