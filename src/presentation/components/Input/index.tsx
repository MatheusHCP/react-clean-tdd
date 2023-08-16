import React, { useContext } from "react";
import Styles from "./styles.scss";
import Context from "@/presentation/contexts/form/formContext";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function Input(props : Props) {

  const {errorState} = useContext(Context)
  const error = errorState[props.name]

  const getStatus = () : string => {
    return '🔴'
  }

  const getError = () : string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly />
      <span data-testid={`${props.name}-status`} title={getError()} className={Styles.status}>{getStatus()}</span>
    </div>
  );
}

export default Input;
