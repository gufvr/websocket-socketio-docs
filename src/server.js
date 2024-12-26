import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const port = process.env.port || 3333;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, '../..', 'public');
app.use(express.static(publicDir));

const httpServer = http.createServer(app);

httpServer.listen(port, console.log(`Server listening on port ${port}`));

const io = new Server(httpServer);

io.on('connection', () => {
  console.log('A client has connected');
});
