:root {
  --primary-purple: #552583;
  --primary-gold: #fdb927; /* Slightly more vibrant gold */
  --bg-dark: #0a0a0a;
  --card-bg: #161616;
  --text-main: #ffffff;
  --text-dim: #b3b3b3;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-main);
  line-height: 1.6;
}

/* Hero Section with Animated Gradient */
.hero {
  text-align: center;
  padding: 120px 20px;
  background: linear-gradient(-45deg, #552583, #111, #c9a227, #000);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: -1px;
  margin-bottom: 1rem;
}

/* Glassmorphism Card Style */
.card {
  max-width: 900px;
  margin: -40px auto 40px; /* Overlaps hero slightly */
  padding: 40px;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Improved Buttons */
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

a, button {
  background: var(--primary-gold);
  color: #000;
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

a:hover, button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(253, 185, 39, 0.3);
  filter: brightness(1.1);
}

/* Voting Grid & Progress Bars */
.vote-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.alpha, .que {
  padding: 20px;
  border-radius: 12px;
  transition: var(--transition);
}

.alpha { background: rgba(201, 162, 39, 0.1); border: 1px solid var(--primary-gold); }
.que { background: rgba(85, 37, 131, 0.1); border: 1px solid var(--primary-purple); }

.bar {
  display: flex;
  height: 12px; /* Sleeker bar */
  background: #222;
  border-radius: 100px;
  overflow: hidden;
  margin: 20px 0;
}

#alphaBar, #queBar {
  transition: width 1s ease-in-out;
  border-radius: 100px;
}

#alphaBar { background: var(--primary-gold); }
#queBar { background: var(--primary-purple); }

.note {
  font-size: 0.9rem;
  color: var(--text-dim);
  text-align: center;
}

/* Responsive Tweak */
@media (max-width: 700px) {
  .vote-grid { grid-template-columns: 1fr; }
  .card { margin: 20px; padding: 25px; }
}
