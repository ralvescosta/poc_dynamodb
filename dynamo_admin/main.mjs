import {createServer} from 'dynamodb-admin';

const app = createServer();

const port = 8001;
const server = app.listen(port);
server.on('listening', () => {
  const address = server.address();
  console.log(`listening on http://0.0.0.0:${address.port}`);
});