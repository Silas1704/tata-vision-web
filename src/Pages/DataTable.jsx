// src/components/DataTable.jsx
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/src/assets/Jaguar.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value); 
      const results = Papa.parse(csv, { header: true }); 
      setData(results.data); // array of objects
    };
    fetchData();
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-semibold text-gray-900 text-center">Jaguar Feedback Analysis</h1>
     
    <div className="overflow-x-auto my-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-800 text-white">
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((key) => (
              <th key={key} className="w-auto text-left py-3 px-4 uppercase font-semibold text-sm">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index} className="text-gray-700 border-t">
              {Object.values(row).map((val, i) => (
                <td key={i} className="w-auto text-left py-3 px-4">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
    </main>
  );
};

const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation" className="flex justify-center mt-4">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <a
            href="#"
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              onClick={() => paginate(number)}
              className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                currentPage === number
                  ? 'z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                  : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DataTable;
