import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  releaseYear: string;

  @Prop({ required: true })
  length: number;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  imageUrl: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
