import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock data for top scholarships
  const topScholarships = [
    { id: 1, university: "Harvard University", category: "Full Fund", degree: "Masters", fee: 40, deadline: "2024-12-31", image: "https://picsum.photos/id/1/400/250" },
    { id: 2, university: "Oxford University", category: "Partial", degree: "Bachelor", fee: 25, deadline: "2024-11-15", image: "https://picsum.photos/id/20/400/250" },
    { id: 3, university: "MIT", category: "Self-fund", degree: "PhD", fee: 50, deadline: "2024-10-20", image: "https://picsum.photos/id/26/400/250" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)'}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="mb-5 text-5xl font-bold text-white">Find Your Educational Funding</h1>
            <p className="mb-5 text-lg">ScholarStream connects ambitious students with global opportunities. Search, Apply, and Succeed.</p>
            <div className="join">
                <input className="input input-bordered join-item text-black w-64" placeholder="Search by University..." />
                <button className="btn btn-primary join-item">Search</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top Scholarships Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Top Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topScholarships.map((scholarship, idx) => (
                <motion.div 
                    key={scholarship.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
                >
                    <figure><img src={scholarship.image} alt={scholarship.university} className="h-48 w-full object-cover" /></figure>
                    <div className="card-body">
                        <div className="badge badge-secondary">{scholarship.category}</div>
                        <h2 className="card-title">{scholarship.university}</h2>
                        <p className="text-gray-500">Degree: {scholarship.degree}</p>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-sm font-semibold text-primary">App Fee: ${scholarship.fee}</div>
                            <div className="text-xs text-gray-400">Deadline: {scholarship.deadline}</div>
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <Link to={`/scholarship/${scholarship.id}`} className="btn btn-primary btn-sm">View Details</Link>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        <div className="text-center mt-10">
            <Link to="/scholarships" className="btn btn-outline btn-wide">View All Scholarships</Link>
        </div>
      </section>

      {/* Testimonials (Extra Section 1) */}
      <section className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="card bg-base-100 shadow-lg p-6">
                    <p className="italic text-gray-600">"ScholarStream made it incredibly easy to find funding for my Masters in the UK. The process was transparent and fast."</p>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://i.pravatar.cc/150?img=32" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold">Sarah Jenkins</h4>
                            <p className="text-xs">Oxford Scholar</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg p-6">
                    <p className="italic text-gray-600">"I never thought I'd find a full-ride scholarship. The filters helped me narrow down exactly what I was eligible for."</p>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://i.pravatar.cc/150?img=11" />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold">Michael Chen</h4>
                            <p className="text-xs">MIT Research Fellow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ (Extra Section 2) */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">How do I apply?</div>
                <div className="collapse-content"> 
                    <p>Create an account, browse scholarships, click 'Apply', pay the application fee, and submit your details.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">Is the application fee refundable?</div>
                <div className="collapse-content"> 
                    <p>Application fees are generally non-refundable as they cover the processing costs by the university.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" /> 
                <div className="collapse-title text-xl font-medium">Can I update my application?</div>
                <div className="collapse-content"> 
                    <p>Yes, you can edit your application from your dashboard as long as the status is still 'Pending'.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;