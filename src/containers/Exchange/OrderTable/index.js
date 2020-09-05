import React, { Component } from 'react';

import OpenOrders from './OpenOrders';
import OrdersHistory from './OrdersHistory';

class OrderTable extends Component {
  state = {
    tab: 'open'
  };

  changeTab = tab => {
    this.setState({ tab });
  };

  render() {
    const { tab } = this.state;

    return (
      <div className="tz-exchange__inner flex-1 d-flex flex-column mt-1">
        <div className="tz-exchange__inner__header px-3">
          <span
            className={`tz-exchange__inner__header__tab${tab === 'open' ? ' active' : ''}`}
            onClick={() => this.changeTab('open')}
          >
            Open orders
          </span>

          <span
            className={`tz-exchange__inner__header__tab ml-3${tab === 'history' ? ' active' : ''}`}
            onClick={() => this.changeTab('history')}
          >
            Order history
          </span>
        </div>

        <div className="flex-1">{tab === 'open' ? <OpenOrders /> : <OrdersHistory />}</div>
      </div>
    );
  }
}

export default OrderTable;
