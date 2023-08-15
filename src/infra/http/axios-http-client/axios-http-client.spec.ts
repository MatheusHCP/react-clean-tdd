import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import { faker } from "@faker-js/faker";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = () : AxiosHttpClient => {
  return new AxiosHttpClient();
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const fakeUrl = faker.internet.url();
    const sut = makeSut();
    await sut.post({ url: fakeUrl })
    expect(mockedAxios).toHaveBeenCalledWith(fakeUrl)
  })
})