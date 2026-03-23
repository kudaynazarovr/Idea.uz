import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLoyaut from './page/AppLoyaut'
import { MyProvider } from './MyProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContent from './page/AppContent';
import FaqPage from './components/Page/Faq/FaqPage';
import Order from './components/Page/Orader/Order';
import Exchange from './components/Page/Exchange/Exchange';
import About from './components/Page/About/About';
import ShopsPage from './components/Page/Shops/ShopsPage';
import './i18n'
import './index.css'
import Contact from './components/Page/Contact/Contact';
import Articles from './components/Page/Articles/Articles';
import Installment from './components/Page/Installment/Installment';
import Offer from './components/Page/Offer/Offer';
import Vacancies from './components/Page/Vacancies/Vacancies';
import { Feedback } from './components/Page/Feedback/Feedback';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLoyaut />}>
            <Route index element={<AppContent />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/order" element={<Order />} />
            <Route path='/exchange' element={<Exchange />} />
            <Route path='/about' element={<About />} />
            <Route path='/shops' element={<ShopsPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/installment' element={<Installment />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/vacancies' element={<Vacancies />} />
            <Route path='/feedback' element={<Feedback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  </StrictMode>
)
