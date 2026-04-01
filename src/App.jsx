import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import BannerCount from "./component/Banner/BannerCount";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import PricingCard from "./component/Pricing/PricingCard";
import Product from "./component/Product/Product";
import ProductCard from "./component/Product/ProductCard";
import StepsCard from "./component/Steps/StepsCard";
import Transform from "./component/Transform/Transform";
import Card from "./component/Product/Card";

const getModelsData = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};

function App() {
  const modelsPromise = getModelsData();

  const [activeTab, setActiveTab] = useState("Product");

  const [Cards, setCards] = useState([]);

  const totalPrice = Cards.reduce((sum, card) => sum + card.price, 0);

  return (
    <>
      <header>
        <Navbar Cards={Cards} totalPrice={totalPrice} />
      </header>
      <main>
        <Banner />
        <BannerCount />
        {/*  */}
        <Product />

        {/* name of each tab group should be unique */}
        <div className="container mx-auto w-68  ">
          <div className="tabs tabs-box rounded-full justify-center gap-2 ">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab  px-8 py-2 rounded-full "
              aria-label="Product"
              onClick={() => setActiveTab("Product")}
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab  px-8 py-2 rounded-full "
              aria-label={`Card (${Cards.length})`}
              onClick={() => setActiveTab("Card")}
            />
          </div>
        </div>

        <Suspense
          fallback={
            <span className="loading loading-spinner text-primary"></span>
          }
        >
          {activeTab === "Product" && (
            <ProductCard
              modelsPromise={modelsPromise}
              Cards={Cards}
              setCards={setCards}
            />
          )}

          {activeTab === "Card" && (
            <Card Cards={Cards} setCards={setCards} totalPrice={totalPrice} />
          )}
        </Suspense>
        {/*  */}
        <StepsCard />
        <PricingCard />
        <Transform />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
