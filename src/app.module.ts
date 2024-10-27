import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Config } from './config';

@Module({
  controllers: [UsersController],
  providers: [
    //providing some value 
    { provide: 'Username', useValue:'HarshGoel' },

    // providing some array
    { provide: 'MAIL', useValue: ['hgoel@gmail.com', 'goelharsh@gmail.com'] },

    // providing some object 
    { provide: 'OBJECT', useValue: {
      name:'dhruv',
      type: 'male'
    } },

    // proving some imorted class 
    { provide: Config, useValue: {
      name:'dhruv',
      type: 'male'
    } },
  ],
})
export class AppModule {}
