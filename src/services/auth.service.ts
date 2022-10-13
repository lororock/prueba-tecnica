import { AxiosAdapter, IHttpAdapter } from "../adapters/http.adapter";
import { API_BASE_URL } from '../config'

export class AuthService {

    private http: IHttpAdapter;

    constructor() {
        this.http = new AxiosAdapter()
    }

    public async registrar(usuario:any): Promise<any> {
        return await this.http.post(API_BASE_URL + "/auth/register", usuario)
    }

}