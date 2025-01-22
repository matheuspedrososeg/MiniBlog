import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <Link to={`/posts/${post.id}`}>
      <img src={post.image} alt={post.title}  />
      </Link>
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className="tags">
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <div class="btn_container">
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
      </div>
    </div>
  );
};

export default PostDetail;
