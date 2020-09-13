import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { isMobile } from 'react-device-detect';

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
    // if ($(e.target).scrollTop() > 0) {
    //   this.setState({
    //     scrollTop: false
    //   });
    // } else {
    //   this.setState({
    //     scrollTop: true
    //   });
    // }
  };

  toggleMenu = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  };

  signOut = e => {
    e.preventDefault();

    this.props.signOut(this.props.token).then(() => {
      // this.props.redirectToHome();
    });
  };

  renderInternalHeader = () => {
    return (
      <nav>
        <div className="px-2" />
      </nav>
    );
  };

  renderMobileHeader = () => {
    return (
      <nav>
        <div className="px-2" />
      </nav>
    );
  };

  render() {
    if (isMobile) {
      return <header className="site_header site_header_mobile">{this.renderMobileHeader()}</header>;
    }
    return <header className="site_header site_header_internal">{this.renderInternalHeader()}</header>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
