import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Toaster} from "react-hot-toast"
import PrivateRoute from './utils/PrivateRoute';
import MyStories from './Pages/MyStories';
import Feeds from './Pages/Feeds';
import CreateStories from './Pages/CreateStories';
import EditStory from './Pages/EditStory';


function App() {
  return (
    <div className="App">
      <Toaster/>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='login' element={<Login/>} />
          <Route element ={<PrivateRoute/>}>
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='my-stories' element = {<MyStories/>} />
          <Route path='feeds' element= {<Feeds/>} />
          <Route path='new-story' element={<CreateStories/>} />
          <Route path='edit-story/:id/' element={<EditStory/>} />
          </Route>
        </Routes>
        </AuthProvider>
      </Router>
      
    </div>
  );
}

export default App;
