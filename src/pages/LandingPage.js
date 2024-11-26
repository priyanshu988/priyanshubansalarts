import React, { useEffect } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Portfolio from './Portfolio.jsx';

const LandingPage = () => {
  // const [isMobileNavActive, setMobileNavActive] = useState(false);
  // const [backToTopVisible, setBackToTopVisible] = useState(false);
  // const [activeSection, setActiveSection] = useState(null);
  
  useEffect(() => {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 100);
    }

    // Typed.js initialization
    const typedElements = document.querySelectorAll('.typed');
    typedElements.forEach((element) => {
      const typedStrings = element.dataset.typedItems.split(',');
      new Typed(element, {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 25,
        backDelay: 5000,
      });
    });

    // AOS initialization (If you are using the AOS library)
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }

    // // Scroll listener for Back to Top button
    // const handleScroll = () => {
    //   const scrollPos = window.scrollY;
    //   setBackToTopVisible(scrollPos > 100);

    //   // Handle active section highlighting
    //   const sections = document.querySelectorAll('section');
    //   let currentSection = null;
    //   sections.forEach((section) => {
    //     const top = section.offsetTop;
    //     const bottom = top + section.offsetHeight;
    //     if (scrollPos >= top && scrollPos <= bottom) {
    //       currentSection = section.id;
    //     }
    //   });

    //   setActiveSection(currentSection);
    // };

    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
  // Scroll to section handler
  // const scrollToSection = (e, hash) => {
  //   e.preventDefault();
  //   const target = document.querySelector(hash);
  //   if (target) {
  //     window.scrollTo({
  //       top: target.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const toggleMobileNav = () => {
  //   setMobileNavActive(!isMobileNavActive);
  // };

  // const closeMobileNav = (e) => {
  //   if (!e.target.closest('.mobile-nav-toggle')) {
  //     setMobileNavActive(false);
  //   }
  // };

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" class="d-flex flex-column justify-content-center">

        <nav class="nav-menu">
          <ul>
            <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#portfolio"><i class='bx bx-photo-album'></i> <span>Artworks</span></a></li>
            <li><a href="#contact"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}

      </header>
      {/* <!-- End Header --> */}


      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" class="d-flex flex-column justify-content-center">
        <div class="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Priyanshu Bansal</h1>
          <p>I'm an <span class="typed" data-typed-items="Artist"></span></p>
          <div class="social-links">
            <a href="https://www.instagram.com/priyanshubansalarts/" class="instagram"><i class="bx bxl-instagram"></i></a>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>About</h2>
            <p>Thank You for viewing my Art Gallery. Here is something more about me.</p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img src="https://res.cloudinary.com/dy4qtchbm/image/upload/v1732254726/10244976_18354586_one3m8.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>SDE &amp; Part-Time Artist</h3>
              <p class="font-italic">

              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 26 June 2000</li>

                    <li><i class="icofont-rounded-right"></i> <strong>City:</strong> Guna, MP, India</li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 24</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> B.Tech in CSE, M.Tech  in CSE</li>
                    <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> priyanshubansal988@gmail.com</li>
                  </ul>
                </div>
              </div>
              <p>
                I’m Priyanshu Bansal, a passionate Software Development Engineer (SDE) and
                a part-time artist. I have a background in web development and a deep interest in art.
                I’m also dedicated to teaching web development and conducting canvas painting workshops and
                competitions. My creative projects often blend technology with artistic   expression, as seen in
                my participation in painting competitions and my vision for a stunning online art showcase.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Facts Section ======= --> */}
      <section id="facts" class="facts">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2>Facts</h2>
            <p>As Mr. Andy Warhol said,"Don't think about making art, just get it done. Let everyone else decide if it's good or bad, whether they love it or hate it. While they are deciding, make even more art."<br />
              </p>
          </div>

          <div class="row">

            <div class="col-lg-4 col-md-6">
              <div class="count-box">
                <i class="icofont-simple-smile"></i>
                <span data-toggle="counter-up">10</span>
                <p>Total Orders</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <i class="icofont-document-folder"></i>
                <span data-toggle="counter-up">15</span>
                <p>Artworks</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="icofont-users-alt-5"></i>
                <span data-toggle="counter-up">95</span>
                <p>Satisfaction Percentage</p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Facts Section --> */}
<Portfolio/>

{/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="row mt-1">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
              <i class='bx bx-map' ></i>
                <h4>Location:</h4>
                <p>Guna,Madhya pradesh,India-473001</p>
              </div>

              <div class="email">
              <i class='bx bx-envelope' ></i>
                <h4>Email:</h4>
                <p>priyanshubansal988@gmail.com</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}

      <div id="preloader"></div>
    </>
  )
}

export default LandingPage
