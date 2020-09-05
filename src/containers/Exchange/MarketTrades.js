import React, { Component } from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { marketTrades } from '../../constant/mockData';
import { headerRenderer, normalCellRenderer, priceCellRenderer } from '../../components/Table/CellRenders';

class MarketTrades extends Component {
  state = {
    scrollTop: 0
  };

  handleScroll = ({ scrollTop }) => {
    this.setState({ scrollTop });
  };

  render() {
    return (
      <div className="tz-exchange__inner flex-1 d-flex flex-column ml-1">
        <div className="tz-exchange__inner__header px-3">Market trades</div>

        <div className="flex-1">
          <AutoSizer>
            {({ width, height }) => {
              return (
                <PerfectScrollbar
                  option={{
                    suppressScrollX: true,
                    minScrollbarLength: 30
                  }}
                  onScrollY={this.handleScroll}
                  style={{ width: width, height: height }}
                >
                  <Table
                    autoHeight={true}
                    width={width}
                    height={height}
                    headerHeight={24}
                    overscanRowCount={0}
                    rowGetter={({ index }) => marketTrades[index]}
                    rowHeight={24}
                    rowCount={marketTrades.length}
                    scrollTop={this.state.scrollTop}
                    className="tz-exchange__orderbook"
                  >
                    <Column
                      dataKey="Price"
                      headerRenderer={headerRenderer}
                      cellRenderer={priceCellRenderer()}
                      width={width * 0.4}
                    />

                    <Column
                      dataKey="Amount"
                      headerRenderer={headerRenderer}
                      cellRenderer={normalCellRenderer('amount')}
                      width={width * 0.3}
                    />

                    <Column
                      dataKey="Time"
                      headerRenderer={headerRenderer}
                      cellRenderer={normalCellRenderer('time')}
                      width={width * 0.3}
                    />
                  </Table>
                </PerfectScrollbar>
              );
            }}
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default MarketTrades;
