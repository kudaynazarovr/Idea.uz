import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLoyaut from './page/AppLoyaut'
import { MyProvider } from './MyProvider';
import './i18n'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <AppLoyaut />
    </MyProvider>
  </StrictMode>,
)
