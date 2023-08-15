import React from "react";
import Styles from './styles.scss'

type Props = React.HTMLAttributes<HTMLDivElement>

export default function Spinner(props: Props) {
  return (
    <div {...props} className={[Styles.spinner, props.className].join(' ')}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  );
}
