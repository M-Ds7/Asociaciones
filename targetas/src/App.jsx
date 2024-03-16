import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './components/Profile'
import ImgEmpresa from './img/Empresa.jpg'
import Account from './components/Account'


const App = (  ) =>{

  return (
    <>
    {/*<div className="container p-4">
      <Profile name_company={"AmigoPeludos"} description={"LA empresa 'Amigos peludos' se se dedica a hacer tratamientos a las mascotas "} ImgEmpresa={ImgEmpresa}/>
    </div>*/}
    <Account/>
    </>
  )
}

export default App
