import React from 'react'
import Header from './components/Header'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/Store'
import Hero from './components/Hero'
import Bar from "./components/Bar/Bar"
import Resturants from './components/Resturants'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
         <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header/>
            <Hero/>
            <Bar/>
            <Resturants/>
            <Footer/>
          </PersistGate>
        </Provider>
    </div>
  )
}

export default App