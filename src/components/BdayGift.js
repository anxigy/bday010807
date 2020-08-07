import React, { useState } from 'react';
import '../styles/css/BdayGift.scss'
import gift from '../assets/gift.png'
import giftHover from '../assets/opengift.png'
import cake from '../assets/img.png'
import fail1 from '../assets/fail-1.jpeg'
import fail2 from '../assets/fail-2.jpeg'
import fail3 from '../assets/fail-3.png'
import fail4 from '../assets/fail-4.png'
import close from '../assets/icon.png'
import '../styles/css/Modal.scss'

const BdayGift = () => {
  const [state, setState] = useState({
    box : [
      {hover: false, src: fail1},
      {hover: false, src: fail2},
      {hover: false, src: fail3},
      {hover: false, src: cake},
      {hover: false, src: fail4},
    ],
    visible: false,
    giftTitle : '꽝 !',
    giftSub: '아쉽습니다....^^',
    src : ''
  })
  const onImgMouseOver = (idx) => {
    const itemState = [...state.box]
    itemState[idx].hover = true
    setState(state => ({
      ...state,
      box: itemState
    }))
  }
  const onImgMouseOut = (idx) => {
    const itemState = [...state.box]
    itemState[idx].hover = false
    setState(state => ({
      ...state,
      box: itemState
    }))
  }
  const onClickThisBox = (idx) => {
    const itemState = [...state.box]
    if(idx === 3) {
      setState(state => ({
        ...state,
        giftTitle: '당첨 !',
        giftSub: '축하합니다 !',
        src: itemState[idx].src
      }))
    } else {
      setState(state => ({
        ...state,
        giftTitle : '꽝 !',
        giftSub: '아쉽습니다....^^',
        src: itemState[idx].src
      }))
    }
    setState(state => ({
      ...state,
      visible: true
    }))
  }

  const modalClose = () => {
    setState(state => ({
      ...state,
      visible: false
    }))
  }
  return (
    <div className="container">
      <div className="subTitleItem">
        <div className="chooseDes">처음에 꽝이 나온다면! 선물이 없어열,,</div>
        <div className="chooseSubtitle">CHOOSE !</div>
        <div className="chooseTitle">BIRTHDAY GIFT</div>
      </div>
      <div className="boxContainer">
        <div style={{display: 'inline-block'}}>
          <div className="box" 
            onClick={() => onClickThisBox(0)} 
            onMouseOver={() => onImgMouseOver(0)}
            onMouseOut={() => onImgMouseOut(0)}>
            <img 
              src={state.box[0].hover ? giftHover : gift} 
              className={state.box[0].hover? "gifthover" : "giftimg"}/>
          </div>
          <div className="box" 
            onClick={() => onClickThisBox(1)} 
            onMouseOver={() => onImgMouseOver(1)}
            onMouseOut={() => onImgMouseOut(1)}>
            <img 
              src={state.box[1].hover ? giftHover : gift} 
              className={state.box[1].hover? "gifthover" : "giftimg"}/>
          </div>
          <div className="box"
            onClick={() => onClickThisBox(2)} 
            onMouseOver={() => onImgMouseOver(2)}
            onMouseOut={() => onImgMouseOut(2)}>
            <img 
              src={state.box[2].hover ? giftHover : gift} 
              className={state.box[2].hover? "gifthover" : "giftimg"}/>
          </div>
          <div className="box" 
            onClick={() => onClickThisBox(3)} 
            onMouseOver={() => onImgMouseOver(3)}
            onMouseOut={() => onImgMouseOut(3)}>
            <img 
              src={state.box[3].hover ? giftHover : gift} 
              className={state.box[3].hover? "gifthover" : "giftimg"}/>
          </div>
          <div className="box" 
            onClick={() => onClickThisBox(4)} 
            onMouseOver={() => onImgMouseOver(4)}
            onMouseOut={() => onImgMouseOut(4)}>
            <img 
              src={state.box[4].hover ? giftHover : gift} 
              className={state.box[4].hover? "gifthover" : "giftimg"}/>
          </div>
        </div>
      </div>

      <div className={state.visible ? "modalOverlay" : "modalClose"} />
      <div className={state.visible ? "modalWrapper" : "modalClose"} >
        <div className="modalInner">  
          <div className="closeButton" onClick={() => modalClose()}>
            <img src={close}/>
          </div>
          <div className="giftItemContainer">
            <img src={state.src} className="giftItem"/>
          </div>
          <div className="giftitItemText">{state.giftTitle}</div>
          <div className="giftitItemSub">{state.giftSub}</div>
        </div>
      </div>
    </div>
  )
}

export default BdayGift;