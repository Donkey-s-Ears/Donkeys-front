const express = require('express');

const app = express();

const path = require('path'); // const webpack = require('webpack');
// const config = require('../webpack.dev.config');


const http = require('http').createServer(app);

const wsServer = require('socket.io')(http);

const port = 3000; // const compiler = webpack(config);

const index = path.resolve(__dirname, '../dist/index.html'); // console.log(index);
// app.use(router);
// app.use(webpackDevMiddleware(compiler));

app.use('/', express.static(path.resolve(__dirname, '../dist')));
app.get('*', (req, res, next) => {
  if (req.path.split('/')[1] === 'static') return next();
  res.sendFile(index);
}); // let devServer = new WebpackDevServer(config.devServer, compiler);
// devServer.start(3001, () => {
//   console.log('webpack-dev-server is listening on port', 3001);
// });

wsServer.on('connection', socket => {
  console.log('connection socket'); // 방에 입장한 Peer에게 welcome 이벤트 emit

  socket.on('join_room', roomName => {
    console.log('join');
    socket.join(roomName);
    socket.to(roomName).emit('welcome');
  }); // PeerA로부터 offer를 받고 이를 PeerB에게 전달

  socket.on('offer', (offer, roomName) => {
    socket.to(roomName).emit('offer', offer);
  }); // PeerB로부터 answer를 받아 PeerA에게 전달

  socket.on('answer', (answer, roomName) => {
    socket.to(roomName).emit('answer', answer);
  }); // 각자에게 icecandidate event fired

  socket.on('ice', (ice, roomName) => {
    socket.to(roomName).emit('ice', ice);
  });
});
http.listen(port, () => {
  console.log('Server started on port:', port);
});