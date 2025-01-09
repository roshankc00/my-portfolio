const Blogs = () => {
  const blogPosts = [
    {
      title: "Application Lifecycle in NestJS",
      url: "https://medium.com/@rohitkc8848/application-lifecycle-request-response-lifecycle-of-nest-js-23cf9927fbd3",
      description:
        "An in-depth look at the application lifecycle in NestJS and how requests and responses are handled.",
    },
    {
      title: "How I Scaled Web Socket Server",
      url: "https://medium.com/@rohitkc8848/how-i-scaled-web-socket-server-fa8faa8f89ad",
      description:
        "Learn about the strategies I used to scale a WebSocket server for better performance.",
    },
    {
      title: "SOLID Design Principles Using TypeScript",
      url: "https://medium.com/@rohitkc8848/solid-design-principles-using-typesci-d2cd9c14089a",
      description:
        "Explore the SOLID design principles and how to implement them using TypeScript.",
    },
    {
      title: "Learn How Dependency Injection Works",
      url: "https://medium.com/@rohitkc8848/learn-how-dependency-injection-works-a254b9d46db4",
      description:
        "A comprehensive guide to understanding dependency injection and its benefits.",
    },
  ];

  return (
    <section
      id="blogs"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          My Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 3 text-gray-400 "
            >
              <div className="p-6">
                <h3 className=" text-white text-2xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="3 text-gray-400 mb-4">{post.description}</p>
                <a
                  href={post.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
