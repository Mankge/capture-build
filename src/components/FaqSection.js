import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq className="faq">
      <h2>
        Any Questions <span>FAG</span>
      </h2>
      <Toggle>
        <div className="question">
          <h4>How Do I start</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              quae modi nesciunt eligendi nisi, quod accusamus incidunt
              perferendis libero similique omnis enim repellendus voluptate,
              beatae dignissimos sed mollitia fugit necessitatibus!
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate laudantium blanditiis consequuntur eius pariatur
            perspiciatis autem fugit dolores vitae saepe, animi quis rem
            adipisci non, tenetur temporibus odit impedit!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diffent Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            voluptatum aut maxime dolorum a id libero at alias impedit illum,
            praesentium voluptates accusamus, sed blanditiis animi eaque,
            quaerat optio culpa.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do we offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            quidem incidunt harum deserunt eum adipisci fuga porro quos ullam
            neque! Molestias exercitationem alias odit doloribus, odio veniam
            natus accusantium laudantium?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
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
    padding: 3rem 0rem;
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
