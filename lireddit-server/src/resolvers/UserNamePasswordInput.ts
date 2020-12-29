import {
  InputType,
  Field
} from "type-graphql";

@InputType()
export class UserNamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  email: string;
}
