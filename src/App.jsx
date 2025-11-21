import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  // 1
  const bio = {
    myName: "Єлизавета",
    greeting: "Ласкаво просимо до нашого сайту!",
    imgURL: "https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-pink-bow-ribbon-png-image_10448654.png",
  }


  const post = (
    <>
      <div className="bio__wrp">
        <h2 className="bio__name">{bio.myName}</h2>
        <p className="bio__greeting">{bio.greeting}</p>
        <img className="bio__img" style={{width: "200px", height:"200px"}} src={bio.imgURL} alt="bow" />
      </div>
    </>
  );

  // 2
  const site = {
    title: "✨Мій улюблений сайт✨",
    name: "React Documentation",
    url: "https://reactjs.org/"
  }
  const sitePost = (
    <>
    <div className="sitePost__wrp">
      <h3 className='sitePost__title'>{site.title}</h3>
      <a className='sitePost__url' href={site.url} target='_blank' rel='noopener noreferrer'>{site.name}</a>
    </div>
    </>
  )

  // 3
  const firstNum = 3;
  const secondNum = 2;
  const sum = firstNum + secondNum;

  // 
  const colors = ["R", "G", "B"];

  return (
    <>

      {post}

      {sitePost}

      <div className="sum__wrp">
      <h3 className='sum__title'>Сума чисел</h3>
      <p className='sum'>{firstNum} + {secondNum} = {sum}</p>
      </div>

      <div className="colors__wrp">
      <h3 className="colors__title">Colors</h3>
      <ul className="colors__list">
        {colors.map((color, index) => {
          let liColor = [];
          switch(color){
            case "R":
              liColor.color = "red"
              break;
            case "G":
              liColor.color = "green"
              break;
            case "B":
              liColor.color = "blue"
              break;
          default:
            liColor.color = "black"
          }
          return <li className='colors__item' key={index} style={liColor}>{color}</li>
        })}
      </ul>
      </div>
    </>
  )
}

export default App
