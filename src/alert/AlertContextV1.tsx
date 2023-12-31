import React, {useContext, useState} from "react";

const AlertContext = React.createContext({
  visible: false,
  toggle: () => {}
})
// const AlertToggleContext = React.createContext(() => {})
export const useAlert = () => {
  return useContext(AlertContext)
}
// export const useAlertToggle =() => {
//   return useContext(AlertToggleContext)
// }

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false)
  const toggle = () => setAlert(prev => !prev)

  return (
    <AlertContext.Provider value={{
      visible: alert,
      toggle
    }}>
      {/*<AlertToggleContext.Provider value={toggle}>*/}
        { children }
      {/*</AlertToggleContext.Provider>*/}
    </AlertContext.Provider>
  )
}