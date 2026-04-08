// login.js

// Login module handling OTP flow, email validation, OTP input handling, timer management, and session storage.

class Login {
  constructor() {
    this.otp = '';
    this.email = '';
    this.timer = null;
    this.timeLeft = 300; // 5 minutes timer
  }

  // Function to validate email
  validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  // Function to send OTP to the user's email
  sendOTP(email) {
    if (this.validateEmail(email)) {
      this.email = email;
      this.otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
      console.log(`OTP sent to ${email}: ${this.otp}`);
      this.startTimer();
      // Here you can add code to send an email with the OTP
    } else {
      console.log('Invalid email address.');
    }
  }

  // Start the timer
  startTimer() {
    this.timeLeft = 300; // Reset time left
    this.timer = setInterval(() => {
      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        console.log('OTP expired. Please request a new one.');
      } else {
        this.timeLeft--;
        console.log(`Time left: ${this.timeLeft} seconds`);
      }
    }, 1000);
  }

  // Function to handle OTP input
  verifyOTP(inputOTP) {
    if (this.otp === inputOTP) {
      clearInterval(this.timer);
      console.log('OTP verified successfully!');
      this.sessionStorage();
    } else {
      console.log('Invalid OTP. Please try again.');
    }
  }

  // Function to manage session storage
  sessionStorage() {
    // Here you can implement session storage logic, for example:
    window.sessionStorage.setItem('userEmail', this.email);
    console.log('User session started.');
  }
}

// Example usage:
const loginModule = new Login();
loginModule.sendOTP('user@example.com'); // Replace with real user email

// Later on:
// loginModule.verifyOTP('123456'); // Replace with the actual OTP input by the user
