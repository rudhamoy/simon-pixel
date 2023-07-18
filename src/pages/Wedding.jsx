
import { useRef, useEffect } from 'react';

const Wedding = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <div className="w-[100%] h-[100vh]">
                <video ref={videoRef} autoPlay loop muted width="100%" height="100%">
                    <source 
                    src="https://player.vimeo.com/external/575741519.sd.mp4?s=4d63f336964baa2da74d77817dab772446ad6c76&profile_id=164&oauth2_token_id=57447761" 
                    type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Wedding