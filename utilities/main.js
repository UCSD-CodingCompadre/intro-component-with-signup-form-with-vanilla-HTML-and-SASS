let images = document.querySelectorAll(".error-image")

const checkFirstName = () =>
{
    let firstNameInput = document.getElementById("first-name-input");
    let firstName = firstNameInput.value.trim();
    let error = document.getElementById("error-1");
    if(firstName === "" || firstName.length === 0)
    { 
        error.innerHTML = "First Name cannot be empty";
        images[0].style.display = "block";
    }
    else
    {
        error.innerHTML = "";
        images[0].style.display = "none";
    }
}

const checkLastName = () =>
{
    let lastNameInput = document.getElementById("last-name-input");
    let lastName = lastNameInput.value.trim();
    let error = document.getElementById("error-2");
    if(lastName === "" || lastName.length === 0)
    {
        error.innerHTML = "Last Name cannot be empty";
        images[1].style.display = "block";
    }
    else
    {
        error.innerHTML = "";
        images[1].style.display = "none";
    }
}

const checkEmail = () =>
{
    let emailInput = document.getElementById("email-address-input");
    let email = emailInput.value.trim();
    let error = document.getElementById("error-3");
    let flag = 1;
    if(email=== "" || email.length === 0)
    {
        error.innerHTML = "Email cannot be empty";
        images[2].style.display = "block";
        return;
    }
    
    if(email.includes("@") && email.includes(".com"))
    {
        let firstEmailTrim = email.slice(email.indexOf("@")+1, email.length);
        // Check for 2nd @
        if(!firstEmailTrim.includes("@"))
        {
            let secondEmailTrim = firstEmailTrim.slice(firstEmailTrim.indexOf(".com")+1, firstEmailTrim.length)
            // Check for another "." and ensure only com is left
            if(!secondEmailTrim.includes(".") && secondEmailTrim.length === 3)
            {
                flag--;
            }
        }
    }
    if(flag)
    {
        error.innerHTML = "Email is invalid";
        images[2].style.display = "block";
    }
    else
    {
        error.innerHTML = "";
        images[2].style.display = "none";
    }
}

const checkPassword = () =>
{
    let passwordInput = document.getElementById("password-input");
    let password = passwordInput.value.trim();
    let error = document.getElementById("error-4");
    if(password=== "" || password.length === 0)
    {
        error.innerHTML = "Password cannot be empty";
        images[3].style.display = "block";
        return;
    }
    else if(password.length < 8)
    {
        error.innerHTML = "Password must be 8 characters long"
        images[3].style.display = "block";
    }
    else
    {
        error.innerHTML = "";
        images[3].style.display = "none";
    }
}

const checkInputs = () =>
{
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
}
