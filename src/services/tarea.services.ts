import { AxiosAdapter, IHttpAdapter } from "../adapters/http.adapter";
import { API_BASE_URL } from '../config'
import { TareaUpdateDto } from "../dto/taraea-update.dto";
import { Tarea } from "../dto/tarea.dto";

export class TareaService {

    private http: IHttpAdapter;

    constructor() {
        this.http = new AxiosAdapter()
    }

    public async crearTarea(data: Tarea, token: string): Promise<any> {
        return await this.http.postAuth(API_BASE_URL + "/task/create", data, { headers: { Authorization: `Bearer ${token}` } })
    }

    public async getTareasProfesor(idProfesor:string, token: string): Promise<any> {
        return await this.http.getAuth(API_BASE_URL + "/task/byProfessor/" + idProfesor,  { headers: { Authorization: `Bearer ${token}` } })
    }

    public async actualizarTarea(idTarea: string, data: TareaUpdateDto, token: string): Promise<any> {
        return await this.http.put(API_BASE_URL + "/task/update/" + idTarea, data, { headers: { Authorization: `Bearer ${token}` } } )
    }

    public async eliminarTarea(idTarea: string, token: string): Promise<any> {
        return await this.http.delete(API_BASE_URL + "/task/delete/" + idTarea, { headers: { Authorization: `Bearer ${token}` } })
    }
}