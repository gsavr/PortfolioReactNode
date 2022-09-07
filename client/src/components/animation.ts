export const animateH1 = {
  offscreen: { scale: 0.2 },
  onscreen: {
    scale: 1,
  },
};

export const animatePic = {
  offscreen: { scale: 0.2 },
  onscreen: {
    scale: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  },
};

export const animatefromLeft = {
  offscreen: { x: "-50vw", opacity: 0.2 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  },
};

export const animatefromRight = {
  offscreen: { x: "50vw", opacity: 0.2 },
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
    transition: { type: "spring", duration: 1, bounce: 0.3 },
  },
};
