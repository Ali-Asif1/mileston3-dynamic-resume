let form = document.getElementById('form') as HTMLFormElement
let resumeDisplay = document.getElementById('resume') as HTMLDivElement

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

    // display on generate time
    let display = resumeDisplay.style.display= 'block';

})
