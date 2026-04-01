import { useState } from "react";
import "./App.css";
import Banner from "./component/Banner/Banner";
import BannerCount from "./component/Banner/BannerCount";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar.jsx";
import PricingCard from "./component/Pricing/PricingCard";
import Product from "./component/Product/Product";
import ProductCard from "./component/Product/ProductCard";
import StepsCard from "./component/Steps/StepsCard";
import Transform from "./component/Transform/Transform";
import Card from "./component/Product/Card";

function App() {
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
        <Product />

        {/* Tabs */}
        <div className="flex justify-center mt-5 mb-5">
          <div className="inline-flex bg-gray-100 p-1 rounded-full border shadow-sm">
            <button
              onClick={() => setActiveTab("Product")}
              className={`px-8 py-2 rounded-full ${
                activeTab === "Product"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("Card")}
              className={`px-8 py-2 rounded-full ${
                activeTab === "Card"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Cart ({Cards.length})
            </button>
          </div>
        </div>

        {/* ❌ No Suspense */}
        {activeTab === "Product" && (
          <ProductCard Cards={Cards} setCards={setCards} />
        )}

        {activeTab === "Card" && (
          <Card Cards={Cards} setCards={setCards} totalPrice={totalPrice} />
        )}

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