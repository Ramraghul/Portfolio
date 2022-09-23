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

                                    <div className="section-title mb-4">
                                        <h2>Project</h2>
                                        </div>

                                    {/* <div className="row" data-aos="fade-up">
                                        <div className="col-lg-12 d-flex justify-content-center">
                                            <ul id="portfolio-flters">
                                                <li data-filter=".filter" className="filter-active">ALl</li>
                                                <li data-filter=".filter-app">App</li>
                                                <li data-filter=".filter-card">Card</li>
                                                <li data-filter=".filter-web">Web</li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                                        <div className='container'>
                                            <div className='row main-row'>
                                                <div className="col-lg-4 col-md-6 mb-5">
                                                    <div className='card p-3' id='card' style={{width:"16rem"}}>
                                                        <img src="./img/portfolio/portfolio-1.jpg" alt="forest" className='card-img-top shadow bg-white rounded' />
                                                        <div className='card-body' id='card-body'>
                                                            <h5 className='card-title'>Forest</h5>
                                                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.</p>
                                                            <button className='btn btn-outline-dark'>Live</button>
                                                            <button className='btn btn-outline-dark'>Github</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-6 mb-5">
                                                    <div className='card p-3' id='card' style={{width:"16rem"}}>
                                                        <img src="./img/portfolio/portfolio-2.jpg" alt="forest" className='card-img-top shadow bg-white rounded' />
                                                        <div className='card-body' id='card-body'>
                                                            <h5 className='card-title'>Forest</h5>
                                                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.</p>
                                                            <button className='btn btn-outline-dark'>Live</button>
                                                            <button className='btn btn-outline-dark'>Github</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 col-md-6 mb-5">
                                                    <div className='card p-3' id='card' style={{width:"16rem"}}>
                                                        <img src="./img/portfolio/portfolio-3.jpg" alt="forest" className='card-img-top shadow bg-white rounded' />
                                                        <div className='card-body' id='card-body'>
                                                            <h5 className='card-title'>Forest</h5>
                                                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.</p>
                                                            <button className='btn btn-outline-dark'>Live</button>
                                                            <button className='btn btn-outline-dark'>Github</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                            <div className="portfolio-wrap">
                                                <img src="./img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-links">
                                                    <a href="/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                                </div>
                                            </div>
                                        </div> */}

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