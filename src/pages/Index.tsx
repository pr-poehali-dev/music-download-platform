import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [volume, setVolume] = useState([75]);

  const tracks = [
    {
      id: 1,
      title: "Electric Dreams",
      artist: "SynthWave",
      album: "Neon Nights",
      duration: "3:42",
      image: "/img/85661ab1-ba8f-4a37-8823-3f036f3ef575.jpg"
    },
    {
      id: 2,
      title: "Urban Pulse",
      artist: "Street Beats",
      album: "City Vibes",
      duration: "4:15",
      image: "/img/b6dd64db-428a-486f-819a-fd068ae65a5c.jpg"
    },
    {
      id: 3,
      title: "Dreamy Clouds",
      artist: "Pastel Dreams",
      album: "Soft Horizons",
      duration: "3:28",
      image: "/img/445c322b-abcb-4b07-befc-b3fa546096b9.jpg"
    }
  ];

  const genres = ["Поп", "Рок", "Электронная", "Хип-хоп", "Джаз", "Классическая"];

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MusicStream
              </h1>
              <nav className="hidden md:flex space-x-6">
                {["Главная", "Исполнители", "Жанры", "Плейлисты", "Топ", "Новинки"].map((item) => (
                  <Button key={item} variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
                    {item}
                  </Button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
                <Input 
                  placeholder="Поиск музыки..." 
                  className="pl-10 w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
                <Icon name="Upload" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-6 animate-fade-in">
            Твоя музыка,
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              твой мир
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Слушай, скачивай и наслаждайся любимой музыкой в высочайшем качестве
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
              <Icon name="Play" className="mr-2" size={20} />
              Начать слушать
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать приложение
            </Button>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8">Жанры</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {genres.map((genre, index) => (
              <Card key={genre} className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-white/10 hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h4 className="text-white font-semibold">{genre}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-white">Топ треки</h3>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
              Показать все
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <Card key={track.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={track.image} 
                        alt={track.album}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <Button
                        size="icon"
                        className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => playTrack(track)}
                      >
                        <Icon name="Play" size={20} />
                      </Button>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white truncate">{track.title}</h4>
                      <p className="text-white/60 text-sm truncate">{track.artist}</p>
                      <p className="text-white/40 text-xs">{track.duration}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                        <Icon name="Heart" size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 p-4 z-50">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <img 
                  src={currentTrack.image} 
                  alt={currentTrack.album}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="min-w-0">
                  <h4 className="font-semibold text-white text-sm truncate">{currentTrack.title}</h4>
                  <p className="text-white/60 text-xs truncate">{currentTrack.artist}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 flex-1 justify-center">
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
                  <Icon name="Shuffle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
                  <Icon name="SkipBack" size={20} />
                </Button>
                <Button 
                  size="icon" 
                  className="bg-white text-black hover:bg-white/90 w-12 h-12"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
                  <Icon name="SkipForward" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
                  <Icon name="Repeat" size={20} />
                </Button>
              </div>

              <div className="flex items-center space-x-4 flex-1 justify-end">
                <Icon name="Volume2" className="text-white/60" size={16} />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-24"
                />
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
                  <Icon name="List" size={20} />
                </Button>
              </div>
            </div>
            
            <div className="mt-2">
              <Slider
                value={[25]}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-white/60 mt-1">
                <span>1:23</span>
                <span>{currentTrack.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;