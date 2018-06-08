import React, { Component } from 'react';
import 'normalize.css'
import './Questionare.css'



import Options from './Options'
import ProgressWrap from './Progress'


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
        <div className="top"></div>
        <h2 className="qs-title">{this.state.questionare.name}</h2>
        <h5 className="qs-summary">{this.state.questionare.summary}</h5>
        <ProgressWrap></ProgressWrap>
        <div className="questions-area">
          {
            questions.map((item, index) => (
              <div className="item single" key={index}>
                {/* <span className="num">{item.QsNo}</span> */}
                <div className="titleValue">{item.QsNo}.{item.Qs}（{this.convertType(item.QsType)}）</div>
                {/* <label className="typeTitle"></label>
                <label className="tipInfo"></label> */}
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