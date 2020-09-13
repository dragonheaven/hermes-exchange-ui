import React, { Component } from 'react';
import TVChartContainer from '../../../components/TVChartContainer';

class MobileCharts extends Component {
  render() {
    return (
      <div className="tz-mobile-exchange-charts d-flex flex-column flex-1">
        <div className="title-wrapper">
          <span className="title text-white">Price Charts</span>
        </div>
        <div className="flex-1">
          <TVChartContainer />
        </div>
      </div>
    );
  }
}

export default MobileCharts;
