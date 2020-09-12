import React, { Component } from 'react';

const tabs = ['market', 'limit', 'stop'];

class MobileTrade extends Component {
  state = {
    mode: 'buy',
    activeTabIndex: 0
  };

  changeMode = mode => {
    this.setState({ mode });
  };

  setActiveTabIndex = index => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    const { mode, activeTabIndex } = this.state;
    return (
      <div className="tz-mobile-exchange-trade d-flex flex-column flex-1">
        <div className="d-flex flex-column get-started">
          <span className="text-white">Start trading Button</span>
          <button className="btn mt-4">GET STARTED</button>
        </div>
        <div className="d-flex flex-2 order-form flex-column">
          <div className="order-form-header">
            <span>Order Form</span>
          </div>
          <div className="order-form-content">
            <div className="switch d-flex">
              <div
                className={`switch-node left flex-1 ${mode === 'buy' ? 'active' : ''}`}
                onClick={() => this.changeMode('buy')}
              >
                BUY
              </div>
              <div
                className={`switch-node right flex-1 ${mode === 'sell' ? 'active' : ''}`}
                onClick={() => this.changeMode('sell')}
              >
                SELL
              </div>
            </div>

            <div className="tabs d-flex mt-4">
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
            <div className="amount-group mt-4 mb-4">
              <label>Amount</label>
              <div className="d-flex input-wrapper">
                <input type="text" value="0.00" />
                <span>USD</span>
              </div>
            </div>
            <div className="total-group">
              <table>
                <tr>
                  <td>Fee *</td>
                  <td className="text-right">0.00 USD</td>
                </tr>
                <tr>
                  <td>Total *</td>
                  <td className="text-right">0.00000000 BTC</td>
                </tr>
              </table>
            </div>
            <div className="action-group">
              {mode === 'buy' ? <button>Place buy order</button> : <button>Place sell order</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileTrade;
