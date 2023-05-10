export class UnexpectedError extends Error {
  constructor () {
    super('Falha na Requisição')
    this.name = 'UnexpectedError'
  }
}
