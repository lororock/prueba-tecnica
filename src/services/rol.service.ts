import { AxiosAdapter, IHttpAdapter } from "../adapters/http.adapter";
import { API_BASE_URL } from '../config'

export class RolService {

    private http: IHttpAdapter;

    constructor() {
        this.http = new AxiosAdapter()
    }

    public async listarRoles(): Promise<any> {
        return await this.http.get(API_BASE_URL + "/rol/all")
    }

    public async listarTiposDocumentos(): Promise<any> {
        return await this.http.get(API_BASE_URL + "/tipe-document/all")
    }
}