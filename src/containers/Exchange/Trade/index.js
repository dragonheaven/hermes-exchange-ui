import React, { Component } from 'react';

import BuySell from './BuySell';

class Trade extends Component {
  state = {
    tab: 'limit'
  };

  changeTab = tab => {
    this.setState({ tab });
  };

  render() {
    const { tab } = this.state;
    const { isAuthenticated } = this.props;

    return (
      <div className="tz-exchange__inner d-flex flex-column flex-1">
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

        <div className="flex-1 d-flex flex-column">
          <BuySell type="Buy" isAuthenticated={isAuthenticated} />
          <BuySell type="Sell" isAuthenticated={isAuthenticated} />
        </div>
      </div>
    );
  }
}

export default Trade;
