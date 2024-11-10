var form = document.getElementById('form');
var resumeDisplay = document.getElementById('resume');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fName = document.getElementById('fname').value;
    var contact = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeFields = "\n        \n<center><h1><b>Resume</b></h1></center>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(fName, "</p>\n    <p><b>contact:</b>").concat(contact, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n    <p><b>dob:</b>").concat(dob, "</p>\n    <p><b>address:</b>").concat(address, "</p>\n\n    <h3>Education Information</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Professional Information</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeFields;
    }
    else {
        console.error('some fields are missing');
    }
});
// document.getElementById('form')?.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let fName = (document.getElementById('fname') as HTMLInputElement)
//     let contact = (document.getElementById('phone') as HTMLInputElement)
//     let email = (document.getElementById('email') as HTMLInputElement)
//     let dob = (document.getElementById('dob') as HTMLInputElement)
//     let address = (document.getElementById('address') as HTMLInputElement)
//     let education = (document.getElementById('education') as HTMLInputElement)
//     let experience = (document.getElementById('experience') as HTMLInputElement)
//     let skills = (document.getElementById('skills') as HTMLInputElement)
//     if (fName && contact && email && dob && address && education && experience && skills) {
//         let nameOutput = fName.value
//         let contactOutput = contact.value
//         let emailOutput = email.value
//         let dobOutput = dob.value
//         let addressOutput = address.value
//         let educationOutput = education.value
//         let experienceOutput = experience.value
//         let skillsOutput = skills.value
//         const resumeOutput = `
//         <h1><b>Resume</b></h1>
//         <h3>Personal Information</h3>
//         <p><b>Name:</b>${fName}</p>
//         <p><b>Name:</b>${contact}</p>
//         <p><b>Name:</b>${email}</p>
//         <p><b>Name:</b>${dob}</p>
//         <p><b>Name:</b>${address}</p>
//         <h3>Education Information</h3>
//         <p>${education}</p>
//         <h3>Professional Information</h3>
//         <p>${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//         `
//         const resumedisplyoutput = document.getElementById('resume') as HTMLInputElement
//         if (resumedisplyoutput) {
//             resumedisplyoutput.innerHTML = resumeOutput
//         } else {
//             console.error('missing')
//         }
//     }
// })
