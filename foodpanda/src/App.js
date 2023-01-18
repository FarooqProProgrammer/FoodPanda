import React from 'react'
import Header from './components/Header'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './Redux/store'
const App = () => {
  return (
    <div>
         <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header/>
          </PersistGate>
        </Provider>
    </div>
  )
}

export default App