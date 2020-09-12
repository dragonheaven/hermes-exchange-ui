import React, { Component } from 'react';
import { buyBook, sellBook } from '../../../constant/mockData';
import SeparateBook from '../../Exchange/OrderBook/SeparateBook';

class MobileOrderBook extends Component {
  render() {
    return (
      <div className="tz-mobile-exchange-book flex-1 d-flex flex-column">
        <div className="title-wrapper">
          <span className="title text-white">Order Book</span>
        </div>
        <div className="d-flex flex-column flex-1">
          <div className="flex-1">
            <SeparateBook type="sell" data={sellBook} />
          </div>

          <div className="tz-exchange__spread d-flex align-items-center justify-content-center">
            <span className="tz-exchange__spread__amount">0.032954</span>
            <span className="tz-exchange__spread__delimiter ml-2">&asymp;</span>
            <span className="tz-exchange__spread__value ml-2">122.98 USD</span>
          </div>

          <div className="flex-1">
            <SeparateBook type="buy" data={buyBook} />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileOrderBook;
