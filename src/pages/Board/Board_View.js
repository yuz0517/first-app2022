import React, { useEffect, useState, Component } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";

import './Board_View.css';

//수정 버튼은 작성자에게만 보이게.  => private route로 처리. 

const Board_View = ({ history, location, match }) => {
  //const [data, set_data] = useState({});


  const { no } = match.params; //match.parms-> 글 번호 
  console.log(location.state.select_data); // List.js에서 Props 보낸 값 확인 가능. select_data 로 표시됨.  
  const title = location.state.select_data.title; // List.js에서 Link to 로 보낸 값 받아오는 코드. 
  const content = location.state.select_data.content;

  const date = location.state.select_data.date;
  /*그냥 date를 출력하면 ust (r국제표준시)로 나옴 
  따라서 이것을 kst로 변환하는 작업이 필요함. */
  var date_parse = Date.parse(date);
  var date_milli_plus = date_parse + 9*60*60000;
  var date_milli = new Date(date_milli_plus);
  var date_kst = new Date(date_milli_plus).toISOString(date_milli); 
  //console.log(date_kst);
  const new_date = date_kst.slice(0, 4) + '년 ' +
    date_kst.slice(5, 7) + '월 ' +
    date_kst.slice(8, 10) + '일 ' +
    date_kst.slice(11, 16);

  useEffect(() => {

  }, []);

  //좋아요 기능 구현. 
  async function like_click() {
    //alert('좋아요 버튼 클릭');
  }



  return (
    <div className='div-full'>

      <div className='div-title'>
        <h3>{title}</h3>
      </div>
      <div className='div-content'>
      
      <p className='p-date'>{new_date}</p>
      <div className='div-htmlcontent' dangerouslySetInnerHTML={{ __html: content }} ></div>
      <Link to="/Board">
        {/*<button className='contents'>Back to contents</button>*/}
      </Link> 
      <div className='div-icons'>
        <IconContext.Provider value={{ color: '#000', size:30 }}>
          <div className='Like'>
            <AiIcons.AiOutlineHeart className='icon_Like' onClick={() => like_click()} />
            
            <Link to="/Board"><RiIcons.RiArrowGoBackFill className='icon-back'/></Link>
          </div>
        </IconContext.Provider>
      </div>
    </div>{/*div content */}
    </div>

  );
}

export default Board_View;