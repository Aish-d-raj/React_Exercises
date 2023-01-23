import './css/Registrationcomponent.css';
function Registrationcomponent(){
    return(
        <div class="reg">
        <div id="main">
        <div class="h-tag">
        <h2>Create Your Account</h2>
        </div>
        
        <div class="login">
        <table cellspacing="2" align="center" cellpadding="8" border="0">
        <tr>
        <td align="right">Enter Name :</td>
        <td><input type="text" placeholder="Enter user here" class="tb" /></td>
        </tr>
        <tr>
        <td align="right">Enter Email ID :</td>
        <td><input type="text" placeholder="Enter Email ID here" class="tb" /></td>
        </tr>
        <tr>
        <td align="right">Enter Username :</td>
        <td><input type="text" placeholder="Enter Username here" class="tb" /></td>
        </tr>
        <tr>
        <td align="right">Enter Password :</td>
        <td><input type="password" placeholder="Enter Password here" class="tb" /></td>
        </tr>
        <tr>
        <td align="right">Enter Confirm Password :</td>
        <td><input type="password" placeholder="Enter Password here" class="tb" /></td>
        </tr>
        <tr>
        <td></td>
        <td>
        <input type="reset" value="Clear Form" id="res" class="btn" />
        <input type="submit" value="Create Account" class="btn" /></td>
        </tr>
        </table>
        </div>
        
        </div>
       
        </div>
    );

    
}

export default Registrationcomponent;