import "./Photo.css";

import { uploads } from "../../utils/config";
import { Link } from "react-router-dom";

// components
import Message from "../../components/Message/Message";
import Loading from "../../components/Loading/Loading";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Redux
import { getPhoto } from "../../slices/photoSlice";

const Photo = () => {
  const {id} = useParams()
  
  const dispatch = useDispatch()
  
  const{ user } = useSelector((state) => state.auth)
  const {photo, loading, error, message} = useSelector((state) => state.photo)

  // comments

  // Load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // like e comentário

  if(loading){
    return <Loading />
  }

  return <div id="photo">
        <PhotoItem photo={photo} />
  </div>;
};

export default Photo;
