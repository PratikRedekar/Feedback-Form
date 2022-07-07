import React from 'react';
import './App.css';

import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
}

function App() {

const stars = Array(5).fill(0);
const [currentValue, setCurrentValue] = React.useState(0);
const [hoverValue, setHoverValue] = React.useState(undefined);


const handleClick = value => {
  setCurrentValue(value)
};

const handleMouseOver = value => {
  setHoverValue(value)
}

const handleMouseLeave = () => {
  setHoverValue(undefined)
}
  return (
    <div className='Maindiv'>
      <h6>  &nbsp;tt</h6>
    <div style={styles.container}>
      <h2>Hotel FeedBack Form</h2>
      <div style={styles.stars}>
        {stars.map((_, index) =>{
          return(
            <FaStar
              key={index} 
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color = {(hoverValue || currentValue)> index ? colors.orange : colors.grey}
              
              style={{
                marginRight: 10,
                cursor: "pointer"

              }}
              
            />
          )
        })}
      </div>
      <br/>
      <fieldset className='fieldset'>
     <textarea
     placeholder="What's your experience?"
     style={styles.textarea}
   />
   
   <a>Name: </a>
   <input placeholder='Enter Name' style={styles.text} />
   <br/><br/>
   <a>Number: </a>
   <input  type="tel" name="phone" placeholder="0000-0000-00" pattern="[0-9]{4}-[0-9]{4}-[0-9]{2}" required />
   <br/><br/>
   <a>Email: </a>
   <input type="email" id="email" name="email"></input>
   <br/><br/>
   </fieldset>
   <br/>
   <button
     style={styles.button}
   >
     Submit
   </button>
   <br/>
   </div>
   </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  
}


export default App;
