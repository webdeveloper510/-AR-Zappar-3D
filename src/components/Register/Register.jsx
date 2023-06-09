import React , {useEffect, useState} from "react";
import axios from "axios";
import { API } from "../../config/api";
import "../../App.css"
import { useNavigate } from "react-router-dom";
//  
import logoImage from '../../assets/images/sayehbazf.png';
import "react-datepicker/dist/react-datepicker.css";
import loginright from '../../assets/images/login-banner.png';
import DatePicker from 'react-datepicker';
import { toast } from "react-toastify";
import profileImg from "../../assets/images/profile.png"
//    

const RegisterPage =()=>{
    const navigate = useNavigate();
    //  First Name 
    const [firstName , UserFirstName]= useState(null)
    const handleFirstName = (e)=>{
        UserFirstName(e.target.value);
    }
    // Last Name
    const [LastName , UserLastName]= useState(null)
    const handleLastName = (e)=>{
        UserLastName(e.target.value);
    }
//  Email Address
    const [email , userEmail] = useState(null)
    const handleEmail =(e)=>{
        userEmail(e.target.value)
    }
//  Password
    const [password , userPassword] = useState(null)

    const handlePassword =(e)=>{
        userPassword(e.target.value)
    }
    // Proffession
    const [Proffession , selectProff] = useState(null)

    const handleSelect =(e)=>{
        selectProff(e.target.value)
    }
// Date picker
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
            // console.log("Date----------->" , event.target.value)

    };
    const MyDataObject = {
        "firstname" : firstName,
        "lastname" : LastName,
        "email" : email,
        "password" : password,
        "proffession": Proffession,
        "dateofbirth" : selectedDate,
    }
    const handelLogin =()=>{
        navigate('/')
    }
    const handleRegister = ()=>{
        // console.log(profileImg);
        if (MyDataObject){
            const formData = new FormData();
            formData.append("firstname" , firstName,)
            formData.append("lastname" , LastName,)
            formData.append("email" , email,)
            formData.append("password" , password,)
            formData.append("proffession", Proffession,)
            formData.append("dateofbirth" , selectedDate)
            fetch(profileImg)
            .then((response) => response.blob())
            .then((blob) => {
              formData.append("image", blob, "profile.png");
            axios.post(API.BASE_URL + 'signup/', formData, {
                headers: {
                  'accept': 'application/json',
                      'content-type': 'multipart/form-data'
                },
              })
              .then(function (response) {
                // console.log(response,'sign up')
                // console.log('Registerd SuccessFully', response);
                navigate('/')
                toast.success('Registerd Successfully !')             
              })
              .catch(function(err) {
                console.error('Error Registrations !', err);
              });
            })
        }
    }
    return(
    <div className="sign-up-page" id="sign-up-page">
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0 align-items-center sign-up-bgg">
                <div className="col-md-12 sign-up-outer">
                    <div className="text-center pb-2 sign-up-pg-container-left">
                    <h3 className="creat-account"> Sign up</h3>
                        <form className="sign-up-pg-form">     
                            <div className="row mb-2">
                                <div className="col-6">
                                    <label className="form-label fw-semibold">First Name</label>
                                    <input type="text" className="form-control" value={firstName}   placeholder="Enter Your Fisrt Name" onChange={handleFirstName}/>
                                </div>
                                <div className="col-6">
                                    <label className="form-label fw-semibold">Last Name</label>
                                    <input type="text" className="form-control"  value={LastName}  placeholder="Enter Your Last Name" onChange={handleLastName}/>
                                </div>
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-semibold">Email</label>
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={handleEmail}/>
                            </div>
                            <div className="mb-2">
                                <label className="form-label fw-semibold">Password</label>
                                <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePassword}/>
                            </div>

                            <div className="mb-2 dob">
                            <label className="form-label fw-semibold date-of-birth">Date of Birth</label>
                            <input type="date" id="birthday" name="birthday" className="form-control"value={selectedDate} onChange={handleDateChange} />
                            </div>
                            <div className="mb-2">
                                <label className="form-label fw-semibold role">Role</label>
                                <select className="form-select" onChange={handleSelect}>
                                    <option selected>Select Role</option>
                                    <option value={Proffession}>I am a Designer.</option>
                                    <option value={Proffession}>I am a Developer.</option>
                                    <option value={Proffession}>I am a Marketer.</option>
                                    <option value={Proffession}>I am a 3D Artist.</option>
                                    <option value={Proffession}>I am an Educator.</option>
                                    <option value={Proffession}>I am working in Learning and Development.</option>
                                    <option value={Proffession}>Something Else.</option>
                                </select>
                            </div>
                            <div className="d-grid gap-2 mt-2">
                                <a className="btn btn-sign-in pt-2 pb-2" type="button"
                                    onClick={handleRegister} id="signup-btn">Sign up</a>
                            </div>
                            <p className="already-account">
                            Already have an account ?<a className="fw-bolder btn-register btn btn-sign-in pt-2 pb-2" type="button"
                                    onClick={handelLogin}> Login</a></p>
                        </form>
                    </div>
                    <div className="sign-up-pg-container-right">
                <img className="login-pic" src={loginright} />
                </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default RegisterPage;



