import { ServerError } from '@/presentation/errors'

export type HttpResponse = {
  status: number
  body: any
}

export type HttpRequest = {
  body?: any
}

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data
})

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(error.stack)
})
