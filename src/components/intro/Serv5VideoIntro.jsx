import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Maximize2
} from 'lucide-react';
import '../../styles/serv5-kinetic-intro.css';

export default function Serv5VideoIntro({ onComplete, lang = 'ar' }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [needsSoundGesture, setNeedsSoundGesture] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('00:00');
  const [durationStr, setDurationStr] = useState('00:10');
  const [isExiting, setIsExiting] = useState(false);

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleComplete = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 650);
  };

  // Video Autoplay & Browser Audio Policy Handling
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const video = videoRef.current;
    if (video) {
      video.muted = false;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch(() => {
            // Browser blocked unmuted autoplay: fallback to muted autoplay and notify user
            video.muted = true;
            setIsMuted(true);
            setNeedsSoundGesture(true);
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          });
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleComplete();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (!video.muted) {
      setNeedsSoundGesture(false);
    }
  };

  const handleUnmuteGesture = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setIsMuted(false);
    setNeedsSoundGesture(false);
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const current = video.currentTime;
    const dur = video.duration || 10;
    const pct = Math.min(100, (current / dur) * 100);

    setProgress(pct);
    setCurrentTimeStr(formatTime(current));
    setDurationStr(formatTime(dur));
  };

  const handleVideoEnded = () => {
    handleComplete();
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="serv5-video-intro-screen"
          className="serv5-video-intro-root"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            opacity: 0.98,
            transition: { duration: 0.65, ease: [0.85, 0, 0.15, 1] }
          }}
        >
          {/* Ambient Lighting Backdrop with Dynamic Glow */}
          <div className="video-intro-ambient-lighting" aria-hidden="true">
            <div className="ambient-spotlight-top" />
            <div className="ambient-spotlight-center" />
            <div className="ambient-grid-overlay" />
          </div>

          {/* Top Header Navigation */}
          <div className="video-intro-top-bar">
            {/* Brand Live Badge */}
            <div className="video-intro-brand-pill">
              <span className="live-pulsing-dot" />
              <span className="brand-name">SERV5</span>
              <span className="badge-divider">|</span>
              <span className="badge-title font-mono">
                {isRtl ? 'العرض التعريفي الرسمي' : 'OFFICIAL INTRO PRESENTATION'}
              </span>
            </div>

            {/* Quick Actions (Sound & Skip) */}
            <div className="video-intro-top-actions">
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={toggleMute}
                className={`video-control-pill-btn ${isMuted ? 'is-muted' : ''}`}
                title={isMuted ? (isRtl ? 'تشغيل الصوت (M)' : 'Unmute (M)') : (isRtl ? 'كتم الصوت (M)' : 'Mute (M)')}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                <span>{isMuted ? (isRtl ? 'الصوت مكتوم' : 'Muted') : (isRtl ? 'الصوت مفعّل' : 'Sound On')}</span>
              </button>

              {/* Skip to Site */}
              <button
                type="button"
                onClick={handleComplete}
                className="video-skip-site-btn"
                title={isRtl ? 'تخطي إلى الموقع (Esc)' : 'Skip to Website (Esc)'}
              >
                <span>{isRtl ? 'دخول الموقع' : 'Enter Site'}</span>
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Center Stage: The Cinema Theater Screen */}
          <div className="video-theater-stage">
            {/* Background Blur Glow mirroring the video */}
            <div className="video-mirror-glow" aria-hidden="true" />

            {/* The Main Video Player Card */}
            <div className="video-player-card">
              <video
                ref={videoRef}
                className="video-element"
                src="/serv5-intro.mp4"
                poster="/serv5-intro-poster.jpg"
                playsInline
                autoPlay
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                onClick={togglePlayPause}
              >
                {/* Fallback sources */}
                <source src="/serv5-intro.mp4" type="video/mp4" />
                <source src="/WhatsApp%20Video%202026-11-24%20at%204.33.26%20PM.mp4" type="video/mp4" />
                {isRtl ? 'متصفحك لا يدعم تشغيل هذا الفيديو.' : 'Your browser does not support the video tag.'}
              </video>

              {/* Pause Overlay Indicator */}
              {!isPlaying && (
                <div className="video-pause-overlay" onClick={togglePlayPause}>
                  <div className="play-pulse-circle">
                    <Play size={28} fill="currentColor" />
                  </div>
                  <span>{isRtl ? 'انقر للاستئناف' : 'Click to Resume'}</span>
                </div>
              )}

              {/* Floating "Click to Unmute" Prompt if browser muted autoplay */}
              {needsSoundGesture && isPlaying && (
                <button
                  type="button"
                  className="floating-unmute-prompt"
                  onClick={handleUnmuteGesture}
                  title={isRtl ? 'انقر لتشغيل الصوت' : 'Click to Unmute'}
                >
                  <Volume2 size={18} className="unmute-anim-icon" />
                  <span>{isRtl ? 'انقر للاستماع إلى الصوت 🔊' : 'Tap to enable audio 🔊'}</span>
                </button>
              )}

              {/* Bottom Integrated Controls Bar */}
              <div className="video-player-bottom-bar">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  className="bar-icon-btn"
                  onClick={togglePlayPause}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
                </button>

                {/* Sound Button */}
                <button
                  type="button"
                  className="bar-icon-btn"
                  onClick={toggleMute}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                {/* Progress Track */}
                <div className="video-timeline-track" onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                  if (videoRef.current && videoRef.current.duration) {
                    videoRef.current.currentTime = ratio * videoRef.current.duration;
                  }
                }}>
                  <div
                    className="video-timeline-fill"
                    style={{ width: `${progress}%` }}
                  >
                    <span className="video-timeline-scrubber" />
                  </div>
                </div>

                {/* Timestamp */}
                <span className="video-timestamp font-mono">
                  {currentTimeStr} / {durationStr}
                </span>

                {/* Fast Skip Arrow */}
                <button
                  type="button"
                  className="bar-skip-arrow-btn"
                  onClick={handleComplete}
                  title={isRtl ? 'تخطي إلى الموقع' : 'Skip'}
                >
                  <span>{isRtl ? 'تخطي' : 'Skip'}</span>
                  <ArrowIcon size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Info Line */}
          <div className="video-intro-footer">
            <span className="footer-coords font-mono">
              SERV5 DIGITAL CO. · 16+ YEARS OF ENGINEERING
            </span>
            <div className="footer-keys-hint">
              <span>{isRtl ? 'اضغط Space للإيقاف · Esc للتخطي · M للصوت' : 'Press Space to Pause · Esc to Skip · M for Mute'}</span>
            </div>
            <span className="footer-locale font-mono">
              {isRtl ? 'المملكة العربية السعودية & مصر' : 'SAUDI ARABIA & EGYPT'}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
