import { environment } from '../../../environments/environment';

export const URLS = {
  USER: {
    ROOT_URL: environment.services.user,
    GET_USER_LIST: () => `${URLS.USER.ROOT_URL}/users`,
    GET_USER_DETAILS: (userId: string) =>
      `${URLS.USER.ROOT_URL}/users/${userId}`,
  },
};
