import React from 'react'
import { hashHistory } from 'react-router'

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    hashHistory.push(path);
  }
  componentWillMount(){
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routeWillLeave
        )
    }

    routeWillLeave(nextLocation){
        return `是否确定离开本页面到 ${nextLocation.pathname}`;
    }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/>
            <input type="text" placeholder="repo"/>
            <button type="submit">Go</button>
        </form>
      </div>
    )
  }
}
Form.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Form;
