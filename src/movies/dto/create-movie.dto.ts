import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  description: string;

  @IsString()
  @IsNotEmpty()
  releaseYear: string;

  @IsNumber()
  @IsNotEmpty()
  length: number;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
