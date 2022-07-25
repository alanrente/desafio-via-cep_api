import { Zipcode } from '../zipcodes/entities/zipcode.entity';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import axios, { AxiosError } from 'axios';

export async function viaCep(zipCode: string) {
  const reqViaCep = await axios
    .get(`https://viacep.com.br/ws/${zipCode}/json`)
    .catch(({ message, response }: AxiosError) => {
      if (response.status === 400)
        throw new BadRequestException('Cep inválido');

      throw new InternalServerErrorException(message);
    });

  const { data } = reqViaCep;

  const { erro } = data;

  /* 
    Quando passa um cep que não existe, trás o dado { erro: 'true' }.
    Ceps usados: [48884884, 48884333, 87338733]
    Por isso coloquei a validação abaixo.
  */
  if (erro) throw new BadRequestException('Esse cep não existe');

  const reqViaCepTyped: Zipcode = data;

  return reqViaCepTyped;
}
