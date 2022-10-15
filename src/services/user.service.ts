import { AxiosAdapter, IHttpAdapter } from "../adapters/http.adapter";
import { API_BASE_URL } from "../config";
import { Tarea } from "../dto/tarea.dto";

export class UserService {
  private http: IHttpAdapter;

  constructor() {
    this.http = new AxiosAdapter();
  }

  public async listarUsuarios(token: string): Promise<any> {
    return await this.http.getAuth(
      API_BASE_URL + "/user/byRol/6341b4f9ee0c46a68e80fec0",
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  public async getDatosUsuario(idUser: string, token: string): Promise<any> {
    return await this.http.getAuth(API_BASE_URL + "/user/byId/" + idUser, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  public async getTodosUsuario(data: Tarea, token: string): Promise<any> {
    return await this.http.postAuth(API_BASE_URL + "/task/create", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  public async actualizarTarea(): Promise<any> {
    return await this.http.get(API_BASE_URL + "/task/udpate/");
  }
}
