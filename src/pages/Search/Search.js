import React from "react";
import { Link } from "react-router-dom";
import PostDetail from "../../components/PostDetail";
import { useFetchDocuments } from "../../hooks/useFetchDocument";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");
  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div>
      <h2>Search</h2>
      {posts && posts.length === 0 && (
        <>
          <p>Não foram encontrados post a partir de sua busca</p>
          <Link to="/">Voltar</Link>
        </>
      )}
      {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  );
};

export default Search;
