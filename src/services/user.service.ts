import { AxiosAdapter, IHttpAdapter } from "../adapters/http.adapter";
import { API_BASE_URL } from '../config'
import { Tarea } from "../dto/tarea.dto";

export class UserService {

    private http: IHttpAdapter;

    constructor() {
        this.http = new AxiosAdapter()
    }

    public async listarUsuarios(token: string): Promise<any> {
        return await this.http.getAuth(API_BASE_URL + "/user/all", { headers: { Authorization: `Bearer ${token}` } })
    }

    public async getTodosUsuario(data: Tarea, token: string): Promise<any> {
        return await this.http.postAuth(API_BASE_URL + "/task/create", data, { headers: { Authorization: `Bearer ${token}` } })
    }

    public async actualizarTarea(): Promise<any> {
        return await this.http.get(API_BASE_URL + "/task/udpate/")
    }

    public async eliminarTarea(idTarea: string, token: string): Promise<any> {
        return await this.http.delete(API_BASE_URL + "/tipe-document/all/" + idTarea, { headers: { Authorization: `Bearer ${token}` } })
    }

}