import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Card = ({ Cards, totalPrice, setCards }) => {
  // console.log(Cards);

  const handleDelete = (card) => {
    const upGetCards = Cards.filter((c) => c.id !== card.id);
    setCards(upGetCards);
    toast.warning(" Deleted Successfully!");
  };

  const handleCheckOut = () => {
    setCards([]);
    toast.warning(" Proceed to Checked Out!");
  };

  return (
    <div>
      <div className=" container mx-auto py-10">
        <div className="  bg-white rounded-lg py-10 shadow-lg px-10 ">
          <div>
            <h2 className="text-2xl font-bold ">Your Cart</h2>
          </div>

          {Cards.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-5 py-8">
              <LuShoppingCart size={50} />

              <h1 className=" text-2xl text-center"> No Cards Available </h1>
            </div>
          ) : (
            <>
              <div>
                {Cards.map((card) => (
                  <div key={card.id}>
                    <div className="bg-white rounded-2xl p-5 shadow-lg flex  items-center justify-between gap-5 mt-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="  w-12 h-12 flex items-center justify-center bg-amber-200 rounded-full">
                          <img
                            src={card.icon}
                            alt={card.name}
                            className="w-8  h-8"
                          />
                        </div>
                        <div>
                          <h3 className="text-balance md:text-2xl text-black font-bold">
                            {card.name}
                          </h3>
                          <p className="text-gray-500">{card.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-10">
                        <h5 className="text-2xl font-bold text-black ">
                          ${card.price}
                          <samp className="text-base text-gray-400">
                            /{card.period}
                          </samp>
                        </h5>

                        <button
                          onClick={() => handleDelete(card)}
                          className="btn bg-red-400 rounded-lg cursor-pointer"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="w-full  rounded-2xl flex items-center justify-between gap-5 px-5 py-5  mt-8">
                  <h4 className="text-2xl font-bold text-yellow-400 ">Total</h4>
                  <h4 className="text-2xl font-bold text-red-400">
                    $ {totalPrice}
                  </h4>
                </div>
                <button
                  onClick={handleCheckOut}
                  className=" w-full bg-red-600 text-white py-3 rounded-lg mt-8"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
