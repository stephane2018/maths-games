/**
 * Confetti celebration effect - pure CSS, no images
 */

const COLORS = ['#3B82F6', '#EF4444', '#FCD34D', '#10B981', '#8B5CF6', '#F97316'];

export function createConfetti(parent, count = 40) {
  const container = document.createElement('div');
  container.className = 'confetti-container';

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    piece.style.width = `${8 + Math.random() * 8}px`;
    piece.style.height = `${6 + Math.random() * 6}px`;
    piece.style.setProperty('--duration', `${1.5 + Math.random() * 2}s`);
    piece.style.setProperty('--delay', `${Math.random() * 0.5}s`);
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
  }

  parent.appendChild(container);

  // Clean up after animation
  setTimeout(() => container.remove(), 4000);
}
