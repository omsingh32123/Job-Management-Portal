import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './JobListing.css'; // Import your CSS file here

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = job.description.length > 40 ? job.description.substring(0, 100) + '...' : job.description;
  const description = showFullDescription ? job.description : truncatedDescription;

  const handleClick = () => {
    setShowFullDescription(prevState => !prevState);
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative ">
      <div className="p-4 flex flex-col justify-between h-full">

        <div className="mb-2">
          <div className="text-gray-600 mb-6 mt-2 bg-gray-200 rounded px-2 py-0 inline-block">{job.type}</div>
          <h3 className="text-2xl font-bold">{job.title}</h3>
          <div className="mb-6 description-container">
            {description}
          </div>  
        </div>

        <div>
          <h3 className="text-indigo-500 font-bold mb-2">{job.salary} / Year</h3>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-1">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className='inline text-lg mb-1 mr-1' />
              {job.location}
            </div>
            <Link
              to={`/jobs/${job._id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default JobListing;
