import React, { useState } from 'react';
import '../styles/css/BdayMain.scss'
import leftBtn from '../assets/left.png'
import rightBtn from '../assets/right.png'
import phoca from '../assets/phoca.png'

const BdayMain = () => {
  const [state, setState] = useState({
    data: [
      {msg:'안녕 윤옥아 슴살의 생일을 축하해~~~~덤으로 육백일도 축하해~~~~가평가서 빠뤼하쟈 오는 길에 제스티살룬가서 버거도 조지고 알쥐알쥐'},
      {msg:'조유노기 20번째 생일축하한다~~~ 야 생일날 미역국도 잘 챙겨먹고 맛있는거 많이먹어라 글고 아프지말고 건강챙겨 건갱. 앞으로도 잘 지내자..^^!'},
      {msg:'20번째 생일 축하해 🥳 거의 6년동안 같이 생일을 지내는 것 같은데 정말 축하하구 앞으로도 알지? 나이 먹으니까 서로서로 건강 챙기자구 ~'},
      {msg:'생일 축하해 친구야. 맛있는 거 많이 먹고 잘 먹고 잘 살아라. 건강하자. 일 열심히해서 부자되자 :)'}
    ],
    msgidx: 0
  })
  const onLeftClick = (e) => {
    if(state.msgidx === 0){
      setState(state => ({
        ...state,
        msgidx : 3
      }))
    } else {
      setState(prevState => ({
        ...state,
        msgidx: prevState.msgidx - 1
      }))
    }
  }
  const onRightClick = (e) => {
    if(state.msgidx === 3){
      setState(state => ({
        ...state,
        msgidx : 0
      }))
    } else {
      setState(prevState => ({
        ...state,
        msgidx: prevState.msgidx + 1
      }))
    }
  }
  return (
    <div className="container">
      <div style={{float: 'left', width: '50vw'}}>
        <div className="left-item">
          <span className="title">Congratulations!</span>
          <div className="subtitle">HAPPY BIRTHDAY -</div>
          <div className="description">조윤옥의 20번째 생일을 축하합니다 !</div>
          <div className="bdayText">2001. 08. 07</div>
        </div>

        <div className="msgBox">
          <div className="msgText">
            {state.data[state.msgidx].msg}
          </div>
          <div className="page">
            <div className="pageBtn" onClick={(e) => onLeftClick(e)}>
              <img src={leftBtn}/>
            </div>
            <div className="pageBtn" onClick={(e) => onRightClick(e)}>
              <img src={rightBtn}/>
            </div>
            <div className="msgNum">{state.msgidx+1} / 4</div>
          </div>
        </div>
      </div>
      <div className="right-item">
        <img src={phoca}/>
      </div>
    </div>
  )
}

export default BdayMain;