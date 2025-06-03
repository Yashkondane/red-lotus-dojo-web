
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'New Competition Season Begins',
      excerpt: 'Get ready for an exciting year of tournaments and competitions. Registration is now open for all age groups.',
      author: 'Master Chen Li',
      date: '2024-06-01',
      readTime: '5 min read',
      category: 'Competitions',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=400&h=250&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Benefits of Martial Arts for Children',
      excerpt: 'Discover how martial arts training helps children develop discipline, confidence, and physical fitness.',
      author: 'Sensei Maria Santos',
      date: '2024-05-28',
      readTime: '7 min read',
      category: 'Training Tips',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 3,
      title: 'Congratulations to Our Tournament Winners',
      excerpt: 'Celebrating the outstanding performance of our students at the Regional Championships.',
      author: 'Sensei David Kim',
      date: '2024-05-25',
      readTime: '3 min read',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 4,
      title: 'The Philosophy Behind Traditional Karate',
      excerpt: 'Understanding the deeper meanings and principles that guide traditional martial arts practice.',
      author: 'Master Chen Li',
      date: '2024-05-20',
      readTime: '10 min read',
      category: 'Philosophy',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 5,
      title: 'Summer Training Camp Registration Open',
      excerpt: 'Join us for an intensive week of training, workshops, and fun activities for all skill levels.',
      author: 'Academy Staff',
      date: '2024-05-15',
      readTime: '4 min read',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
      id: 6,
      title: 'Nutrition Tips for Martial Artists',
      excerpt: 'Learn about proper nutrition to fuel your training and optimize your performance.',
      author: 'Sensei Maria Santos',
      date: '2024-05-10',
      readTime: '6 min read',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&h=250&q=80'
    }
  ];

  const categories = ['All', 'News', 'Training Tips', 'Competitions', 'Philosophy', 'Events', 'Health & Wellness'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-martial-red to-martial-red-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-6 tracking-wider">
            BLOG & NEWS
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Stay updated with the latest news, training tips, and insights from Elite Martial Arts Academy
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts.filter(post => post.featured).map(post => (
        <section key={post.id} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="inline-block bg-martial-red text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured
                </div>
                <h2 className="font-bebas text-3xl md:text-4xl text-gray-900 mb-4 tracking-wider">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <button className="inline-flex items-center bg-martial-red text-white px-6 py-3 rounded-md font-medium hover:bg-martial-red-dark transition-colors">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="animate-slide-in-right">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-martial-red hover:text-white hover:border-martial-red transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => !post.featured).map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-martial-red text-white px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-bebas text-xl text-gray-900 mb-3 tracking-wide">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
