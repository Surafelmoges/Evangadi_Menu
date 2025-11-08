import './App.css'
import './assets/style.css'
import Header from './Components/Header/Header'
import userArr from './assets/data'
import MainC from './Components/Main/MainC'

function App() {
  

  return (
    <div className="all-container">
         
      <Header />  
       <div className="foods-container">        
      {userArr.map(function(us) {
        return (
        
          <MainC 
          
            id = {us.id}
            title = {us.title}
            category = {us.category}
            price = {us.price}
            img = {us.img}
            desc = {us.desc}  
          />
        )
      })}  
   </div>
    </div>
  
  )
}

export default App
