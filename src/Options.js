import React from 'react';
import { Button, Radio, Checkbox, Row, Col } from 'antd'
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const normalOptionStyle = {
  display: 'block',
  height: '30px',
  width: '100%',
  lineHeight: '30px',
}

// 根据题目类型的不同渲染不同的选项
// item.QsType 题目类型
// item.options 题目选项数组
const Options = (item) => {
  const type = item.QsType;
  if( type === 'single') {
    return(
      <RadioGroup>
        {
          item.options.map(sopt => (
            <Radio key={sopt} style={normalOptionStyle} value={sopt}>{sopt}</Radio>
          ))
        }
      </RadioGroup>
    )
  } else {
    return (
      <CheckboxGroup style={{width: '100%'}}>
        {
          item.options.map(sopt => (
            <Checkbox key={sopt} style={normalOptionStyle} value={sopt}>{sopt}</Checkbox>
          ))
        }
      </CheckboxGroup>
    )
  }
};

export default Options;