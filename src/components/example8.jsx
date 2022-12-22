import {createRef, useRef, useState,} from "react"



export default function Example8 () {
  const [value, setValue] = useState('');
  // const [persons] = useState([
  //   {name: 'mark', age: 39},
  //   {name: 'hanna', age: 29},
  // ]);

  // const count = useMemo(() => {
  //   return sum(persons);
  // }, [persons]);

  // const click = useCallback(() => {
  //   console.log(value);
  // }, []);

  const input1Ref = createRef();
  const input2Ref = useRef();


  console.log(input1Ref.current, input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change}  />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value)
  }
}
