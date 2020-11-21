import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./UseScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      className="faq"
      ref={element}
    >
      <h2>
        Any Questions <span>FAG</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I start?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quae modi nesciunt eligendi nisi, quod accusamus incidunt
                perferendis libero similique omnis enim repellendus voluptate,
                beatae dignissimos sed mollitia fugit necessitatibus!
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quae modi nesciunt eligendi nisi, quod accusamus incidunt
              perferendis libero similique omnis enim repellendus voluptate,
              beatae dignissimos sed mollitia fugit necessitatibus!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quae modi nesciunt eligendi nisi, quod accusamus incidunt
              perferendis libero similique omnis enim repellendus voluptate,
              beatae dignissimos sed mollitia fugit necessitatibus!
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do we offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quae modi nesciunt eligendi nisi, quod accusamus incidunt
              perferendis libero similique omnis enim repellendus voluptate,
              beatae dignissimos sed mollitia fugit necessitatibus!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
