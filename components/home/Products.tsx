import ProductDetails from "./ProductDetails";

const Products = () => {
  return (
    <div className="products mih-h-screen w-full relative px-6 flex justify-between">
      <div className="right w-1/2 sticky top-20 left-0 text-white h-fit">
        <div className="w-[80%]">
          <h2 className="text-[4vw] font-medium max-sm:text-[8vw] max-md:text-[7vw] z-1 mix-blend-difference para py-5 leading-none">{`We're building the future of digital tags.`}</h2>
        </div>
      </div>
      <div className="left w-[40%] h-full">
        <ProductDetails
          title="Electronic Shelf Labels"
          para="Our digital shelf tags connect seamlessly with retail systems to deliver instant, wireless updates for pricing and product info. By reducing manual work and enabling centralized management"
        />
        <ProductDetails
          title={"LCD Electronic Price Tag"}
          para="LCD electronic price tags use TFT LCD display technology, which has better color display effect, high definition, high contrast and other characteristics."
        />
        <ProductDetails
          title="Warehouse Warning Light"
          para="Warehouse warning light is an intelligent product designed for warehousing and information early warning, to solve the problem of difficult finding and cumbersome operation"
        />
      </div>
    </div>
  );
};

export default Products;
