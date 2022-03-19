import 'module-alias/register'

const startApp = async (): Promise<void> => {
  const app = (await import('./config/app')).default
  app.listen(3000)
}

startApp()
  .then(() => console.log('Restify-Date-fns running'))
  .catch((error) => {
    console.error(`An error occurred on Restify-Date-fns startup: ${JSON.stringify(error, null, 4)}`)
  })
