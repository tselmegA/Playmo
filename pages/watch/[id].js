import React from "react";
import Header from "../../components/header";
import { useRouter } from "next/router";

const Movie = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen">
      <Header />
      {router.query.id && (
        <iframe
          id="player"
          name="player"
          className="w-full h-full overflow-hidden"
          scrolling="no"
          webkitAllowFullScreen
          mozAllowFullScreen
          allowFullScreen
          frameborder="0"
          // sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
          src={`${process.env.MOVIE_BASE_URL}/embed/tmdb/movie?id=${router.query.id}`}
        ></iframe>
      )}
    </div>
  );
};

export default Movie;
