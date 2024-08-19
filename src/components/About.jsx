import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon ,flex}) => (
  <Tilt className={flex ? "lg:col-span-3 md:col-span-1" : "" + 'xs:w-[250px] w-full'}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={'w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className= {'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'}
      >
        <img
          src={icon}
          alt='Web Development'
          className={flex ? "w-21 h-21" : "w-16 h-16" + 'object-contain'}
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>We are dynamic team of creative design and development.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[25px] max-w-3xl leading-[30px]'
      >
        Redintek is a Tech Soul for your Business, 
        Provides exclusive IT solutions in the areas of software designing and web development, 
        Cyber Security & Digital Marketing in all over the World. 
        Our purpose is to deliver an inspirational and innovative solution for our clients. 
        In this digital age, we are continuously upgrading our capabilities and partnering with customers to provide the simplest products and services and best operational performance.
      </motion.p>

      <div className='mt-20 grid md:grid-cols-4 gap-10'>
        {/* <p>Hello</p> */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} flex={index == services.length - 1 ? true : false} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
