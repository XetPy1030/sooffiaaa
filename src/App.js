import logo from './logo.svg';
import './App.css';
import {Image} from "@mantine/core";

import image from "./img_1.png"
import {useEffect, useState} from "react";



const text = "с днем рождения! Желаю счастья, поздравлений, большого куша!";
const neededText = "капибара"


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


    const [findedText, setFindedText] = useState("")
    const handleClick = (character) => {
        setFindedText(findedText + character)
    };

    const characterElements = Array.from(text, (character, index) => (
        <span onClick={() => handleClick(character)}>
            {character}
        </span>
    ));


  return (
      <div className="App">
          <img
              src={image}
              alt="Your Image"
              className={`${value} ${isInverted ? 'inverted' : ''}`}
              style={{ backgroundColor: currentColor }}
          />
          <h1>с днем рождения! Желаю счастья, поздравлений, большого куша!
          </h1>



          <div>{characterElements}</div>
          {findedText.includes(neededText) ? <div>
              Поражающее воображение место, где умело хранится волшебство в виде множества флаконов и ампул, пронизывает воздух аура загадочности. Здесь, в этом таинственном пространстве, скрыты драгоценные эликсиры, волшебные зелья и исцеляющие эссенции. Стеклянные сосуды в сияющих цветах, словно пленники волшебной пещеры, заточены в стойлах из полированного дерева. Здесь находятся редкие и могущественные ингредиенты, приведенные в гармонию со светом, создающим иллюзию плавающих в воздухе лучей. Это место, где каждая ампула является замкнутой сказкой, и каждый флакон таит в себе секреты природы и знание древних мудрецов. Оно дарит надежду и исцеление, наполняет душу умиротворением, будоражит воображение и раскрывает тайны, скрытые в пространстве между миром сновидений и реальностью.
          </div> : <div></div>}
      </div>

  );
}

export default App;
