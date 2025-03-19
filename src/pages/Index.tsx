
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mediaItems } from '@/data/MediaData';
import { Clock, Tag, Info } from 'lucide-react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(mediaItems[0]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMediaSelect = (mediaId: number) => {
    const media = mediaItems.find(item => item.id === mediaId);
    if (media) {
      setSelectedMedia(media);
    }
  };

  const filteredMedia = mediaItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-mono">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Main content with image on the right and text on the left */}
        <section className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Right side image (reversed from your description to match the website) */}
          <div className="w-full lg:w-1/2 h-screen relative order-2 lg:order-2">
            <div className={`absolute inset-0 bg-black ${loaded ? 'animate-fade-out' : ''}`}></div>
            <img
              src={selectedMedia.imageUrl}
              alt={selectedMedia.title}
              className={`w-full h-full object-cover ${loaded ? 'animate-fade-in' : 'opacity-0'}`}
            />
          </div>
          
          {/* Left side content (reversed from your description to match the website) */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-6 md:p-10 lg:p-16 order-1 lg:order-1">
            <div className="max-w-lg">
              <div className={`space-y-6 ${loaded ? 'animate-slide-down' : 'opacity-0'}`}>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg md:text-xl font-mono tracking-tight">
                    {selectedMedia.title}
                  </h1>
                  <span className="text-xs text-gray-400">#{selectedMedia.id}</span>
                </div>
                
                <p className="text-sm text-gray-300 mt-1">
                  {selectedMedia.description}
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="border-t border-white/10 pt-4">
                    <h2 className="text-sm font-mono mb-3 flex items-center gap-2">
                      <Info size={14} /> EXIF DATA
                    </h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-400">
                      <div>Camera</div>
                      <div className="text-white">{selectedMedia.exif.camera}</div>
                      
                      <div>Lens</div>
                      <div className="text-white">{selectedMedia.exif.lens}</div>
                      
                      <div>Focal Length</div>
                      <div className="text-white">{selectedMedia.exif.focalLength}</div>
                      
                      <div>Aperture</div>
                      <div className="text-white">{selectedMedia.exif.aperture}</div>
                      
                      <div>Shutter Speed</div>
                      <div className="text-white">{selectedMedia.exif.shutterSpeed}</div>
                      
                      <div>ISO</div>
                      <div className="text-white">{selectedMedia.exif.iso}</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <h2 className="text-sm font-mono mb-3 flex items-center gap-2">
                      <Tag size={14} /> TAGS
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedMedia.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-white/10 px-2 py-1 rounded-sm hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <h2 className="text-sm font-mono mb-3 flex items-center gap-2">
                      <Clock size={14} /> DATE
                    </h2>
                    <div className="text-xs text-white">
                      {new Date(selectedMedia.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-6">
                  <h2 className="text-sm font-mono mb-3">BROWSE</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {mediaItems.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleMediaSelect(item.id)}
                        className={`aspect-square cursor-pointer overflow-hidden ${selectedMedia.id === item.id ? 'ring-1 ring-white' : ''}`}
                      >
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-full object-cover hover:opacity-70 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
