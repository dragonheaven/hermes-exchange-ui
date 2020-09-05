import React, { Component } from 'react';

import { widget } from '../../charting_library/charting_library.min';
import { getLanguageFromURL } from '../../constant/helpers';
import Datafeed from './api/';
import { TV_CONFIG } from './config';

class TVChartContainer extends Component {
  static defaultProps = {
    symbol: 'Coinbase:BTC/USD',
    interval: 'D',
    datafeedUrl: 'https://demo_feed.tradingview.com',
    fullscreen: false
  };

  tvWidget = null;

  componentDidMount() {
    this.createChart(this.props.symbol);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.symbol !== nextProps.symbol) {
      try {
        if (!this.tvWidget) {
          this.createChart(nextProps.symbol);
        } else {
          this.tvWidget.activeChart().setSymbol(nextProps.symbol, () => {});
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  createChart = symbol => {
    const widgetOptions = {
      symbol,
      // BEWARE: no trailing slash is expected in feed URL
      // datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
      datafeed: Datafeed,
      container_id: 'tv_chart_container',
      library_path: '/charting_library/',
      autosize: true,
      interval: this.props.interval,
      locale: getLanguageFromURL() || 'en',
      client_id: 'tradingview.com',
      user_id: 'public_user_id',
      fullscreen: this.props.fullscreen,

      ...TV_CONFIG
    };

    const tvWidget = new widget(widgetOptions);

    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {
      // const button = tvWidget.createButton()
      //   .attr('title', 'Click to show a notification popup')
      //   .addClass('apply-common-tooltip')
      //   .on('click', () => tvWidget.showNoticeDialog({
      //     title: 'Notification',
      //     body: 'TradingView Charting Library API works correctly',
      //     callback: () => {
      //       console.log('Noticed!');
      //     },
      //   }));
      //
      // button[0].innerHTML = 'Check API';
    });
  };

  componentWillUnmount() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  }

  render() {
    return <div id="tv_chart_container" className="TVChartContainer" />;
  }
}

export default TVChartContainer;
