import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, useSelector } from 'react-redux'
import { persistor, store } from './Redux/Store'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Menu from './pages/Menu'
import AddToCart from './components/AddToCart'

const App = () => {
  const userAuth = useSelector(state => state.UserReducer.login)
  return (
    <div>
         <Provider store={store}>
          <PersistGate persistor={persistor}>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path="/Menu/:id" element={<Menu/>}/>
                    <Route path= {"/Cart"}  element={<AddToCart/>}/>
               
                </Routes>
              </BrowserRouter>
          </PersistGate>
        </Provider>
    </div>
  )
}

export default App