import { motion } from "framer-motion";
import Content from "../components/content";
import Wrapper from "../components/wrapper";

const contentAndstaticImage = (props) => {
  let { order } = props;
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Wrapper className="relative h-auto   justify-between gap-[3.5rem] !px-0  max-md:gap-8 ">
        <div
          className={`image-wrapper h-[80%] max-sm:w-full  ${
            order[0] == "1" ? "order-1" : "order-2"
          } `}
        >
          <img
            src={props.image}
            className={`h-full object-cover max-sm:aspect-square max-sm:h-auto max-sm:w-[95%]`}
            alt=""
          />
        </div>

        <Content
          className={`${
            order[1] == "2" ? "order-2" : "order-1"
          } max-md:py-4 lg:max-w-[35rem]`}
          title={props.title}
          tag={props.tag}
          content={props.content}
          btnText={props.btnText}
          color={props.color}
          btn
        ></Content>
      </Wrapper>
    </motion.section>
  );
};

export default contentAndstaticImage;
