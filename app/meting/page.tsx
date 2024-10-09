"use client"
import { useEffect, useRef } from 'react';

const VideoStream: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Access user's camera
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const micro = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing media devices.', error);
      }
    };

    startVideo();

    // Cleanup function to stop the video stream when component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} width="640" height="480" autoPlay muted className='border ' controls />
      <audio controls />  
    </div>
  );
};

export default VideoStream;