import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <About className="about">
      <Description className="description">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have profesioanls with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="Photographer" />
      </Image>
    </About>
  );
};

//styled component

export default AboutSection;
