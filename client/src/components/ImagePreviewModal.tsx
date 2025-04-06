import React from 'react';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
    title: string;
    caption: string;
    source?: string;
  };
}

export default function ImagePreviewModal({ isOpen, onClose, image }: ImagePreviewModalProps) {
  if (!isOpen) return null;

  // Close when clicking outside the image container (but not on the image itself)
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white max-w-4xl w-full rounded shadow-lg overflow-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-wiki-serif">{image.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="max-w-full h-auto mx-auto"
          />
          <div className="mt-4 text-sm">
            <p>{image.caption}</p>
            {image.source && (
              <p className="mt-2 text-xs">Source: {image.source}</p>
            )}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-wiki-blue text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}