// Name : HTET MYARK AUNG
// Class: DIT/1B/04
// Admin No: 2340221



async function populateUniversityDropdown() {
    const universityDropdown = document.getElementById('universityDropdown');
    try {
        const response = await fetch('/university');
        const universities = await response.json();

        universities.forEach((uni) => {
            const option = document.createElement('option');
            option.value = uni.code;
            option.textContent = uni.name;
            universityDropdown.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching university data:', error);
    }
}

// Call the function to populate the university dropdown on page load
window.onload = populateUniversityDropdown;