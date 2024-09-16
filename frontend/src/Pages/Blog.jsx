
const Blog = () => {
  const blogPosts = [
    {
      title: "Ragnar Lothbrok",
      description:
        "Focusing on the historical saga of the Lodbrok family. The show centered on Ragnar Lothbrok",
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      date: "September 12, 2024",
      author: "Athelstan",
    },
    {
      title: "Floki is a Boatbuilder",
      description:
        "Floki is Ragnar's best friend, Kattegat's exceptional boatbuilder, and also the most eccentric resident.",
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      date: "August 30, 2024",
      author: "Siggy",
    },
    {
      title: "Bjorn Ironside",
      description:
        "Inspired by the sagas of legendary Norse figure Lothbrok, one of the best-known Norse heroes.",
      imageUrl: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      date: "August 20, 2024",
      author: "Lagertha",
    },
  ];

  return (
    <div className={`min-h-screen bg-base-200 p-6`}>
      <div className={`max-w-7xl mx-auto`}>
        <div className={`text-center mb-12`}>
          <h1 className={`text-5xl font-bold`}>Our Blog</h1>
          <p className={`text-lg text-gray-600 mt-4`}>
            Discover insights, tutorials, and stories from our team and industry
            experts.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
          {blogPosts.map((post, info) => (
            <div key={info} className={`card bg-base-100 shadow-xl`}>
              <figure>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className={`rounded-t-lg w-40`}
                />
              </figure>
              <div className={`card-body`}>
                <h2 className={`card-title`}>{post.title}</h2>
                <p>{post.description}</p>
                <div
                  className={`flex justify-between items-center mt-4 text-sm text-gray-500`}
                >
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`flex justify-center mt-12`}>
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
