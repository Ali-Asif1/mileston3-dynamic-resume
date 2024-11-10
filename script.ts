let form = document.getElementById('form') as HTMLFormElement
let resumeDisplay = document.getElementById('resume')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let fName = (document.getElementById('fname') as HTMLInputElement).value
    let contact = (document.getElementById('phone') as HTMLInputElement).value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let dob = (document.getElementById('dob') as HTMLInputElement).value
    let address = (document.getElementById('address') as HTMLTextAreaElement).value
    let education = (document.getElementById('education') as HTMLTextAreaElement).value
    let experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    let skills = (document.getElementById('skills') as HTMLTextAreaElement).value

    let resumeFields = `
        
<center><h1><b>Resume</b></h1></center>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${fName}</p>
    <p><b>Contact:</b>${contact}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>DOB:</b>${dob}</p>
    <p><b>Address:</b>${address}</p>

    <h3>Education Information</h3>
    <p>${education}</p>

    <h3>Professional Information</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
`;
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeFields
    } else {
        console.error('some fields are missing');
    }

})

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

