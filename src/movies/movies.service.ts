import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Model } from 'mongoose';
import { MovieDocument, Movie } from 'src/schemas/movie.schema';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}
  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = new this.movieModel(createMovieDto);
    return movie.save();
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }
  async findByTitle(name: string): Promise<Movie[]> {
    return this.movieModel
      .find({ title: { $regex: '.*' + name + '.*' } })
      .exec();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieModel.findById(id).exec();
  }

  update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate(id, updateMovieDto).exec();
  }

  remove(id: string): Promise<Movie> {
    return this.movieModel.findById(id).exec();
  }
}
