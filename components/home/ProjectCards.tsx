import gsap from "gsap";

interface DataInterface {
  number: string;
  title: string;
  para: string;
}

const ProjectCards = ({
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

        for (let i = 0; i < 3; i++) {
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
          width: "33.3%",
        });

        gsap.to(`.project-elem-${index} p`, {
          opacity: 0,
        });
      }}
      className={`project-elems project-elem-${index} max-sm:w-[45%] max-sm:border-none max-md:w-[45%] max-md:border-none w-1/3 max-sm:h-1/2 max-md:h-1/2 h-full shrink-0 p-[2vw] border-r border-black/30 relative z-[1] text-white`}
    >
      <div className="relative z-[1]">
        <span>{number}</span>
        <h3 className="mt-[1vw]">{title}</h3>
        <p className="thin mt-[2vw] opacity-0">{para}</p>
      </div>
      <div className="project-overlay absolute top-0 left-0 h-full w-full bg-black/50 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCards;
