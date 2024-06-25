import "./Search.css";

// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";
import { useQuery } from "../../hooks/useQuery";

// components
import LikeContainer from "../../components/LikeContainer/LikeContainer";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import { Link } from "react-router-dom";

// redux
import { searchPhotos } from "../../slices/photoSlice";
import Loading from "../../components/Loading/Loading";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photo, loading } = useSelector((state) => state.photo);

  // Load photos
  useEffect(() => {
    dispatch(searchPhotos(search));
  }, [dispatch, search]);

  // Like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="search">
      <h2>Você está buscando por:{search}</h2>
      {photo &&
        photo.map((photos) => (
          <div key={photos._id}>
            <PhotoItem photo={photos} />
            <LikeContainer photo={photos} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photos._id}`}>
              Ver mais
            </Link>
          </div>
        ))}
      {photo && photo.length === 0 && (
        <h2 className="no-photos">
          Não foram encontradas resultados para sua busca...
        </h2>
      )}
    </div>
  );
};

export default Search;
