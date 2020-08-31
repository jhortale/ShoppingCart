import React, { useState, useEffect } from 'react';

import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';

import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Catalog;
