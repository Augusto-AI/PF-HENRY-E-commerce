import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import { useDocumentTitle, useFeaturedProducts, useScrollTop } from "@/hooks";
import bannerImg from "@/images/banner-guy.png";
import React from "react";
import { useSelector } from "react-redux";
const FeaturedProducts = () => {
  useDocumentTitle("Featured Products | PF HENRY & CO.");
  useScrollTop();

  const { featuredProducts, fetchFeaturedProducts, isLoading, error } =
    useFeaturedProducts();
  const darkMode = useSelector((state) => state.darkMode);

  const array = Object.values(darkMode)
  const darkModelo = array[0]

  return (
    <main className={`content ${darkModelo ? 'dark-mode' : ''}`}>
      <div className={`home ${darkModelo ? 'darkMode' : ''}`}>
        <div className={`banner ${darkModelo ? 'darkMode' : ''}`}>
          <div className={`banner-desc ${darkModelo ? 'text-thin-darkmode' : ''}`}>
            <h1 style={darkModelo ? { color: "white" } : {}}>Featured Products</h1>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className={`display ${darkModelo ? 'darkMode' : ''}`}>
          <div className="product-display-grid">
            {error && !isLoading ? (
              <MessageDisplay
                message={error}
                action={fetchFeaturedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={featuredProducts}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
