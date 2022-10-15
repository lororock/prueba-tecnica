import axios, { AxiosRequestConfig } from 'axios';

export interface IHttpAdapter {

    get<T>(url: string): Promise<T>;
    getAuth<T>(url: string, config: AxiosRequestConfig): Promise<T>;
    post<T, E>(url: string, data: E): Promise<T>;
    postAuth<T, E>(url: string, data: E, config: AxiosRequestConfig): Promise<T>;
    put<T, E>(url: string, data: E, config: AxiosRequestConfig): Promise<T>;
    delete<T, E>(url: string, config: AxiosRequestConfig): Promise<T>;

}

export class AxiosAdapter implements IHttpAdapter {

    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async getAuth<T, E>(url: string, config: AxiosRequestConfig<any>): Promise<T> {
        const { data } = await this.axios.get<T>(url, config);
        return data;
    }

    async post<T, E>(url: string, form: E): Promise<T> {
        const { data } = await this.axios.post<T>(url, form);
        return data;
    }

    async postAuth<T, E>(url: string, form: E, config: AxiosRequestConfig): Promise<T> {
        const { data } = await this.axios.post<T>(url, form, config);
        return data;
    }

    async put<T, E>(url: string, formData: E, config: AxiosRequestConfig): Promise<T> {
        const { data } = await this.axios.put<T>(url, formData, config);
        return data;
    }

    async delete<T>(url: string, config: AxiosRequestConfig): Promise<T> {
        const { data } = await this.axios.delete<T>(url, config)
        return data
    }

}
