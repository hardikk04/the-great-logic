"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useCallback, useState, MouseEvent } from "react";

const Workflow2 = () => {
  useGSAP(() => {
    gsap.from(".curve-card", {
      right: "-50%",
      // stagger: 0.1,
      scrollTrigger: {
        scroller: "body",
        trigger: ".curve-card",
        start: "top 70%",
        end: "top 40%",
        // markers: true,
        scrub: 1,
      },
    });
  });

  const [rotateStates, setRotateStates] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const createMouseMoveHandler = useCallback((cardIndex: number) => {
    return (e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotateStates((prev) => {
        const newStates = [...prev];
        newStates[cardIndex] = { x: rotateX, y: rotateY };
        return newStates;
      });
    };
  }, []);

  const createMouseLeaveHandler = useCallback((cardIndex: number) => {
    return () => {
      setRotateStates((prev) => {
        const newStates = [...prev];
        newStates[cardIndex] = { x: 0, y: 0 };
        return newStates;
      });
    };
  }, []);

  return (
    <section className="h-screen w-full relative">
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-0">
        WORKFLOW
      </h2>
      <div className="curve-wrapper w-full overflow-hidden flex justify-center items-center h-full relative z-[1]">
        {/* Card 1 */}
        <div
          onMouseMove={createMouseMoveHandler(0)}
          onMouseLeave={createMouseLeaveHandler(0)}
          style={{
            transform: `perspective(1000px) rotateX(${rotateStates[0].x}deg) rotateY(${rotateStates[0].y}deg) scale3d(1, 1, 1)`,
            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          }}
          className="curve-card h-[40vh] w-[18%] shrink-0 absolute transform -rotate-12 -translate-x-[180%] translate-y-12"
        >
          <div className="h-full w-full overflow-hidden bg-amber-200 rounded-lg shadow-lg">
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/000/517/014/non_2x/healthcare-characters-vector.jpg"
              }
              alt="healthcare"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <p>Healthcare</p>
        </div>

        {/* Card 2 */}
        <div
          onMouseMove={createMouseMoveHandler(1)}
          onMouseLeave={createMouseLeaveHandler(1)}
          style={{
            transform: `perspective(1000px) rotateX(${rotateStates[1].x}deg) rotateY(${rotateStates[1].y}deg) scale3d(1, 1, 1)`,
            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          }}
          className="curve-card h-[40vh] w-[18%] shrink-0 absolute transform -rotate-6 -translate-x-[60%] translate-y-0"
        >
          <div className="h-full w-full overflow-hidden bg-amber-300 rounded-lg shadow-lg">
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/002/451/431/non_2x/girl-buying-products-from-online-shop-free-vector.jpg"
              }
              alt="healthcare"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <p>Shopping</p>
        </div>

        {/* Card 3 */}
        <div
          onMouseMove={createMouseMoveHandler(2)}
          onMouseLeave={createMouseLeaveHandler(2)}
          style={{
            transform: `perspective(1000px) rotateX(${rotateStates[2].x}deg) rotateY(${rotateStates[2].y}deg) scale3d(1, 1, 1)`,
            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          }}
          className="curve-card h-[40vh] w-[18%] shrink-0 absolute transform rotate-0 translate-x-42 -translate-y-2"
        >
          <div className="h-full w-full overflow-hidden bg-amber-400 rounded-lg shadow-lg">
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/005/237/774/non_2x/logistics-warehouse-loading-truck-working-forklift-illustration-vector.jpg"
              }
              alt="healthcare"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <p>Warehouse</p>
        </div>

        {/* Card 4 */}
        <div
          onMouseMove={createMouseMoveHandler(3)}
          onMouseLeave={createMouseLeaveHandler(3)}
          style={{
            transform: `perspective(1000px) rotateX(${rotateStates[3].x}deg) rotateY(${rotateStates[3].y}deg) scale3d(1, 1, 1)`,
            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          }}
          className="curve-card h-[40vh] w-[18%] shrink-0 absolute transform rotate-4 translate-x-[180%] translate-y-4"
        >
          <div className="h-full w-full overflow-hidden bg-amber-500 rounded-lg shadow-lg">
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/000/217/371/non_2x/vector-office-character-illustration.jpg"
              }
              alt="healthcare"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <p>Office</p>
        </div>
      </div>
    </section>
  );
};

export default Workflow2;
