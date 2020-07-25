import React, { FC } from 'react';
import App from 'next/app';
import { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/layout/base';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
