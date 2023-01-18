import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/Store'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Menu from './pages/Menu'

const App = () => {
  return (
    <div>
         <Provider store={store}>
          <PersistGate persistor={persistor}>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path="/Menu" element={<Menu/>}/>
                </Routes>
              </BrowserRouter>
          </PersistGate>
        </Provider>
    </div>
  )
}

export default App