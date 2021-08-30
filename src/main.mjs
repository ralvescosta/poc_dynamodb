import { createTable, query } from 'repository.mjs'
const hourInMilliseconds = 3600000

;(async () => {
  await createTable()

  const result = query({
    startDate: new Date(Date.now() - hourInMilliseconds).toISOString(),
    endDate: new Date().toISOString()
  })
  console.table(result)
})()
