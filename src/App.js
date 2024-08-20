

// import { Card } from "flowbite-react";
// import { CardItems } from "./components/CardItems";
import CardPage from "./components/CardPage";
import { Footers } from "./components/Footers";
import Header from "./components/Header";
import { Review } from "./components/Review";
import { Slider } from "./components/Slider";



function App() {

  
  // const { mode,  } = useThemeMode();
  //computedMode, setMode, toggleMode, clearMode
  

  return (
    <div className={ ` max-w-[1000px]  mx-auto px-3 py-2  `}>
      <Header />
      <div className="  my-4 w-[100%] mx-auto">
      <Slider />
      <CardPage />
      <Review />
      
      </div>
    
       <Footers />
     
    </div>
  );
}

export default App;
