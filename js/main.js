let currentTime = new Date()

let currentYear = currentTime.getFullYear();

document.querySelector('#year').textContent = currentYear;


let last_modified = document.lastModified;

document.querySelector('#last_update').textContent = last_modified;
