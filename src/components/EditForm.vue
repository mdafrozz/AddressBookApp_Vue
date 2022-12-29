<template>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;1,500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<body>
    <Header/>


<header class="heading">
    Person Address Form
    <router-link to="/"><span class="close">&times;</span></router-link>
</header>

<div class="">
    <form class="form" action="#" @submit="submitForm">
        <div>
            
            <input class="input" type="text" id="name" name="name"
            placeholder="Enter Full Name" v-model="formValues.fullName" required>
        </div>
        <br>
        <div>

            <textarea class="input" placeholder="Address" id="address" name="address" rows="5" v-model="formValues.address" required></textarea>
        </div>
        <br>
        <div class="row-content">
            <div>
    
                <select name="state" id="state" v-model="formValues.state" required>
                    <option value='' selected='selected'>Select State</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                </select>
            </div>
            &nbsp;&nbsp;
            <div>
        
                <select name="city" id="city" v-model="formValues.city" required>
                    <option value='' selected='selected'>Select City</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                </select>
            </div>
            &nbsp;&nbsp;
            <div>
            <input class="input" type="tel" pattern="[0-9]{6}" title="6 digits required" id="zipcode" name="zipcode" placeholder="Zip Code"
            v-model="formValues.zipCode" required>
            </div>
        </div>
        <br>
        <div>
            <input class="input" type="tel" id="phone" pattern="[6789][0-9]{9}" title="should start with [6789] and contain 10 digits"
            name="phone" placeholder="Phone Number" v-model="formValues.phoneNumber" required>
        </div>
        <br>
        <div>
            <input class="input" type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="abc@xyz.com"
            placeholder="E-mail" v-model="formValues.email" required>
            </div>
            <br>
        <div class="btn-row">
            <button class="submit-btn" type="submit">Update</button>
            <button class="reset-btn" type="reset">Reset</button>
        </div>
    </form>
</div>
</body>
</template>

<script>
import AddressBookService from "../service/AddressBookService";
import Header from "../components/Header.vue"

export default {
name: 'EditForm',
components: {
        Header
    },
data(){
    return{
        formValues:{
            id:'',
            fullName:'',
            address:'',
            city:'',
           state:'',
            zipCode:'',
            phoneNumber:'',
            email:'',
        }
    }
},
methods: {
submitForm(event){
    event.preventDefault()

    //console.log(this.formValues)
    const data=this.formValues;

    AddressBookService.updateContact(this.$route.params.id,data).then((response) => {
              console.log(response);
                this.contacts = response.data.data;  
                alert("Contact updated successfully!!",response) 
                this.$router.push({ name: "HomePage" });
            })
             .catch(error => {
                console.log(error);
                  alert("WARNING!! Error while updating the contact.!");
              })
        },
         getDataById(id){
             console.log(id)
            AddressBookService.getContact(id).then((response) => {
                console.log(id);
                let obj = response.data.data;
                this.setData(obj);
            })
            .catch((err) => {
               console.log(err);
            });
         },
        setData(obj){
            console.log(obj);
                this.formValues.id= obj.id;
                this.formValues.fullName= obj.fullName;
                this.formValues.address= obj.address;
                this.formValues.email = obj.email;
                this.formValues.city= obj.city;
                this.formValues.state=obj.state;
                this.formValues.zipCode=obj.zipCode;
                this.formValues.phoneNumber=obj.phoneNumber;
                console.log(this.formValues);
        },
    },
    created() {
        this.getDataById(this.$route.params.id);
    }
}
</script>

<style>
.close {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: #fff;
    border: 1px solid #008CFF;
    font: 25px Arial, sans-serif;
    float: right;
    cursor: pointer;
    margin-right: 20px;
    color: #008CFF;
    opacity: 1;
}

.form {
    width: 100%;
    padding: 45px 60px;
    padding-bottom: 100px;
    margin-top: 10px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #f5f5f5;
    border-radius: 8px;
    opacity: 1;
    justify-content: center;
    max-width: 600px;
    margin: 0px auto;
}

label {
    display: inline-block;
    min-width: 140px;
}


.input {
    width: 100%;
    padding: 10px;
    border: 1px solid #bdbdbd;
    border-radius: 3px;
    resize: vertical;
    font: normal normal normal 16px Roboto;
    letter-spacing: 0px;
    margin-top: 4px;
}

.row-content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
    border: 0px solid green;
}

select {
    width: 100%;
    padding: 10px;
    border: 1px solid#bdbdbd;
    border-radius: 4px;
    resize: vertical;
    font: normal normal normal 16px Roboto;
    letter-spacing: 1px;
    color: #42515f;
    background-color: transparent;
}

.btn-row {
    float: right;
}

.submit-btn {
    margin-right: 50px;
    justify-content: space-between;
    font-size: 15px;
    font-family: Roboto;
    letter-spacing: 0px;
    opacity: 1;
    background: #E2E2E2 0% 0% no-repeat padding-box;
    padding: 10px 45px;
    color: #42515F;
    border: 1px solid #969696;
    border-radius: 5px;
    cursor: pointer;
}

.reset-btn {
    margin: 0px auto;
    justify-content: space-between;
    font-size: 15px;
    font-family: Roboto;
    letter-spacing: 0px;
    opacity: 1;
    background: #E2E2E2 0% 0% no-repeat padding-box;
    padding: 10px 45px;
    color: #42515F;
    border: 1px solid #969696;;
    border-radius: 5px;
    cursor: pointer;
}
.submit-btn:hover {
  background: #008CFF;
}
.reset-btn:hover {
  background: #008CFF;
}
</style>