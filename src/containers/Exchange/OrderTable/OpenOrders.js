import React, { Component } from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { headerRenderer, normalCellRenderer } from '../../../components/Table/CellRenders';

class OpenOrders extends Component {
  state = {
    scrollTop: 0
  };

  handleScroll = ({ scrollTop }) => {
    this.setState({ scrollTop });
  };

  render() {
    const data = [];

    return (
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
                rowGetter={({ index }) => data[index]}
                rowHeight={24}
                rowCount={data.length}
                scrollTop={this.state.scrollTop}
                className="tz-exchange__ordertable"
              >
                <Column
                  dataKey="Date"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('date')}
                  width={width * 0.1}
                />

                <Column
                  dataKey="Direction"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('direction')}
                  width={width * 0.1}
                />

                <Column
                  dataKey="Type"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('type')}
                  width={width * 0.1}
                />

                <Column
                  dataKey="Price"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('price')}
                  width={width * 0.1}
                />

                <Column
                  dataKey="Amount"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('amount')}
                  width={width * 0.15}
                />

                <Column
                  dataKey="Total"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('total')}
                  width={width * 0.15}
                />

                <Column
                  dataKey="Executed"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('executed')}
                  width={width * 0.1}
                />

                <Column
                  dataKey="Unexecuted"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('unexecuted')}
                  width={width * 0.1}
                />

                <Column
                  dataKey="Action"
                  headerRenderer={headerRenderer}
                  cellRenderer={normalCellRenderer('action')}
                  width={width * 0.1}
                />
              </Table>

              {(!data || data.length === 0) && (
                <div className="tz-exchange__no-orders d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <svg
                      className="tz-exchange__no-orders__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 40 40"
                    >
                      <path className="cls-1" d="M0,6H26V40H0Zm3,8v2H15V14Zm0,6v2H15V20Z" />
                      <path
                        className="cls-2"
                        d="M12,29V0H40V36H9.5A3.5,3.5,0,0,1,6,32.5V29ZM16,8v2H36V8Zm0,6v2H36V14Zm0,6v2H36V20Zm0,6v2H36V26Z"
                      />
                    </svg>

                    <div className="mt-1 text-white">No open orders yet</div>
                    <div className="text-small">Go to Trade tab and make your order!</div>
                  </div>
                </div>
              )}
            </PerfectScrollbar>
          );
        }}
      </AutoSizer>
    );
  }
}

export default OpenOrders;
