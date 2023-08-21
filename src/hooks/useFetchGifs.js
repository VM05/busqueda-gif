import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (categoria) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(categoria);
    setImages(newImages);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
