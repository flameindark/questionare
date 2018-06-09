import React, { Component } from 'react'
import { Progress } from 'antd'
import './Progress.css'
const ProgressWrap = (percent) => {
  return (
    <div className="progressbar-wrap">
      <Progress percent={percent} />
    </div>
  )
};

export default ProgressWrap;