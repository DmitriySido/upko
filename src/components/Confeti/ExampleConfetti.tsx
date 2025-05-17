import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const ExampleConfetti: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Обновление размеров окна
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}>
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={300} // кол-во частиц
        gravity={1.2}        // сила притяжения (чем больше — тем быстрее падают)
        wind={0.01}          // "ветер" в сторону
        initialVelocityX={5} // горизонтальная скорость
        initialVelocityY={15} // вертикальная скорость (ускорит начало падения)
        recycle={false}      // не повторять анимацию
      />
    </div>
  );
};

export default ExampleConfetti;
