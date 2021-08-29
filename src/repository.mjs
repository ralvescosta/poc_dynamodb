import AWS from 'aws-sdk'

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
})
const dynamoDB = new AWS.DynamoDB()

export const createIoTTable = () => {
  const tableSchema = {
    AttributeDefinitions: [
      {
        AttributeName: 'PK',
        AttributeType: 'S'
      },
      {
        AttributeName: 'SK',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'PK',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'SK',
        KeyType: 'RANGE'
      }
    ], 
    ProvisionedThroughput: {
      ReadCapacityUnits: 30,
      WriteCapacityUnits: 30
    },
    TableName: 'iot'
  }

  dynamoDB.createTable(tableSchema, function (err, data) {
    if (err) {
      console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2))
    } else {
      console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2))
    }
  })
}
