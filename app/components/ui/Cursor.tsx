export const Cursor = () => {
  const cursorRounded = document.querySelector(
    ".rounded",
  ) as HTMLElement | null;
  const cursorPointed = document.querySelector(
    ".pointed",
  ) as HTMLElement | null;

  const moveCursor = (e: MouseEvent) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    if (cursorRounded) {
      cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    if (cursorPointed) {
      cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  };

  window.addEventListener("mousemove", moveCursor);

  return <div>Cursor</div>;
};
