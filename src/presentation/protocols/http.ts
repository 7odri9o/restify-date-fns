export type HttpResponse = {
  status: number
  body: any
}

export type HttpRequest = {
  body?: any
}

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error
})
