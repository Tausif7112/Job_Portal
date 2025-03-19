const authDropdownBtn = document.getElementById('auth-dropdown-btn');
        const authDropdown = document.getElementById('auth-dropdown');
        authDropdownBtn.addEventListener('click', () => {
            authDropdown.style.display = authDropdown.style.display === 'none' ? 'block' : 'none';
        });

const jobs = [
    { title: 'Software Developer', company: 'TechCorp', location: 'San Francisco, CA', description: 'Develop cutting-edge web applications.' },
    { title: 'Marketing Manager', company: 'MarketingPro', location: 'New York, NY', description: 'Lead marketing campaigns and strategies.' },
    { title: 'UX Designer', company: 'DesignStudio', location: 'Los Angeles, CA', description: 'Create intuitive user interfaces.' },
    // More job listings...
];

document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm));
    displayJobs(filteredJobs);
});

function displayJobs(jobArray) {
    const jobListingContainer = document.querySelector('.job-listing');
    jobListingContainer.innerHTML = ''; // Clear previous listings

    jobArray.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p class="location">Location: ${job.location}</p>
            <p>${job.description}</p>
            <button onclick="navigateToPage()">Apply</button>
        `;

        jobListingContainer.appendChild(jobCard);
    });
}

// Initial display of all jobs
displayJobs(jobs);

function navigateToPage() {
    window.location.href = "./JobDetails_page.html";
}