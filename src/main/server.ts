import 'module-alias/register'

import env from './config/env'

const startApp = async (): Promise<void> => {
  const app = (await import('./config/app')).default
  app.listen(env.app.port)
}

startApp()
  .then(() => console.log('Restify-Date-fns running'))
  .catch((error) => {
    console.error(`An error occurred on Restify-Date-fns startup: ${JSON.stringify(error, null, 4)}`)
  })
