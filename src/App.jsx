import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// exporting App as default export for this file.
export default function App() {

  //create getter/setter for new count variable using useState (hook?)
  const [count, setCount] = useState(0);

  // return App component JSX with an embedded Button component.
  return (
    <div className="App">
      {/* pass getter/setter to Button component as Props (??) */}
      <Button count={count} setCount={setCount} />
    </div>
  );
}

// function Button(props) {
//   console.log("Props: ", props);
//   return (
//     <button onClick={()=>{props.setCount(props.count+1)}}>{props.count}</button>
//     // <div>hello</div>
//   );
// }

// props passed as deconstructed variables from props argument.
function Button({count, setCount}) {
  // console.log("Props: ", props);
  return (
    <div>
      {/* onclick: call setter method to increment count prop */}
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
      {/* hello */}

    </div>
    // <div>hello</div>
  );
}
