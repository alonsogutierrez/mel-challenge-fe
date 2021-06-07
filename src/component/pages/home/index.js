import React from 'react';

import SEO from '../../seo';

const HomePage = () => {
  return (
    <>
      <SEO
        title={'Mercado Libre Challenge'}
        description={'Mercado libre challenge home page'}
        pathSlug={'/'}
        keywords={['Mercado libre', 'home']}
      />
      <div style={{ height: '100vh', backgroundColor: '#EEEEEEEE' }}></div>
    </>
  );
};

export default HomePage;
