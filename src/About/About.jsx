import React from 'react'

function About() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <main id="main">
              <section id="about" className="about">
                <div className="container">

                  <div className="section-title">
                    <h2>About</h2>
                    <p>Hey, I'am Raghul, an aspiring developer with a degree in Electrical and Electronics Engineering.
                      I'am currently learning new skills with a vision of becoming better at what I do.
                      I like Web Development and to Create a new Interfaces.</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                      <img src={"./img/clean.jpeg"} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                      <h3>Full Stack Web Developer.</h3>
                      <p className="fst-italic">
                      I design and build digital products and web applications
                      </p>
                      <br />
                      <br />
                      <br />
                      <p>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                      </p>
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

export default About