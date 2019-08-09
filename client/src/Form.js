
import React,{useState, useEffect} from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';

const UserForm = ({errors, touched, values, handleSubmit, status}) => {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
        if(status){
            setUsers([...users, status]);
        }
    },[status]);
    return (
      <div className="userForm">
        {console.log(user)}
        <Form>
           
            <Field type="text" name="username" placeholder="Username:" />
            {touched.username && errors.username && <p className="error">{errors.username}</p>}
            <Field
              type="password"
              name="password"
                placeholder="Password:"
            />
           {touched.password && errors.password && <p className="error">{errors.password}</p>}
          <button>Submit!</button>
        </Form>
      </div>
    );
  }
  const FormikUserForm = withFormik({
      mapPropsToValues({username, password}){
          return{
              username: username || "",
              password: password || ""
          };
        },
        
  validationSchema: Yup.object().shape({
   username: Yup.string()
    
      .required("Your name" ),
    password: Yup.string()
      .min(6)
      .required("password")
  }),
  
        handleSubmit(values, {setStatus}){
            console.log('forms submitted, values')
            handleSubmit(values,{setStatus}){
                axios
                 .post('http://localhost:5000/api/register', values)
                .then(res =>{
                    setStatus(res.data);
                })
                .catch(err => console.log(err.response));
            }
        }
          }) (UserForm);
      
  
  
  export default FormikUserForm;
  