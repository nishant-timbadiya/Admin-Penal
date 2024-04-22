import { BrowserRouter, Route, Routes } from  "react-router-dom";
import './App.css';
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Dashboard from "./component/DashBord/Dashbord";
import Profile from "./component/DashBord/Profile";
import Event from "./component/DashBord/Event";
import News from "./component/DashBord/News";
import Company from "./component/DashBord/Company";
import Supplier from "./component/DashBord/Supplier";


function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/event' element= {<Event />} />
        <Route path="/news" element={<News />} />
        <Route path="/company" element={<Company />} />
        <Route path="/Supplier" element={<Supplier />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
