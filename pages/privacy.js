import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Privacy() {
  const router = useRouter();
  const [content, setContent] = useState('');

  useEffect(() => {
    const docContent = localStorage.getItem('privacyDoc');
    if (docContent) {
      setContent(docContent);
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <>
      <style jsx>{`
        /* Container styling */
        .privacy-container {
          min-height: 100vh;
          background-color: #f9fafb; /* bg-gray-50 */
        }

        /* Header styling */
        .header {
          background-color: #ffffff; /* bg-white */
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); /* shadow */
        }

        .header-inner {
          max-width: 80rem; /* max-w-5xl */
          margin: 0 auto;
          padding: 1rem 1rem; /* py-4 px-4 */
        }

        @media (min-width: 640px) {
          .header-inner {
            padding-left: 1.5rem; /* sm:px-6 */
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .header-inner {
            padding-left: 2rem; /* lg:px-8 */
            padding-right: 2rem;
          }
        }

        .back-button {
          margin-top: 3rem; /* Added margin for spacing above the button */
          padding: 0.5rem 1rem; /* px-4 py-2 */
          background-color: #f3f4f6; /* bg-gray-100 */
          color: #4b5563; /* text-gray-600 */
          border-radius: 0.375rem; /* rounded */
          transition: background-color 0.2s;
        }

        .back-button:hover {
          background-color: #e5e7eb; /* hover:bg-gray-200 */
        }

        /* Main content styling */
        .main-content {
          max-width: 80rem; /* max-w-5xl */
          margin: 0 auto;
          padding: 2rem 1rem; /* py-8 px-4 */
        }

        @media (min-width: 640px) {
          .main-content {
            padding-left: 1.5rem; /* sm:px-6 */
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .main-content {
            padding-left: 2rem; /* lg:px-8 */
            padding-right: 2rem;
          }
        }

        @media (max-width: 475px) {
          .main-content {
            padding-left: 1rem; /* Reduce padding for smaller screens */
            padding-right: 1rem;
          }
        }

        .content-box {
          background-color: #ffffff; /* bg-white */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06); /* shadow */
          overflow-x: auto; /* Enable horizontal scrolling for wide content */
          -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
        }

        /* Prose content styling */
        .prose-content {
          padding: 2rem; /* p-8 */
          color: #374151; /* text-gray-700 */
          line-height: 1.8;
        }

        .prose-content h1 {
          color: #1f2937; /* text-gray-800 */
          margin-bottom: 2rem;
        }

        .prose-content h2 {
          color: #1f2937; /* text-gray-800 */
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .prose-content p {
          margin-bottom: 1rem;
        }

        .prose-content ul,
        .prose-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }

        .prose-content li {
          margin-bottom: 0.5rem;
        }

        /* Table styling */
        .prose-content table {
          width: 100%; /* Ensure tables fit within the parent container */
          border-collapse: collapse; /* Optional: Remove gaps between table cells */
        }

        .prose-content th,
        .prose-content td {
          padding: 0.5rem; /* Add padding for better readability */
          border: 1px solid #e5e7eb; /* Optional: Add a light border */
          text-align: left; /* Align text to the left */
        }
      `}</style>

      <div className="privacy-container">
        {/* Header section */}
        <div className="header">
          <div className="header-inner">
            <button
              onClick={() => router.back()}
              className="back-button"
            >
              ← Back
            </button>
          </div>
        </div>

        {/* Main content */}
        <main className="main-content">
          <div className="content-box">
            <div 
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </main>
      </div>
    </>
  );
}
