import {createContext, useState} from "react"
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";

import './App.css'

export const DataContext = createContext()

function App(){
  const [appState, setAppState] = useState("menu") /*เริ่มต้นให้ App เริ่มแสดงผล*/
  const [score,setScore] = useState(0)
  return(
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
    <div className="App">
      <h1>Web Development Quiz</h1>
      {appState === "menu" && <Menu/>} {/* จะ import อัตโนมัติ*/}
      {appState === "quiz" && <Quiz/>} 
      {appState === "score" && <Score/>} 
    </div>
    </DataContext.Provider>
  );
}
export default App;