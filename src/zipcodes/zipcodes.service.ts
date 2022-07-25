import { Injectable } from '@nestjs/common';
import { Zipcode } from './entities/zipcode.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ZipcodesService {
  constructor(
    @InjectRepository(Zipcode)
    private zipcodeRepository: Repository<Zipcode>,
  ) {}

  async create(createZipcodeDto: Zipcode) {
    return await this.zipcodeRepository.save(createZipcodeDto);
  }

  async findAll() {
    return this.zipcodeRepository.find();
  }

  async findOne(zipcode: string) {
    /*
      Formatando a string para pegar apenas os numeros e tranformar no padrão do retorno viacep
      Garantido que vá buscar com traço, mesmo que o paramêtro chegue com ou sem.
    */
    const zipCodeFormattedToSearch = `${zipcode.substring(
      0,
      5,
    )}-${zipcode.substring(zipcode.length - 3)}`;

    return await this.zipcodeRepository.findOneBy({
      cep: zipCodeFormattedToSearch,
    });
  }
}
