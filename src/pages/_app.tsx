import MainLayout from 'components/Layouts/main-layout';
import type { AppProps } from 'next/app';
import 'styles/index.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
