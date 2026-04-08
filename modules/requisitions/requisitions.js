// requisitions.js

class Requisition {
    constructor() {
        this.jobLookup = {};
        this.lineItems = [];
    }

    // Method to lookup a job based on job ID
    getJobDetails(jobId) {
        // Simulated job lookup logic (to replace with actual implementation)
        return this.jobLookup[jobId] || null;
    }

    // Method to add a line item
    addLineItem(item) {
        this.lineItems.push(item);
    }

    // Method to remove a line item
    removeLineItem(itemId) {
        this.lineItems = this.lineItems.filter(item => item.id !== itemId);
    }

    // Method to submit the requisition
    submitRequisition() {
        if (this.lineItems.length === 0) {
            console.error("No line items present.");
            return;
        }

        // Simulated submission logic (to replace with actual implementation)
        console.log("Requisition submitted with line items:", this.lineItems);
    }
}

// Example usage
const requisition = new Requisition();
requisition.jobLookup = {
    'job1': { title: 'Software Engineer', department: 'Engineering' },
    'job2': { title: 'Product Manager', department: 'Product' }
};

requisition.addLineItem({ id: 'item1', description: 'Laptop', quantity: 1 });
requisition.submitRequisition();
