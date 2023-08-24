export const animateH1 = {
  offscreen: { scale: 0.5 },
  onscreen: {
    scale: 1,
  },
};

export const animatePic = {
  offscreen: { scale: 0.85, y: 100, opacity: 0 },
  onscreen: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.8, bounce: 0.3 },
  },
};

export const animatefromLeft = {
  offscreen: { x: -200, opacity: 0.2 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  },
};

export const animatefromRight = {
  offscreen: { x: 200, opacity: 0.2 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  },
};

export const animatefromBottom = {
  offscreen: { y: "30vh", opacity: 0.2 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  },
};
