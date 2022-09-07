import React from 'react'

function Project() {
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <main id="main">
                            <section id="portfolio" className="portfolio section-bg">
                                <div className="container">

                                    <div className="section-title">
                                        <h2>Portfolio</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deserunt porro aut et incidunt assumenda repellendus sint provident quaerat eos eius laborum ipsam expedita id, ex in repellat eligendi unde commodi quas sunt. Asperiores quisquam quia, ducimus consequuntur harum reiciendis. Dolore nobis provident facilis natus iste? Neque, aperiam non. Vel.</p>
                                    </div>

                                    <div className="row" data-aos="fade-up">
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <ul id="portfolio-flters">
                                                <li data-filter="" className="filter-active"></li>
                                                {/* <li data-filter=".filter-app">App</li>
                                                <li data-filter=".filter-card">Card</li>
                                                <li data-filter=".filter-web">Web</li> */}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project