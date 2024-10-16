import React from 'react';
import Layout from '@theme/Layout'; // Import Layout from Docusaurus
import HomePage from '../components/Homepage/homepage'; // Adjust the import according to your structure

const Home: React.FC = () => {
  return (
    <Layout title="Colonelz CRM Documentation" description="Streamline Your Construction Management">
      <HomePage />
    </Layout>
  );
};

export default Home;
