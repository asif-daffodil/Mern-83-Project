const BlogPost = () => {
  const blogPosts = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      Descripation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      date: "September 12, 2024",
      author: "Ragnar Lothbrok",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      Descripation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      date: "August 30, 2024",
      author: "Floki",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      Descripation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      date: "August 20, 2024",
      author: "Lagertha",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Our Blog</h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover insights, tutorials, and stories from our team and industry
            experts.
          </p>
        </div>

        {/* Blog Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.Descripation}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section (Optional) */}
        <div className="flex justify-center mt-12">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 22</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
