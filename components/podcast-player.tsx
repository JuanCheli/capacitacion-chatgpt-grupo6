"use client";

import { useEffect, useRef } from "react";

export default function PodcastPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    console.log("Audio ready:", audioRef.current);
  }, []);

  return (
    <section className="space-y-6">
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div className="text-center px-6">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            ¿Te gustaría escuchar sobre IA y ChatGPT?
          </h2>
          <p className="text-lg pt-2">Te recomendamos el siguiente Podcast!</p>
        </div>
        <div className="max-w-2xl mx-auto px-6">
          <audio ref={audioRef} controls preload="metadata" className="w-full min-w-2xl">
            <source src="/IA-podcast.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      </div>
    </section>
  );
}
