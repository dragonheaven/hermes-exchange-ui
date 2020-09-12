import React, { Component } from 'react';

import BuySell from './BuySell';

class Trade extends Component {
  state = {
    tab: 'limit',
    mode: 'buy'
  };

  changeTab = tab => {
    this.setState({ tab });
  };

  changeMode = mode => {
    this.setState({ mode });
  };

  render() {
    const { tab, mode } = this.state;
    const { isAuthenticated } = this.props;

    return (
      <div className="tz-exchange__inner trade d-flex flex-column flex-1">
        <div className="tz-exchange__inner__header px-3">
          <span
            className={`tz-exchange__inner__header__tab${tab === 'limit' ? ' active' : ''}`}
            onClick={() => this.changeTab('limit')}
          >
            Limit
          </span>

          <span
            className={`tz-exchange__inner__header__tab ml-3${tab === 'market' ? ' active' : ''}`}
            onClick={() => this.changeTab('market')}
          >
            Market
          </span>
        </div>

        <div className="switch d-flex mt-2 p-3">
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

        <div className="flex-1 d-flex flex-column">
          <BuySell type={mode === 'buy' ? 'Buy' : 'Sell'} isAuthenticated={isAuthenticated} />
        </div>
      </div>
    );
  }
}

export default Trade;
