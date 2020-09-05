import React, { Component } from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';

import { shuffle } from '../../../constant/mockData';
import { headerRenderer, normalCellRenderer, priceCellRenderer } from '../../../components/Table/CellRenders';

class SeparateBook extends Component {
  state = {
    data: this.props.data,
    interval: 500
  };

  componentDidMount() {
    this.updateData();
  }

  // Temporary solution for mock data
  updateData = () => {
    this.setState({
      data: shuffle(this.props.data),
      interval: Math.round(Math.random() * 500) + 500
    });

    setTimeout(this.updateData, this.state.interval);
  };

  render() {
    const { type } = this.props;

    return (
      <AutoSizer>
        {({ width, height }) => {
          const rowCount = parseInt(height / 24);
          return (
            <Table
              width={width}
              height={height}
              disableHeader={type === 'buy'}
              headerHeight={type === 'buy' ? 0 : 24}
              overscanRowCount={1}
              rowGetter={({ index }) => this.state.data[index]}
              rowHeight={24}
              rowCount={rowCount}
              className="tz-exchange__orderbook"
              headerClassName="tz-exchange__orderbook__header"
            >
              <Column
                dataKey="Price"
                headerRenderer={headerRenderer}
                cellRenderer={priceCellRenderer(this.props.type)}
                width={width * 0.4}
              />

              <Column
                dataKey="Amount"
                headerRenderer={headerRenderer}
                cellRenderer={normalCellRenderer('amount')}
                width={width * 0.3}
              />

              <Column
                dataKey="Sum"
                headerRenderer={headerRenderer}
                cellRenderer={normalCellRenderer('sum')}
                width={width * 0.3}
              />
            </Table>
          );
        }}
      </AutoSizer>
    );
  }
}

export default SeparateBook;
