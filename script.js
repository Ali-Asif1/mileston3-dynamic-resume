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
    var resumeFields = "\n        \n<center><h1><b>Resume</b></h1></center>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(fName, "</p>\n    <p><b>Contact:</b>").concat(contact, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>DOB:</b>").concat(dob, "</p>\n    <p><b>Address:</b>").concat(address, "</p>\n\n    <h3>Education Information</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Professional Information</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeFields;
    }
    else {
        console.error('some fields are missing');
    }
    // display on generate time
    var display = resumeDisplay.style.display = 'block';
});
