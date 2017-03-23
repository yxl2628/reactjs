import React from 'react';
import styles from './helloworld.css';

class CssMoudleComponent extends React.Component{
  render(){
    return (
      <div className={styles.title}>Hello World，{this.props.name}</div>
    );
  }
}

export default CssMoudleComponent;
