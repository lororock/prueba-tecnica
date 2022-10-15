export interface UserRegisterDto {
  username: string;
  passWord: string;
  name: string;
  tipe_document: string;
  document: number | null;
  email: string;
  phone: number | null;
  rol: string;
}
