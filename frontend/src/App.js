
import './App.css';
import SignIn from './Login.js/Login';
import SignUp from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import Navigator from './Home/Navigation';
import Header from './Header/Header';
import Content from './Home/Content_Tab1';
import Paperbase from './Home/PaperBase';
import ChatDetails from './Chatbox/chatBox';
// import Header from './Header/Header';
import CommunityContainer from './Community/CommunityContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Paperbase/></>} />
      <Route path='/register' element={<SignUp/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/community' element={<SignIn/>} />
      <Route path='/chats' element={<ChatDetails/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
