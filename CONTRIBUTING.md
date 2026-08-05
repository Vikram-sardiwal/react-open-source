# Contributing Guide

Sabse pehle, contribute karne ke liye interest dikhane ke liye dhanyavaad! 🙌

## Kaise Shuru Karein

1. Is repo ko **fork** karein.
2. Apne fork ko local machine par clone karein:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   ```
3. Dependencies install karein:
   ```bash
   npm install
   ```
4. Dev server chalayein:
   ```bash
   npm run dev
   ```
5. Ek naya branch banayein:
   ```bash
   git checkout -b feature/short-description
   ```

## Changes Karte Waqt

- Component-based structure follow karein (`src/components/`).
- Naming clear aur consistent rakhein.
- Commit karne se pehle `npm run lint` chala kar check kar lein.
- Chhote, focused commits karein — ek commit ek kaam.

## Pull Request Bhejna

1. Apne changes commit aur push karein.
2. GitHub par apne fork se PR open karein.
3. PR description mein bataayein ki kya change kiya aur kyun.
4. Agar koi issue se related hai, to use link karein (e.g. `Closes #12`).

## Naye Contributors Ke Liye Ideas

- `Welcome` component mein naya content ya styling add karein.
- Ek naya reusable component banayein (Button, Card, Navbar, etc.).
- Dark mode toggle add karein.
- Responsive design improve karein.
- README ya documentation better banayein.

## Code of Conduct

Sabke saath respectful aur friendly behaviour rakhein. Details [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) mein hain.

Happy contributing! 💙
