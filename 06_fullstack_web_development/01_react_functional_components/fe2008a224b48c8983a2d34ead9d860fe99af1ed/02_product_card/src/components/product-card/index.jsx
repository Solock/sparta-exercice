import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";

const ProductCard = ({ product }) => {
  return (
    <div className="container">
      <CardHeader name={product.platforms[0].name} platformLogos={product.platforms} />
      <CardBody
        cover={product.cover.url}
        screenshots={product.screenshots}
        genres={product.genres}
        summary={product.summary}
        firstReleaseDate={product.first_release_date}
      />
      <CardFooter slug={product.slug} />
    </div>
  );
};

export default ProductCard;
