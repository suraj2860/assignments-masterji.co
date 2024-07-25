import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Batches = () => {

  const batches = [
    {
      imageUrl: "https://picsum.photos/",
      title: "SQL Basics To Advanced Mastery Course",
      startDate: "20 Jul 2024",
      endDate: "28 Jul 2024",
      price: "₹ 0",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "30 Days Of Javascript Challenge",
      startDate: "13 Jul 2024",
      endDate: "12 Aug 2024",
      price: "₹ 0",
      validityExpiry: "33 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Interview Preparation With Javascript 2.0",
      startDate: "02 Aug 2024",
      endDate: "15 Sep 2024",
      price: "₹ 10,000",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Python for Data Science",
      startDate: "01 Aug 2024",
      endDate: "31 Aug 2024",
      price: "₹ 5,000",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "React Development Bootcamp",
      startDate: "05 Sep 2024",
      endDate: "05 Dec 2024",
      price: "₹ 8,000",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Machine Learning with Python",
      startDate: "15 Oct 2024",
      endDate: "15 Dec 2024",
      price: "₹ 12,000",
      validityExpiry: "90 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Advanced CSS Techniques",
      startDate: "01 Nov 2024",
      endDate: "30 Nov 2024",
      price: "₹ 3,000",
      validityExpiry: "60 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Java Programming Fundamentals",
      startDate: "10 Sep 2024",
      endDate: "10 Oct 2024",
      price: "₹ 7,000",
      validityExpiry: "120 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Web Development with HTML, CSS & JavaScript",
      startDate: "20 Aug 2024",
      endDate: "20 Oct 2024",
      price: "₹ 9,000",
      validityExpiry: "365 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Data Structures and Algorithms",
      startDate: "01 Sep 2024",
      endDate: "30 Sep 2024",
      price: "₹ 4,500",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Full-Stack Development with MERN",
      startDate: "01 Dec 2024",
      endDate: "31 Dec 2024",
      price: "₹ 11,000",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Introduction to Cybersecurity",
      startDate: "05 Oct 2024",
      endDate: "05 Nov 2024",
      price: "₹ 6,000",
      validityExpiry: "90 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Cloud Computing with AWS",
      startDate: "10 Nov 2024",
      endDate: "10 Dec 2024",
      price: "₹ 13,000",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Mobile App Development with Flutter",
      startDate: "15 Dec 2024",
      endDate: "15 Jan 2025",
      price: "₹ 10,000",
      validityExpiry: "365 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Blockchain Development",
      startDate: "01 Feb 2025",
      endDate: "28 Feb 2025",
      price: "₹ 15,000",
      validityExpiry: "90 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Artificial Intelligence Basics",
      startDate: "20 Jan 2025",
      endDate: "20 Feb 2025",
      price: "₹ 8,000",
      validityExpiry: "180 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "UX/UI Design Principles",
      startDate: "10 Mar 2025",
      endDate: "10 Apr 2025",
      price: "₹ 5,500",
      validityExpiry: "60 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "DevOps with Kubernetes",
      startDate: "01 Apr 2025",
      endDate: "01 May 2025",
      price: "₹ 9,500",
      validityExpiry: "365 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Big Data Analytics with Hadoop",
      startDate: "15 Mar 2025",
      endDate: "15 Apr 2025",
      price: "₹ 14,000",
      validityExpiry: "90 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Introduction to Internet of Things",
      startDate: "20 May 2025",
      endDate: "20 Jun 2025",
      price: "₹ 7,500",
      validityExpiry: "180 days",
      status: "Unpublished",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Deep Learning with TensorFlow",
      startDate: "01 Jun 2025",
      endDate: "01 Jul 2025",
      price: "₹ 12,500",
      validityExpiry: "365 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Data Visualization with D3.js",
      startDate: "10 Jun 2025",
      endDate: "10 Jul 2025",
      price: "₹ 6,000",
      validityExpiry: "120 days",
      status: "Published",
    },
    {
      imageUrl: "https://picsum.photos/",
      title: "Game Development with Unity",
      startDate: "01 Jul 2025",
      endDate: "01 Aug 2025",
      price: "₹ 9,000",
      validityExpiry: "365 days",
      status: "Published",
    },
  ];
  const [searchQuery, setsearchQuery] = useState<string>('');
  const [filteredBatches, setFilteredBatches] = useState(batches);
  const searchInputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleSearch = () => {
    const result = batches.filter(batch =>
      batch.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBatches(result);
    setCurrentPage(1);
  }

  const handleKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }

  const handleEnter = (e) => {
    if (e.key == 'Enter') handleSearch();
  }

  const indexOfLastBatch = currentPage * itemsPerPage;
  const indexOfFirstBatch = indexOfLastBatch - itemsPerPage;
  const currentBatches = filteredBatches.slice(indexOfFirstBatch, indexOfLastBatch);
  const totalPages = Math.ceil(filteredBatches.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='flex flex-col items-center pt-4  bg-fuchsia-200 h-full '>
      <div className='text-5xl font-bold text-fuchsia-900'>Chai aur Code</div>
      <div className='flex flex-col bg-white mt-8 border rounded-xl w-auto p-4'>
        <h1 className='text-2xl font-bold'>Batches</h1>
        <p className='text-gray-700 py-2'>Create learner’s batch and share information at the same time.</p>
        <div className="flex py-4">
          <input
            type="text"
            placeholder="Search by Title (ctrl+k or cmd+k)"
            value={searchQuery}
            ref={searchInputRef}
            onChange={(e) => setsearchQuery(e.target.value)}
            onKeyDown={handleEnter}
            className="w-72 h-8 p-2 text-sm border border-gray-400 rounded-md mr-4" />
          <button className="bg-fuchsia-800 text-white w-24 rounded-md" onClick={handleSearch}>Search</button>
        </div>
        <table className="mt-4 border border-black text-left">
          <thead className="border border-black h-12 bg-slate-200">
            <tr className="">
              <th className="border border-black w-96 pl-4">Title</th>
              <th className="border border-black w-32 pl-4">Start Date</th>
              <th className="border border-black w-32 pl-4">End Date</th>
              <th className="border border-black w-28 pl-4">Price</th>
              <th className="border border-black w-40 pl-4">Validity/Expiry</th>
              <th className="border border-black w-32 pl-4">Status</th>
            </tr>
          </thead>
          <tbody className="space-y-4 text-sm">
            {currentBatches.map((batch, index) => (
              <tr key={index} className="text-center h-20">
                <td className="flex space-x-4 border-r border-black  items-center p-4">
                  <img src={`${batch.imageUrl}id/${index + 50}/106/60`} className="rounded-md" alt="batchThumbnail" />
                  <h1 className="text-left">{batch.title}</h1>
                </td>
                <td className="text-left border-r border-black p-4">{batch.startDate}</td>
                <td className="text-left border-r border-black p-4">{batch.endDate}</td>
                <td className="text-left border-r border-black p-4">{batch.price}</td>
                <td className="text-left border-r border-black p-4">{batch.validityExpiry}</td>
                <td className={`text-left border-r border-black p-4`}>
                  <div className={`text-center w-24 rounded-md ${batch.status == 'Published' ? 'bg-green-200 border border-green-500' : 'bg-gray-200 border border-gray-500'}`}>
                    {batch.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex justify-end text-sm items-center">
          <div className="flex items-center mr-4">
            <label className="mr-2 text-sm">Rows per page:</label>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="pl-2 border border-gray-400 rounded-md"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => handlePageChange(currentPage - 1)}
            className={`cursor-pointer ${currentPage === 1 ? 'text-gray-400' : 'text-fuchsia-800'}`}
            aria-label="Previous Page"
          />
          <span className="mx-4 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => handlePageChange(currentPage + 1)}
            className={`cursor-pointer ${currentPage === totalPages ? 'text-gray-400' : 'text-fuchsia-800'}`}
            aria-label="Next Page"
          />
        </div>
      </div>
    </div>
  )
}

export default Batches