"use client";

import TopicsList from "@/components/TopicsList";
import React from "react";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";

const Page = () => {
  const [topics, setTopics] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getTopics = async () => {
    try {
      const res = await axios.get("/api/topics");
      setTopics(res.data.topics);
      setLoading(false);
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

  React.useEffect(() => {
    getTopics();
  }, [topics]);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      ) : (
        <TopicsList topics={topics} />
      )}
    </>
  );
};

export default Page;
