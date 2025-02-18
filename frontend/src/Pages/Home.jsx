import React from 'react';
import ProductCard from '../components/auth/ProductCard';

const productDetails = [
  {
    image: 'https://picsum.photos/150',
    name: 'Product 1',
    price: 100,
    description: 'This is a product'
  },
  {
    image: 'https://picsum.photos/150',
    name: 'Product 2',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://picsum.photos/150',
    name: 'Product 3',
    price: 300,
    description: 'This is a product'
  },
  {
    image: 'https://picsum.photos/150',
    name: 'Product 4',
    price: 150,
    description: 'This is a product'
  },
  {
    image: 'https://picsum.photos/150',
    name: 'Product 5',
    price: 300,
    description: 'This is a product'
  }
];

const Homepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">Our Products</h1>

        {/* Grid Layout for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productDetails.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

