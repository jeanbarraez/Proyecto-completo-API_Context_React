import { useState, useEffect, createContext } from "react";

export const PhotosContext = createContext();

const urlPhotos = "/photos.json";

const PhotosContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const valor = { photos, setPhotos };
  const getPhotos = async () => {
    try {
      const response = await fetch(urlPhotos);
      if (!response.ok) {
        throw new Error("Error de red");
      }
      const data = await response.json();
      //console.log(data.photos);
      const myapiPhotos = data.photos.map((photo) => {
        return {
          liked: false,//liked:photo.liked
          id: photo.id,
          alt: photo.alt,
          photographer: photo.photographer,
          img: photo.src.large,
        };
      });

      setPhotos(myapiPhotos.map((photo) => ({ ...photo, liked: false })));//aca no es necesario el liked:false , ya que lo sacamos de la api
      //console.log(myapiPhotos);
    } catch (error) {
      console.log("Error al obtener la informacion", error);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <PhotosContext.Provider value={valor}>{children}</PhotosContext.Provider>
    //setPhotos que lo toma valor , viene con la nueva informacion , que seria el nuevo array con las propiedades extraidas mas liked:false
  );
};

export default PhotosContextProvider;
