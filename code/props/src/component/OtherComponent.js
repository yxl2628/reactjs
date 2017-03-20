import React from 'react';

const OtherComponent = ({name,age,sex,email}) =>{
  return(
    <div>
      <div><span>姓名：</span><span>{name}</span></div>
      <div><span>年龄：</span><span>{age}</span></div>
      <div><span>性别：</span><span>{sex}</span></div>
      <div><span>邮箱：</span><span>{email}</span></div>
    </div>
  )
}
export default OtherComponent;
