import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllScholarships = () => {
  const [search, setSearch] = useState('');
  
  // Mock Data
  const scholarships = [
    { id: 1, university: "Harvard University", rank: 1, country: "USA", category: "Full Fund", fee: 40, image: "https://picsum.photos/id/1/400/250" },
    { id: 2, university: "Cambridge", rank: 2, country: "UK", category: "Partial", fee: 30, image: "https://picsum.photos/id/2/400/250" },
    { id: 3, university: "Stanford", rank: 3, country: "USA", category: "Self-fund", fee: 50, image: "https://picsum.photos/id/3/400/250" },
    { id: 4, university: "University of Toronto", rank: 18, country: "Canada", category: "Full Fund", fee: 20, image: "https://picsum.photos/id/4/400/250" },
    { id: 5, university: "ETH Zurich", rank: 9, country: "Switzerland", category: "Partial", fee: 15, image: "https://picsum.photos/id/5/400/250" },
    { id: 6, university: "University of Tokyo", rank: 23, country: "Japan", category: "Full Fund", fee: 0, image: "https://picsum.photos/id/6/400/250" },
  ];

  const filteredScholarships = scholarships.filter(s => 
    s.university.toLowerCase().includes(search.toLowerCase()) || 
    s.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold">All Scholarships</h2>
        
        <div className="flex gap-2 w-full md:w-auto">
            <input 
                type="text" 
                placeholder="Search University or Country..." 
                className="input input-bordered w-full md:w-64" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredScholarships.map(item => (
            <div key={item.id} className="card bg-base-100 shadow-xl border border-base-200">
                <figure><img src={item.image} alt={item.university} className="h-48 w-full object-cover" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="badge badge-accent text-white">{item.category}</div>
                        <div className="text-sm font-bold text-gray-500">{item.country}</div>
                    </div>
                    <h2 className="card-title mt-2">{item.university}</h2>
                    <p className="text-sm">World Rank: #{item.rank}</p>
                    <p className="text-sm">Application Fee: ${item.fee}</p>
                    <div className="card-actions justify-end mt-4">
                        <Link to={`/scholarship/${item.id}`} className="btn btn-primary btn-block">View Details</Link>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AllScholarships;