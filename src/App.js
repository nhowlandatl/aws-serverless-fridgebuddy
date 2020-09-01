import React from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import AWSLogin from "./components/AWSLogin";
import FullPageIntroWithFixedNavbar from "./components/FullPageIntroWithFixedNavbar";
import NavbarFixed from "./components/NavbarFixed";
// import SearchForm from "./components/SearchForm"; 
import GroceryItemResults from "./components/GroceryItemResults"; 
import AboutUs from "./components/AboutUs";
import Fridge from "./components/Fridge";
import test from "./components/test"

const App = withRouter (({ location }) => {
  return ( 
    <div className="App">
      {
        // Don't render Navbar on login page
        location.pathname !== '/login' && <NavbarFixed /> 
      }
      <Route exact path="/" component={FullPageIntroWithFixedNavbar} /> 
      <Route path="/about" component={AboutUs} /> 
      <Route path="/login" component={AWSLogin} />
      {/* <Route path="/test" component={test} />  */}
      <Route path="/search" component={test} />
      <Route path='/search' component={GroceryItemResults}/> 
      <Route path="/MyFridge" component={Fridge} />
    </div>
  );
})

// function App() {
//   return ( 
//     <div className="App">
//       <Route exact path="/login" component={AWSLogin} />
//       <NavbarFixed />     
//       <Route exact path="/" component={FullPageIntroWithFixedNavbar} /> 
//       <Route path="/test" component={test} />
//       <Route path="/search" component={test} />
//       <GroceryItemResults />
//       <Route path="/about" component={AboutUs} /> 
//       <Route path="/MyFridge" component={Fridge} />
//     </div>
//   );
// }

export default App;