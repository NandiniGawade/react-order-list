import { Button, InputAdornment, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { FC, useState } from "react";
import "./login.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PASSWORD, USERNAME } from "../../constants/app.constants";

export const Login: FC = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } = useForm({
            mode: "onBlur"
        });
        const navigate = useNavigate();
        const [invalidLogin, setInvalidLogin] = useState(false);
        const onSubmit = (data: any) =>{
            console.log(data);
            if(data.email === USERNAME && data.password === PASSWORD) {
                setInvalidLogin(false);
                navigate("/orders");
            } else {
                setInvalidLogin(true);
            }
        }
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="panel">
                    <img className="img-width" alt="logo" src="https://www.orderkangaroo.com/static/media/kangaroo_white_logo.769eea8e.png"/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                            test-id="input-with-icon-textfield"
                            className="input-type"
                            placeholder="Email Address"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <EmailIcon />
                                </InputAdornment>
                            ),
                            }}
                            variant="outlined"
                            {...register("email", { required: true})}
                    />
                    {errors.email && errors.email.type === "required" && <span className="error">This is required field.</span>}

                    <TextField
                            test-id="input-with-icon-textfield"
                            className="input-type"
                            type="password"
                            placeholder="Password"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <LockIcon />
                                </InputAdornment>
                            ),
                            }}
                            variant="outlined"
                            {...register("password", { required: true})} 
                    />
                    {errors.password && errors.password.type === "required" && <span className="error">This is required field.</span>}

                    <Button variant="text" className="submit-btn" type="submit">Login</Button>
                    {
                        invalidLogin && <span className="error"><br/>Invalid Crendetials</span>
                    }       
                    </form>
                    <div className="div-mr">
                        <span className="text-color text-decor">Forget your password?</span>
                    </div>
                    <div className="div-mr">
                        <span className="text-color">No Account?</span>
                        <span className="text-color text-decor">Register</span> <span className="text-color">or </span>
                        <span className="text-color text-decor">Select Location</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
