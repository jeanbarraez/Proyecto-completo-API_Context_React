import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);
  const AddFavorite = (id) => {
    const NewIdphotos = photos.map((photo) => {
      if (photo.id === id) {
        /* si el id coincide con la foto, entonces */
        return { ...photo, liked: !photo.liked };
      } else
        return photo; /* sino, retorname todas las propiedades del array  */
    });
    setPhotos(NewIdphotos);
  };
  const imgStyle = {
    height: "500px",
    objectFit: "cover",
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      <div className="style-Card">
        {photos.map(
          (
            photo //(photo, i)
          ) => (
            <Card style={{ width: "25rem" }} key={photo.id}>
              {/* key={i} */}
              <IconHeart filled={photo.liked} /> 
              <Card.Img
                variant="top"
                src={photo.img}
                alt={photo.alt}
                onClick={() => AddFavorite(photo.id)}
                style={imgStyle}
              />
              <Card.Body>
                <Card.Title>{photo.photographer}</Card.Title>
                <Card.Text>{photo.alt}</Card.Text>
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </div>
  );
};
export default Gallery;
