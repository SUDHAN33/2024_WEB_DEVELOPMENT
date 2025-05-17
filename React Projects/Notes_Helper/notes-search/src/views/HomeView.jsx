import React from 'react';
import FileSearch from '../components/FileSearch';

export default function HomeView() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Home</h1>
      <FileSearch />
    </div>
  );
}