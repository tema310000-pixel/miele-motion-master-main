import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";

const VIDEO_DURATION = 6; // seconds
const SCROLL_HEIGHT_MULTIPLIER = 2.3; // How many viewport heights to scroll through

export function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [videoDuration, setVideoDuration] = useState(VIDEO_DURATION);
  const currentTimeRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to video time
  const videoTime = useTransform(scrollYProgress, [0, 1], [0, videoDuration]);

  // Content opacity based on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => {
      setIsVideoLoaded(true);
      video.pause();
      // Nudge to render the first frame on mobile.
      if (video.currentTime === 0) {
        video.currentTime = 0.01;
      }
    };

    const handleLoadedMetadata = () => {
      if (video.duration && isFinite(video.duration)) {
        setVideoDuration(video.duration);
      }
      if (video.readyState >= 2) {
        markReady();
      }
    };

    const handleLoadedData = () => {
      if (video.duration && isFinite(video.duration)) {
        setVideoDuration(video.duration);
      }
      markReady();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", markReady);

    video.muted = true;
    video.playsInline = true;
    video.load();

    if (video.readyState >= 2) {
      markReady();
    }
    
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", markReady);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideoLoaded) return;

    const unlockPlayback = () => {
      video
        .play()
        .then(() => {
          video.pause();
        })
        .catch(() => {
          // Some browsers require a user gesture; ignore errors.
        });

      window.removeEventListener("pointerdown", unlockPlayback);
      window.removeEventListener("touchstart", unlockPlayback);
      window.removeEventListener("wheel", unlockPlayback);
    };

    window.addEventListener("pointerdown", unlockPlayback, { passive: true });
    window.addEventListener("touchstart", unlockPlayback, { passive: true });
    window.addEventListener("wheel", unlockPlayback, { passive: true });

    let animationFrameId: number | null = null;
    let currentVideoTime = video.currentTime || 0;
    let isRunning = true;

    // Continuous smooth interpolation loop
    const animate = () => {
      if (!isRunning) return;
      
      const targetTime = currentTimeRef.current;
      
      // Smooth interpolation - always move towards target
      const diff = targetTime - currentVideoTime;
      const smoothing = 0.3; // Higher = faster response, lower = smoother
      currentVideoTime += diff * smoothing;
      
      // Clamp to valid range
      currentVideoTime = Math.min(Math.max(currentVideoTime, 0), videoDuration);
      
      if (video.readyState >= 2) {
        video.currentTime = currentVideoTime;
        setShowContent(currentVideoTime < videoDuration * 0.5);
      }
      
      // Always continue animation loop
      animationFrameId = requestAnimationFrame(animate);
    };

    // Subscribe to videoTime changes from scroll
    const unsubscribe = videoTime.on("change", (time) => {
      currentTimeRef.current = time;
    });

    // Start continuous animation loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      unsubscribe();
      isRunning = false;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }

      window.removeEventListener("pointerdown", unlockPlayback);
      window.removeEventListener("touchstart", unlockPlayback);
      window.removeEventListener("wheel", unlockPlayback);
    };
  }, [videoTime, isVideoLoaded, videoDuration]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${100 * SCROLL_HEIGHT_MULTIPLIER}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-primary">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/miele-hero.mp4"
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 gradient-hero" />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="container-premium text-center text-primary-foreground">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium uppercase tracking-wider border border-primary-foreground/30 rounded-full backdrop-blur-sm">
                Авторизованный сервисный партнёр MIELE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight mb-6 text-balance"
            >
              Профессиональный ремонт
              <br />
              <span className="text-miele-red text-[1.05em]">техники MIELE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
            >
              Сертифицированные мастера, оригинальные запчасти, премиальное обслуживание.
              <br className="hidden md:block" />
              Немецкая инженерная экспертиза для вашего дома.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">Заказать ремонт</Link>
              </Button>
              <Button variant="ghost-dark" size="xl" asChild>
                <Link to="/pricing">
                  <Play className="h-4 w-4" />
                  Как это работает
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/70 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Прокрутите для просмотра</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
