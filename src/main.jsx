import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RollingDice from './RollingDice/RollingDice'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RollingDice />
  </StrictMode>
)
