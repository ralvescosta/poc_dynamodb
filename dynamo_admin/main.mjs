import AWS from 'aws-sdk';
import {createServer} from 'dynamodb-admin';

AWS.config.credentials = new AWS.Credentials({
  accessKeyId: 'local',
  secretAccessKey: 'local'
})
AWS.config.region = 'us-east-1'

const dynamodb = new AWS.DynamoDB();
const dynClient = new AWS.DynamoDB.DocumentClient({service: dynamodb});

const app = createServer(dynamodb, dynClient);

const port = 8001;
const server = app.listen(port);
server.on('listening', () => {
  const address = server.address();
  console.log(`listening on http://0.0.0.0:${address.port}`);
});