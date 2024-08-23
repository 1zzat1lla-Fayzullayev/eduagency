import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavbar = ({ burger, setBurger }) => {
  const navVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <AnimatePresence>
      {burger && (
        <motion.div
          key="mobile-nav"
          className="mobNav"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navVariants}
        >
          <div className="all-menu">
            <motion.ul className="nav-menu">
              {[
                { to: "/", text: "Anasayfa" },
                { to: "/about", text: "Hakkimizda" },
                { to: "/services", text: "Bizim hizmetler" },
                { to: "/contacts", text: "İletişim" },
              ].map((item, index) => (
                <motion.li
                  key={item.to}
                  variants={itemVariants}
                  custom={index + 1}
                  initial="hidden"
                  animate="visible"
                >
                  <Link onClick={() => setBurger(false)} to={item.to}>
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="siteLang d-flex align-items-center"
              variants={itemVariants}
              custom={5}
              initial="hidden"
              animate="visible"
            >
              <div className="all-menu">
                <ul className="nav-mobile-menu">
                  {[
                    { img: "/img/turkey.png", alt: "turkey icon", text: "Turkish" },
                    { img: "/img/uzbekistán.png", alt: "uzbekistán icon", text: "O'zbek" },
                    { img: "/img/russia.png", alt: "russia icon", text: "Русский" },
                  ].map((lang, index) => (
                    <motion.li
                      key={lang.text}
                      variants={itemVariants}
                      custom={index + 6}
                      initial="hidden"
                      animate="visible"
                    >
                      <a href="#" className="flag-div">
                        <img src={lang.img} alt={lang.alt} />
                        {lang.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;