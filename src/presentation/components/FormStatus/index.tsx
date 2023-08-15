import React from 'react';
import Spinner from '@/presentation/components/Spinner'
import Styles from './styles.scss'

function FormStatus() {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  );
}

export default FormStatus;
