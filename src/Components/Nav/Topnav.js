import React, { Component } from "react";
import { Link } from "react-router-dom"
import M from "materialize-css";

class Topnav extends Component {
  componentDidMount() {
    M.FloatingActionButton.init(this.fixedactionbutton, {
      direction: "bottom"
    })
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav style={styles.navbar} className="nav-extended">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                <img
                  src="https://lensajabar.com/wp-content/uploads/2020/04/new-ogo-lensa-jabar-new.png"
                  style={styles.logo}
                  alt="lensajabar"
                />
              </Link>
              <Link to="/"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons blue-text text-darken-2">menu</i>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <div className="blue-text text-darken-2" style={styles.Menu}>
                    <form style={{ cursor: "auto" }}>
                      <div className="input-field">
                        <input
                          placeholder="Search something..."
                          id="search"
                          type="search"
                          style={{
                            display: "inline-block",
                            outline: "none",
                            background: "none"
                          }}
                        />
                        <label className="label-icon" htmlFor="search">
                          <i className="material-icons blue-text text-darken-2">
                            search
                          </i>
                        </label>
                      </div>
                    </form>
                  </div>
                </li>
                <li>
                  <Link to="/"
                    className="blue-text text-darken-2"
                    style={styles.Menu}
                  >
                    Berita Jabar
                  </Link>
                </li>
                <li>
                  <Link to="/"
                    className="blue-text text-darken-2"
                    style={styles.Menu}
                  >
                    Berita Seputar Jabar
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="nav-content secondarynav2 hide-on-med-and-down"
              style={{ display: "none" }}
            >
              <ul
                className="tabs"
                style={{ backgroundColor: "rgba(255,255,255,.1)" }}
              >
                <li className="tab">
                  <a href="#test1">Beranda</a>
                </li>
                <li className="tab">
                  <a href="#test3">NASIONAL</a>
                </li>
                <li className="tab">
                  <a href="#test4">DAERAH</a>
                </li>
                <li className="tab">
                  <a href="#test0">POLHUKAM</a>
                </li>
                <li className="tab">
                  <a href="#test2">LENSA EKBIS</a>
                </li>
                <li className="tab">
                  <a href="#test2">PERISTIWA</a>
                </li>
                <li className="tab">
                  <a href="#test2">HUMANIORA</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="fixed-action-btn"
          style={{
            right: "8%",
            bottom: "auto",
            top: '1%',
            border: "none",
            boxShadow: "none"
          }}
          ref={(fixedactionbutton) => {
            this.fixedactionbutton = fixedactionbutton;
          }}
        >
          <button
            className="btn-floating btn-large transparent tooltipped"
            data-position="top"
            data-tooltip="Social Network"
            style={{ boxShadow: "none", width: 'auto' }}
          >
            <img
              src="./img/sosmed4.png"
              alt="Social Network"
              style={{ width: 83 }}
            />
          </button>
          <ul className="thisItem">
            <li>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: 'column',
                  boxShadow: "none",
                  background: "transparent",
                }}
              >
                <div>
                  <a
                    href="https://lensajabar.com/feed/"
                    target="blank"
                    className="btn-floating orange accent-2"
                  >
                    <ion-icon name="logo-rss"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UC7KlvWQh-DnPuVzBVzDgM_A"
                    target="blank"
                    className="btn-floating red"
                  >
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/lensa-jabar-7a349a167/"
                    target="blank"
                    className="btn-floating blue darken-4"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/lensajabartv.channel"
                    target="blank"
                    className="btn-floating red"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.tumblr.com/blog/tabloidlensajabar"
                    target="blank"
                    className="btn-floating indigo darken-4"
                  >
                    <ion-icon name="logo-tumblr"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    target="blank"
                    className="btn-floating deep-orange darken-4"
                  >
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    target="blank"
                    className="btn-floating cyan accent-4"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>
                <div>
                  <a href="/" target="blank" className="btn-floating blue">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div >
    )
  }
}

const styles = {
  navbar: {
    background: "white",
  },
  logo: { height: 40, marginTop: 8 },
  Menu: {
    fontWeight: 'bold',
    fontSize: 14,
    // textShadow: ''
  },
}

export default Topnav;