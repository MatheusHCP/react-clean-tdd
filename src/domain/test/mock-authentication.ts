import { AuthenticationParams } from '../usecases/authentication'
import { faker } from '@faker-js/faker/locale/pt_BR'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
