import HeadBanner from "../../components/heading/HeadBanner";
import FindersCard from "../../components/finders/FindersCard.jsx";
import imgesNotFound from "../../../assets/react.svg";

import { useSelector, useDispatch } from "react-redux";
import { shopNow } from "../../features/shop/shopSlice.js";
const Shop = () => {
  const shopData = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  return (
    <>
      <HeadBanner headingsTitle={"Shop"} headingSlug={""} />
      <div className="grid grid-cols-4 gap-4 rounded-md ">
        {shopData?.map((shopping) => (
          <div
            className="flex flex-col rounded-md  bg-light-white10 pb-3 px-0 relative"
            key={shopping.id}
          >
            <div className="relative overflow-hidden">
              <img
                src={shopping.images ? shopping.images : imgesNotFound}
                alt="images_"
                className="scale-90 hover:scale-110 h-full w-full"
              />
            </div>
            <h1 className="text-light-green40 font-bold  p-1">
              {shopping.title}
            </h1>
            <h4 className="text-black p-1">
              {shopping.price && `£ ` + shopping.price}
            </h4>
            <div className="px-1 py-3">
              <h4 className="text-sm font-bold text-light-green20">
                shipping Info
              </h4>
            </div>

            <div className="px-1 py-3">
              <h4 className="text-sm font-bold text-light-green20">Sizes</h4>
            </div>

            <button
              onClick={() => dispatch(shopNow(shopping.id))}
              className=" bg-light-green20 text-sm text-light-white10 rounded-sm flex items-center text-center justify-center py-2 hover:bg-light-green40 scale-90 hover:scale-100"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <FindersCard background={"#E3E9ED"} />
    </>
  );
};

export default Shop;
/* Suggest a product for our upcoming Mewing Shop!

click here

*/
