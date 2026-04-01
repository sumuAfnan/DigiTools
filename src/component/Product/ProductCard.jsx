import React, { useState, useEffect } from "react";
import ProductCardDetails from "./ProductCardDetails";

const ProductCard = ({ Cards, setCards }) => {
  const [modelsData, setModelsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}productData.json`);
        const data = await res.json();
        setModelsData(data);
      } catch (error) {
        console.error("Error loading JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
      {modelsData.map((model) => (
        <ProductCardDetails
          key={model.id}
          model={model}
          Cards={Cards}
          setCards={setCards}
        />
      ))}
    </div>
  );
};

export default ProductCard;