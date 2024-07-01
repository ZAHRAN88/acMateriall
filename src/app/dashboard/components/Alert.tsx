import React, { useEffect, useRef, useState } from 'react';
import { Alert } from "@mui/material";
import { gsap } from 'gsap';

interface AlertProps {
  label: string;
}

const AlertSuccess: React.FC<AlertProps> = ({ label }) => {
  const [visible, setVisible] = useState(true);
  const alertRef = useRef(null);

  useEffect(() => {
    if (alertRef.current) {
      gsap.fromTo(alertRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
    }

    const timer = setTimeout(() => {
      gsap.to(alertRef.current, { opacity: 0, y: -50, duration: 0.5, onComplete: () => setVisible(false) });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div ref={alertRef} className='fixed top-5 left-[50%] translate-x-[-50%]'>
          <Alert severity="success">{label}</Alert>
        </div>
      )}
    </>
  );
};

export default AlertSuccess;
