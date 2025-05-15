// @ts-nocheck
import React, { useEffect, useRef } from "react";
import "./VideoSection.css";

const YT_SRC =
  "https://www.youtube.com/embed/7E_ju8V8iow?enablejsapi=1&controls=0&rel=0&modestbranding=1&playsinline=1&fs=0&mute=1&showinfo=0";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const loadYTScript = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve();
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          window.onYouTubeIframeAPIReady = () => resolve();
          document.body.appendChild(tag);
        }
      });
    };

    let observer: IntersectionObserver;

    loadYTScript().then(() => {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && iframeRef.current && !playerRef.current) {
            playerRef.current = new window.YT.Player(iframeRef.current, {
              events: {
                onReady: (e) => {
                  e.target.playVideo();
                },
              },
            });
          }
        },
        { threshold: 0.4 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="video-section" ref={sectionRef}>
      <iframe
        ref={iframeRef}
        className="video-iframe"
        src={YT_SRC}
        title="UPKO Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoSection;
