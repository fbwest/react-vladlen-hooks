import React, {useContext, useReducer} from "react";

const AlertContext = React.createContext({
  visible: false,
  text: '',
  show: (text: string) => {},
  hide: () => {}
})
export const useAlert = () => {
  return useContext(AlertContext)
}
const reducer = (state, action) => {
  switch (action.type) {
    case ALERT_SHOW: return {...state, visible: true, text: action.text}
    case ALERT_HIDE: return {...state, visible: false}
    default: return state
  }
}

const ALERT_SHOW = 'show'
const ALERT_HIDE = 'hide'

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  })

  const show = (text: string) => dispatch({ type: ALERT_SHOW, text})
  const hide = () => dispatch({ type: ALERT_HIDE})

  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      text: state.text,
      show, hide
    }}>
        { children }
    </AlertContext.Provider>
  )
}