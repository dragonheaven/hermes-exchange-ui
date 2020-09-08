import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const $ = window.$;

const styles = {
  purpleAvatar: {
    width: 32,
    height: 32,
    color: '#fff',
    backgroundColor: deepPurple[500]
  }
};

class Header extends Component {
  state = {
    menuOpened: false,
    dropdownOpen: false,
    scrollTop: true,
    menuItemExpanded: true,
    aboutItemExpanded: false
  };

  componentDidMount() {
    window.onscroll = this.onScroll;
  }

  onScroll = e => {
    if ($(e.target).scrollTop() > 0) {
      this.setState({
        scrollTop: false
      });
    } else {
      this.setState({
        scrollTop: true
      });
    }
  };

  toggleMenu = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  };

  signOut = e => {
    e.preventDefault();

    this.props.signOut(this.props.token).then(() => {
      this.props.redirectToHome();
    });
  };

  renderInternalHeader = () => {
    return (
      <nav>
        <div className="px-2">
          <div className="d-flex">
            <div className="blue-group d-flex align-items-center pl-3 mr-4">
              <span className="mr-2">BTC / PAX</span>
              <FontAwesomeIcon icon={faAngleDown} size={'lg'} />
            </div>

            <div className="instrument-desc d-flex align-items-center">
              <span className="instrument-key mr-2">PAX</span>
              <span className="instrument-value text-white">10,034.94</span>
            </div>

            <div className="d-flex flex-1 justify-content-center">
              <div className="balance d-flex flex-column mr-4">
                <span className="balance-key">Your Balance:</span>
                <div className="desc">
                  <span className="balance-key">
                    BTC<span className="balance-val">0.81285394</span>/PAX<span className="balance-val">4,031.96</span>
                  </span>
                </div>
              </div>

              <div className="balance d-flex flex-column mr-4">
                <span className="balance-key">Availability:</span>
                <div className="desc">
                  <span className="balance-key">
                    BTC<span className="balance-val">0.81285394</span>/PAX<span className="balance-val">4,031.96</span>
                  </span>
                </div>
              </div>

              <div className="balance d-flex flex-column mr-2">
                <span className="balance-key">Value:</span>
                <div className="desc">
                  <span className="balance-key">
                    PAX<span className="balance-val">21,205.03</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="blue-group d-flex align-items-center pl-3 mr-4">
              <span className="mr-2">SK4 INVESTMENT GROUP LIMITED LIABILITY</span>
              <FontAwesomeIcon icon={faAngleDown} size={'lg'} />
            </div>

            <div className="blue-group d-flex align-items-center">
              <FontAwesomeIcon icon={faEllipsisV} size={'lg'} />
            </div>
          </div>
        </div>
      </nav>
    );
  };

  render() {
    const headerClass = 'site_header site_header_internal';

    return <header className={headerClass}>{this.renderInternalHeader()}</header>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
