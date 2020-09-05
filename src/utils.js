const assert = require('chai').assert;

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
var isAddress = function(address) {
  if (/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    return true;
  }

  return false;
};

function getParamFromTxEvent(transaction, paramName, contractFactory, eventName) {
  assert.isObject(transaction);

  let logs = transaction.logs;
  if (eventName != null) {
    logs = logs.filter(l => l.event === eventName);
  }
  assert.equal(logs.length, 1, 'too many logs found!');
  let param = logs[0].args[paramName];
  if (contractFactory != null) {
    let contract = contractFactory.at(param);
    assert.isObject(contract, `getting ${paramName} failed for ${param}`);
    return contract;
  } else {
    return param;
  }
}

function getTransactionIdFromReceipt(txReceipt) {
  const submissionEventHash = '0xc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e51';
  const log = txReceipt.logs.find(item => item.topics[0] === submissionEventHash);
  if (log) {
    return log.topics[1];
  }

  return null;
}

function mineBlock(web3, reject, resolve) {
  web3.currentProvider.sendAsync(
    {
      method: 'evm_mine',
      jsonrpc: '2.0',
      id: new Date().getTime()
    },
    e => (e ? reject(e) : resolve())
  );
}

function increaseTimestamp(web3, increase) {
  return new Promise((resolve, reject) => {
    web3.currentProvider.sendAsync(
      {
        method: 'evm_increaseTime',
        params: [increase],
        jsonrpc: '2.0',
        id: new Date().getTime()
      },
      e => (e ? reject(e) : mineBlock(web3, reject, resolve))
    );
  });
}

function balanceOf(web3, account) {
  return new Promise((resolve, reject) =>
    web3.eth.getBalance(account, (e, balance) => (e ? reject(e) : resolve(balance)))
  );
}

async function assertThrowsAsynchronously(test, error) {
  try {
    await test();
  } catch (e) {
    if (!error || e instanceof error) return 'everything is fine';
  }
  throw new Error('Missing rejection' + (error ? ' with ' + error.name : ''));
}

function fromWeiWithDecimals(web3, amount, decimals) {
  if (decimals == 18) {
    return web3.fromWei(amount);
  } else {
    return amount / Math.pow(10, decimals);
  }
}

function toWeiWithDecimals(web3, amount, decimals) {
  if (decimals == 18) {
    return web3.toWei(amount);
  } else {
    return amount * Math.pow(10, decimals);
  }
}

function isEqualAddress(a, b) {
  return !!a && !!b && a.toLowerCase() === b.toLowerCase();
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + '  ' + strTime;
}

export {
  getParamFromTxEvent,
  getTransactionIdFromReceipt,
  increaseTimestamp,
  balanceOf,
  assertThrowsAsynchronously,
  isAddress,
  fromWeiWithDecimals,
  toWeiWithDecimals,
  isEqualAddress,
  formatDate
};
