import React, { Component } from 'react'
import { Progress } from 'antd'
const ProgressWrap = (percent) => {
  <div className="progressbarWrap">
    <Progress percent={percent} />
  </div>
};

export default ProgressWrap;