export const ShareProjectSwal = {
    title: 'Share project with others!',
    icon: 'info',
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    },
    reverseButtons: true,
    focusConfirm: false,
    html: `
    You can share <b>project</b> with your others
    
    <input class="swal2-input" name="firstName" id="firstName" type="text" placeholder="Enter first name..." /><br />
    <input class="swal2-input" name="lastName" id="lastName" type="text" placeholder="Enter last name..." /><br />
    <input class="swal2-input" name="email" id="email" type="email" placeholder="Enter email address..." />
    <textarea class="swal2-input" name="message" id="message" placeholder="Enter your message..." />
  `,
    type: 'info',
    showCancelButton: true,
    cancelButtonColor: 'grey',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i> Not now!',
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Share!',
    allowOutsideClick: false,
    preConfirm: () => ({
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
};
