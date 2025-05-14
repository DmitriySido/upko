// @ts-nocheck
import React, { useEffect, useRef } from "react";
import "./VideoSection.css";

const YT_SRC =
  "https://www.youtube.com/embed/7E_ju8V8iow?enablejsapi=1&controls=0&rel=0&modestbranding=1&playsinline=1&fs=0";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  let player = null;

  useEffect(() => {
    // Load YouTube IFrame API if not loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    let observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Wait for YT API to be ready
          window.onYouTubeIframeAPIReady = () => {
            player = new window.YT.Player(iframeRef.current, {
              events: {
                onReady: (e) => {
                  e.target.playVideo();
                },
              },
            });
          };
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
