import { useReducer } from "react"

//reducer => state를 변경하는 로직이 담긴 함수
const reducer = (state, action) => {
  if (action.type === 'plus') {
    return{
      count: state.count +1
    };
  }
  
  return state;
}
//dispatch => action 객체를 넣어서 실행

//action 객체이고 필수 프로퍼티로 타입을 가진다

export default function Example6() {

  const [state, dispatch] = useReducer(reducer, {count : 0})
  return (
    <div> 
      <p> you clicked {state.count} times</p>
      <button onClick={click}> click me</button>
    </div>
  );

  function click() {
    dispatch({type:"plus"});
  }
}


