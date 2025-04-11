import dotenv from 'dotenv'
if (process.env.NODE_ENVIRONMENT === 'test') {
  dotenv.config({ path: './test.env' })
} else {
  dotenv.config({ path: './dev.env' })
}

console.log('process.env :>> ', process.env);
const environment = process.env.NODE_ENVIRONMENT
// if (!environment) {
//   console.log('No environment specified. Set NODE_ENV environment variable.')
//   process.exit(1)
// }

export const config = {
  environment
}