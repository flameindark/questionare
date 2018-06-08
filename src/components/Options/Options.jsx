import React from 'react';
import { Button, Radio, Checkbox, Row, Col } from 'antd'
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
import style from './Options.less'
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
            <Radio className={style.normalOptions} value={sopt}>{sopt}</Radio>
          ))
        }
      </RadioGroup>
    )
  } else {
    return (
      <CheckboxGroup style={{width: '100%'}}>
        {
          item.options.map(sopt => (
            <Checkbox className={style.normalOptions}value={sopt}>{sopt}</Checkbox>
          ))
        }
      </CheckboxGroup>
    )
  }
};

export default Options;