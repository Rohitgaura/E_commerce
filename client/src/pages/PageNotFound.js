import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../component/Layout.js';

const PageNotFound = () => {
  return (
    <Layout title = "Page Not Found">
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-subtitle">Page Not Found</h2>
        <p className="pnf-text">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="pnf-link">Go Back Home</Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
