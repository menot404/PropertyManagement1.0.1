import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/layout/Footer';
import Header from './Components/layout/Header';
import Login from './Components/forms/Login';
import HomePage from './Components/pages/HomePage';
import ContactPage from './Components/pages/ContactPage';
import UserDashboard from './Components/dashboard/UserDashboard';
import FavorisPage from './Components/pages/FavorisPage';
import PropertiesPage from './Components/pages/PropertiesPage';
import AppointmentPage from './Components/pages/AppointmentPage';
import Register from './Components/forms/Register';
import ForgotPasswordPage from './Components/forms/ForgotPasswordPage';
import PrivacyPolicy from './Components/TermePolique/PrivacyPolicy';
import TermsOfService from './Components/TermePolique/TermsOfService';


function App() {
  return (
      <>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow">
                <Routes>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path="/forgot-password" element={<ForgotPasswordPage />}/>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/properties' element= {<PropertiesPage/>} />
                  <Route path="/rende-vous" element={<AppointmentPage />} />
                  <Route path='/contact' element={<ContactPage/>} />
                  <Route path='/user' element={<UserDashboard/>}/>
                  <Route path='/favoris' element={<FavorisPage/>} />
                  <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
                  <Route path='/terms' element={<TermsOfService/>} />
                </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
      </>
  );
}

export default App;