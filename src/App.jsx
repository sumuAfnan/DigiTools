import { Suspense, useState } from "react";
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

<div className="flex justify-center mt-5 mb-5">
  
  {/* Shada ronger background ebong rounded border er moddhe button gula thakbe */}
  <div className="inline-flex bg-gray-100 p-1 rounded-full border border-gray-200 shadow-sm">
    
    {/* Product Button - Jodi activeTab 'Product' hoy, tobe beguni (purple) rong dekhabe */}
    <button
      onClick={() => setActiveTab("Product")}
      className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
        activeTab === "Product"
          ? "bg-[#7c3aed] text-white shadow-lg" // Active thakle beguni background ebong shada lekha
          : "text-gray-600 hover:text-black"   // Active na thakle gray ronger lekha
      }`}
    >
      Products
    </button>

    {/* Cart Button - Ekhane click korle Cart page ashbe ebong koyta item ache ta dekhabe */}
    <button
      onClick={() => setActiveTab("Card")}
      className={`px-8 py-2 rounded-full font-semibold transition-all duration-300 ${
        activeTab === "Card"
          ? "bg-[#7c3aed] text-white shadow-lg" // Click korle beguni hoye jabe
          : "text-gray-600 hover:text-black"   // Normal obosthay halka gray thakbe
      }`}
    >
      Cart ({Cards.length}) 
    </button>
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
