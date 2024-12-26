import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/productsActions';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
