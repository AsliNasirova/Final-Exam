import React from "react";
import { Helmet } from "react-helmet-async";
import Beauty from '../../Components/Beauty/beauty'
import Follow from "../../Components/FollowUS/follow";
import Header from '../../Components/Header/header'
import OurBlog from "../../Components/OurBlog/ourblog";
import Product from "../../Components/ProductSection/product";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <Header/>
        <Product />
        <Beauty/>
        <OurBlog/>
        <Follow/>
      </div>
    </div>
  );
};

export default Home;
