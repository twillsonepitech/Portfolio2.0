import Footer from '../components/Footer';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images factices - vous pourrez les remplacer par vos vraies photos
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      title: 'Plongée sous-marine',
      location: 'Méditerranée',
      date: '2024',
      category: 'diving'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      title: 'Exploration marine',
      location: 'Mer Rouge',
      date: '2024',
      category: 'diving'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
      title: 'Vacances à la montagne',
      location: 'Alpes',
      date: '2024',
      category: 'vacation'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Coucher de soleil',
      location: 'Plage',
      date: '2024',
      category: 'vacation'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80',
      title: 'Aventure urbaine',
      location: 'Paris',
      date: '2024',
      category: 'life'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      title: 'Voyage en mer',
      location: 'Océan',
      date: '2024',
      category: 'vacation'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1682687982423-295485350f89?w=800&q=80',
      title: 'Moments de vie',
      location: 'France',
      date: '2024',
      category: 'life'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80',
      title: 'Sous l\'eau',
      location: 'Tropiques',
      date: '2024',
      category: 'diving'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80',
      title: 'Randonnée',
      location: 'Montagnes',
      date: '2024',
      category: 'vacation'
    }
  ];

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(photos[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Photos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Moments de vie, vacances, plongée sous-marine et aventures. 📸🌊
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openImage(index)}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
              <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{photo.title}</p>
                <p className="text-sm">{photo.location} • {photo.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div
            className="max-w-7xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">
                {selectedImage.location} • {selectedImage.date}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {currentIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="pt-10 pb-6 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-400"
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          2021-PRESENT © Thomas Willson
        </p>
      </footer>
    </div>
  );
};

export default Photos;
