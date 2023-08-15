import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { HttpPostParams } from "@/data/protocols/http/http-post-client";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = () : AxiosHttpClient => {
  return new AxiosHttpClient();
}

const mockPostRequest = () : HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.datatype.json()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and body', async () => {
    const fakeRequest = mockPostRequest()
    const sut = makeSut();
    await sut.post(fakeRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(fakeRequest.url, fakeRequest.body)
  })
})
