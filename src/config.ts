import dotenv from 'dotenv'
// import { Pool } from 'pg'
//
dotenv.config()

const {
  PORT,
  NODE_ENV,
  POSGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_BD,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD
} = process.env

export default {
  port: PORT,
  host: POSGRES_HOST,
  dbPort: POSTGRES_PORT,
  database: NODE_ENV === 'dev' ? POSTGRES_BD : POSTGRES_DB_TEST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD
}
