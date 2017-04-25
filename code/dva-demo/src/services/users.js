import request from '../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/user/getList?page=${page}`);
}
