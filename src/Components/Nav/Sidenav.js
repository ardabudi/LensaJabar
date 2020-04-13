import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidenav extends Component {
  render() {
    return (
      <ul id="mobile-demo" className="sidenav">
        <li>
          <div class="user-view" style={styles.userView}>
            <div class="background">
              <img
                src="https://lensajabar.com/wp-content/uploads/2020/04/new-ogo-lensa-jabar-new.png"
                alt="lensajabar"
                style={styles.logo}
              />
            </div>
          </div>
        </li>

        <li>
          <div className="blue-text text-darken-2">
            <form style={{ cursor: "auto" }}>
              <div className="input-field">
                <input
                  placeholder="Search something.."
                  id="search"
                  style={{
                    paddingLeft: 50
                  }}
                />
                <label style={{ left: '10%', top: '-14%' }} className="label-icon" htmlFor="search">
                  <i style={{ fontSize: 18 }} className="material-icons blue-text text-darken-2">
                    search
                  </i>
                </label>
              </div>
            </form>
          </div>
        </li>

        <li>
          <Link to="#">
            <i className="material-icons">home</i>BERANDA
          </Link>
        </li>
        <li>
          <Link to="#test">NASIONAL</Link>
        </li>
        <li>
          <Link to="#test">DAERAH</Link>
        </li>
        <li>
          <Link to="#test">POLHUKAM</Link>
        </li>
        <li>
          <Link to="#test">LENSA EKBIS</Link>
        </li>
        <li>
          <Link to="#test">PERISTIWA</Link>
        </li>
        <li>
          <Link to="#test">HUMANIORA</Link>
        </li>
      </ul>
    )
  }
}

const styles = {
  logo: { width: "70%", },
  userView: { paddingBottom: 50, left: '8%' }
}

export default Sidenav;