import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand" href="https://www.mtn.co.rw/#">
              <img
                src="https://www.mtn.co.rw/wp-content/uploads/2022/09/mtn-logo-nav-new-2048x1062.webp"
                alt="MTN"
                width="50"
                height="30"
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                {/* =======================================Personal============================================= */}

                <div class="dropdown">

                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    Personal
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="nav-details">

                      <div className="sub-details">
                        <div className="dropdown-item-head">
                          <li>
                            <h2><a class="dropdown-item" href="https://www.mtn.co.rw/personal-services/">Personal Services</a></h2>
                          </li>
                        </div>
                        <div className="dropdown-item-links">
                          <li>
                            <p><a href="https://www.mtn.co.rw/voice-packs/">Voice Packs</a></p>
                            <p><a href="https://www.mtn.co.rw/data-bundle/">Data Bundles</a></p>
                            <p><a href="https://www.mtn.co.rw/yolo/">Yolo</a></p>
                            <p><a href="https://www.mtn.co.rw/mtn-prestige/">MTN Prestige</a></p>
                            <p><a href="https://www.mtn.co.rw/customer-service-forms/">Customer Service forms</a></p>
                            <p><a href="https://www.mtn.co.rw/sim-registration/">SIM Card Registration</a></p>
                          </li>
                        </div>
                      </div>

                      <div className="sub-details">
                        <div className="dropdown-item-head">
                          <li>
                            <h2><a class="dropdown-item" href="https://www.mtn.co.rw/deals/">Ni Dilu             </a></h2>
                          </li>
                        </div>
                        <div className="dropdown-item-links">
                          <li>
                            <p><a href="https://www.mtn.co.rw/macyemacye/">Device Financing</a></p>
                            <p><a href="https://www.mtn.co.rw/products-2/">New devices (Current Phone deals)</a></p>
                            <p><a href="https://www.mtn.co.rw/device-trade-in/">Device Trade-In</a></p>
                            <p><a href="https://www.mtn.co.rw/extended-warranty-and-repair-services/">Extended Warranty & Repair Services</a></p>
                          </li>
                        </div>
                      </div>

                      <div className="sub-details">
                        <div className="dropdown-item-head">
                          <li>
                            <h2><a class="dropdown-item" href="https://www.mtn.co.rw/#">PROMO</a></h2>
                          </li>
                        </div>
                        <div className="dropdown-item-links">
                          <li>
                            <p><a href="https://www.mtn.co.rw/izihirwe-na-mtn/">IZIHIRWE NA MTN</a></p>
                          </li>
                        </div>
                      </div>

                      <div>
                        <div className="dropdown-item-head">
                          <li>
                            <h2><a class="dropdown-item" href="https://www.mtn.co.rw/roaming/">Roaming & International Tariffs</a></h2>
                          </li>
                        </div>
                        <div className="dropdown-item-links">
                          <li>
                            <p><a href="https://www.mtn.co.rw/roaming-data-bundles/">Roaming Data Bundles</a></p>
                            <p><a href="https://www.mtn.co.rw/ona-roaming-tariffs/">One Area Network (ONA) Roaming Tariffs</a></p>
                            <p><a href="https://www.mtn.co.rw/international-roaming-rates/">International Roaming Rates</a></p>
                            <p><a href="https://www.mtn.co.rw/international-calling-tariffs/">International Calling Tariffs</a></p>
                            <p><a href="https://www.mtn.co.rw/international-calling-bundles/">International Calling Bundles</a></p>
                          </li>
                        </div>
                      </div>

                    </div>
                  </ul>

                </div>

                {/* ==========================Enterprise Business Unit============================*/}

                <div class="dropdown">

                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    Business
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="nav-details">
                      <li>
                        <h2><a class="dropdown-item" href="https://www.mtn.co.rw/business-solutions/">Enterprise Business Unit</a></h2>
                      </li>
                    </div>
                  </ul>

                </div>

                {/* =============================================MoMo============================================ */}

                <div class="dropdown">

                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    MoMo
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="nav-details">
                      <li>
                        <h2><a class="dropdown-item" href="https://www.mtn.co.rw/momo/">MoMo APP</a></h2>
                      </li>
                      <li>
                        <h2><a class="dropdown-item" href="https://www.mtn.co.rw/remittance-tariffs/">Remittance Tariffs</a></h2>
                      </li>
                    </div>
                  </ul>

                </div>

                {/* ==========================================VAS============================================== */}

                <div class="dropdown">

                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    VAS
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="nav-details">
                      <li>
                        <h2><a class="dropdown-item" href="https://www.mtn.co.rw/vas-games/">VAS</a></h2>
                      </li>
                    </div>
                  </ul>

                </div>

                {/* ============================================Investors============================================ */}

                <div class="dropdown">

                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    Investors
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="nav-details">
                      <li>
                        <h2><a class="dropdown-item" href="https://www.mtn.co.rw/board-members/">Action</a></h2>
                      </li>
                    </div>
                  </ul>

                </div>

                {/* =================================================Company============================================== */}


                <div class="dropdown">

                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    Company
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="nav-details">

                    <div className="sub-details">
                        <div className="dropdown-item-head">
                          <li>
                            <h2><a class="dropdown-item" href="https://www.mtn.co.rw/contact-us/">About MTN</a></h2>
                          </li>
                        </div>
                        <div className="dropdown-item-links">
                          <li>
                            <p><a href="https://www.mtn.co.rw/leadership/">Leadership</a></p>
                            <p><a href="https://www.mtn.co.rw/foundations/">Foundation</a></p>
                            <p><a href="https://www.mtn.co.rw/careers/">Careers</a></p>
                            <p><a href="https://www.mtn.co.rw/tenders/">Tenders</a></p>
                            <p><a href="https://www.mtn.co.rw/newsroom/">Newsroom</a></p>
                            <p><a href="https://www.mtn.co.rw/contact-us/">Contact Us</a></p>
                          </li>
                        </div>
                      </div>
                    </div>
                    
                  </ul>
                </div>

              </ul>

              {/* =========================================Search========================================== */}

              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  title="Search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
