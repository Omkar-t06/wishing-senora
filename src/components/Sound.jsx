import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
    return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-slate-600 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8"
      >
        <p className="font-light text-[#E0FFFF]">Gaana pareshan tho nhi karega?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2 text-rose-500"
          >
            Nope!
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded text-rose-400"
          >
            Ha..
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

function Sound() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const eventTypes = ["click", "keydown", "touchstart", "wheel"];

    const handleFirstUserInteraction = () => {
        const musicConsent = localStorage.getItem("musicConsent");
        if (musicConsent === "true" && !isPlaying) {
          audioRef.current.play();
          setIsPlaying(true);
        }
    
        eventTypes.forEach((event) =>
          document.removeEventListener(event, handleFirstUserInteraction)
        );
      };
    

    useEffect(() => {
        const consent = localStorage.getItem('musicConsent');
        const consentTime = localStorage.getItem("consentTime");

        if(
            consent &&
            consentTime &&
            new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
        )  {
            setIsPlaying(consent === "true");
      
            if (consent === "true") {
              eventTypes.forEach((event) =>
                document.addEventListener(event, handleFirstUserInteraction)
              );
            }
          } else {
            setShowModal(true);
          }

        return () => {
            eventTypes.forEach((event) =>
                document.removeEventListener(event, handleFirstUserInteraction)
            );
        };
        }, []);
        

    const toggleMusic = () => {
        const newState = !isPlaying;
        setIsPlaying(!isPlaying);
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem('musicConsent', String(newState));
        localStorage.setItem("consentTime", new Date().toISOString());
        setShowModal(false);
    }

    return (
        <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} toggle={toggleMusic} />
            )}
            <audio loop ref={audioRef}>
                <source src={'./audio/bg-music-senora.mpeg'} type='audio/mpeg'/>
                Your browser does not support the audio element.
            </audio>
            <motion.button
            onClick={toggleMusic}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{delay: 1}}
                className='w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 bg-[#E0FFFF] hover:bg-[#F8F8F8]'
                aria-label='Toggle sound'
                name='Toggle sound'
            >
                {isPlaying ? (
                    <Volume2
                        className="w-full h-full text-foreground group-hover:text-accent"
                        strokeWidth={1.5}
                    />
                    ) : (
                    <VolumeX
                        className="w-full h-full text-foreground group-hover:text-accent"
                        strokeWidth={1.5}
                    />
            )}
            </motion.button>
        </div>
    )
}

export default Sound;