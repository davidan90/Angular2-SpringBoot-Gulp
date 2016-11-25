import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


import { User } from '../model/user';

@Injectable()
export class UserService {
    private urlUserService:string = "http://localhost:8080/usuario/";
    
    constructor(private _http:Http){ }
    
    getAllUser():Observable<User[]> {
        return this._http.get(this.urlUserService)
                    .map((res:Response) => {
                        let data = res.json();
                        return data;
                    });
    }
}