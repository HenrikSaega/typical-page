import { Fragment } from "react"; 
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
function App() {

  const[loggedIn, setLoggedIn] = useState(() =>{
    if(JSON.parse(localStorage.getItem('IsLoggedUser')) !== null){
      return JSON.parse(localStorage.getItem('isLoggedUser')).isLogged
    } else{
      return false;
    }  
  }) 

  console.log(loggedIn)

const loginHandler = (user, password) =>{
  const loggedUser = localStorage.setItem('isLoggedUser', JSON.stringify({username: user,
    isLogged: true
  }))
} 

  return (
    <>
    <Fragment>
      <MainHeader/>
      <main>
        <Login onLogin={loginHandler} />
      </main>
    </Fragment>
    </>
  );
}

export default App;
