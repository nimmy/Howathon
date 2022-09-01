import logo from './logo.svg';
import './App.css';
import appAuth from './firebase';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PhoneAuth from './components/phoneAuth/PhoneAuth';
import AuthMaster from './components/authMaster/AuthMaster';
import { UserType } from './components/UserType/UserType';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthMaster />} />
          <Route path="PhoneAuth" element={<PhoneAuth />} />
          <Route path="UserType" element={<UserType />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
