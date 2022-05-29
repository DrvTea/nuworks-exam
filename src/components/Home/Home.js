import React from "react";
import NavBar from "../elements/navBar";
import ListOfServices from "../elements/listOfServices";
import RelatedWorks from "../elements/relatedWorks";
import Footer from "../elements/footer";
import ModalVideo from "../elements/modalVideo";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <section id="homepage">
                    <video autoPlay playsInline muted={true} loop={true} id="NW-video" className="video-horizontal">
                        <source src="./static/videos/Odyssey Website - Main Page - Launch Video v2.mp4" type="video/mp4" />
                    </video>
                    <video autoPlay playsInline muted={true} loop={true} id="NW-video-vertical" className="video-vertical">
                        <source src="./static/videos/Main Page - Launch Video v2_Vertical.mp4" type="video/mp4" />
                    </video>
                </section>
                <div className="container">
                    <div id="service-philosophy" className="row">
                        <div className="content">
                            <div className="services-wrapper">
                                <div className="middle">
                                    <div className="services-title">
                                        <img src="./static/images/component-images/Service Philosophy.png" alt="service-philosophy" />
                                    </div>
                                    <div className="services-desc">
                                        NuWorks builds, operates, and deploys digital services
                                        to help brands and business scale in the digital economy. This is made possible through StoryTeching: the process by which we utilize our end-to-end digital capabilities in communication, commerce, and customer experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="services-image">
                                <img src="./static/images/component-images/philosophy.png" alt="philosophy" />
                            </div>
                        </div>
                    </div>
                    <div id="capability-focus" className="row">
                        <div className="content">
                            <div className="capability-image">
                                <img src="./static/images/component-images/capabilities.png" alt="capabilities" />
                            </div>
                        </div>
                        <div className="content">
                            <div className="capability-wrapper">
                                <div className="middle">
                                    <div className="capability-title">
                                        <img src="./static/images/component-images/Capability Focus.png" alt="capability-focus" />
                                    </div>
                                    <div className="capability-desc">
                                        <div className="mini-wrapper">
                                            <div className="mini-title">
                                                CX
                                            </div>
                                            <div className="mini-desc">We help brands hack the marketing funnel through insight-driven, intuitively designed customer experiences.
                                                We create impact by strategically aligning business goals to human-centric principles.</div>
                                        </div>
                                        <div className="mini-wrapper">
                                            <div className="mini-title">
                                                Communications
                                            </div>
                                            <div className="mini-desc">We create data-inspired messages that drive culture and technology.
                                                We produce highly engaging content to trigger brand love.
                                                We deploy brand-building solution to spur business growth.</div>
                                        </div>
                                        <div className="mini-wrapper">
                                            <div className="mini-title">
                                                Commerce
                                            </div>
                                            <div className="mini-desc">We help brands convert their digital presence to purchases through eCommerce consulting
                                                and precision marketing.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="list-of-services" className="row">
                        <ListOfServices />
                    </div>
                    <div id="works" className="row">
                        <RelatedWorks />
                    </div>
                    <div id="our-tech-stacks" className="row">
                        <div className="content">
                            <div className="our-tech-stacks-title">
                                <img src="./static/images/component-images/Our Tech Stack.png" alt="our-tech-stacks" />
                            </div>
                            <div className="our-tech-stacks-inner">
                                <div className="our-tech-stacks-text">
                                    Our growing but curated catalogue of tools, subscriptions, and in-house enterprise make up why and how we can walk our talk in tech.
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="tech-stack-wrapper">
                                <div className="our-tech-stacks-list">
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/01 Digital Ocean.png" alt="01 Digital Ocean" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/02 AWS.png" alt="02 AWS" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/03 MySQL.png" alt="03 MySQL" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/04 MongoDB.png" alt="04 MongoDB" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/05 PostgreSQL.png" alt="05 PostgreSQL" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/06 Nginx.png" alt="06 Nginx" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/07 PHP.png" alt="07 PHP" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/08 Cloudflare.png" alt="08 Cloudflare" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/09 Magento.png" alt="09 Magento" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/10 Moodle.png" alt="10 Moodle" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/11 WordPress.png" alt="11 WordPress" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/12 SuiteCRM.png" alt="12 SuiteCRM" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/13 Drupal.png" alt="13 Drupal" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/14 Django.png" alt="14 Django" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/15 Python.png" alt="15 Python" />
                                        </div>
                                    </div>
                                    <div className="our-tech-stack">
                                        <div className="our-tech-stack-inner">
                                            <img src="./static/images/tech-stack/16 Laravel.png" alt="16 Laravel" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section id="about">
                        <div className="about-wrapper">
                            <div className="about-cont">
                                <img src="./static/images/component-images/about.png" alt="about" />
                            </div>
                        </div>
                    </section>
                    <div id="our-story" className="row">
                        <ModalVideo />
                    </div>
                    <div id="our-values" className="row">
                        <div className="our-values-wrapper">
                            <div className="our-values-title">
                                <img src="./static/images/component-images/Our Values.png" alt="our-values" />
                            </div>
                            <div className="our-values-desc">
                                <div className="our-values-list">
                                    <div className="row right">
                                        <div className="content">
                                            <div className="our-values-header">
                                                Be Brave For Good
                                            </div>
                                            <div className="our-values-text">
                                                Brave is venturing into the unknown. It is our standard of excellence that delivers results. We <span>create meaningful human experiences.</span>  Powered by integrity, we will define a better digital future.
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="our-values-inner">
                                                <div className="our-values-icon">
                                                    <img src="./static/images/component-images/Right hand 1 1.png" className="be-brave" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-values-list">
                                    <div className="row">
                                        <div className="content">
                                            <div className="our-values-inner">
                                                <div className="our-values-icon">
                                                    <img src="./static/images/component-images/Right hand 1 2.png" className="lead-the-change" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="our-values-header">
                                                Lead the Change
                                            </div>
                                            <div className="our-values-text">
                                                Keep asking, keep exploring, keep pushing. Show the way in designing and building all things imaginable. <span>Learn, unlearn, grow and continue to reinvent</span> who we are, what we do, and how we do it.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-values-list">
                                    <div className="row right">
                                        <div className="content">
                                            <div className="our-values-header">
                                                Trust &amp; Be Trustworthy
                                            </div>
                                            <div className="our-values-text">
                                                <span>Work with trust.</span> Have faith in your team, clients, and partners. In the same way, work to be trustworthy. <span>Be responsible. Be accountable.</span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="our-values-inner">
                                                <div className="our-values-icon">
                                                    <img src="./static/images/component-images/Right hand 1 3.png" className="be-trust" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-values-list">
                                    <div className="row">
                                        <div className="content">
                                            <div className="our-values-inner">
                                                <div className="our-values-icon">
                                                    <img src="./static/images/component-images/Right hand 1 4.png" className="be-customer" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="our-values-header">
                                                Be Customer Centric
                                            </div>
                                            <div className="our-values-text">
                                                <span>Grow what grows us.</span>
                                                Strive to be the best version of yourself so we always deliver the most value to our customers. Their success is our success.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-values-list">
                                    <div className="row right">
                                        <div className="content">
                                            <div className="our-values-header">
                                                Be Better Together
                                            </div>
                                            <div className="our-values-text">
                                                Collaboration is successful when diverse minds work. With great passion, respect, empathy, commitment, and a lot of fun we can achieve more as a team. <span>Great output comes from great relationships.</span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="our-values-inner">
                                                <div className="our-values-icon">
                                                    <img src="./static/images/component-images/Right hand 1 5.png" className="be-better" alt="vector" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="our-partners" className="row">
                        <div className="our-partners-wrapper row">
                            <div className="content">
                                <div className="our-partners-title">
                                    <img src="./static/images/component-images/Our Partners.png" alt="our-partners" />
                                </div>
                            </div>
                            <div className="content">
                                <div className="our-partners-inner">
                                    <div className="our-partners-text">
                                        As proud as we are of our people and capabilities, we are equally proud of the relationships we have forged with our partner clients. We work hard and smart at being their enthusiastic, abled partners.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="our-partners-list">
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/smb.png" alt="smb" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Unilever.png" alt="unilever" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Nestle.png" alt="Nestle" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Coke.png" alt="Coke" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">

                                    <img src="./static/images/partners/Avida.png" alt="Avida" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">

                                    <img src="./static/images/partners/bdo.png" alt="bdo" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Petron.png" alt="Petron" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/unicef.png" alt="unicef" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Cignal Play.png" alt="Cignal Play" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">

                                    <img src="./static/images/partners/jollibee.png" alt="jollibee" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">

                                    <img src="./static/images/partners/Burger King.png" alt="Burger King" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Greenwich.png" alt="Greenwich" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">

                                    <img src="./static/images/partners/Maggi.png" alt="Maggi" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Mercedes Benz.png" alt="Mercedes Benz" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/AstraZeneca.png" alt="AstraZeneca" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Rockwell Land.png" alt="Rockwell Land" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/iPeople.png" alt="iPeople" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/CECP.png" alt="CECP" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/San Mig Coffee.png" alt="San Mig Coffee" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Argentina.png" alt="Argentina" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Swift.png" alt="Swift" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Century Pacific.png" alt="Century Pacific" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Resorts World.png" alt="Resorts World" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Alveo.png" alt="Alveo" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Lazada.png" alt="Lazada" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/PMFTC.png" alt="PMFTC" />
                                </div>
                            </div>
                            <div className="our-partner">
                                <div className="our-partner-inner">
                                    <img src="./static/images/partners/Uratex.png" alt="Uratex" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="our-awards" className="row">
                        <div className="our-awards-wrapper row">
                            <div className="content">
                                <div className="our-awards-inner">
                                    <div className="our-awards-text text-right">
                                        Along the way, we have had the good fortune to win metal from some of the most respected and prestigious show in the industry — locally and internationally. These citations keep us humble and hungry.
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="our-awards-title text-right">
                                    <img src="./static/images/component-images/Our Awards.png" alt="our-awards" />
                                </div>
                            </div>
                        </div>
                        <div className="our-award-list">
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Campaign AOY Gold.png" alt="Campaign AOY Gold" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Campaign AOY Silver.png" alt="Campaign AOY Silver" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/R3.png" alt="R3" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/4As AOY.png" alt="4As AOY" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Asia eCommerce.png" alt="Asia eCommerce" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Festival of Media.png" alt="Festival of Media" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner ad-stars">
                                    <img src="./static/images/awards/Ad Stars.png" alt="Ad Stars" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/AdFest.png" alt="AdFest" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner araw">
                                    <img src="./static/images/awards/Araw.png" alt="Araw" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Kidlat.png" alt="Kidlat" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Tambuli.png" alt="Tambuli" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Boomerang Awards.png" alt="Boomerang Awards" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/MSAP ICE.png" alt="MSAP ICE" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/PANATA Awards.png" alt="PANATA Awards" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/Quill.png" alt="Quill" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner">
                                    <img src="./static/images/awards/YT Awards.png" alt="YT Awards" />
                                </div>
                            </div>
                            <div className="our-award">
                                <div className="our-award-inner yt-works">
                                    <img src="./static/images/awards/YT Works.png" alt="YT Works" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="our-affiliations" className="row">
                        <div className="our-affiliations-wrapper row">
                            <div className="content">
                                <div className="our-affiliations-title">
                                    <img src="./static/images/component-images/Our Affiliations.png" alt="our-affiliations" />
                                </div>
                            </div>
                            <div className="content">
                                <div className="our-affiliations-inner">
                                    <div className="our-affiliations-text">
                                        We belong to, are recognized by, and work with some of the most vital institutions and policy makers in tech and marketing.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="our-affiliation-list">
                            <div className="our-affiliation">
                                <div className="our-affiliation-inner google-partner">
                                    <img src="./static/images/affiliation/Media - Google Partner.png" alt="Media - Google Partner" />
                                </div>
                            </div>
                            <div className="our-affiliation">
                                <div className="our-affiliation-inner facebook-partner">
                                    <img src="./static/images/affiliation/Media - Facebook Partner.png" alt="Media - Facebook Partner" />
                                </div>
                            </div>
                            <div className="our-affiliation">
                                <div className="our-affiliation-inner i4as">
                                    <img src="./static/images/affiliation/Industry - 4As.png" alt="Industry - 4As" />
                                </div>
                            </div>
                            <div className="our-affiliation">
                                <div className="our-affiliation-inner immap">
                                    <img src="./static/images/affiliation/Industry - IMMAP.png" alt="Industry - IMMAP" />
                                </div>
                            </div>
                            <div className="our-affiliation">
                                <div className="our-affiliation-inner pana">
                                    <img src="./static/images/affiliation/Industry - PANA.png" alt="Industry - PANA" />
                                </div>
                            </div>
                            <div className="our-affiliation">
                                <div className="our-affiliation-inner cphg">
                                    <img src="./static/images/affiliation/Industry - CPHG.png" alt="Industry - CPHG" />
                                </div>
                            </div>
                            <div className="our-affiliation">
                                <div className="our-affiliation-inner idf">
                                    <img src="./static/images/affiliation/Interaction Design Foundation.png" alt="Interaction Design Foundation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="divider" />
                <div className="container">
                    <div id="brave-work" className="row">
                        <div className="brave-work-wrapper">
                            <img src="./static/images/component-images/Group 5899.png" className="brave-work-large" alt="brave-work" />
                            <img src="./static/images/component-images/Group 5920.png" className="brave-work-small" alt="brave-work" />
                            <div className="brave-work-buttons">
                                <a href="https://nuworks.ph/lets-connect/" target="_blank" rel="noreferrer noopener">
                                    <button>
                                        Let's Connect
                                        <span>How might we grow your business?</span>
                                    </button>
                                </a>
                                <a href="https://nuworks.ph/join-the-team/" target="_blank" rel="noreferrer noopener">
                                    <button>
                                        Be One of Us
                                        <span>Submit your application.</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    };
}