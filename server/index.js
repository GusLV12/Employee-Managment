import http from 'http';
import app from "./src/app.js";
import 'dotenv/config';
import { error } from 'console';

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.on('error', (error) => {
  console.log('Error 500 server error: ', error);
})

server.on('listening', () => {
  console.log('Server is listening on port: ', PORT);
});

server.listen(PORT);