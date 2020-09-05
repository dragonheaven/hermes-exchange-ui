import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import withRoot from './withRoot';
import Routes from '../../Routes';
import Header from '../../components/Header';
import PreLoader from '../../components/PreLoader';
import ErrorBoundary from '../../ErrorBoundary';
import '../../styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <ErrorBoundary>
        <PreLoader />

        <Header />

        <Routes />

      </ErrorBoundary>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default withRoot(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
