import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/homelayout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const findNews = data.find((news) => news.id === id);
    setNews(findNews);
  }, [data, id]);
  return (
    <div>
      <header className="my-8">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <h1 className="font-bold mb-4">Dragon News Details</h1>
          <div>
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </div>
        </section>
        <section className="col-span-3">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
