import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  )

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=> res.json())
    .then((date)=> console.log(setUsers(date)))
  }, []);

console.log(users);
let link ="https://www."
let tel= "tel:"
// let dark = "https://github.com/roziqov1011/LOGO/blob/main/img/logo-indigo.png?raw=true"
// let light = "https://github.com/roziqov1011/LOGO/blob/main/img/logo-white.png?raw=true"
const add = (e)=>{
  window.localStorage.setItem("theme", e.target.value)
  document.title = e.target.value
 setTheme(e.target.value)
}



  return (
    <>
    <div className={theme}>
    <select onChange={add}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    {users.length > 0 && <ul>
      {
        users.map(user => (
          <li >
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <a href={user.email}>{user.email}</a>
            <address>address:{user.address.city}
              <span>{user.address.zipcode}</span>
              <a href={tel+user.phone}>{user.phone}</a> <br />
              <a href={link+user.website}>{user.website}</a>
            </address>
            </li>
        ))
      }
      </ul>}
    </div>
    </>
  );
}

export default App;

// import './App.css';
// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer';

// function App(){
//   return (
//     <>
//     <Header />
//     <Main />
//     <Footer />
//     </>
//   );
// }

// export default App;
