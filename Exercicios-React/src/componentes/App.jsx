import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './Field'



export default function App() {
    const reducers = combineReducers({
        field: () => ({ value: 'Opa' })
    })

    return (
        <Provider store={createStore(reducers)}>
            <Field initialValue="olá" />
        </Provider>
    )
} 