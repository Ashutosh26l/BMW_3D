# BMW Showroom — 3D Interactive Car Configurator

A production-grade BMW virtual showroom built with React, Three.js, Tailwind CSS, and shadcn-inspired components.

---

## 🚀 Quick start

```bash
# Install dependencies
npm install

# Start development Server
npm run dev

# Build for production
npm run build
```

---

## 🏗 Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | React 18 + Vite                     |
| 3D Engine    | Three.js                            |
| Styling      | Tailwind CSS v3 + shadcn/ui         |
| Animation    | Framer Motion + CSS animations      |
| Icons        | Lucide React                        |
| Fonts        | Barlow Condensed + Outfit           |

---

## 📁 Project Structure

```
bmw-showroom/
├── src/
│   ├── components/
│   │   ├── ui/                   # shadcn-inspired components
│   │   │   └── index.jsx         # Button, Card, Badge, Dialog, Tabs...
│   │   ├── Navbar.jsx            # Top navigation with dropdowns
│   │   ├── HeroSection.jsx       # Landing hero with CTA
│   │   ├── CarViewer3D.jsx       # Three.js 3D viewer (drag to rotate)
│   │   ├── ModelSelector.jsx     # Horizontal scroll model selector
│   │   ├── ConfigPanel.jsx       # Color / spec / feature config sidebar
│   │   └── Footer.jsx            # Site footer
│   ├── data/
│   │   └── bmwModels.js          # All BMW model data (9 models)
│   ├── utils/
│   │   └── carGeometry.js        # Three.js car geometry builder
│   ├── App.jsx                   # Root app with layout
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles + Tailwind
└── ...config files
```

---

## 🔌 Backend Integration Guide

### 1. Install Actual shadcn/ui

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge dialog tabs
```

Replace `src/components/ui/index.jsx` imports with official shadcn components.

---

### 2. Add React Query (Data Fetching)

```bash
npm install @tanstack/react-query axios
```

Wrap `App.jsx`:
```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

// In main.jsx:
<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

---

### 3. Replace Static Data with API

Replace `src/data/bmwModels.js` static data with an API hook:

```jsx
// src/hooks/useBMWModels.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useBMWModels() {
  return useQuery({
    queryKey: ['bmw-models'],
    queryFn: () => axios.get('/api/models').then(r => r.data),
    staleTime: 5 * 60 * 1000,
  });
}

// In App.jsx, replace:
// const [models] = useState(BMW_MODELS);
// With:
const { data: models, isLoading } = useBMWModels();
```

---

### 4. Backend API Routes (Express/Node)

```javascript
// server/routes/models.js

// GET /api/models - list all models
router.get('/models', async (req, res) => {
  const models = await Model.findAll();
  res.json(models);
});

// GET /api/models/:id - single model
router.get('/models/:id', async (req, res) => {
  const model = await Model.findById(req.params.id);
  res.json(model);
});

// POST /api/configurations - save user config
router.post('/configurations', auth, async (req, res) => {
  const config = await Configuration.create({
    userId: req.user.id,
    modelId: req.body.modelId,
    color: req.body.color,
    variant: req.body.variant,
    options: req.body.options,
  });
  res.json(config);
});

// POST /api/test-drives - book test drive
router.post('/test-drives', async (req, res) => {
  const booking = await TestDrive.create(req.body);
  await sendConfirmationEmail(booking);
  res.json(booking);
});
```

---

### 5. Database Schema (PostgreSQL/Prisma)

```prisma
// prisma/schema.prisma

model BMWModel {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  series      String
  tagline     String
  price       Int
  category    String
  badge       String?
  year        Int
  modelType   String
  specs       Json
  colors      String[]
  features    String[]
  variants    Json
  createdAt   DateTime @default(now())
}

model UserConfiguration {
  id        String   @id @default(cuid())
  userId    String
  modelId   String
  color     String
  variant   String
  options   Json
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
  model     BMWModel @relation(fields: [modelId], references: [id])
}

model TestDriveBooking {
  id         String   @id @default(cuid())
  name       String
  email      String
  phone      String
  modelId    String
  dealerId   String
  date       DateTime
  status     String   @default("pending")
  createdAt  DateTime @default(now())
}
```

---

### 6. Authentication (NextAuth.js or Clerk)

```bash
npm install @clerk/clerk-react  # or next-auth
```

```jsx
// Wrap in ClerkProvider
import { ClerkProvider, SignIn, UserButton, useUser } from '@clerk/clerk-react';
```

---

### 7. Real BMW 3D Models

For production, replace geometric cars with real GLTF models:

```bash
npm install @react-three/fiber @react-three/drei
```

```jsx
import { useGLTF } from '@react-three/drei';

function BMWModel({ modelPath }) {
  const { scene } = useGLTF(modelPath); // e.g., '/models/bmw-3-series.glb'
  return <primitive object={scene} />;
}
```

Place `.glb` files in `public/models/`:
- `public/models/bmw-3-series.glb`
- `public/models/bmw-5-series.glb`
- etc.

---

### 8. Environment Variables

```env
# .env
VITE_API_URL=https://api.yourdomain.com
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxx
VITE_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## 🎨 Customisation

- **Colors**: Edit `tailwind.config.js` → `colors.bmw`
- **Models**: Edit `src/data/bmwModels.js`
- **Car 3D Shapes**: Edit `src/utils/carGeometry.js`
- **Fonts**: Edit `index.html` Google Fonts link

---

## 📱 Features

- ✅ 9 BMW models (3, 5, 7 Series, M3, M4, X3, X5, X7, i4, iX)
- ✅ Real-time color configurator
- ✅ Interactive 3D viewer with drag-to-rotate
- ✅ Auto-rotation toggle
- ✅ Responsive design (mobile + desktop)
- ✅ Dark luxury theme
- ✅ Smooth animations & transitions
- ✅ shadcn-inspired UI components
- ✅ Series filter tabs
- ✅ Spec sheets per model
- ✅ Variant selector

---

## 📄 License

© 2024 BMW AG trademarks are property of BMW AG.  
This is a demonstration project — not affiliated with BMW AG.