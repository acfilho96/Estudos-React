import HelloWorld from "./HelloWorld";
import React from 'react';
import './App.css';

function HelloWorldList({ helloWorldProps }) {
  return (
    helloWorldProps.map((item) => (
      <div className={`${item.style}`}>
        <HelloWorld hello={item.hello} world={item.world} date={item.date} />
      </div>
    ))
  )
}
   /* if (repeatNumber === 10){
   
    return (

    <div>

    <div className="dez">
      <HelloWorld hello="Hello" world="World" date={new Date()} />
    </div>

    <div className="nove">
        <HelloWorld hello="Hello" world="Wooorld" date={new Date()} />
    </div>

    <div className="oito">
        <HelloWorld hello="Olá" world="Mundo!" date={new Date()} />
    </div>

    <div className="sete">
        <HelloWorld hello="Cheguei" world="Pessoal" date={new Date()} />
    </div>

    <div className="seis">
        <HelloWorld hello="H3L0" world="W0RLD" date={new Date()} />
    </div>

    </div>

  )

}

if (repeatNumber === 5){
    return (
      <div className="cinco">
        <HelloWorld hello="HeLlO" world="WoRlD" date={new Date()} />
      </div>
    )
}

if (repeatNumber === 4){
    return (
      <div className="quatro">
        <HelloWorld hello="World" world="Hello" date={new Date()} />
      </div>
    )
}

if (repeatNumber === 3){
    return (
      <div className="tres">
        <HelloWorld hello="Hello" world="Is Me" date={new Date()} />
      </div>
    )
}

if (repeatNumber === 2){
    return (
      <div className="dois">
        <HelloWorld hello="Hello" world="How Are You?" date={new Date()} />
      </div>
    )
  }

if (repeatNumber === 1){
    return (
      <div className="um">
        <HelloWorld hello="Isso é tudo" world="Pessoal" date={new Date()} />
      </div>
    )
}
*/



export default HelloWorldList;