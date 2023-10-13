//Client side validation sample
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    let nameSurname = document.getElementById('name-surname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let checkbox = document.getElementById('check-box');
    

    if(nameSurname.value.trim() === '') {
        isValid = false;
        alert('Ievadiet Vārdu un uzvārdu');
    }
    
    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email.value.trim())) {
        isValid = false;
        alert('Ievadiet derīgu epasta adresi');
    }
    
    if(phone.value.trim() === '') {
        isValid = false;
        alert('Ievadiet telefona numuru');
    }

    if(!checkbox.checked) {
        isValid = false;
        alert('Jums jāpiekrīt noteikumiem');
    }
    
    if(isValid) {
        //Call the form submit processing function
    }
});
