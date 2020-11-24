import IBaseResponse from '../IBaseResponse';

export interface LoginResponseModel extends IBaseResponse {
  token?: string;
}
