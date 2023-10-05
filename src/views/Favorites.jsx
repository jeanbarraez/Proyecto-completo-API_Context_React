//const PHOTO_URL = "/photos.json";
import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const {photos, setPhotos } = useContext(PhotosContext)

  const RemovePhotos = (id) =>{
   const NewIdphotos = photos.map((photo) =>{
     if(photo.id === id){/* si el id coincide con la foto, entonces */
       return {...photo, liked: !photo.liked }
     }
       else  return photo /* sino, retorname todas las propiedades del array  */

   })
   setPhotos(NewIdphotos) 

 }
 const imgStyle ={
   height: '500px',
   objectFit: 'cover',
 }
 const likeFilter = photos.filter(filter => filter.liked === true)

  return (
    <div>
      <h1 className="favorite">Fotos favoritas</h1>
      <div className="p-3 Likes grid-columns-4">
        {likeFilter.map(
          (
            photo //(photo, i)
          ) => (
            <Card style={{ width: "25rem" }} key={photo.id}>
              {/* key={i} */}
              <IconHeart filled={photo.liked}j />{""}
              <Card.Img
                variant="top"
                src={photo.img}
                alt={photo.alt}
                onClick={() => RemovePhotos(photo.id)}
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
export default Favorites;
