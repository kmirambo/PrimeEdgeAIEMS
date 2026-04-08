// requisitions.js

class Requisitions {
    constructor() {
        this.jobLookup = {};
        this.lineItems = [];
        this.categories = {};
        this.totalCost = 0;
    }

    addJob(jobId, jobDetails) {
        this.jobLookup[jobId] = jobDetails;
    }

    addLineItem(item) {
        this.lineItems.push(item);
        this.updateTotal();
    }

    updateTotal() {
        this.totalCost = this.lineItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    manageCategory(category, quantity) {
        this.categories[category] = quantity;
    }

    submitRequisition() {
        // Logic to submit the requisition
        console.log('Requisition submitted with total cost:', this.totalCost);
    }
}

// Example Usage:
// const req = new Requisitions();
// req.addJob(1, { name: 'Job 1', description: 'Sample job' });
// req.addLineItem({ name: 'Item 1', price: 100, quantity: 2 });
// req.manageCategory('Electronics', 3);
// req.submitRequisition();