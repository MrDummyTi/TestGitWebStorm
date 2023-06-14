import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
function App() {
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
        <PostItem value={"2222"} item ={{title: 0}} number={8}/>
    </div>
  );
}

export default App;
