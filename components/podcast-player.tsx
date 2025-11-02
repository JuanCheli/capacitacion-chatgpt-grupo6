"use client";

import { useEffect, useRef } from "react";

export default function PodcastPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    console.log("Audio ready:", audioRef.current);
  }, []);

  return (
    <section className="space-y-4 md:space-y-6">
      <div className="bg-card text-card-foreground flex flex-col gap-4 md:gap-6 rounded-xl border py-4 md:py-6 shadow-sm">
        <div className="text-center px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
            ¿Te gustaría escuchar sobre IA y ChatGPT?
          </h2>
          <p className="text-base sm:text-lg pt-2 text-muted-foreground">
            Te recomendamos el siguiente Podcast!
          </p>
        </div>
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6">
          <audio 
            ref={audioRef} 
            controls 
            preload="metadata" 
            className="w-full h-12 sm:h-14"
            style={{ maxWidth: '100%' }}
          >
            <source src="/IA-podcast.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      </div>
    </section>
  );
}
