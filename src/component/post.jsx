const Post = ({ post }) => {
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-sm">
      <h3 className="font-semibold">{post.user}</h3>
      <p className="text-gray-700">{post.message}</p>
    </div>
  );
};

export default Post;
