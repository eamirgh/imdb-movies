import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    RouterProvider,
} from "react-router";
import './App.css'

import router from './routes/web.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
