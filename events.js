'use strict';

class EventSubmission {
    constructor() {
        this.events = [];
    }

    createEvent(eventData) {
        if (this.validateEvent(eventData)) {
            this.events.push(eventData);
            return this.successScreen(eventData);
        } else {
            throw new Error('Validation failed!');
        }
    }

    updateEvent(eventId, newEventData) {
        const index = this.events.findIndex(event => event.id === eventId);
        if (index !== -1) {
            if (this.validateEvent(newEventData)) {
                this.events[index] = newEventData;
                return this.successScreen(newEventData);
            } else {
                throw new Error('Validation failed!');
            }
        } else {
            throw new Error('Event not found!');
        }
    }

    validateEvent(eventData) {
        // Add your validation logic here
        return true;
    }

    successScreen(eventData) {
        console.log('Event successfully created/updated:', eventData);
        // You can add more logic for success screen here
    }
}

module.exports = EventSubmission;
