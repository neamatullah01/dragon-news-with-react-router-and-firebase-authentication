import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="w-11/12 mx-auto flex items-center gap-4 bg-base-200 py-2 px-3 my-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-3" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          mollitia velit quod fugiat reprehenderit est.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          mollitia velit quod fugiat reprehenderit est.
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          mollitia velit quod fugiat reprehenderit est.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
