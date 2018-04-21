import React, {Component} from 'react';
import axios from 'axios';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: true,
      createDate: false,
      code: false,
      dataList: [],
      accessToken: this.props.location.state.contentData
    }
  }
  componentWillMount() {
    this.pageData();
  }
  
  pageData() {
    let data = JSON.stringify({
      page: 1,
      rows: 10
    });
    axios.post('/erp/ma/system/res/pagedata', data,{
      headers:{
        'Content-Type':'application/json',
        'Authorization': this.props.location.state.contentData
      }
    })
      .then(res => {
        console.log(res);
        this.setState({
          dataList: res.data.responseData.data
        })
      })
  }
  
  toCount() {
    this.props.history.push({pathname: '/count'});
  }
  
  render() {
    let tr = this.state.dataList.map((item, index) => (
      <tr key={index}>
        {this.state.id === true ? <td>{item.id}</td> : null}
        {this.state.createDate === true ? <td>{item.createDate}</td> : null}
        {this.state.code === true ? <td>{item.code}</td> : null}
      </tr>));
    return (
      <div>
        <button onClick={() => this.setState({id:true, createDate:false, code:false})}>列表id</button>
        <button onClick={() => this.setState({id:false, createDate:true, code:false})}>创建日期</button>
        <button onClick={() => this.setState({id:false, createDate:false, code:true})}>功能编码</button>
        <table>
          <tbody>
            {tr}
          </tbody>
        </table>
        <p>
          <button onClick={this.toCount.bind(this)}>去count</button>
        </p>
      </div>
    )
  }
}
