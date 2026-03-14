// Name : HTET MYARK AUNG
// Class: DIT/1B/04
// Admin No: 2340221



class DegreeCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const card = document.createElement('div');
        card.className = 'card';

        const style = document.createElement('style');
        style.textContent = `
            .card {
                border: 2px solid #000000;
                border-radius: 8px;
                padding: 5px;
                margin: 5px;
                width: 48%;
                text-align: left;
                background-color: hsl(218, 100%, 84%);
                display: inline-block;
                
                
            }

           

            p {
                margin: 0;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(card);
        // the card property will not append to frontend without these two lines
    }

    connectedCallback() {
        // Use different rendering logic based on the data provided
        const dataOption = this.getAttribute('data-option');

        if (dataOption === 'topTen') {
            this.renderTopTen();
        } else if (dataOption === 'fullTimeEmployment') {
            this.renderFullTimeEmployment();
        }
    }

    renderTopTen() {
        const shadow = this.shadowRoot;
        const card = shadow.querySelector('.card');

        const university = document.createElement('p');
        university.textContent = `University: ${this.getAttribute('university')}`;

        const school = document.createElement('p');
        school.textContent = `School: ${this.getAttribute('school')}`;

        const degree = document.createElement('p');
        degree.textContent = `Degree: ${this.getAttribute('degree')}`;

        const basicSalary = document.createElement('p');
        basicSalary.textContent = `Median: $${this.getAttribute('basic-monthly-median')}`;

        card.appendChild(university);
        card.appendChild(school);
        card.appendChild(degree);
        card.appendChild(basicSalary);
    }

    renderFullTimeEmployment() {
        const shadow = this.shadowRoot;
        const card = shadow.querySelector('.card');

        const school = document.createElement('p');
        school.textContent = `School: ${this.getAttribute('school')}`;

        const degree = document.createElement('p');
        degree.textContent = `Degree: ${this.getAttribute('degree')}`;

        const employmentRate = document.createElement('p');
        employmentRate.textContent = `Full-Time Employment Rate: ${this.getAttribute('employment-rate')}%`;

        card.appendChild(school);
        card.appendChild(degree);
        card.appendChild(employmentRate);
    }
}

customElements.define('degree-card', DegreeCard);