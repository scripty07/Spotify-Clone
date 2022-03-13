import { FunctionComponent } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';

import Sample from '@Components/Sample';

import i18n from './i18n';
import { store } from './store/store';

const App: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <>
          <h1 style={{ textAlign: 'center' }}>{t('Your App')}</h1>
          <Sample />
        </>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
