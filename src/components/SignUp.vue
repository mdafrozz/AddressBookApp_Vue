<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

    <body>
        <div class="container">
            <div class="wrapper">
                <div class="title"><span>SIGN UP &nbsp;</span><i class="far fa-address-book"
                        style="font-size:48px"></i>
                </div>
                <form action="#" @submit="submitForm">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" v-model="formValues.userName" required>
                    </div>
                    <div class="row">
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="Email" v-model="formValues.email" required>
                    </div>
                    <div class="row">
                        <i class="fas fa-key"></i>
                        <input type="password" placeholder="Password" v-model="formValues.password" required>
                    </div>
                    
                    <br>
                    <div class="signup button">
                            <input type="submit" value="Signup">
                    </div>
                    <div class="signup-link">Have an account? <router-link to="/">Login</router-link>
                    </div>
                </form>
            </div>
        </div>

    </body>

</template>

<script>
import AddressBookService from "../service/AddressBookService";

export default {
    name: 'SignUp',
    data(){
        return{
            formValues:{
                userName:'',
                password:'',
                email:'',
            }
        }
    },
 methods: {
    submitForm(event){
        event.preventDefault()

        console.log(this.formValues)
        const data=this.formValues;

        AddressBookService.addUser(data).then((response) => {
              console.log(response);
                this.user = response.data.data;  
                alert("User Registered Successfully..!!",response)
                this.$router.push({ name: "LoginPage" });
            })
             .catch(error => {
                console.log(error);
                  alert("WARNING!! Error while registering user..!");
              })        
        },
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

body {
    margin: 0;
    height: 100%;
    background: #00bcd4;
    overflow: hidden;
}

::selection {
    background: rgba(26, 188, 156, 0.3);
}

.container {
    max-width: 440px;
    padding: 0 20px;
    margin-top: 120px;
    margin-left: 500px;
}

.wrapper {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}

.wrapper .title {
    height: 90px;
    background: #008CFF;
    border-radius: 5px 5px 0 0;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper form {
    padding: 30px 25px 25px 25px;
}

.wrapper form .row {
    height: 45px;
    margin-bottom: 15px;
    position: relative;
}
.wrapper form .signup {
    height: 45px;
    margin-bottom: 15px;
    position: relative;
}

.wrapper form .row input {
    height: 100%;
    width: 80%;
    outline: none;
    padding-left: 60px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    font-size: 16px;
    transition: all 0.3s ease;
}
.wrapper form .signup input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 60px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    font-size: 16px;
    transition: all 0.3s ease;
}
form .row input:focus {
    border-color: #008CFF;
    box-shadow: inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25);
}

form .row input::placeholder {
    color: #999;
}

.wrapper form .row i {
    position: absolute;
    width: 47px;
    height: 100%;
    color: #fff;
    font-size: 18px;
    background: #008CFF;
    border: 1px solid #008CFF;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper form .pass {
    margin: -8px 0 20px 0;
}

.wrapper form .pass a {
    color: #008CFF;
    font-size: 17px;
    text-decoration: none;
}

.wrapper form .pass a:hover {
    text-decoration: underline;
}

.wrapper form .button input {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding-left: 0px;
    background: #008CFF;
    border: 1px solid #008CFF;
    cursor: pointer;
}

form .button input:hover {
    background: #086cee;
}

.wrapper form .signup-link {
    text-align: center;
    margin-top: 20px;
    font-size: 17px;
}

.wrapper form .signup-link a {
    color: #008CFF;
    text-decoration: none;
}

form .signup-link a:hover {
    text-decoration: underline;
}
</style>