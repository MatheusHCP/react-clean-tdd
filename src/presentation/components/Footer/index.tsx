import React, { memo } from "react";
import Styles from './styles.scss'

function Footer(){
  return (
    <footer className={Styles.footer}/>
  )
}

export default memo(Footer)