import { AxiosHttpAdapter } from "./axios-http-adapter";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { HttpPostParams } from "@/data/protocols/http/http-post-client";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedAxiosResponse = {
  data: faker.datatype.json(),
  status: faker.internet.httpStatusCode()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResponse)

const makeSut = () : AxiosHttpAdapter => {
  return new AxiosHttpAdapter();
}

const mockPostRequest = () : HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.datatype.json()
})

describe('AxiosHttpAdapter', () => {
  
  test('Should call axios with correct URL and body', async () => {
    const fakeRequest = mockPostRequest()
    const sut = makeSut();
    await sut.post(fakeRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(fakeRequest.url, fakeRequest.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const fakeRequest = mockPostRequest()
    const sut = makeSut();
    const response = await sut.post(fakeRequest)
    expect(response).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data
    })
  })

  
})
