import React, { Component } from 'react';
import MobileTrade from './MobileTrade';
import MobileOpenOrders from './MobileOpenOrders';
import MobileCharts from './MobileCharts';
import MobileOrderBook from './MobileOrderBook';

const tabs = ['trade', 'orders', 'charts', 'book'];

class MobileExchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
  }

  setActiveTabIndex = index => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    const { activeTabIndex } = this.state;

    return (
      <div className="tz-mobile-exchange d-flex flex-column">
        <div className="d-flex justify-content-between top-part">
          <div className="d-flex flex-column top-part-node">
            <span className="amount">10,281.66 USD</span>
            <span className="label">Last trade price</span>
          </div>
          <div className="d-flex flex-column top-part-node">
            <span className="amount pink">-0.51%</span>
            <span className="label">24h price</span>
          </div>
          <div className="d-flex flex-column top-part-node">
            <span className="amount">11,232 BTC</span>
            <span className="label">24h volume</span>
          </div>
        </div>
        <div className="tz-mobile-exchange-content d-flex flex-column flex-1">
          {activeTabIndex === 0 && <MobileTrade />}
          {activeTabIndex === 1 && <MobileOpenOrders />}
          {activeTabIndex === 2 && <MobileCharts />}
          {activeTabIndex === 3 && <MobileOrderBook />}
        </div>
        <div className="tz-mobile-exchange-tabs d-flex">
          {tabs.map((item, index) => (
            <div
              className={`tab flex-1 ${activeTabIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => this.setActiveTabIndex(index)}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MobileExchange;
