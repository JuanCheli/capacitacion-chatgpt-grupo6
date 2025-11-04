"use client";

import { useEffect, useRef } from "react";

type Podcast = {
  id: string;
  title: string;
  description?: string;
  src: string;
};

export default function PodcastPlayer() {
  const podcasts: Podcast[] = [
    {
      id: "ia-podcast",
      title: "IA Podcast — Conversaciones sobre IA",
      description: "Charlas y entrevistas sobre inteligencia artificial.",
      src: "/IA-podcast.mp3",
    },
    {
      id: "introduccion-podcast",
      title: "Introduccion a la capacitacion — Guía rápida",
      description:
        "Una charla introductoria sobre cómo aprender a usar ChatGPT paso a paso y sin presiones.",
      src: "/introduccion-podcast.mp3",
    },
  ];

  // refs para cada elemento audio (para poder pausarlos entre sí)
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  useEffect(() => {
    // solo para debug
    console.log("Audio elements:", audioRefs.current);
  }, []);

  const handlePlay = (index: number) => {
    // Pausa todos los demás audios cuando se reproduce uno
    audioRefs.current.forEach((audioEl, i) => {
      if (i !== index && audioEl && !audioEl.paused) {
        audioEl.pause();
      }
    });
  };

  return (
    <section className="space-y-6">
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div className="text-center px-6">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            ¿Te gustaría escuchar sobre IA y ChatGPT?
          </h2>
          <p className="text-lg pt-2">Te recomendamos los siguientes Podcasts!</p>
        </div>

        <div className="max-w-3xl mx-auto px-6 w-full space-y-4">
          {podcasts.map((p, index) => (
            <article
              key={p.id}
              className="bg-white/5 p-4 rounded-lg border flex flex-col gap-3"
              aria-labelledby={`${p.id}-title`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3
                    id={`${p.id}-title`}
                    className="text-lg font-medium leading-snug"
                  >
                    {p.title}
                  </h3>
                  {p.description && (
                    <p className="text-sm opacity-80 mt-1">{p.description}</p>
                  )}
                </div>
              </div>

              <div>
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  controls
                  preload="metadata"
                  className="w-full"
                  onPlay={() => handlePlay(index)}
                  aria-label={`${p.title} reproductor de audio`}
                >
                  <source src={p.src} type="audio/mpeg" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
