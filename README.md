# PrimeEdgeAI Event Management System

A modern, enterprise-grade event management platform with role-based access control, built with HTML5, CSS3, and vanilla JavaScript.

## Features

### Modern Design
- 🎨 Gradient-based UI with purple/blue color scheme
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🎯 Intuitive sidebar navigation

### Three Complete Role Dashboards

#### Administrator Dashboard
- **Overview:** System statistics and key metrics
- **Team Management:** Add, view, and manage team members
- **Event Control:** Monitor all events and change status
- **Proposal Review:** Approve or reject proposals
- **Full System Access**

#### Event Agent Dashboard
- **Overview:** Personal event statistics
- **Event Creation:** Create new events with full details
- **Event Management:** View and update event status
- **Status Lifecycle:** Pending → Approved → In Progress → Completed
- **Personal Dashboard**

#### Proposal Team Dashboard
- **Overview:** Proposal pipeline statistics
- **Pending Review:** Quick access to pending proposals
- **Proposal History:** Complete proposal history view
- **Approval Workflow:** Approve or reject proposals
- **Budget Tracking:** View proposal amounts

### Authentication System
- **Separate Credentials:** Each role has unique login
- **Session Management:** Secure session handling
- **Role-Based Access:** Restricted access per role
- **Logout Functionality:** Secure session termination

### Data Management
- **localStorage Persistence:** Data saved across sessions
- **Create Operations:** Add new entities
- **Read Operations:** View all data
- **Update Operations:** Modify existing data
- **Delete Operations:** Remove entities

---

## Project Structure

```
primeedgeai-events/
├── index.html           # Login page
├── admin.html          # Administrator dashboard
├── agent.html          # Event agent dashboard
├── proposal.html       # Proposal team dashboard
├── README.md           # This file
└── GIT_COMMIT_MESSAGES.md  # Git commit guide
```

---

## Demo Credentials

### Administrator
- **Email:** admin@primeedgeai.com
- **Password:** admin123
- **Access:** Full system control

### Event Agent
- **Email:** agent@primeedgeai.com
- **Password:** agent123
- **Access:** Personal event management

### Proposal Team
- **Email:** proposal@primeedgeai.com
- **Password:** proposal123
- **Access:** Proposal review and approval

---

## Getting Started

### Local Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/primeedgeai-events.git
   cd primeedgeai-events
   ```

2. **Open in Browser**
   - Double-click `index.html` or
   - Use a local server: `python -m http.server 8000`
   - Visit: `http://localhost:8000`

3. **Login**
   - Select your role
   - Enter demo credentials
   - Access your dashboard

### Deployment to GitHub Pages

1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "init: Initialize PrimeEdgeAI Events"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/your-username/primeedgeai-events.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select main branch
   - Save

4. **Access Live**
   ```
   https://your-username.github.io/primeedgeai-events
   ```

---

## User Workflows

### Administrator
1. Login with admin credentials
2. View system overview with statistics
3. Manage team members (add/view/delete)
4. Monitor all events across system
5. Review and approve/reject proposals
6. Change event status as needed

### Event Agent
1. Login with agent credentials
2. View personal event statistics
3. Create new events with details
4. View events in card format
5. Update event status manually
6. Delete events if needed

### Proposal Team
1. Login with proposal credentials
2. View proposal pipeline statistics
3. Review pending proposals
4. Approve or reject proposals
5. Access complete proposal history
6. Track approval status

---

## Event Status Lifecycle

```
PENDING (Created)
    ↓
APPROVED (Admin approved)
    ↓
IN PROGRESS (Event happening)
    ↓
COMPLETED (Event finished)
```

---

## Technical Details

### Technologies Used
- **HTML5:** Semantic markup
- **CSS3:** Modern styling with gradients
- **JavaScript:** Vanilla (no frameworks)
- **localStorage:** Client-side persistence
- **sessionStorage:** Authentication state

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- **Single Page Load:** Instant
- **No Build Process:** Direct HTML/CSS/JS
- **Small Bundle:** ~50KB total
- **No External Dependencies:** Pure vanilla code

---

## Data Storage

### localStorage Keys
- `agentEvents` - Event agent's events
- `proposals` - All proposals
- `agents` - Team members

### sessionStorage Keys
- `role` - Current user role
- `userEmail` - Current user email
- `authenticated` - Authentication state

---

## Customization

### Change Login Credentials

In `index.html`, find the credentials object:
```javascript
const credentials = {
    admin: {
        email: 'admin@primeedgeai.com',
        password: 'admin123',
        file: 'admin.html'
    },
    // ... update as needed
};
```

### Change Brand Color

Update CSS variables:
```css
/* From: Purple/Blue gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* To: Your colors */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Add New Status Types

In agent.html, find status array:
```javascript
const statuses = ['pending', 'approved', 'in-progress', 'completed'];
// Add more: ['pending', 'approved', 'in-progress', 'paused', 'completed']
```

---

## Troubleshooting

### Login Not Working
1. Verify email and password match demo credentials
2. Check role selection is correct
3. Clear browser cache and cookies
4. Try incognito/private mode

### Data Not Persisting
1. Check if localStorage is enabled
2. Verify browser storage hasn't been cleared
3. Check browser hasn't disabled local storage
4. Try different browser

### Sidebar Not Showing
1. Refresh the page
2. Check screen size (mobile might need adjustment)
3. Clear browser cache
4. Check for JavaScript errors (F12)

### Dashboard Not Loading
1. Ensure you're logged in
2. Check session hasn't expired
3. Verify JavaScript is enabled
4. Check browser console for errors

---

## Features to Add Later

- [ ] Email notifications
- [ ] Event calendar view
- [ ] Team collaboration comments
- [ ] File attachments
- [ ] Export to PDF/Excel
- [ ] Advanced search filters
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] API integration
- [ ] Database backend

---

## Commit History

See `GIT_COMMIT_MESSAGES.md` for complete commit message guidelines and examples.

Key commits:
1. Project initialization
2. Modern login page
3. Admin dashboard
4. Agent dashboard
5. Proposal dashboard
6. Styling improvements
7. Data management
8. Responsive design
9. Security implementation
10. Documentation

---

## Production Checklist

- [ ] Change admin password
- [ ] Update company name/branding
- [ ] Test all three dashboards
- [ ] Verify event status transitions
- [ ] Test on mobile devices
- [ ] Clear demo data
- [ ] Enable HTTPS
- [ ] Set up analytics
- [ ] Create backup strategy
- [ ] Document API endpoints

---

## License

© 2024 PrimeEdgeAI. All rights reserved.

---

## Support

For issues or questions:
1. Check README.md (this file)
2. Review GIT_COMMIT_MESSAGES.md
3. Check browser console (F12)
4. Try clearing cache and reloading

---

## Quick Links

- **Live Demo:** https://primeedgeai.net
- **GitHub:** https://github.com/your-username/primeedgeai-events
- **Documentation:** See GIT_COMMIT_MESSAGES.md

---

**Built with attention to detail for enterprise teams.**

