import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div >
      <div>
      <div className="floatleft " style={{margin: " -9px 30px "}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-2k429Cl-fbdV-131OZMSu5byPJEUCxryg&usqp=CAU" width="120px" height="auto"/>
      </div>
      <div className="order">
     <ul className="unorder"><li><img src = "https://static.thenounproject.com/png/2965951-200.png" width="25px" height="25px"/><span style={{display:"block"}} >Discover</span></li>
     <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5z4mLY5q13A48Q4hwWK4Zq6B29GQ748heAg&usqp=CAU" width="25px" height="25px" /><span style={{display:"block"}} >People</span></li>
     <li><img src="https://image.shutterstock.com/image-vector/elearning-line-icon-high-quality-260nw-760996126.jpg" width="25px" height="25px"/><span style={{display:"block"}} >learining</span></li>
     <li><img src="https://cdn1.iconfinder.com/data/icons/business-solid-4/64/Business_Case_Stationery_job-512.png" width="25px" height="25px" /><span style={{display:"block"}} >Jobs</span></li> 
     <li>
     <button class="btn btn-light" style={{margin:"10px 10px"}}>JoinNow</button>
     <button class="btn btn-outline-info"> sign In</button>
     </li>
     </ul>
      </div>  
      <div style={{clear:'both'}}></div> 
      <div>
      <div className="floatright" >
      <img src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" width="800px" height="500" style={{marginRight:"-100px"}}/>
      </div>
      <div className="floatleft">
     <h1 style={{color:"maroon", fontSize: "70px",fontWeight:"300", fontfamily: "Mulish", margin: "30px 30px"}} > Welcome to your<br/> professional<br/>community </h1>
     <div className="box form-control" style={{fontSize: "30px",padding: "7px 5px 5px 5px", marginLeft:"20px" }}><p>search for a job</p></div>
     <div className="box form-control" style={{fontSize: "30px",padding: "7px 5px 5px 5px", margin:"20px 20px 20px 20px"  }}><p>Find a person you know</p></div>
     <div className="box form-control" style={{fontSize: "30px",padding: "7px 5px 5px 5px" , marginLeft:"20px" }}><p>Learn a new skill</p></div>
     
     </div>
      </div>
      </div>  
    
      </div>
  );
}

export default App;
