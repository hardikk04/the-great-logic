import gsap from "gsap";

interface DataInterface {
  number: string;
  title: string;
  para: string;
}

const AdvantageCard = ({
  data,
  index,
}: {
  data: DataInterface;
  index: number;
}) => {
  const { number, para, title } = data;

  return (
    <div
      onMouseEnter={() => {
        gsap.to(`.project-elem-${index} p`, {
          opacity: 1,
        });

        for (let i = 0; i < 4; i++) {
          if (index !== i) {
            gsap.to(`.project-img-${i}`, {
              width: "0",
              duration: 0.6,
              ease: "power1.inOut",
            });
          } else {
            gsap.to(`.project-img-${i}`, {
              width: "100%",
              duration: 0.6,
              ease: "power1.inOut",
            });
          }
        }
      }}
      onMouseLeave={() => {
        gsap.to(".project-imgs img", {
          width: "25%",
        });

        gsap.to(`.project-elem-${index} p`, {
          opacity: 0,
        });
      }}
      className={`project-elems project-elem-${index} w-1/4 h-full shrink-0 p-[2vw] border-r border-white/30 relative z-[1]`}
    >
      <div className="relative z-[1]">
        <span>{number}</span>
        <h3 className="mt-[1vw]">{title}</h3>
        <p className="thin mt-[2vw] opacity-0">{para}</p>
      </div>
      <div className="project-overlay absolute top-0 left-0 h-full w-full bg-black/60 pointer-events-none"></div>
    </div>
  );
};

export default AdvantageCard;