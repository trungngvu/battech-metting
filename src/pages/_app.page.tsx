import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';

import Wrapper from '../components/wrapper';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <SnackbarProvider maxSnack={3}>
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  </SnackbarProvider>
);

export default App;
