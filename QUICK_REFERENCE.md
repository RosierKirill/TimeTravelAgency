# TimeTravel Agency - Quick Reference Card

## 📋 Project Overview

**Type**: Modern Interactive Web Application  
**Framework**: Next.js 14 (App Router)  
**Language**: TypeScript  
**Styling**: Tailwind CSS + Framer Motion  
**Deployment**: Vercel-ready  

## 🎯 Three Destinations

| Destination | Era | Price | Duration | Theme |
|---|---|---|---|---|
| Paris 1889 | Belle Époque | $45,000 | 7 days | Gold/Amber |
| Cretaceous Era | -65M years | $125,000 | 5 days | Green/Emerald |
| Florence 1504 | Renaissance | $55,000 | 6 days | Purple/Pink |

## 🚀 Quick Start

```bash
cd TimeTravelAgency
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 File Structure

```
/app              - Next.js app directory
  /api/chat       - Chatbot API endpoint
  page.tsx        - Main page
  layout.tsx      - Root layout
  globals.css     - Global styles

/components       - React components
  /layout         - Header, Footer
  /home           - All page sections
  /chatbot        - Chat widget

/lib              - Utilities and data
  destinations.ts - Destination data
  quizLogic.ts    - Quiz engine
  utils.ts        - Helpers
  chatbotPrompt.ts- AI system prompt

/public           - Static assets
```

## 🎨 Color Palette

- **Primary Background**: `#0b0f1a` (dark-bg)
- **Card Background**: `#1a1f2e` (dark-card)
- **Border Color**: `#2a3142` (dark-border)
- **Accent Gold**: `#d4af37` (gold)
- **Gold Light**: `#e8c547` (gold_light)

## ⚡ Key Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run linting
```

## 🧩 Main Components

### Page Sections
1. **Hero** - Animated introduction with CTA
2. **AgencyIntro** - Feature highlights
3. **Destinations** - 3 interactive cards + modal
4. **Quiz** - 4-question recommendation engine
5. **BookingForm** - Reservation with calculator
6. **ChatWidget** - Floating AI assistant
7. **Header** - Navigation
8. **Footer** - Links & credits

## 🤖 Chatbot Setup

### Default (Mock Mode - Works!)
```
NEXT_PUBLIC_USE_MOCK_CHAT=true
```

### With Real AI (Optional)
```
OPENROUTER_API_KEY=sk_live_...
NEXT_PUBLIC_USE_MOCK_CHAT=false
```

## 📱 Responsive Breakpoints

- **Mobile**: <640px (full-width stack)
- **Tablet**: 640px-1024px (2-column)
- **Desktop**: >1024px (3-column + sidebar)

## ✨ Animations Library

All animations use **Framer Motion**:
- `initial` - Starting state
- `animate` - Normal state
- `whileHover` - On hover
- `whileTap` - On click
- `exit` - Unmounting
- `transition` - Duration & easing

## 🎯 Quiz Logic

**Questions**:
1. Experience type (Cultural/Adventure/Elegance)
2. Time period (Modern/Ancient/Renaissance)
3. Location preference (Urban/Nature/Museums)
4. Activity preference (Monuments/Wildlife/Art)

**Output**: Destination recommendation + match %

## 📊 Form Fields

**Booking Form**:
- Full Name (required)
- Email (required)
- Destination (required)
- Travel Date (required)
- Travelers (1-6)

**Summary Side Panel**:
- Auto-updates destination details
- Live price calculation
- Total for all travelers

## 🔗 API Routes

```
POST /api/chat
  Input: { message: string }
  Output: { reply: string }
  
  Features:
  - Mock responses (default)
  - Real AI integration (optional)
  - Error handling & fallback
```

## 🛠️ Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "typescript": "^5.2.2",
  "tailwindcss": "^3.3.0",
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.263.0"
}
```

## 🎨 Styling Classes

```css
.btn-primary        /* Gold button */
.btn-secondary      /* Gold outline button */
.card-hover         /* Hover animations */
.glass              /* Glass effect */
.text-gold-gradient /* Gradient text */
```

## 📝 TypeScript Interfaces

```typescript
// Destination
interface Destination {
  id: string
  title: string
  price: number
  duration: number
  image: string
  highlights: string[]
  safetyNotes: string[]
  theme: { color: string; gradient: string }
}

// Quiz Answer
interface QuizAnswer {
  q1: string
  q2: string
  q3: string
  q4: string
}

// Chat Message
interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}
```

## 🌐 Environment Variables

### Development
```
NEXT_PUBLIC_USE_MOCK_CHAT=true
```

### Production (Vercel)
```
OPENROUTER_API_KEY=sk_live_...
NEXT_PUBLIC_USE_MOCK_CHAT=false
```

## 🚀 Deployment Checklist

- [ ] Push code to Git
- [ ] Run `npm run build` locally
- [ ] Connect to Vercel
- [ ] Add environment variables
- [ ] Deploy with `vercel --prod`
- [ ] Test all features in production
- [ ] Share the live URL!

## 🎯 Next Steps

1. **Run development server**: `npm run dev`
2. **Explore the app**: http://localhost:3000
3. **Test the quiz**: Submit and see recommendations
4. **Try the chatbot**: Click floating button
5. **Fill booking form**: See price calculations
6. **Build for production**: `npm run build`
7. **Deploy to Vercel**: `vercel --prod`

## 📚 Useful Commands

```bash
# Development
npm run dev                 # Start dev server
npm run build              # Production build
npm start                  # Run production server

# Utilities
npm run lint               # Check code quality
node -v                    # Check Node version
npm -v                     # Check npm version

# Cleanup
rm -rf .next               # Clear Next.js cache
rm -rf node_modules        # Clear dependencies
npm install                # Reinstall
```

## 🤝 Component Props

### DestinationCard
```typescript
<DestinationCard
  destination={Destination}
  onClick={() => void}
/>
```

### DestinationModal
```typescript
<DestinationModal
  destination={Destination}
  onClose={() => void}
/>
```

### ChatWidget
```typescript
<ChatWidget />  // No props needed
```

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion

## 🐛 Common Issues & Fixes

| Issue | Solution |
|---|---|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Styles not loading | `rm -rf .next && npm run dev` |
| Chat not responding | Check `NEXT_PUBLIC_USE_MOCK_CHAT` in `.env.local` |
| Images not showing | Check internet connection & Unsplash CDN |
| Build fails | `npm install && npm run build` |

## ✅ Project Status: COMPLETE

All files generated and ready to use! 

**Total Files**: 25+  
**Components**: 12  
**Configuration**: Complete  
**Documentation**: Comprehensive  

---

**Start with**: `npm install && npm run dev`  
**Enjoy**: 🕰️✨
