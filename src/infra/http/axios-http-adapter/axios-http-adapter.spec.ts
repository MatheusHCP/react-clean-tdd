import { mockPostRequest } from "@/data/test";
import { AxiosHttpAdapter } from "./axios-http-adapter";
import { mockAxios } from "./test";
import axios from 'axios';


jest.mock('axios')


type SutTypes = {
  sut: AxiosHttpAdapter,
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = () : SutTypes => {
  const sut = new AxiosHttpAdapter();
  const mockedAxios = mockAxios();
  return {sut, mockedAxios}
}


describe('AxiosHttpAdapter', () => {
  
  test('Should call axios with correct URL and body', async () => {
    const fakeRequest = mockPostRequest()
    const {sut, mockedAxios} = makeSut();
    await sut.post(fakeRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(fakeRequest.url, fakeRequest.body)
  })

  test('Should return the correct statusCode and body', () => {
    const fakeRequest = mockPostRequest()
    const {sut, mockedAxios} = makeSut();
    const promise = sut.post(fakeRequest) // Como vamos verificar a promise do resulto do mockedAxios vamos retornar a promise para verificar com o da resposta do mockedAxios
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value) // Vamos pegar o valor 0 pois o result ele traz o ResolvedValue e o RejectedValue
  })

  
})
