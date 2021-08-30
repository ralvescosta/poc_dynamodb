import AWS from 'aws-sdk'
import { promisify } from 'util'

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
})
const dynamoDB = new AWS.DynamoDB()

export const createTable = async () => {
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
    TableName: 'data'
  }
  return promisify(dynamoDB.createTable)(tableSchema)
}

export const query = async (params = {}) => {
  const query = {
    TableName: 'data',
    KeyConditionExpression: '#PK = :PK and #SK BETWEEN :startDate and :endDate',
    ExpressionAttributeValues: {
      ':PK': 'movie',
      ':startDate': params.startDate,
      ':endDate': params.endDate
    },
    ExpressionAttributeNames: {
      '#PK': 'PK',
      '#SK': 'SK'
    }
  }

  return promisify(dynamoDB.query)(query)
}
