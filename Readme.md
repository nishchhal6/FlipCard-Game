# Memory Match Game

A beautiful, responsive memory card matching game built with React, TypeScript, and Tailwind CSS. Features smooth 3D animations, multiple difficulty levels, and comprehensive score tracking.

## 🚀 Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation
1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`)

### Build for Production
```bash
npm run build
npm run preview
```

## 🎮 Controls

### Desktop
- **Click** on cards to flip them
- **Click** difficulty buttons to select level
- **Click** control buttons (pause, restart, leaderboard)

### Mobile/Touch
- **Tap** on cards to flip them
- **Tap** difficulty buttons to select level
- **Tap** control buttons for game actions
- Optimized touch targets for mobile devices

### Keyboard Navigation
- Game is primarily mouse/touch controlled
- Modal dialogs can be closed with click/tap outside

## ✨ Features

### Core Gameplay
- **Card Matching**: Flip two cards at a time to find matching pairs
- **Move Counter**: Tracks the number of moves (each pair attempt counts as one move)
- **Timer**: Real-time elapsed time tracking with precise millisecond accuracy
- **Win Detection**: Automatic game completion when all pairs are matched

### Difficulty Levels
- **Easy**: 4×4 grid (8 pairs) - Perfect for beginners
- **Medium**: 6×6 grid (18 pairs) - Balanced challenge
- **Hard**: 8×8 grid (32 pairs) - Expert level difficulty

### Visual Design
- **3D Card Animations**: Smooth CSS transform-based card flipping
- **Responsive Design**: Optimized for all screen sizes (320px to 1920px+)
- **Gradient Backgrounds**: Beautiful animated gradient backgrounds
- **Glassmorphism UI**: Modern frosted glass effect on interface elements
- **Hover Effects**: Subtle interactive feedback on all clickable elements

### Game Management
- **Pause/Resume**: Pause the game and timer at any time
- **Restart**: Reset the current game while keeping the same difficulty
- **Home Navigation**: Return to difficulty selection from any game state

### Score System
- **Dynamic Scoring**: Score calculated based on moves, time, and difficulty
- **Best Score Tracking**: Personal best scores saved locally for each difficulty
- **Score History**: Complete history of all games played
- **Performance Metrics**: Detailed breakdown of moves and time

### Data Persistence
- **localStorage Integration**: All scores and progress saved locally
- **Cross-Session Persistence**: Scores maintained between browser sessions
- **No Account Required**: Fully offline functionality

### Leaderboard
- **Personal Scores**: View your best performances across all difficulties
- **Global Leaders**: Mock competitive leaderboard with sample data
- **Score Comparison**: Compare your performance against top players
- **Detailed Stats**: Moves, time, and difficulty breakdown for each entry

## 🎯 Game Rules

1. **Objective**: Match all pairs of cards in the fewest moves and shortest time
2. **Gameplay**: 
   - Click/tap a card to flip it over
   - Click/tap a second card to attempt a match
   - If cards match, they stay flipped and turn green
   - If cards don't match, they flip back after 1 second
   - Continue until all pairs are matched
3. **Scoring**: Higher scores for fewer moves, faster completion, and harder difficulties
4. **Winning**: Game ends when all pairs are successfully matched

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (optimized touch targets, stacked layouts)
- **Tablet**: 641px - 1024px (balanced grid sizing, medium spacing)
- **Desktop**: 1025px+ (full feature layout, larger interactive elements)

## 🔧 Technical Features

### Performance Optimizations
- **Efficient Rendering**: Optimized React components with proper memoization
- **CSS Animations**: Hardware-accelerated transforms for smooth performance
- **Touch Optimization**: `touch-action: manipulation` for responsive mobile interaction
- **Lazy Loading**: Components loaded only when needed

### Browser Compatibility
- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+
- **CSS Features**: Supports backdrop-filter, CSS Grid, Flexbox, CSS transforms

### Accessibility
- **Keyboard Navigation**: Basic keyboard support for interface elements
- **Screen Reader**: Semantic HTML structure for better accessibility
- **Color Contrast**: WCAG compliant color combinations
- **Touch Targets**: Minimum 44px touch targets for mobile accessibility

## 🐛 Known Issues

### Minor Issues
- **Card Flip Timing**: Very rapid clicking might occasionally cause visual glitches (resolved with debouncing)
- **Mobile Safari**: Backdrop blur effects may appear slightly different on older iOS versions
- **Performance**: Hard difficulty (64 cards) may have minor performance impact on older mobile devices

### Browser-Specific
- **Internet Explorer**: Not supported (requires modern CSS features)
- **Safari < 14**: Limited backdrop-filter support may affect glassmorphism effects
- **Firefox**: Some CSS animations may appear slightly different due to rendering engine differences

### Planned Improvements
- **Sound Effects**: Audio feedback for card flips and matches
- **Themes**: Multiple color themes and card designs
- **Online Leaderboard**: Real competitive leaderboard with user accounts
- **Achievement System**: Unlock achievements for various gameplay milestones
- **Custom Card Sets**: Different emoji/icon sets for variety

## 🛠 Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Game.tsx        # Main game logic and state management
│   ├── GameBoard.tsx   # Card grid layout and rendering
│   ├── GameCard.tsx    # Individual card component with animations
│   ├── GameHeader.tsx  # Game stats and control buttons
│   ├── DifficultySelector.tsx  # Level selection interface
│   ├── WinModal.tsx    # Victory celebration modal
│   ├── Leaderboard.tsx # Score display and rankings
│   ├── PauseOverlay.tsx # Pause screen overlay
│   └── AnimatedBackground.tsx # Background animations
├── types/              # TypeScript type definitions
│   └── game.ts        # Game state and data interfaces
├── utils/              # Utility functions
│   ├── gameLogic.ts   # Core game mechanics and calculations
│   └── localStorage.ts # Data persistence functions
├── App.tsx            # Root application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and animations
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

### Technologies Used
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, consistent icon library

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the game!

---

**Enjoy playing Memory Match!** 🎮✨
