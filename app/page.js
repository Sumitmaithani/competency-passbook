"use client";

import React from "react";
import axios from "axios";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

import slide1 from "@/public/Images/slide1.jpg";
import slide2 from "@/public/Images/slide2.png";
import slide3 from "@/public/Images/slide3.jpg";
import graph1 from "@/public/Images/graph1.svg";
import graph2 from "@/public/Images/graph2.svg";
import graph3 from "@/public/Images/graph3.svg";
import graph4 from "@/public/Images/graph4.svg";
import feature from "@/public/Images/featureImg.svg";
import Graph from "@/components/Graph";

export default function Home() {
  const [topics, setTopics] = React.useState([]);

  const getTopics = async () => {
    try {
      const res = await axios.get("/api/topics");
      setTopics(res.data.topics);
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

  React.useEffect(() => {
    getTopics();
  }, [topics]);

  return (
    <>
      <div className="mx-auto w-11/12 mt-6">
        <Carousel className="rounded-xl">
          <Image
            src={slide1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <Image
            src={slide2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <Image
            src={slide3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="flex ml-24 p-6 px-30 gap-80 mt-8">
        <h1 className="text-grey">Number of users/MDO's</h1>
        <h1 className="text-grey ml-20">Available content</h1>
      </div>
      <div className="flex mx-auto gap-3 justify-center pb-8">
        <Graph h1="2015054" h2="Karmayogis onboarded" img={graph1} />
        <Graph h1="3191" h2="Registered MDO's" img={graph2} />
        <Graph h1="662" h2="Courses" img={graph3} />
        <Graph h1="1280" h2="Available content (hours)" img={graph4} />
      </div>
      <div className="justify-center mx-auto text-center align-center">
        <h1 className="text-3xl	font-bold text-customBlue">
          Featured courses
        </h1>
        <Image className="justify-center mx-auto text-center align-center" src={feature} alt="img" />
      </div>
    </>
  );
}
