import logo_light from "../../images/GS_Logo_light.png";
import logo_dark from "../../images/GS_Logo_dark.png";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
    >
      <img
        src={logo_dark}
        alt="GS Logo"
        className="z-40 hidden h-12 w-12 rounded-full shadow-md shadow-slate-400 transition duration-200 hover:scale-110 dark:block "
      />

      <img
        src={logo_light}
        alt="GS Logo"
        className="z-40 block h-12 w-12 rounded-full shadow-2xl shadow-slate-900 transition duration-200 hover:scale-110 dark:hidden "
      />
    </motion.div>
  );
};
