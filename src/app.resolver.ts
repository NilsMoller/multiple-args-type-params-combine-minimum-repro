import { Args, ArgsType, Field, Query, Resolver } from '@nestjs/graphql';

@ArgsType()
export class Args1 {
  @Field() prop1: string;
}

@ArgsType()
export class Args2 {
  @Field() prop2: string;
}

@Resolver()
export class AppResolver {
  @Query(() => String)
  hello(@Args() arg1: Args1, @Args() arg2: Args2) {
    return 'Hello World!';
  }
}
