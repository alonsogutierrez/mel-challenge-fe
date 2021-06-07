import React from 'react';
import { Helmet } from 'react-helmet';

const HOSTNAME = process.env.HOSTNAME || 'http://localhost:8080';

const SEO = ({ title, description, pathSlug, keywords }) => {
  const url = `${HOSTNAME}${pathSlug}`;
  console.log('url: ', url);
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          name: 'keywords',
          content: keywords.join()
        }
      ]}
      links={[{ rel: 'canonical', href: url }]}></Helmet>
  );
};

export default SEO;
