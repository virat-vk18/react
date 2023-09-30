// StockMarket.js (React Component)
import bigLogo from '../../Images/bigLogo.png'
import card1 from '../../Images/card1.png'
import card2 from '../../Images/card2.png'
import card3 from '../../Images/card3.png'
import card4 from '../../Images/card4.png'
import carousel1 from '../../Images/carosel1.jpg'
import carousel2 from '../../Images/carosel2.jpg'
import carousel3 from '../../Images/carosel3.jpg'
import cc1 from '../../Images/cc1.jpg'
import cc2 from '../../Images/cc2.jpg'
import cc3 from '../../Images/cc3.jpg'
import footerLogo from '../../Images/footerLogo.png'
import instagram from '../../Images/instagram.gif'
import twitter from '../../Images/twitter.gif'
import whatsapp from '../../Images/whatsapp.gif'
import facebook from '../../Images/facebook.gif'
import pngwing from '../../Images/pngwing.com.png'
import './StockMarket.css'
import { useNavigate } from 'react-router-dom'

function StockMarket () {
  const navigate = useNavigate()
  return (
    <div classname='body'>
      <header>
        <nav className='navbar navbar-expand-lg bg-dark '>
          <div className='container-fluid '>
            <span className='navbar-brand'>
              <i className='bi bi-apple text-white display-6 ' />
            </span>
            <button
              className='navbar-toggler bg-white'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav text-white ms-auto'>
                <button className='nav-link text-white active'>Home</button>
                <button className='nav-link text-white'>Features</button>
                <button className='nav-link text-white'>Pricing</button>
                <button className='nav-link text-white'>Stores</button>
                <button
                  className='nav-link text-white'
                  onClick={() => navigate('/register')}
                >
                  Register
                </button>
                <button
                  className=' btn btn-success'
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Header Ended*/}
      <section>
        <div className='container-fluid aa p-0'>
          <div
            id='carouselExampleFade'
            className='carousel slide carousel-fade'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src={carousel1}
                  className='d-block w-100 img-fluid'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src={carousel2}
                  className='d-block w-100 img-fluid'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src={carousel3}
                  className='d-block w-100 img-fluid'
                  alt='...'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleFade'
              data-bs-slide='prev'
            >
              <span className='carousel-control-prev-icon' />
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleFade'
              data-bs-slide='next'
            >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </section>
      <section className='bg-dark'>
        <div className='container'>
          <div className='row'>
            <h2 className='text-center text-white mt-3'>Our Products</h2>
            <div className='col-sm-6 col-lg-3 mt-3'>
              <div className='card bg-dark h-100'>
                <div className='card-img'>
                  <img
                    src={card1}
                    alt='iphone'
                    className='img-fluid'
                    style={{ width: '300px' }}
                  />
                </div>
                <div className='card-body text-white'>
                  <h2>iphone 12 </h2>
                  <h5>4GB RAM , 256GB ROM</h5>
                  <p>
                    Finding the best laptop for your money can feel like an
                    endless search. There are so many quality laptops on the
                    market that choosing a suitable one at a great price takes a
                    lot of effort. That’s why at Lenovo, we organize our laptops
                    into categories, breaking down the best laptop for each
                    purpose and lifestyle.
                  </p>
                </div>
                <div className='card-footer text-white'>
                  <p className='price-font'>
                    25,000 <span className='badge bg-success'>Best-Seller</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <div className='card bg-dark text-white'>
                <div className='card-img'>
                  <img
                    src={card2}
                    alt='cardimg'
                    style={{ width: '180px' }}
                    className='
                      img-fluid ms-5'
                  />
                </div>
                <div className='card-body'>
                  <h2>iphone 12Pro </h2>
                  <h5>8GB RAM , 1TB ROM</h5>
                  <p>
                    Finding the best laptop for your money can feel like an
                    endless search. There are so many quality laptops on the
                    market that choosing a suitable one at a great price takes a
                    lot of effort. That’s why at Lenovo, we organize our laptops
                    into categories, breaking down the best laptop for each
                    purpose and lifestyle.
                  </p>
                </div>
                <div className='card-footer'>
                  <p className='price-font'>
                    45,000 <span className='badge bg-danger'>New release</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <div className='card bg-dark text-white h-100'>
                <div className='card-img'>
                  <img
                    src={card3}
                    alt='card-img'
                    style={{ width: '100%' }}
                    className='img-fluid'
                  />
                </div>
                <div className='card-body'>
                  <h2>iphone 13Pro </h2>
                  <h5>8GB RAM , 500GB ROM</h5>
                  <p>
                    Finding the best laptop for your money can feel like an
                    endless search. There are so many quality laptops on the
                    market that choosing a suitable one at a great price takes a
                    lot of effort. That’s why at Lenovo, we organize our laptops
                    into categories, breaking down the best laptop for each
                    purpose and lifestyle.
                  </p>
                </div>
                <div className='card-footer'>
                  <p className='price-font'>
                    20,000 <span className='badge bg-warning'>Live Sale</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-lg-3'>
              <div className='card bg-dark text-white h-100'>
                <div className='card-img'>
                  <img
                    src={card4}
                    alt='card-img'
                    style={{ width: '180px' }}
                    className='img-fluid ms-5'
                  />
                </div>
                <div className='card-body'>
                  <h2>iphone 14Pro</h2>
                  <h5>8GB RAM , 500GB ROM</h5>
                  <p>
                    Finding the best laptop for your money can feel like an
                    endless search. There are so many quality laptops on the
                    market that choosing a suitable one at a great price takes a
                    lot of effort. That’s why at Lenovo, we organize our laptops
                    into categories, breaking down the best laptop for each
                    purpose and lifestyle.
                  </p>
                </div>
                <div className='card-footer'>
                  <p className='price-font'>
                    20,000 <span className='badge bg-primary'>Peak Sale</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-dark'>
        <div className='container-fluid'>
          <div className='row'>
            <h1 className='text-white text-center mt-5'>Wants To Buy</h1>
            <div className='col-md-12 col-lg-6 aa mt-4'>
              <div
                id='carouselExampleCaptions'
                className='carousel slide'
                data-bs-ride='carousel'
              >
                <div className='carousel-indicators'>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to={0}
                    className='active'
                    aria-current='true'
                    aria-label='Slide 1'
                  />
                  <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to={1}
                    aria-label='Slide 2'
                  />
                  <button
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide-to={2}
                    aria-label='Slide 3'
                  />
                </div>
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img src={cc1} className='d-block w-100' alt='...' />
                    <div className='carousel-caption d-none d-md-block'>
                      <h5>Apple</h5>
                      <p>Mobiles | Tab | Watches | MacBook </p>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <img src={cc2} className='d-block w-100' alt='...' />
                    <div className='carousel-caption d-none d-md-block'>
                      <h5>Apple</h5>
                      <p>Mobiles | Tab | Watches | MacBook </p>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <img src={cc3} className='d-block w-100' alt='...' />
                    <div className='carousel-caption d-none d-md-block'>
                      <h5>Apple</h5>
                      <p>Mobiles | Tab | Watches | MacBook </p>
                    </div>
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleCaptions'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleCaptions'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  />
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
            <div className='col-md-12 col-lg-6 text-white'>
              <h2 className=' my-4 '>Apple</h2>
              <p>
                Explore new features to help you get more done, collaborate in
                your favourite apps and take advantage of your other devices.
                You'll also get the latest security and privacy protections when
                you upgrade. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Dolore asperiores fugit voluptatum temporibus deleniti
                adipisci, saepe quaerat voluptatem possimus placeat illo officia
                non soluta dolorem quidem obcaecati vel assumenda. Laudantium!
              </p>
              <div className='d-grid mt-4'>
                <button className='btn btn-outline-secondary'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-dark aa'>
        <div className='container form-border'>
          <div className='row text-white row-cols-1  row-cols-lg-2 '>
            <div className='col justify-content-md-center  form-container mt-4'>
              <form action='post' className=' bg-transparent'>
                <h3 className='text-center'>For Bookings</h3>
                <div>
                  <label htmlFor='name' className='form-label'>
                    Enter Your Name
                  </label>
                  <div className='input-group '>
                    <input
                      type='text'
                      id='name'
                      className='form-control '
                      placeholder='Your Name'
                    />
                    <span className='input-group-text'>
                      <i className='bi bi-person-lines-fill' />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor='mail' className='form-label'>
                    Enter Your Mail
                  </label>
                  <div className='input-group'>
                    <input
                      type='email'
                      name='mail'
                      id='mail'
                      className='form-control'
                      placeholder='Your Mail'
                    />
                    <span className='input-group-text'>
                      <i className='bi bi-envelope-at-fill' />
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor='cmts' className='form-label'>
                    Comments
                  </label>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Comments Here...!'
                    />
                    <span className='input-group-text'>
                      <i className='bi bi-chat-left-text-fill' />
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='file'
                    className='form-label justify-content-evenly'
                  >
                    Upload file
                  </label>
                  <div className='input-group'>
                    <input
                      type='file'
                      name='file'
                      className='justify-content-evenly form-control'
                      id='file'
                    />
                    <span className='input-group-text'>
                      <i className='bi bi-upload' />
                    </span>
                  </div>
                </div>
                <div className='d-grid mt-4'>
                  <button
                    type='button'
                    className='btn btn-primary justify-content-center'
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className='col mt-5 d-flex justify-content-center'>
              <img
                src={bigLogo}
                alt='bigLogo'
                className='img-fluid  my-5 '
                style={{
                  width: '200px'
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-dark text-white'>
        <div className='container-fluid'>
          <div className='row row-cols-1 row-cols-md-3 '>
            <div className='col mt-5 image'>
              <img
                src={footerLogo}
                alt='footer'
                style={{
                  width: '200px'
                }}
                className='img-fluid ms-5 mt-5 '
              />
            </div>
            <div className='col mt-5 '>
              <h4 className='text-center'> Follow Us</h4>
              <ul>
                <li>
                  <img src={whatsapp} alt='whatsapp' /> Whats App
                </li>
                <li>
                  <img src={facebook} alt='facebokS' /> Facebook
                </li>
                <li>
                  <img src={twitter} alt='twitter' /> Twitter
                </li>
                <li>
                  <img src={instagram} alt='instagram' /> Instagram
                </li>
              </ul>
            </div>
            <div className='col mt-5 text-white'>
              <img
                className='map-logo'
                src={pngwing}
                alt='logo'
                style={{
                  width: '100px'
                }}
              />
              <span className='h3'>Address</span>
              <p>
                Pondicherry Rs No: 19/1A, 2A Edayar Palayam Village Cuddalore
                Main Road Thavalakuppam Pondicherry 605007 India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default StockMarket
