import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProodsDocument = HydratedDocument<Proods>;

@Schema()
export class Proods {
  @Prop()
  name: string;
  @Prop()
  navigate: string;
  @Prop()
  image: string;
  @Prop()
  id_category: string;
}

export const ProodsShema = SchemaFactory.createForClass(Proods);