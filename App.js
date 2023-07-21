import React from 'react';
import { useState } from 'react';
import './styles.css';
var data = require('./DATA.json');


export default function App() {
  const [value, setValue] = useState(''); // search bar input
  const [genre, setGenre] = useState(['Any']); // selected genres
  const [rating, setRating] = useState(['Any']); // selected ratings
  const [showG,setShowG] = useState(false); // dropdown display
  const [showR,setShowR] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [arrowG, setArrowG] = useState('arrow down')
  const [arrowR, setArrowR] = useState('arrow down')
  const [anySelectedR, setAnyR] = useState(false);
  const [anySelectedG, setAnyG] = useState(false);
  const stars = new Array(10);
  

  const onChange = (event) => {
    setValue(event.target.value); // updates search based on user input
  };
  const onClick = (event) => {
    setShowSearch(true)
  }
  const produceGenres = (event) => { // update results based on genres
    setShowSearch(true)
    if (event.target.value == 'Any') {let newSelect = !anySelectedG; setAnyG(newSelect)}
    else {
      if (genre.includes(event.target.value)) {
        let genreCopy = [...genre]
        genreCopy.splice(genreCopy.indexOf(event.target.value),1) // remove genre to hide results
        if (anySelectedG && !genre.includes('Any')) {genreCopy = [...genreCopy,'Any']}
        setGenre(genreCopy)
      }
      else {
        let genreCopy = [...genre,event.target.value]
        setGenre(genreCopy)
      }
    }
    
  }

  const produceRatings = (event) => { // updates search based on ratings
    setShowSearch(true)
    if (event.target.value == 'Any') {let newSelect = !anySelectedR; setAnyR(newSelect)}
    else {
      if (rating.includes(event.target.value)) {
        let ratingCopy = [...rating]
        ratingCopy.splice(ratingCopy.indexOf(event.target.value),1)
        if (anySelectedR && !rating.includes('Any')) {ratingCopy = [...ratingCopy,'Any']}
        setRating(ratingCopy)
      }
      else {
        let ratingCopy = [...rating,event.target.value]
        setRating(ratingCopy)
      }
    }
    }
  
    
    const showListGenres = (event)=>{
      if (showG == false) {setShowG(true); setArrowG('arrow up')}
      else {setShowG(false); setArrowG(true); setArrowG('arrow down')}
    }

    const showListRatings = (event)=>{
      if (showR == false) {setShowR(true); setArrowR('arrow up')}
      else {setShowR(false); setArrowR('arrow down')}
    }



  return (
    <div className="App">

      <div className="search-container">
        <div className="search-inner" >
          <input class="movie-name" type="text" placeholder="Enter movie name" value={value} onClick={onClick} onChange={onChange} />
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase(); // filter search by input
              const fullName = item.name.toLowerCase();

              return (
                (searchTerm &&
                fullName.includes(searchTerm) &&
                fullName !== searchTerm) || (showSearch && !searchTerm)
              );
            })
            .filter((item)=> { // filter by selected genres
                return genre.includes(item.Genre) || (genre.includes('Any') && genre.length==1)|| genre.length==0 || anySelectedG
                  })
            .filter((item)=> { // filter by selected ratings
                return rating.includes(item.Rating[0]) || (rating.includes('Any') && rating.length==1)|| rating.length==0 ||anySelectedR
                  })
            
            .map((item) => ( // show the results
              
              <div
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
                <span>{item.Genre}</span>
                <br/>
                <img class="star" src={"../images/"+item.Rating[0]+"StarRating.png"} alt="movRating"/>

              </div>

            ))
            
            }
        </div>
      </div> 
  

      <div class="multi-selector">

      <div class="select-field">
      <td class="input-selector">Rating
      <span class="down-arrow" onClick={showListRatings}><i class={arrowR}></i></span>
      </td>
      </div>
      <div class="rating-dropdown">
      <td>
          <div class="list" style={{display:showR ? "flex":"none"}}>
            <td> 
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= 'Any'/>  Any Rating</tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '1'/>
          <img class="star" src="../images/1StarRating.png" alt="1"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '2'/>
          <img class="star" src="../images/2StarRating.png" alt="2"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '3'/>
          <img class="star" src="../images/3StarRating.png" alt="3"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '4'/>
          <img class="star" src="../images/4StarRating.png" alt="4"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '5'/>
          <img class="star" src="../images/5StarRating.png" alt="5"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '6'/>
          <img class="star" src="../images/6StarRating.png" alt="6"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '7'/>
          <img class="star" src="../images/7StarRating.png" alt="7"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '8'/>
          <img class="star" src="../images/8StarRating.png" alt="8"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '9'/>
          <img class="star" src="../images/9StarRating.png" alt="9"/>
          </tr>
          </label>
          <label>
          <tr><input class="checkbox" type="checkbox" onChange={produceRatings} value= '10'/>
          <img class="star" src="../images/10StarRating.png" alt="10"/>
          </tr>
          </label>
          
          </td>

          </div>
      </td>

      </div>
      </div>

      <div class="multi-selector">

      <div class="select-field">
      <td class="input-selector">Genre                
      <span class="down-arrow" onClick={showListGenres}><i class={arrowG}></i></span>
      </td>
      </div>
      <div class="genre-dropdown">
      <td>
          <div class="list" style={{display:showG ? "flex":"none"}}>
            <td>
          <tr><label>
            <input class="checkbox" type="checkbox" onChange={produceGenres} value= 'Any'/>  Any Genre
            </label>
          </tr>
          <tr><label>
            <input class="checkbox" type="checkbox" onChange={produceGenres} value= 'Action'/>  Action
            </label>
          </tr>
          <tr><label>
            <input class="checkbox" type="checkbox" onChange={produceGenres} value= 'Comedy'/>  Comedy
            </label>
          </tr>
          <tr><label>
            <input class="checkbox" type="checkbox" onChange={produceGenres} value= 'Drama'/>  Drama
            </label>
          </tr>
          <tr><label>
            <input class="checkbox" type="checkbox" onChange={produceGenres} value= 'Thriller'/>  Thriller
            </label>
          </tr>
          </td>
          </div>
        </td> 
      </div>
      </div>

    </div>
  );
}

