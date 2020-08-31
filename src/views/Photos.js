import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import PhotoCard from "../Components/PhotoCard";

export default function Home() {
  const url = `https://jsonplaceholder.typicode.com/photos`;
  const [photos, setPhotos] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setPhotos({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setPhotos({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setPhotos({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  let content = null;

  if (photos.error) {
    content = <p>There was an error please refresh or try again later!</p>;
  }

  if (photos.loading) {
    content = <Loader />;
  }

  if (photos.data) {
    content = photos.data.map((photo, key) => (
      <div key={key}>
        <PhotoCard photo={photo} />
      </div>
    ));
  }

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl mb-3">Photo List</h1>
        <div className="md:flex flex-wrap md:-mx-3">{content}</div>
      </div>
    </div>
  );
}
