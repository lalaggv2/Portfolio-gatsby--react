import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Portfolio LA Gutierrez'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Portfolio LA Gutierrez'} />
      </Helmet>
      <embed src="/assets/LAGGResume.pdf" width="100%" height="100%" />
    </>
  );
};
