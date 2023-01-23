function Ternarycomponent() {
    let isLoggedIn = false;
    return isLoggedIn ? <h2>Welcome Admin</h2> : <h2>Please Login</h2>;
  }
  
  
  export default Ternarycomponent;
  