import React, { Component } from 'react';
import './App.css';
import logo from './images/walker_woodworks_logo.png';
import Products from './Products';

class App extends Component {
  importAll(r) {
    return r.keys().map(r);
  }

  state = {
    showMobileMenu: false,
  }

  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu,
    });
  }

  render() {
    const casketImages = this.importAll(require.context("./images/product_images/caskets", false, /\.(png|jpe?g|svg)$/));
    const urnImages = this.importAll(require.context("./images/product_images/urns", false, /\.(png|jpe?g|svg)$/));
    const caskets = [
      {
        title: 'Barnwood',
        properties: [
          'Fully Adjustable Bed',
          'Swingbar Handles',
          'Double Lid Latches on both Lids',
          '24 x 77 Interior',
          'Tailored Duckloth Interior',
        ],
        image: '/static/media/barnwood_casket.234db27b.png',
      },
      {
        title: 'Rusty Roof',
        properties: [
          'Fully Adjustable Bed',
          'Swingbar Handles',
          'Double Lid latches on both Lids',
          `23${String.fromCharCode(189)} x 77 Interior`,
          'Tailored Duckcloth Interior',
          'Available in Flat or Dome Top',
        ],
        image: '/static/media/rusty_roof_casket.fb6f7391.png',
      },
      {
        title: 'Sawmill Pine',
        properties: [
          'Fully Adjustable Bed',
          'Swingbar Handles',
          'Double Lid Latches on both Lids',
          '24 x 77 Interior',
          'Tailored Duckloth Interior',
        ],
        image: '/static/media/sawmill_pine_casket.69126f45.png',
      },
      {
        title: 'Oversize',
        properties: [
          'Fully Adjustable Bed',
          'Swingbar Handles',
          'Double Lid Latches on both Lids',
          `25${String.fromCharCode(8541)} x 77 Interior`,
          'Tailored Duckcloth Interior',
          'Fits standard vault',
        ],
        image: '/static/media/oversize_casket.c3973314.png',
      },
    ];

    const urns = [
      {
        title: 'Sawmill Pine',
        properties: [],
        image: '/static/media/sawmill_pine_urn.3e27190b.png',
      },
      {
        title: 'Barnwood',
        properties: [],
        image: '/static/media/barnwood_urn.a4c03818.png',
      },
      {
        title: 'Knotty Alder',
        properties: [],
        image: '/static/media/knotty_alder_urn.5579bafb.png',
      },
    ];

    const { showMobileMenu } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          <header className="App-header">
            <img src={logo} className="logo" alt="" />
            <div>
              <div className="header-title">Walker Woodworks</div>
              <div className="header-border" />
            </div>
            <div className="mobile-menu-icon" onClick={this.toggleMobileMenu}>{String.fromCharCode(9776)}</div>
          </header>
          {showMobileMenu && (
            <div onClick={this.toggleMobileMenu}>
              <div className="mobile-menu-wrapper"></div>
              <div className="mobile-menu">
                <a href='#caskets'>Wood Caskets</a>
                <a href='#urns'>Urns</a>
                <a href='#contact'>Contact</a>
              </div>
            </div>
          )}
        </div>
        <div className="nav">
          <div className="wrapper nav-wrapper">
            <a href='#'>Home</a>
            <a href='#caskets'>Wood Caskets</a>
            <a href='#urns'>Urns</a>
            <a href='#contact'>Contact</a>
          </div>
        </div>
        <div className="wrapper">
          <div className="content-wrapper">
            <Products
              title="Wood Caskets"
              products={caskets}
              images={casketImages}
              id="caskets"
              width="350"
            />
            <Products
              title="Urns"
              products={urns}
              images={urnImages}
              id="urns"
              width="250"
            />
            <div id="contact">
              <div className="contact-person">
                <div>Colton Walker:</div>
                <div>(615) 445-9638</div>
              </div>
              <div className="contact-person">
                <div>Megan Walker:</div>
                <div>(254) 715-9552</div>
              </div>
              <a href="mailto:walkerwoodworks90@yahoo.com">walkerwoodworks90@yahoo.com</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
