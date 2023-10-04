import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import bannerImg from "@/images/banner-girl.png";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DarkMode from "../../darkMode";

const Home = () => {
  useDocumentTitle("PF HENRY & CO. | Home");
  useScrollTop();
  const darkMode = useSelector((state) => state.darkMode);

  const array = Object.values(darkMode);
  const darkModelo = array[0];

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended,
  } = useRecommendedProducts(6);
  return (
    <main className={`content ${darkModelo ? "dark-mode" : ""}`}>
      <div className={`home ${darkModelo ? "darkMode" : ""}`}>
        <div className={`banner ${darkModelo ? "darkMode" : ""}`}>
          <div className="banner-desc">
            <h1
              className={`text-thin ${darkModelo ? "text-thin-darkmode" : ""}`}
            >
              <strong>See</strong>
              &nbsp;everything with&nbsp;
              <strong>Clarity</strong>
            </h1>
            <p
              className={`text-thin ${darkModelo ? "text-thin-darkmode" : ""}`}
            >
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.
            </p>
            <br />
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className={`display ${darkModelo ? "text-thin-darkmode" : ""}`}>
          <DarkMode />
          <div
            className={`display-header ${
              darkModelo ? "text-thin-darkmode" : ""
            }`}
          >
            <h1
              className={`text-thin ${darkModelo ? "text-thin-darkmode" : ""}`}
            >
              Featured Products
            </h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
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
        <div className={`display ${darkModelo ? "dark-mode" : ""}`}>
          <div className="display-header">
            <h1
              className={`text-thin ${darkModelo ? "text-thin-darkmode" : ""}`}
            >
              Recommended Products
            </h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
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
    </main>
  );
};

export default Home;
