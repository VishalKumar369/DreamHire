// backend.js

const candidates = [
    { id: 1, name: 'John Doe', role: 'Software Engineer', location: 'Bangalore, India' },
    { id: 2, name: 'Jane Smith', role: 'Product Manager', location: 'San Francisco, USA' },
    { id: 3, name: 'Alice Johnson', role: 'Data Scientist', location: 'London, UK' },
    // Add more candidate data here
  ];
  
  export function getAllCandidates() {
    return candidates;
  }
  
  export function getCandidateById(id) {
    return candidates.find((candidate) => candidate.id === id);
  }
  
  export function createCompanyAccount(companyData) {
    // In a real backend, you would save the companyData to a database and return a success response
    console.log('Company data:', companyData);
    return { success: true, message: 'Company account created successfully!' };
  }
  