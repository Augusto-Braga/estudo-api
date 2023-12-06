import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

console.log(env.PORT)
console.log('aaaa')

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .where('amount', 500)
    .select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP Server Running on port ${env.PORT}!`)
  })
