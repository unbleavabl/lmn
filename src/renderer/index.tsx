import ReactDom from 'react-dom/client'
import React from 'react'

import { AppRoutes } from './routes'

import "react-simple-keyboard/build/css/index.css";
import 'resources/styles/globals.sass'


ReactDom.createRoot(document.querySelector('app') as HTMLElement).render(
  <React.StrictMode>
      <AppRoutes />
  </React.StrictMode>
)
