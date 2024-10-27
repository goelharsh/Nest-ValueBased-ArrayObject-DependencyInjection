import { Controller, Inject } from "@nestjs/common";
import { Config } from "./config";


@Controller('users')
export class UsersController{

    // 1. constructor for prinitng value 

    // constructor(@Inject('Username') private name: string){
    //     console.log(this.name);
    // }

    
    // 2. constructor for printing array 
    // constructor(@Inject('MAIL') private name: string){
    //     console.log(this.name);
    // }

    
    // 3. constructor for printing object 
    // constructor(@Inject('OBJECT') private name: Record<string, any>){
    //     console.log(this.name);
    // }

    
    // 4. constructor for printing class 
    constructor(private name: Config){
        console.log(this.name);
    }

}