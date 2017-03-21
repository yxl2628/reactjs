import React from 'react';

function UseableComponent({id,name,age,email}){
    return (
      <div>
        <div>id:{id}</div>
        <div>name:{name}</div>
        <div>age:{age}</div>
        <div>email:{email}</div>
      </div>
    );
}

UseableComponent.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string,
  age:React.PropTypes.number,
  email:React.PropTypes.string
};

UseableComponent.defaultProps = {
  id:0,
  name:'defaultName',
  age:10,
  email: 'defult@email.com'
}

export default UseableComponent;
