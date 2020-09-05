import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    Sentry.captureException(err);
  }

  render() {
    if (this.state.hasError) {
      // return <h1>Something went wrong.</h1>;
      //render fallback UI
      return <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>;
    }
    return this.props.children;
  }
}
