import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'salemanager_zhu',
      pwd: '123456'
    }
  }
  
  render() {
    return (
      <div>
        <div>
          账号： <input type="text" value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} placeholder="请输入用户名" /><br/>
          密码： <input type="password" value={this.state.pwd} onChange={(e) => this.setState({pwd:e.target.value})} placeholder="请输入密码" /><br/>
          <button onClick={this.login.bind(this)}>登录</button>
        </div>
      </div>
    )
  }
  login() {
    console.log(this.state.username,this.state.pwd);
    let data = {
      userName: this.state.username,
      password: this.state.pwd
    };
    axios.post('/erp/application/login', data,{
      transformRequest: [function (data) {
        let ret = '';
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': undefined
      }
    })
      .then(res => {
        //console.log(res);
        this.props.history.push({pathname : '/content', state:{contentData: res.data.responseData.accessToken}});
    })
  }
  
}