import requests from "@/config/apiConfig";
import { useEffect, useState } from "react";

interface CastMember {
  name: string;
  role: string;
}

export interface Movie {
  id: number;
  title: string;
  release_year: number;
  genre: string[];
  director: string;
  cast: CastMember[];
  rating: number;
  duration_minutes: number;
  synopsis: string;
  thumbnail_horizontal: string;
  thumbnail_vertical: string;
}

const useHome = (): { moviesList: Movie[] } => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const fetchMoviesData = async () => {
    try {
      const response = await requests.get("all_movies");
      setMoviesList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return {
    moviesList,
  };
};

export default useHome;
