import dotenv from 'dotenv'

dotenv.config()

export default {
  app: {
    port: parseInt(process.env.PORT, 10)
  }
}
