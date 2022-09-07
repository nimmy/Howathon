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
import { WishCreate } from './components/wishCreate/WishCreate';
import { Discover } from './components/discover/Discover';
import { Profile } from './components/profille/Profile';
import { Notification } from './components/notification/Notification';
import { Schedule } from './components/schedule/Schedule';
import { Inbox } from './components/inbox/Inbox';
import { EditProfile } from './components/editProfile/EditProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthMaster />} />
          <Route path="PhoneAuth" element={<PhoneAuth />} />
          <Route path="UserType" element={<UserType />} />
          <Route path="WishCreate" element={<WishCreate />} />
          <Route path="Discover" element={<Discover />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Notification" element={<Notification />} />
          <Route path="Schedule" element={<Schedule />} />
          <Route path="Inbox" element={<Inbox />} />
          <Route path="EditProfile" element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
