import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ScholarshipDetails = () => {
  const { id } = useParams();
  
  // Static mock data for display
  const scholarship = {
    university: "Harvard University",
    image: "https://picsum.photos/id/1/800/400",
    rank: 1,
    country: "USA",
    city: "Cambridge",
    deadline: "2024-12-31",
    fees: 40,
    description: "A prestigious full-funding opportunity for Masters students in Computer Science. Covers tuition, accommodation, and a monthly stipend.",
    stipend: "$2000/month",
    reviews: [
        { id: 1, user: "Alice", rating: 5, comment: "Amazing process!", date: "2023-01-15" },
        { id: 2, user: "Bob", rating: 4, comment: "High fees but worth it.", date: "2023-02-10" }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="card bg-base-100 shadow-xl overflow-hidden">
        <figure><img src={scholarship.image} alt="Uni" className="w-full h-80 object-cover" /></figure>
        <div className="card-body">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h1 className="text-4xl font-bold">{scholarship.university}</h1>
                <div className="badge badge-primary badge-lg mt-2 md:mt-0">Rank #{scholarship.rank}</div>
            </div>
            
            <p className="text-gray-500 font-semibold text-lg">{scholarship.city}, {scholarship.country}</p>
            
            <div className="divider"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="flex gap-2">
                    <span className="font-bold">Deadline:</span> {scholarship.deadline}
                </div>
                <div className="flex gap-2">
                    <span className="font-bold">Application Fees:</span> ${scholarship.fees}
                </div>
                <div className="flex gap-2">
                    <span className="font-bold">Stipend:</span> {scholarship.stipend}
                </div>
            </div>

            <h3 className="text-xl font-bold mt-4">Description</h3>
            <p className="text-gray-700">{scholarship.description}</p>

            <div className="card-actions justify-end mt-8">
                <Link to="/dashboard/payment" className="btn btn-primary btn-lg w-full md:w-auto">Apply for Scholarship</Link>
            </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Student Reviews</h3>
        <div className="space-y-4">
            {scholarship.reviews.map(review => (
                <div key={review.id} className="chat chat-start w-full">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                        <img src={`https://i.pravatar.cc/150?u=${review.id}`} alt="avatar" />
                        </div>
                    </div>
                    <div className="chat-header">
                        {review.user}
                        <time className="text-xs opacity-50 ml-2">{review.date}</time>
                    </div>
                    <div className="chat-bubble bg-base-200 text-base-content">
                        <div className="rating rating-xs mr-2">
                            {[...Array(5)].map((_, i) => (
                                <input key={i} type="radio" className="mask mask-star-2 bg-orange-400" checked={i < review.rating} readOnly />
                            ))}
                        </div>
                        {review.comment}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;