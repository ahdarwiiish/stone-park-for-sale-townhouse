import React, { useState, useRef } from 'react';
import { INITIAL_IMAGES, FALLBACK_IMAGES } from '../constants';
import { ImageAsset } from '../types';
import { Upload, X, ZoomIn, ImageOff } from 'lucide-react';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<ImageAsset[]>(
    INITIAL_IMAGES.map((url, index) => ({ id: `init-${index}`, url }))
  );
  const [selectedImage, setSelectedImage] = useState<ImageAsset | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages: ImageAsset[] = Array.from(files).map((file) => ({
        id: `user-${Date.now()}-${Math.random()}`,
        url: URL.createObjectURL(file as File),
        isUserUploaded: true,
      }));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setImages((prev) => prev.filter((img) => img.id !== id));
    if (selectedImage?.id === id) setSelectedImage(null);
  };

  // Improved handler for broken images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const src = target.src;
    
    // Determine which fallback to use based on filename keywords (heuristic)
    let fallback = FALLBACK_IMAGES.EXTERIOR;
    if (src.includes('page-38') || src.includes('page-39')) fallback = FALLBACK_IMAGES.PLAN;
    else if (src.includes('page-10') || src.includes('page-12')) fallback = FALLBACK_IMAGES.INTERIOR;
    else if (src.includes('page-4') || src.includes('page-8')) fallback = FALLBACK_IMAGES.LANDSCAPE;

    // Prevent infinite loop if fallback also fails
    if (target.src !== fallback) {
        target.src = fallback;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 font-serif">Property Gallery</h2>
            <p className="text-slate-600 mt-2 max-w-xl">
              Browse photos of the unit, the Hills Willows phase, and the Stone Park community.
            </p>
          </div>
          <div>
             <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-amber-600 hover:border-amber-600 transition-all shadow-sm text-sm font-bold"
            >
              <Upload className="w-4 h-4 mr-2" />
              Add Your Photos
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept="image/*"
              multiple
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                onError={handleImageError}
                alt="Property View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white w-10 h-10 drop-shadow-lg" />
              </div>

              {image.isUserUploaded && (
                <button
                  onClick={(e) => removeImage(image.id, e)}
                  className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 z-10 shadow-lg"
                  title="Remove uploaded image"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          
          {/* Add placeholder if empty */}
          {images.length === 0 && (
             <div className="col-span-full h-64 flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-300 rounded-xl">
                <ImageOff className="w-12 h-12 mb-2" />
                <p>No images available. Upload some or check your directory paths.</p>
             </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <X className="w-12 h-12" />
          </button>
          <img
            src={selectedImage.url}
            onError={handleImageError}
            alt="Full screen"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;