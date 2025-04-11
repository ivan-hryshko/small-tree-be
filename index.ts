import dotenv from 'dotenv'
if (process.env.NODE_ENVIRONMENT === 'development') {
  dotenv.config({ path: './dev.env' })
} else {
  // dotenv.config({ path: '.env.test' })
}
import app from './src/app';
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});