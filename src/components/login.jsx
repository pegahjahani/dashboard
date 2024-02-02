import { useEffect, useState} from "react";
import "../styles/loginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [inputData, setInputData] = useState({ userName: '', password: '' })
    const[loginData , setLoginData] = useState('')
    // const [showError , setShowError] = useState(0)
    let navigate = useNavigate()
    let showError = 0
    
    const getData = async ()=>{
        const response = await axios.get('http://localhost:2000/login')
        setLoginData(response.data)
        console.log(loginData);
   
       }

    useEffect(()=>{
    getData()
    },[])
    const loginFunc = async () => {
       
        const id_loginData_fullfilled = (inputData?.password.trim().length > 0 && inputData?.userName.trim().length > 0)  
        if (id_loginData_fullfilled) { 
           return loginData.filter((item)=>{
                let userName = item.userName
                const copmare_loginData_properties = (inputData?.userName === userName) && (inputData?.password === item?.password)
                if (copmare_loginData_properties) {
                    console.log('hellooo');
                    // setShowError(1)
                    showError = 1
                    navigate("/Dashboard")
                    return true
                  }
                   console.log(showError);
                   setInputData({userName: '', password: ''})
                  
            })
        } 
       
    }
  return (
    <div className="mainPage">
      <div className="login">
        <div className="headerBox">
          <h2>login</h2>
          <img
            className="loginImage"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyElEQVR4nO2bT2sUQRDFf+QQQSSKBvHP5iImiojin5OoB00urgfxol/FiCgE8hnU/QRi9KCYYzRZgsR48BRzVBFNhBhRD+agKw1vpFlnJ5vdWZ3urQdFZl7VTqbeVvV0dyZgMBgMBoPDReAFsAbUIrU15VgmJflal9klX4B5kdeAXuKFy21Uuc75jqTsXcCsjqvyrXceGjbp/n/4ZFIWKDF3PNPkeYjw800nIkdDAWpdZn/wv2+kMAJ0C0wArAKwFsjsichhLYC1ANYCmT0ROXJpgRGgAiwC32WvgbvAMBELMARMNzHNfAYMEpkAZ4HPil0GxoDjwDZgK3BS3CfFrABniESAIS/5R0AfcBB4IDGWgAnggHyPPRH2E4EA04p5CPQo+dWU0l+VWD2KddxUxnWTHaZOWrVdAUbkd99yv7gJcZPAALAXeCLunmL69RnHnWtw7WSHqZM2064AFfnHPW5ZXMnjSuI+ety4uNsUBxsWYFH+Yx73IUWAAXHvPe6EuAUCFuCr/En5O9z3WqCk5CfrWsBhpzh3jbzHgPqd6rR+z1WALR53GPiZclOOO+TF9a0jQDtjQP1OdVq/59oCp3S+B3iVcWPPFeNwOoYWqMh/S39YSJJ/A1wBdgG7gavAW/leKnZM53cIWIBh+b8AN3XsEt2eErsDeKeY6/pM1mMwiHkAmtu7mF/66b7tRrhcF5s1Eep08mm5tSTAoDcVdrYvIzaZDzQzFW7md7eD3ARAC5sVxboZ3g3gCLBZdlTc0gYWQ0EJkFTC0yZKbqrJRVBwAiQ4r5HdPd6+yRbENRrwgh4DOoUgFkOtPLqK/AJF2wJUW1C9SChUCwQtwGxgpZ+7ANXASj+BtQA2BmCDYGZPRA5rAawFsBZo9LJ07Eh9WXpe5GjkIvRqn/Kv1+XL/3BdXhS7UK9OWarE/i8zc2nJGwwGg4EuxG8nZrX6XMMfYwAAAABJRU5ErkJggg=="
          />
        </div>
        <form className="formBox" onSubmit={(event) => { event.preventDefault() }}>
          <div className="inputBox">
            <label htmlFor="userName" className="label">
              userName
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="userName"
              value={inputData.userName}
              onChange={(e) => { setInputData((prevState) => ({ ...prevState, userName: e.target.value })) }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="password" className="label">
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={inputData.password}
              onChange={(e) => { setInputData((prevState) => ({ ...prevState, password: e.target.value })) }}
            />
          </div>
          <div className="btnBox">
            <button className="loginBtn" onClick={loginFunc}>
              login
              <img className="imageBtn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVR4nO3VMQrCQBAF0BfPJFiIIEIuEXMLC6tASm8heKR4CcFWexG2jrPELYJ++N2yr1h2hn++kAVaHIPdo8oBWgw4BTskJJw+tdR5xYHcTAI6bEsCa9ywKwVEkFGgD/aMB1algAueWOYCkdS4jzz2JKD+cPlk4IDN7D5aP/tZ1OKasQ/eZ5scoErzPboPmtyF47fzAlImQMEO0uGBAAAAAElFTkSuQmCC" />
            </button>
          </div>
          <div className="messageBox">
           <p className={showError===0 ?'displayNone' : 'displayBlock' }>
            {
              showError===1 ?
              'success login !'
              :
              'not success login !'
            }
           </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
