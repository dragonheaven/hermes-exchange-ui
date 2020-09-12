import React, { Component } from 'react';

class MobileOpenOrders extends Component {
  render() {
    return (
      <div className="tz-mobile-exchange-orders flex-1">
        <div className="title-wrapper">
          <span className="title text-white">Open Orders</span>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Market</th>
                <th>Price/Fee</th>
                <th>Size/Filled</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
        <div className="empty-message mt-4">No orders to show</div>
      </div>
    );
  }
}

export default MobileOpenOrders;
