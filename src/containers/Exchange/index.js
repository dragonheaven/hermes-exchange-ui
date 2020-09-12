import React, { Component } from 'react';
import OrderBook from './OrderBook';
import MarketTrades from './MarketTrades';
import Trade from './Trade';
import OrderTable from './OrderTable';
import TVChartContainer from '../../components/TVChartContainer';
import TreeView from './TreeView';

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tz-exchange d-flex p-1">
        <div className="tz-exchange__inner flex-2 d-flex flex-column mr-1">
          <TreeView />
        </div>
        <div className="flex-10 d-flex flex-column">
          <div className="tz-exchange__inner flex-2">
            <TVChartContainer />
          </div>
          <div className="tz-exchange__inner flex-1 d-flex flex-column mt-1">
            <OrderTable />
          </div>
        </div>

        <div className="flex-2 d-flex flex-column ml-1">
          <OrderBook />
          <MarketTrades />
        </div>

        <div className="flex-2 d-flex flex-column ml-1">
          <Trade />
        </div>
      </div>
    );
  }
}

export default Exchange;
