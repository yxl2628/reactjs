import user from './mock/user';
import news from './mock/news';

export default {
  'GET /api/user/getList': user.userList,
  'GET /api/news/newsList': news.newsList
};
