export const easeEditorial = [0.16, 1, 0.3, 1];

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeEditorial } },
};
