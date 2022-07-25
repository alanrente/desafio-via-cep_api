import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_zipcodes' })
export class Zipcode {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  localidade: string;

  @Column()
  uf: string;
}
