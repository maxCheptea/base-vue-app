import { LoginResponseModel } from '@/models/auth/response';
import { LoginRequestModel } from '@/models/auth/request';
import HTTPService from '../HTTPService';

// import querystring from 'querystring'; - querystring helper

const login = async (credentials: LoginRequestModel): Promise<LoginResponseModel> => {
  try {
    const { status, data } = await HTTPService.sendMessage('post', '/api/my-endpoint/', credentials);

    return { status, token: data };
  } catch (error) {
    return { status: error.response.status, message: 'My fancy error message' };
  }
};

// TODO: Remove when more functions are added
export default login;
