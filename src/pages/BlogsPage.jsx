import PageBanner from "../Components/PageBanner";
import blogsdummy from "../assets/blogsdummy.jpg";
const blogData = [
  {
    id: 1,
    img: blogsdummy,
    title: "Understanding Web Development",
    description:
      "A deep dive into the essentials of web development and why it is crucial for building modern websites.",
  },
  {
    id: 2,
    img: blogsdummy,
    title: "The Power of AI in Business",
    description:
      "Explore how artificial intelligence can drive innovation and growth in modern businesses.",
  },
  {
    id: 3,
    img: blogsdummy,
    title: "UI/UX Design: Best Practices",
    description:
      "Learn the key principles behind creating intuitive and engaging user interfaces and experiences.",
  },
];

const BlogsPage = () => {
  return (
    <div>
      <PageBanner title={"Blogs"} />
      <div className="wrapper paddingtop paddingbottom">
        <h1 data-aos="fade-up" className="main-heading text-center mb-8">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div
              data-aos="fade-up"
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
