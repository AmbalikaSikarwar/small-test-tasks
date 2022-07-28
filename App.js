import React, {useState, useEffect} from 'react';
import "./App.css"
import ContactCard from "./components/ContactCard";

function Apps() {
  
// const results = [
//   {avatarUrl:  "http://via.placeholder.com/150",
//   name:"Jenny Han",
//   email:"jenny.han@notreal.com",
//   age : 25
// },
// {
//   avatarUrl : "http://via.placeholder.com/150",
//   name:"paul Han" ,
//   email:"paul.han@notreal.com",
//   age : 28

// },
// {
//   avatarUrl:"http://via.placeholder.com/150",
//     name:"Michael Han", 
//     email:"michael.han@notreal.com",
//     age : 30
// },
// {
//   avatarUrl : "http://via.placeholder.com/150",
//     name:"paul Han" ,
//     email:"paul.han@notreal.com",
//     age:28
// }
// ];

const [results, setResults] = useState([])

useEffect(() => {
  fetch("https://randomuser.me/api/?results=5")
  .then(res => res.json())
  .then(data => {console.log(data)
  setResults(data.results)
  });

}, [])



  return (
    <div>
   { results.map((result, index) => {
     return(
      <ContactCard key={index}
      avatarUrl = {result.picture.large}
      name={result.name.first} 
      email= {result.email}
      age = {result.dob.age}
      />
     )
   })

   }
  
    </div>
  )
}

export default Apps;