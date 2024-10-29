import http from 'http';
import app from "./src/app.js";
import 'dotenv/config';
import { error } from 'console';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.on('error', (error) => {
  console.log('Error 500 server error: ', error);
})

server.on('listening', () => {
  console.log('Server is listening on port: ', PORT);
});

server.listen(PORT);