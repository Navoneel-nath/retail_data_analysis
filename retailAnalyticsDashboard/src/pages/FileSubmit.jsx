import { useState } from 'react'
import { useNavigate } from "react-router-dom";


function FileSubmit() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please select a file.');

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/analytics");
    }, 2000);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Upload Your Supermart Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="file" className="block text-lg font-medium text-gray-600 mb-2">Choose your data file</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="w-full py-2 px-4 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              accept=".csv,.xlsx,.xls"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white font-semibold rounded-md focus:outline-none focus:ring-2 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FileSubmit;