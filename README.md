# 🐾 PawGallery

PawGallery is a responsive dog breed explorer built with React and TypeScript.
The application fetches real-time breed data from TheDogAPI and displays it in a clean, responsive grid layout.

## 🚀 Features

- 🐶 Display all dog breeds
- 🔍 Search breeds by name
- 📱 Fully responsive grid layout
- 🖼 Dynamic breed images from API
- ⚡ Conditional rendering (search results OR full list)
- 🛠 Environment-based API configuration

## 🧱 Tech Stack

- React 19
- TypeScript
- Vite
- CSS Grid & Flexbox
- Fetch API
- Environment Variables (.env)

---

## ▶ Getting Started

```bash
npm install
npm run dev
```

---

## 🔌 API Configuration

- Create a .env file in the root directory:

  VITE_PAWGALLERY_API_KEY=your_api_key
  VITE_PAWGALLERY_BASE_URL=https://api.thedogapi.com/v1

- The API key is securely sent in request headers:
  headers: {
  "x-api-key": apiKey,
  }

---

## 📱 Responsive Layout

The grid layout automatically adjusts using:
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

- Desktop → Multiple cards per row
- Tablet → 2–3 cards
- Mobile → Single column

## 🧠 Architecture Highlights

- Lifted state for search functionality

- Conditional rendering logic:

```ts
const displayDogs = searchedDogs ?? dogs;
```

- Separation of UI and data logic
- Reusable Card component
- Controlled search input

## 📸 Preview

![PawGallery Screenshot](https://raw.githubusercontent.com/Delnazmatin/PawGallery/refs/heads/main/src/assets/Screenshot.png)
