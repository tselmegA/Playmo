import { customFetch } from "@/useApi";
import React, { useEffect, useRef, useState } from "react";
import { Loading } from "./loading";
import PlayImg from "./playImg.png";
import Image from "next/image";
import { useRouter } from "next/router";

export const PopularMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const count = useRef(0);
  const renderAfterCalled = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!renderAfterCalled.current) getMoviesList();
    renderAfterCalled.current = true;
  }, []);

  const getMoviesList = async () => {
    setLoading(true);
    const res = await customFetch({
      url: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${
        count.current + 1
      }&sort_by=popularity.desc`,
    });
    if (res.data) {
      count.current = count.current + 1;
      console.log(res.data.results);
      setMovieList((old) => [...old, ...res.data.results]);
    }
    setLoading(false);
  };

  const handleScroll = (e) => {
    const right =
      e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
    if (right) {
      getMoviesList();
    }
  };

  return (
    <div class="relative rounded-xl overflow-auto w-full">
      <div class="text-3xl font-bold p-2">Үзэлт ихтэй</div>
      <div
        className="relative w-full flex gap-3 overflow-x-auto movieListContainer my-10 hover:my-0 hover:py-10 duration-500 transition-all"
        onScroll={handleScroll}
      >
        {movieList?.map((data) => (
          <div
            key={data.id}
            className="shrink-0 movieImg duration-500 transition-all relative"
          >
            <img
              src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
              className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white movieImgContent"
            />
            <div className="absolute hidden movieImgInfo top-0 left-0 z-10 w-full h-full duration-500 transition-all p-3">
              <p className="text-md">{data.title}</p>
              <p className="text-sm">{data.release_date?.slice(0, 4)}</p>
              <Image
                src={PlayImg}
                width={50}
                height={50}
                onClick={() => router.push(`/watch/${data.id}`)}
                className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        ))}
        {loading && (
          <div className="h-full mx-4 flex items-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};
