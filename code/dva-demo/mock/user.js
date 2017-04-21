import Mock from 'mockjs';

export default {
  userList:Mock.mock({
      code:"0000",
      'list|10-50': [{
          'id|+1': '@guid',
          'name':'@cname',
          'email':'@email',
          'adress':'@city(true)',
          'zip':'@zip'
      }]
  })
};
