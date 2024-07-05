document.getElementById( 'userForm' ).addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    let name = document.getElementById( 'name' ).value;
    let email = document.getElementById( 'email' ).value;
    let message = document.getElementById( 'message' );

    if ( name === '' || email === '' ) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        return;
    }

    if ( !validateEmail( email ) ) {
        message.textContent = 'Please enter a valid email address';
        message.style.color = 'red';
        return;
    }

    let formData = {
        name: name,
        email: email
    };

    fetch( 'http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( formData )
        } )
        .then( response => response.json() )
        .then( data => {
            console.log( data );
            message.textContent = `Form submitted successfully! : ${data.message} `;
            message.style.color = 'green';
        } )
        .catch( error => {
            message.textContent = 'An error occurred. Please try again.';
            message.style.color = 'red';
        } );
} );

function validateEmail( email ) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test( email );
}