# ⚽ Football Team Management System

A modern, full-stack web application for managing football team statistics and data. Built with React frontend and Node.js/Express backend, featuring a beautiful UI and comprehensive team management capabilities.

![Football Team Management](https://img.shields.io/badge/Football-Team%20Management-green?style=for-the-badge&logo=soccer)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)

## 🚀 Features

### Core Functionality
- **Team Management**: Add, update, and delete football teams
- **Statistics Dashboard**: View comprehensive team statistics for any year
- **Top Teams**: Find top-performing teams based on wins
- **Average Goals**: Calculate average goals per team for specific years
- **Data Visualization**: Beautiful charts and statistics display

### Technical Features
- **Modern UI/UX**: Glassmorphism design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Real-time Notifications**: Toast notifications for user feedback
- **Error Handling**: Comprehensive error handling and validation
- **API Optimization**: RESTful API with proper status codes
- **Database Optimization**: MongoDB with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Beautiful notifications
- **CSS3** - Modern styling with glassmorphism effects

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Football-Team-Management/
├── Backend/
│   ├── FootballServer.js      # Main server file
│   ├── FootballSchema.js      # MongoDB schema
│   ├── Footballdb.js          # Database connection
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
├── FrontEnd/
│   └── myapp/
│       ├── public/            # Static files
│       ├── src/
│       │   ├── components/    # React components
│       │   │   ├── AddTeam.js
│       │   │   ├── UpdateTeam.js
│       │   │   ├── DeleteTeam.js
│       │   │   ├── TeamStats.js
│       │   │   ├── TopTeams.js
│       │   │   ├── AverageGoals.js
│       │   │   └── Navbar.js
│       │   ├── services/     # API services
│       │   │   └── api.js
│       │   ├── hooks/        # Custom React hooks
│       │   │   └── useApi.js
│       │   ├── App.js        # Main App component
│       │   ├── App.css       # Main styles
│       │   └── index.js      # Entry point
│       └── package.json      # Frontend dependencies
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/football-team-management.git
   cd football-team-management
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../FrontEnd/myapp
   npm install
   ```

4. **Set up Environment Variables**
   
   Create a `.env` file in the Backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/Footballdb
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```

5. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # For local MongoDB
   mongod
   
   # Or use MongoDB Atlas (cloud)
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm start
   # or for development with auto-restart
   npm run dev
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd FrontEnd/myapp
   npm start
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

## 📊 API Endpoints

### Teams
- `GET /api/teams` - Get all teams (with pagination)
- `GET /api/teams/:id` - Get team by ID
- `POST /api/teams` - Create new team
- `PUT /api/teams/:id` - Update team
- `DELETE /api/teams/:id` - Delete team
- `GET /api/teams/top/:minWins` - Get top teams by minimum wins

### Statistics
- `GET /api/stats/:year` - Get team statistics for a year
- `GET /api/goals/average/:year` - Get average goals for teams in a year

### Health
- `GET /health` - Health check endpoint

## 🎨 UI Components

### Add Team
- Form to add new football teams
- Input validation and error handling
- Real-time feedback with toast notifications

### Team Statistics
- Comprehensive statistics dashboard
- Beautiful card-based layout
- Summary calculations (win rate, draw rate, etc.)

### Top Teams
- Table view of top-performing teams
- Sortable and responsive design
- Filter by minimum wins

### Average Goals
- Team-wise average goals calculation
- Clean table presentation
- Year-based filtering

## 🔧 Development

### Available Scripts

**Backend:**
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
```

**Frontend:**
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues
```

### Code Quality
- **ESLint** configuration for code quality
- **Prettier** for code formatting
- **Error boundaries** for React error handling
- **Input validation** on both frontend and backend

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Connect GitHub repository
4. Enable automatic deployments

### Frontend Deployment (Netlify/Vercel)
1. Build the React app: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Set environment variables for API URL

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
FRONTEND_URL=your_frontend_url
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Daniyal Areeb**
- GitHub: [@daniyalareeb](https://github.com/daniyalareeb)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend framework
- MongoDB for the flexible database solution
- All contributors and testers

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the author via email
- Check the documentation

---

⭐ **Star this repository if you found it helpful!**
