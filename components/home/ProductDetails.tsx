import React from "react";

interface Props {
  title: string;
  para: string;
}

const ProductDetails = ({ title, para }: Props) => {
  return (
    <div className="flex flex-col gap-6 text-white py-[5vw] h-[60vh] justify-center w-[75%]">
      <h3 className="text-3xl font-[500]">{title}</h3>
      <p>{para}</p>
    </div>
  );
};

export default ProductDetails;
