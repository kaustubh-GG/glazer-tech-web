// components/DocxViewer.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import mammoth from 'mammoth';

const DocxViewer = ({ fileName }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleViewDoc = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/${fileName}`);
      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      
      // Store the converted HTML in localStorage
      localStorage.setItem('privacyDoc', result.value);
      
      // Navigate to privacy page
      router.push('/privacy');
    } catch (err) {
      setError('Failed to open document');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '1rem'}} >
      <button
        style={{fontWeight: '700', color: 'white'}}
        onClick={handleViewDoc}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? 'Opening...' : 'View Privacy Policy'}
      </button>
      
      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
};

export default DocxViewer;