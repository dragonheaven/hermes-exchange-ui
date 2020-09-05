const types = require('../types');

let socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_SERVER);
let waitInterval = null;
let reconnectData = {
  type: null,
  message: null
};
let appStore = null;

let inactiveTime = 0;
let lastActiveTimestamp = null;
let isUserActive = false;
let activityInterval = null;
let powerInterval = null;
let session_time = 0;

const setupStore = store => {
  appStore = store;
};

const setupSocket = () => {
  socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_SERVER);

  socket.onopen = () => {
    console.log('opened');
    checkUserStatus();
  };

  socket.onmessage = event => {
    let data = safelyParseJSON(event.data);
    let type = '';
    let message = '';
    if (typeof data === 'string') {
      // regular message
      if (data === 'WebSocket connected successfully.') {
        type = data;
      } else if (data === 'WebSocket session expired.') {
        type = data;
      } else if (data === 'Page closed a long time ago.') {
        type = data;
      } else if (data.includes('Session Time:')) {
        session_time = Number(data.substring(14));
      }
      message = event;
    } else {
      type = data.type;
      message = data.message;
    }

    switch (type) {
      case 'tokens':
        let prices = message.coins;
        let contracts = message.contracts;
        let bro = message.bro;

        console.log(prices);

        // if (!!prices && prices.length) {
        //   pricesRenamed = prices.map((val) => ({
        //     ...val,
        //     priceUsd: val.price
        //   }));
        // }

        appStore.dispatch({
          type: types.FETCH_CRYPTO_PRICE_SUCCESS,
          payload: {
            prices: prices
          }
        });

        appStore.dispatch({
          type: types.FETCH_PUBLIC_CONTRACTS,
          data: { contracts }
        });

        appStore.dispatch({
          type: types.FETCH_BRO_TOTAL,
          data: {
            totalAmount: bro.totalAmount,
            totalCount: bro.totalCount
          }
        });
        break;
      default:
        // unknown type
        break;
    }
  };

  socket.onerror = event => {
    console.log('Socket error');
  };

  socket.onclose = event => {
    // Try to reconnect
    console.log('Close socket');
    // if (reconnectData.type && reconnectData.message) {
    //     socket = new WebSocket(WEBSCOKET_SERVER);
    //     connect(reconnectData.type, reconnectData.message);
    // }
  };

  return socket;
};

const connect = (event, message) => {
  reconnectData.type = event;
  reconnectData.message = message;

  if (socket) {
    if (socket.readyState === 1) {
      socket.send(
        JSON.stringify({
          type: event,
          message: message
        })
      );
    } else {
      if (socket.readyState === 0) {
        waitConnection(event, message);
      } else {
        reopenConnection();
        waitConnection(event, message);
      }
    }
  } else {
    reopenConnection();

    setTimeout(() => {
      waitConnection(event, message);
    }, 100);
  }
};

const waitConnection = (event, message) => {
  if (!waitInterval) {
    waitInterval = setInterval(() => {
      if (socket.readyState === 1) {
        clearInterval(waitInterval);
        waitInterval = null;
        connect(
          event,
          message
        );
      }
    }, 100);
  }
};

const reopenConnection = () => {
  setupSocket();
};

const closeConnection = () => {
  if (socket.readyState === 1) {
    socket.close();
    socket = null;
  }

  clearInterval(activityInterval);
  clearInterval(powerInterval);
  clearInterval(waitInterval);
};

const checkUserStatus = () => {
  activityInterval = setInterval(() => {
    if (socket.readyState === 1) {
      socket.send(
        JSON.stringify({
          type: 'status',
          message: isUserActive ? 'active' : 'inactive'
        })
      );
    }

    if (!isUserActive) {
      inactiveTime += 30;

      if (inactiveTime >= 3600) {
        clearInterval(activityInterval);
      }
    } else {
      inactiveTime = 0;
    }

    isUserActive = false;
  }, 30000);

  document.body.addEventListener('mousedown', userActive);
  document.body.addEventListener('mousemove', userActive);
  document.body.addEventListener('keydown', userActive);
};

const userActive = () => {
  isUserActive = true;
};

const unloadEvent = () => {
  if (socket.readyState === 1) {
    socket.send(
      JSON.stringify({
        type: 'pageUnload',
        message: 'pageUnloadEvent'
      })
    );
  }
};

const safelyParseJSON = json => {
  var parsed = json;

  try {
    parsed = JSON.parse(json);
  } catch (e) {
    // Oh well, but whatever...
  }

  return parsed;
};

export default { setupSocket, connect, setupStore, reopenConnection, closeConnection, unloadEvent };
