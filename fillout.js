function filloutField(element, new_value) {
    element.value = new_value

    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
}

function fillout() {
    const email_field = document.querySelectorAll("input[type='email']");
    
    const user_field = document.querySelectorAll("input[type='text']");
    const pass_field = document.querySelectorAll("input[type='password']");

    const dob_field = document.querySelectorAll("input[type='date']");

    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    // Add random email
    if (email_field.length) {
        let email = "";
        let email_length = Math.round(Math.random() * 8 + 8)
        for (let i = 0; i < email_length; i++) {
            email += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        email += "@gmail.com";
        filloutField(email_field[0], email) 
    }

    // Add random username
    if (user_field.length) {
        let user = "";
        let user_length = Math.round(Math.random() * 8 + 8)
        for (let i = 0; i < user_length; i++) {
            user += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        for (let i = 0; i < user_field.length; i++) {
            filloutField(user_field[i], user)
        }
    }

    // Add random password
    if (pass_field.length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        let pass_length = Math.round(Math.random() * 8 + 8)
        const array = new Uint32Array(pass_length);
        window.crypto.getRandomValues(array);

        let password = "";
        for (let i = 0; i < pass_length; i++) {
            password += charset[array[i] % charset.length];
        }
        for (let i = 0; i < pass_field.length; i++) {
            filloutField(pass_field[i], password)
        }
    }

    // Add random date of birth
    if (dob_field.length) {
        const year = Math.floor(Math.random() * (2005 - 1970 + 1)) + 1970;
        const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
        const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");

        let dob = `${year}-${month}-${day}`; 
        filloutField(dob_field[0], dob);
    }
}
fillout()
