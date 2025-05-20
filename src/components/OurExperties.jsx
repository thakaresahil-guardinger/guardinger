import { experties } from "../utils/constants";

function OurExperties() {
  return (
    <section className="md:px-4 md:py-12 mx-1  md:mx-16 lg:mx-24 xl:mx-36 md:mt-2 bg-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
        Our Expertise
      </h1>
      <p className="text-base sm:text-lg md:text-xl max-w-full md:max-w-3xl mb-6 md:mb-12 text-gray-800">
        We specialize in designing, developing, and building cutting-edge
        solutions for defense and strategic applications. Our expertise spans
        underwater systems and software, edge-computer-based sensor suites,
        precision measurement and custom rigs with advanced instrumentation,
        climate and weather analysis tools, as well as engineering and strategic
        software. Innovation, reliability, and technical excellence are the core
        of everything we deliver
      </p>

      <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-20 w-full">
        {experties.map((expert, idx) => {
          const gradientClass =
            idx === 0
              ? "bg-[linear-gradient(120deg,_#04001C_4%,_#621DBA_48%,_#DCF9FF_100%)]"
              : idx === 1
              ? "bg-[linear-gradient(120deg,_#FF5F6D_0%,_#FFC371_100%)]"
              : idx === 2
              ? "bg-[linear-gradient(120deg,_#00173A_0%,_#A30CB5_29%,_#FFA7A7_100%)]"
              : idx === 3
              ? "bg-[linear-gradient(120deg,_#0B0050_0%,_#3CD0FF_100%)]"
              : "bg-[linear-gradient(120deg,_#5B2C6F_0%,_#6C3483_40%,_#AED6F1_100%)]";

          return (
            <div
              key={idx}
              className={`relative flex ${
                idx % 2 === 1 ? "md:justify-end" : "md:justify-start"
              } w-full`}
            >
              <div
                className={`relative z-10 md:p-6 p-3 sm:p-8 rounded-3xl text-white shadow-lg w-full md:w-4/5 flex flex-col md:flex-row items-center gap-4 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                } ${gradientClass} min-h-64 sm:min-h-68 md:min-h-72`}
              >
                {/* Text content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">
                    {expert.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-4 md:mb-6 max-w-full md:max-w-4xl">
                    {expert.Highlight}
                  </p>
                </div>

                {/* Image inside card */}
                {expert.img && (
                  <div className="w-full md:w-60 lg:w-64 xl:w-72 md:h-full md:max-h-72 max-h-48 flex-shrink-0">
                    <img
                      src={expert.img}
                      alt={expert.title}
                      className="w-full h-full object-cover rounded-xl opacity-85"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurExperties;
