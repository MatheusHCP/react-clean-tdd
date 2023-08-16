import React, { useContext } from 'react';
import {Spinner} from '@/presentation/components'
import Styles from './styles.scss'
import Context from '@/presentation/contexts/form/formContext'

function FormStatus() {

  const {errorState, state} = useContext(Context)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && <span className={Styles.error}>{errorState.main}</span>}
    </div>
  );
}

export default FormStatus;
