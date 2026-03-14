// Name : HTET MYARK AUNG
// Class: DIT/1B/04
// Admin No: 2340221



// For top ten degrees
async function getTopDegrees() {
    const yearInput = document.getElementById('yearInput').value;

    try {
        // Check if the year is a valid integer
        if (!Number.isInteger(Number(yearInput))) {
        // I put these two lines to clear the containers of the card
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';

            alert("Please enter an valid integer.");
            return;
        }

        const response = await fetch(`http://localhost:8081/year/${yearInput}`);
        const data = await response.json();

        // Sort the data by basic monthly median in descending order
        const sortedData = jsonArraySort('asc', data, 'basic_monthly_median');

        // Display the cards only if there is data
        if (sortedData.length > 0) {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';

            // Create and append DegreeCard elements for each degree
            sortedData.slice(0, 10).forEach((item) => {
                const topTenDegreeCard = document.createElement('degree-card');
                topTenDegreeCard.setAttribute('data-option', 'topTen');
                topTenDegreeCard.setAttribute('degree', item.degree);
                topTenDegreeCard.setAttribute('university', item.university);
                topTenDegreeCard.setAttribute('school', item.school); 
                topTenDegreeCard.setAttribute('basic-monthly-median', item.basic_monthly_median);

                resultDiv.appendChild(topTenDegreeCard);
            });
        } else {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';
            alert(`No data available for the top 10 degrees in ${yearInput}.`);
        }
    } catch (error) {
        console.error(`Error fetching data for the year ${yearInput}:`, error);
    }
}

// For full-time employment
async function getFullTimeEmployment() {
    const universityDropdown = document.getElementById('universityDropdown');
    const selectedUniversityCode = universityDropdown.value;
    const employmentYearInput = document.getElementById('employmentYearInput').value;

    try {
        // Check if the year is a valid integer
        if (!Number.isInteger(Number(employmentYearInput))) {
            // I put these two lines to clear the containers of the card
            const resultDiv = document.getElementById('result1');
            resultDiv.innerHTML = '';
            alert("Please enter a valid integer.");
            return;
        }

        const response = await fetch(`http://localhost:8081/university/${selectedUniversityCode}/year/${employmentYearInput}`);
        const data = await response.json();

        // Display the cards only if there is data
        if (data.length > 0) {
            const resultDiv = document.getElementById('result1');
            resultDiv.innerHTML = '';

            // Create and append DegreeCard elements for each degree
            data.forEach((record) => {
                const fullTimeEmploymentCard = document.createElement('degree-card');
                fullTimeEmploymentCard.setAttribute('data-option', 'fullTimeEmployment');
                fullTimeEmploymentCard.setAttribute('school', record.school);
                fullTimeEmploymentCard.setAttribute('degree', record.degree);
                fullTimeEmploymentCard.setAttribute('employment-rate', record.employment_rate_ft_perm);
                resultDiv.appendChild(fullTimeEmploymentCard);
            });
        } else {
            const resultDiv = document.getElementById('result1');
            resultDiv.innerHTML = '';
            alert(`No data available for ${selectedUniversityCode} in ${employmentYearInput}.`);
        }
    } catch (error) {
        console.error(`Error fetching data for ${selectedUniversityCode} in ${employmentYearInput}:`, error);
    }
}
