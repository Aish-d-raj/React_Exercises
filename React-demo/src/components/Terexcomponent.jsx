function Terexcomponent() {
    let element = null;
    let isLoggedIn = false;
    isLoggedIn
      ? (element = <h2>Welcome Admin</h2>)
      : (element = <h2>Please Login</h2>);
    return <>{element}</>;
  }
  export default Terexcomponent;
  