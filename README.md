# Mood Logger App

A comprehensive React-based mental wellness application that helps users track their mood, energy levels, activities, and sleep patterns. Built with modern web technologies and featuring an AI wellness assistant.

## 🌟 Features

- **Authentication System**: Secure login and registration with JWT token storage
- **Mood Logging**: Track daily mood, energy, activity, and sleep quality with intuitive forms
- **Analytics Dashboard**: Visual charts showing weekly and monthly mood trends
- **Daily Quotes**: Motivational quotes to inspire and uplift users
- **AI Wellness Assistant**: Interactive chatbot for mental wellness support
- **Responsive Design**: Fully responsive interface for desktop and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions

## 🚀 Live Demo

[View Live Demo](https://mood-logger-app.vercel.app) *(Will be updated after deployment)*

## 📱 Screenshots

### Authentication Screen
- Clean login/signup interface with tabbed navigation
- Secure form validation and user feedback

### Dashboard
- Overview of mood statistics and trends
- Recent mood entries with emoji indicators
- Weekly trend visualization

### Mood Logging
- Comprehensive form for tracking:
  - Mood level (1-10) with emoji indicators
  - Energy level (1-10)
  - Main activity selection
  - Sleep quality rating
  - Optional notes

### Analytics
- Weekly mood and energy line charts
- Monthly overview with bar charts
- Activity breakdown statistics

### Daily Quotes
- Inspirational quotes in beautifully styled cards
- Interactive quote refresh functionality

### AI Chat
- Real-time chat interface with AI wellness assistant
- Message history with timestamps
- Typing indicators and smooth animations

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with Vite
- **Styling**: TailwindCSS with custom design system
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React icons
- **Animations**: Framer Motion for smooth transitions
- **State Management**: React hooks (useState, useEffect)
- **Local Storage**: JWT token persistence
- **Responsive Design**: Mobile-first approach

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mood-logger-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist/` directory.

## 🔧 Project Structure

```
mood-logger-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and Tailwind config
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── components.json        # shadcn/ui configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite bundler configuration
└── README.md             # This file
```

## 🌐 API Endpoints (Simulated)

The application simulates the following API endpoints as specified in the requirements:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Mood Management
- `GET /api/moods` - Fetch user's mood entries
- `POST /api/moods` - Create new mood entry
- `GET /api/moods/weekly` - Weekly mood statistics
- `GET /api/moods/monthly` - Monthly mood statistics

### Daily Quotes
- `GET /api/quotes/today` - Fetch today's motivational quote

### AI Chatbot
- `POST /api/chatbot` - Send message to AI assistant

*Note: All API calls are currently simulated with mock data and setTimeout for demonstration purposes.*

## 🎯 Key Features Implementation

### Authentication Flow
- JWT token-based authentication
- Persistent login state using localStorage
- Form validation and error handling
- Secure password input fields

### Mood Tracking System
- Comprehensive mood logging form
- Emoji-based mood indicators (1-10 scale)
- Activity categorization
- Sleep quality tracking
- Optional notes for detailed entries

### Data Visualization
- Interactive charts using Recharts library
- Weekly trend analysis with line charts
- Monthly overview with bar charts
- Activity breakdown statistics
- Responsive chart design

### AI Wellness Assistant
- Real-time chat interface
- Message history with timestamps
- Typing indicators during AI responses
- Contextual wellness advice simulation

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured interface with side-by-side layouts
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Stacked layouts with optimized navigation

## 🎨 Design System

- **Color Palette**: Professional blue and indigo theme with light/dark mode support
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and micro-interactions

## 🔒 Security Considerations

- JWT tokens stored securely in localStorage
- Form validation on client-side
- Secure password input fields
- HTTPS-ready for production deployment

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with default settings

### Netlify Deployment
1. Build the project: `pnpm run build`
2. Upload `dist/` folder to Netlify
3. Configure redirects for SPA routing

## 🔮 Future Enhancements

- Real backend API integration
- User profile management
- Data export functionality
- Push notifications for mood reminders
- Social features for sharing progress
- Advanced analytics with ML insights
- Offline functionality with PWA features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Built as part of the R Square Consulting Frontend Developer Assignment.

**Assignment Requirements Fulfilled:**
- ✅ React/Next.js frontend (React with Vite)
- ✅ Authentication screens (Login/Signup)
- ✅ Mood logging form (Mood, Energy, Activity, Sleep)
- ✅ Data visualization (Weekly/Monthly charts)
- ✅ Daily quotes feature
- ✅ AI chatbot interface
- ✅ TailwindCSS styling
- ✅ Responsive design
- ✅ Clean, modern UI
- ✅ GitHub repository
- ✅ Comprehensive README
- ✅ Demo deployment ready

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

*This application demonstrates modern React development practices, responsive design principles, and user-centered design for mental wellness applications.*

