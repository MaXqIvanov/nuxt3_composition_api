import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  name: string
  @Prop()
  image: string
  @Prop()
  password: string
  @Prop()
  email: string
}

export const UsersShema = SchemaFactory.createForClass(Users);