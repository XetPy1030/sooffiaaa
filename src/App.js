import logo from './logo.svg';
import './App.css';
import {Image} from "@mantine/core";

import image from "./img_1.png"
import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const [isInverted, setIsInverted] = useState(false);
    const [currentColor, setCurrentColor] = useState('red');

    useEffect(() => {
        // Функция, которая будет инвертировать изображение по вертикали
        const invertImage = () => {
            setIsInverted((prevIsInverted) => !prevIsInverted);
        };

        // Функция, которая будет менять цвет каждую секунду
        const changeColor = () => {
            const colors = ['red', 'green', 'blue'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setCurrentColor(randomColor);
        };

        // Установка интервала для инвертирования изображения
        const invertInterval = setInterval(invertImage, 500);

        // Установка интервала для смены цвета
        const colorInterval = setInterval(changeColor, 500);

        // Очистка интервалов при размонтировании компонента
        return () => {
            clearInterval(invertInterval);
            clearInterval(colorInterval);
        };
    }, []);


  return (
      <div className="App">
          <img
              src={image}
              alt="Your Image"
              className={`${value} ${isInverted ? 'inverted' : ''}`}
              style={{ backgroundColor: currentColor }}
          />
      </div>

  );
}

export default App;
