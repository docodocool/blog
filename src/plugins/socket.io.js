import io from 'socket.io-client';

function SocketIO() {
  this.connect = userName =>
    new Promise((resolve, reject) => {
      const socket = io(process.env.WS_URL, {
        query: {
          room: 'default',
          userId: `client_${Math.random()}`,
          userName,
        },
        // 直接使用websocket方式传输, 而不是由http升级
        transports: ['websocket'],
      });
      // __proto__是内部属性, 未纳入ES6标准, 不可以直接设置. 要用Object.setPrototypeOf()代替
      Object.setPrototypeOf(this, socket);
      socket.on('connect', () => {
        console.log('socket connect');
        resolve();
      });
      socket.on('connect_error', error => {
        console.log('ERR: SOCKET_CONNECT_ERROR: ', error);
        const reason = 'Socket连接错误';
        reject(reason);
      });
      socket.on('connect_timeout', timeout => {
        console.log('ERR: SOCKET_CONNECT_TIMEOUT: ', timeout);
        const reason = '连接超时';
        reject(reason);
      });
      socket.on('error', error => {
        console.log('ERR: SOCKET_ERROR: ', error);
        const reason = 'Socket错误';
        reject(reason);
      });
    });
}

export default new SocketIO();
