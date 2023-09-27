import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import {
  useDocumentTitle,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import bannerImg from "@/images/banner-girl-1.png";
import React from "react";
import { useSelector } from "react-redux";

const RecommendedProducts = () => {
  useDocumentTitle("Recommended Products | HP HENRY & CO.");
  useScrollTop();
  const darkMode = useSelector((state) => state.darkMode);
  
    const array = Object.values(darkMode)
    const darkModelo = array[0]

  const { recommendedProducts, fetchRecommendedProducts, isLoading, error } =
    useRecommendedProducts();

  return (
    <main className={`content ${darkModelo ? 'dark-mode' : ''}`}>
      <div className={`home ${darkModelo ? 'darkMode' : ''}`}>
        <div className={`banner ${darkModelo ? 'darkMode' : ''}`}>
          <div className={`banner-desc ${darkModelo ? 'text-thin-darkmode' : ''}`}>
            <h1 style={darkModelo ? { color: "white" } : {}}>Recommended Products</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
            {error && !isLoading ? (
              <MessageDisplay
                message={error}
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={recommendedProducts}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecommendedProducts;
