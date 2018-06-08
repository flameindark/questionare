import React, { Component } from 'react';
import './Questionare.css'
import Options from './Options'


class Questionare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionare: [],
      questions: []
    };
  }
  componentDidMount() {
    window.ajaxPost('/questionare/ask.do', {
      urlId: 'd290ff31-f3c1-43eb-a225-18002ad0089f'
    }).then(res => {
      this.setState({
        questionare: res
      })
      console.log(res);
      this.convertQuestion(res)
    })
  }
  render() {
    const {questions} = this.state;
    return (
      <div className="question-wrap">
        <h2>{this.state.questionare.name}</h2>
        <h5>{this.state.questionare.summary}</h5>
        <div className="questions-area">
          {
            questions.map((item, index) => (
              <div className="item single" key={index}>
                <div className="num">{item.QsNo}</div>
                <div className="titleValue">{item.Qs}</div>
                <label className="typeTitle">（{this.convertType(item.QsType)}）</label>
                <label className="tipInfo"></label>
                <div className="options">
                  {
                    Options(item)
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  convertQuestion(res) {
    var questions = res.value.split('¤');
    let result = [];
    questions.forEach(item => {
      let temp = item.split('§');
      let QsType, QsNo, Qs;
      [
        QsType,
        QsNo,
        Qs
      ] = temp;
      let options = temp.slice(-1)[0].split('Φ');
      result.push({
        QsType,
        QsNo,
        Qs,
        options});
    })
    this.setState({
      questions: result
    })
    console.log(this.state.questions)
  }

  // 将题目类型标志转换成中文类型
  convertType(type) {
    switch(type) {
      case 'single':
        return '单选题';
        break;
      case 'multi':
        return '多选题';
        break;
      default:
        return ''
    }
  }
}

export default Questionare;