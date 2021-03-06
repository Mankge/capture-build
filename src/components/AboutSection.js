import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import Wave from "./Wave";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About className="about">
      <Description className="description">
        <motion.div>
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
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have profesioanls with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image className="image">
        <motion.img variants={photoAnim} src={home1} alt="Photographer" />
      </Image>
      <Wave />
    </About>
  );
};

//styled component

export default AboutSection;
