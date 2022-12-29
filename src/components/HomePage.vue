<template>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;1,500&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />


    <body>
        <Header/>
        <div class="main-content">             
            <div class="header-content sub-main-content">    
                <div class="address-detail-text">
                    Person Details <div class="address-count">{{ contacts.length }}</div>
                </div>
                <input type="text" placeholder="Search.." v-model="search" class="search">
                <router-link to="/addressform" class="add-button">
                    <img src="/assets/icons/add-24px.svg" alt="add">&nbsp;Add Person
                </router-link>
            </div>

            <div class="table-main">
                <table class="table" id="display">
                    <tr>
                        <th>Fullname&#128113;</th>
                        <th>Address&#127968;</th>
                        <th @click="sortCity()">City&#127750;</th>
                        <th @click="sortState()">State &#127961;</th>
                        <th>ZipCode&#128204;</th>
                        <th>E-mail&#128231;</th>
                        <th>PhoneNumber&#128222;</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="person in contacts" :key="person">

                        <td> {{ person.fullName }}</td>
                        <td> {{ person.address }}</td>
                        <td> {{ person.city }}</td>
                        <td> {{ person.state }}</td>
                        <td> {{ person.zipCode }}</td>
                        <td> {{ person.email }}</td>
                        <td> {{ person.phoneNumber }}</td>
                        <td>
                            <img @click="update(person.token)" src="\assets\icons\create-black-18dp.svg" alt="edit"
                                width="30" height="30" />&nbsp;
                            <img @click="remove(person.token)" src="\assets\icons\delete-black-18dp.svg" alt="delete"
                                width="30" height="30" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
</template>

<script>
import AddressBookService from "../service/AddressBookService"
import Header from "../components/Header.vue"
export default {
    name: "HomePage",
    components: {
        Header
    },
    data() {
        return {
            search:'',
            contacts: [],
            username:'',

        };
    },
    watch:{
        search(keyword){
            if(keyword.length>0){
            AddressBookService.search(keyword).then((response) => {
                this.contacts = response.data.data;
            });}else{
                this.getContacts();
            }
        }
    },
    methods: {
        sortCity() {
            AddressBookService.sortCity().then((response) => {
                this.contacts = response.data.data;
            });
        },
        sortState() {
            AddressBookService.sortState().then((response) => {
                this.contacts = response.data.data;
            });
        },
        displayMessage() {
            console.log("Welcome to Address Book App..!!");
        },
        getContacts() {
            AddressBookService.getAllContacts().then((response) => {
               // console.log(response.data);
                this.contacts = response.data;
            });
        },
          
        update(token) {
            this.$router.push({ name: "EditForm", params: { id: token } });
        },
        remove(id) {
            AddressBookService.deleteContact(id)
                .then((data) => {
                    var answer = window.confirm(
                        "Contact once deleted cannot be restored!! Do you wish to continue ?",
                        data
                    );
                    if (answer === true) {
                        alert("Contact deleted successfully..!!");
                        window.location.reload();
                        this.getContacts();
                    } else {
                        window.location.reload();
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert("Something Went Wrong..!");
                });
        },

    },
    created() {
        this.displayMessage();
        this.getContacts();
    }
}
</script>

<style>

.main-content {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 60px);
    background-color: #f7f7f7;
    padding: 30px 0 10px;
    box-sizing: border-box;
}

.sub-main-content {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 25px;
}



.address-detail-text {
    font: normal normal bold 22px/25px Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    width: 80%;

}



.address-count {
    background-color: #328ef8;
    color: #ffffff;
    border-radius: 42%;
    font-size: 16px;
    width: 26px;
    text-align: center;
    display: inline-block;
}

.search {
    display: flex;
    border-radius: 25px;
    min-width: 250px;
    padding: 7px 7px;
    padding-top: 12px;
    padding-right: 12px;
    margin-right: 50px;
    justify-content: space-between;
}

.add-button {
    font-size: 21px;
    font-family: Roboto;
    color: #ffffff;
    min-width: 145px;
    padding: 7px 7px;
    padding-top: 12px;
    cursor: pointer;
    background: #008CFF 0% 0% no-repeat padding-box;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
}

.table-main {
    width: 80%;
    margin: 0 auto;
    overflow: auto;
}

.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    min-width: 800px;
}

td,
th {
    text-align: center;
    padding: 5px 8px;
}

th {
    background: #ffffff;
    border-radius: 3px 3px 0px 0px;
    text-align: center;
    font: normal normal 18px/24px Roboto;
    letter-spacing: 0px;
    color: #808080;
    /* text-transform: uppercase; */
    opacity: 1;

}

td img {
    cursor: pointer;
}


td {
    font: normal normal normal 14px/21px Roboto;
    letter-spacing: 0px;
    color: #3d3d3d;
    opacity: 1;
}


</style>