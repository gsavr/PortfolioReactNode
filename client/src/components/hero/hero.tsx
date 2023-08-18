import { motion } from "framer-motion";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";
import { NavBar } from "./navBar";
import { Link } from "react-scroll";

export const Hero: React.FC = () => {
  return (
    <ParallaxBanner id="hero">
      {/* each BannerLayer is a complete div taking up the screen, each subsequent goes on top of the last */}
      {/* hero background only */}
      <ParallaxBannerLayer className="hero-bg" speed={-30} />
      {/* gradient on top of image layer */}
      <ParallaxBannerLayer className="gradient-bg" speed={20} />
      {/* welcome banner   ----  navbar at last place - it needs to be on top */}
      <div className="container mx-auto min-h-screen max-w-6xl px-6 py-12">
        <ParallaxBannerLayer className="container mx-auto min-h-screen max-w-6xl items-center px-6 py-12 ">
          <div className="group flex min-h-screen flex-col items-center py-24 md:px-10 lg:flex-row lg:justify-between">
            <motion.div
              initial={{ opacity: 0, x: "-35vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2, bounce: 0.3 }}
            >
              <div className={`hero-box`}>
                Welcome to{""}
                <br />
                <p
                  className={`text-4xl text-black transition-all duration-1000 dark:text-primary md:text-6xl ${
                    !isMobile && "lg:group-hover:text-[4rem]"
                  }`}
                >
                  Giorgio Savron
                </p>
                <p>Developer Services</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "35vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
            >
              <Link to="about" className={`hero-enter-button`}>
                <p>Enter</p>
              </Link>
            </motion.div>
          </div>
        </ParallaxBannerLayer>
        {/* NavBar Layer --- needs to go on top of the gradient layer  */}
        <ParallaxBannerLayer className="container mx-auto h-1/6 max-w-6xl px-6 py-12">
          <NavBar />
        </ParallaxBannerLayer>
      </div>
    </ParallaxBanner>
  );
};
