import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';

class BuySell extends Component {
  state = {
    price: 1000,
    amount: 0,
    percent: null
  };

  changePercent = percent => {
    this.setState({ percent });
  };

  render() {
    const { price, amount, percent } = this.state;
    const { isAuthenticated, type } = this.props;

    return (
      <div className="p-3">
        <TextField
          fullWidth
          variant="outlined"
          label="Price"
          placeholder="0"
          InputLabelProps={{
            shrink: true
          }}
          value={price}
          className="tz-exchange__trade__input"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Amount"
          placeholder="0"
          InputLabelProps={{
            shrink: true
          }}
          value={amount}
          className="tz-exchange__trade__input mt-3"
        />

        <div className="d-flex align-items-center mt-3">
          <span
            className={`tz-exchange__trade__percent flex-1 text-center${percent === 25 ? ' active' : ''}`}
            onClick={() => this.changePercent(25)}
          >
            25%
          </span>
          <span
            className={`tz-exchange__trade__percent flex-1 ml-2 text-center${percent === 50 ? ' active' : ''}`}
            onClick={() => this.changePercent(50)}
          >
            50%
          </span>
          <span
            className={`tz-exchange__trade__percent flex-1 ml-2 text-center${percent === 75 ? ' active' : ''}`}
            onClick={() => this.changePercent(75)}
          >
            75%
          </span>
          <span
            className={`tz-exchange__trade__percent flex-1 ml-2 text-center${percent === 100 ? ' active' : ''}`}
            onClick={() => this.changePercent(100)}
          >
            100%
          </span>
        </div>

        <Button fullWidth variant="contained" size="large" className={`tz-exchange__trade__${type.toLowerCase()} mt-3`}>
          {isAuthenticated ? type : 'Log In Or Sign Up To Trade'}
        </Button>
      </div>
    );
  }
}

export default BuySell;
