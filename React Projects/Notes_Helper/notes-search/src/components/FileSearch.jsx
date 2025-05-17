import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FileSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      axios.get(`/api/search?q=${searchTerm}`).then((res) => {
        setResults(res.data);
      });
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        className="border px-4 py-2 rounded w-full"
        type="text"
        placeholder="Search files..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="mt-4">
  {results.map((result, index) => (
    <li key={index} className="py-2 border-b">
      <div className="font-mono text-sm text-gray-600">
        <strong>File:</strong> {result.filePath}
      </div>
      <div className="text-sm">
        <strong>Line {result.lineNumber}:</strong>{' '}
        <span dangerouslySetInnerHTML={{
          __html: result.lineText.replace(
            new RegExp(`(${result.match})`, 'gi'),
            '<mark class="bg-yellow-200">$1</mark>'
          )
        }} />
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}
