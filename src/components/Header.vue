<template>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;1,500&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />


    <header class="header-content header">
        <div class="logo-content">
            <router-link to="/home">
            <img src="/assets/contacts.png" alt="logo">
        </router-link>
            <div>
                <span class="address-text"> ADDRESS</span><br>
                <span class="address-book"> BOOK</span>
            </div>
        </div>
    </header>
    <div class="my-content">
        <div class="user-content sub-user-content">
            <div class="user-detail-text">
                Welcome {{username}},
            </div>
            <div class="logout-button" @click="logout()">
                    <i class="fas fa-sign-out-alt"></i>&nbsp;logout
            </div>
        </div>
    </div>


</template>

<script>

export default {
    name: "HeaderPage",
    data() {
        return {
            username: localStorage.storedData,
        }
    },
    methods: {
        logout(){
            localStorage.clear()
            console.log(localStorage.storedData)
            this.$router.push({name: 'LoginPage'})
        },
    },
}
</script>

<style>
.header {
    padding: 12px 0;
    background-color: #f7f7f7;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.user-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    max-width: 1200px;
    width: 100%;
    margin: 0px auto;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content-img {
    border: solid 0px #42515f;
}

.address-text {
    font: normal normal bold 18px/20px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    text-transform: capitalize;
    color: #008CFF;
}

.address-book {
    font: normal normal bold 18px/20px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    color: #42515F;
    text-transform: capitalize;
}

.my-content {
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    padding: 10px 0 0px;
    box-sizing: border-box;
}

.sub-user-content {
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 25px;

}

.user-detail-text {
    display: flex;
    flex-direction: row;
    justify-content: left;
    font: normal normal 22px/25px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
}

.logout-button {
    font-size: 20px;
    font-family: Roboto;
    color: #ffffff;
    min-width: 80px;
    padding: 4px 4px;
    padding-top: 8px;
    cursor: pointer;
    background: #008CFF 0% 0% no-repeat padding-box;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
}
</style>