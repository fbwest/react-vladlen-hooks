import React from "react";
import {useAlert} from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert()

  return (
    <>
      <h1>Context</h1>
      <button onClick={ () => show('This text is from Main') } className="btn btn-success">Show alert</button>
    </>
  )
}