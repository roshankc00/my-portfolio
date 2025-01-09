const Blogs = () => {
  const blogPosts = [
    {
      title: "Application Lifecycle in NestJS",
      url: "https://medium.com/@rohitkc8848/application-lifecycle-request-response-lifecycle-of-nest-js-23cf9927fbd3",
    },
    {
      title: "How I Scaled Web Socket Server",
      url: "https://medium.com/@rohitkc8848/how-i-scaled-web-socket-server-fa8faa8f89ad",
    },
    {
      title: "SOLID Design Principles Using TypeScript",
      url: "https://medium.com/@rohitkc8848/solid-design-principles-using-typesci-d2cd9c14089a",
    },
    {
      title: "Learn How Dependency Injection Works",
      url: "https://medium.com/@rohitkc8848/learn-how-dependency-injection-works-a254b9d46db4",
    },
  ];

  return (
    <section
      id="blogs"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          My Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
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
