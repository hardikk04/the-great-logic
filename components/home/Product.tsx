"use client";

import Image from "next/image";

const Product = () => {
  //   const pathRef1 = useRef(null);
  //   useGSAP(() => {
  //     const path = pathRef1.current as SVGPathElement | null;

  //     if (path) {
  //       const length = path.getTotalLength();

  //       gsap.set(path, {
  //         strokeDasharray: length,
  //         strokeDashoffset: length,
  //       });

  //       gsap.to(path, {
  //         strokeDashoffset: 0,
  //         scrollTrigger: {
  //           trigger: ".svg-1",
  //           start: "top 60%",
  //           end: "top 30%",
  //         //   markers: true,
  //           scrub: 1,
  //         },
  //       });
  //     }
  //   }, []);
  return (
    <div className="w-full md:px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Products working
        </h2>
      </div>
      <div className="svg-wrapper">
        <div className="flex justify-between w-full">
          <div className="desktop relative">
            <Image
              src={
                "https://toppng.com/uploads/preview/mac-desktop-png-11552847298m0fqaydnmg.png"
              }
              alt="desktop-img"
              className="h-[10vw] object-contain"
              height={250}
              width={250}
            ></Image>
            <svg
              className="svg-1 absolute right-0 -rotate-45 transform origin-top"
              width="62"
              height="395"
              viewBox="0 0 62 395"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.4471 1C47.7823 27.6667 80.4515 101.8 24.4471 185C-31.5573 268.2 25.7805 359 61.45 394M61.45 394H48.449M61.45 394V381.5"
                stroke="black"
              />
            </svg>
          </div>
          <div className="mobile relative">
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaw5RchAg50iZimyAFbwiujQhR2xlXhEWIbg&s"
              }
              alt="mobile-img"
              className="h-[10vw] object-contain"
              height={250}
              width={250}
            ></Image>
            <svg
              className="absolute left-0 rotate-45 transform origin-top"
              width="62"
              height="395"
              viewBox="0 0 62 395"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38 1C14.6667 27.6667 -18 101.8 38 185C94 268.2 36.6667 359 1 394M1 394H14M1 394V381.5"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center pt-50">
          <div className="digital relative">
            <Image
              src={
                "https://toppng.com/uploads/preview/mac-desktop-png-11552847298m0fqaydnmg.png"
              }
              alt="desktop-img"
              className="h-[10vw] object-contain"
              height={250}
              width={250}
            ></Image>
            <svg
              className="relative left-1/2 -translate-x-1/2"
              width="33"
              height="204"
              viewBox="0 0 33 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0241 1C24.9909 14.7065 41.7444 52.8107 13.0241 95.5751C-15.6961 138.339 13.708 185.01 32 203M32 203H25.3328M32 203V196.575"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <div className="tag relative">
            <Image
              src={
                "https://toppng.com/uploads/preview/mac-desktop-png-11552847298m0fqaydnmg.png"
              }
              alt="desktop-img"
              className="h-[10vw] object-contain"
              height={250}
              width={250}
            ></Image>
            <svg
              className="relative left-1/2 -translate-x-1/2"
              width="33"
              height="204"
              viewBox="0 0 33 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0241 1C24.9909 14.7065 41.7444 52.8107 13.0241 95.5751C-15.6961 138.339 13.708 185.01 32 203M32 203H25.3328M32 203V196.575"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <div className="final-product relative">
            <Image
              src={
                "https://toppng.com/uploads/preview/mac-desktop-png-11552847298m0fqaydnmg.png"
              }
              alt="desktop-img"
              className="h-[10vw] object-contain"
              height={250}
              width={250}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
