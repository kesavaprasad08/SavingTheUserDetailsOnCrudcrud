function saveToCrudCrud(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    const obj = {
        name,
        email,
        phonenumber
    }
    axios.post("https://crudcrud.com/api/96d57e3b27cc4de4bf006a1e210375a4/bookingappointment",obj)
    .then((res) => {
        console.log(res)
    })
    .catch((Err)=>{
        console.log(Err)
    });
    showNewUserOnScreen(obj);
}



function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                        </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}



window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/96d57e3b27cc4de4bf006a1e210375a4/bookingappointment")
    .then((response) => {
        for(var i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    }
)


