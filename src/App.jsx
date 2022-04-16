import { BrowserRouter } from 'react-router-dom';

import './App.css';
// import ContactUs from './pages/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin />
      </BrowserRouter>
    </div>
  );
}

export default App;
