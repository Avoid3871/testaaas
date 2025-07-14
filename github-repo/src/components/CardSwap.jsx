import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";

const Card = forwardRef(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);

Card.displayName = "Card";

const makeSlot = (
  i,
  distX,
  distY,
  total
) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  el.set({
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skew: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

export const CardSwap = ({
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  children,
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const intervalRef = useRef(null);

  const cards = useMemo(() => {
    return Children.toArray(children).filter(isValidElement);
  }, [children]);

  const slots = useMemo(() => {
    return cards.map((_, i) =>
      makeSlot(i, cardDistance, verticalDistance, cards.length)
    );
  }, [cards.length, cardDistance, verticalDistance]);

  const moveCards = () => {
    if (cardsRef.current.length === 0) return;

    // Simple rotation without GSAP
    const firstCard = cardsRef.current[0];
    const firstSlot = slots[0];
    
    // Move first card to back
    firstCard.style.transform = `translate(-50%, -50%) translate3d(${slots[slots.length - 1].x}px, ${slots[slots.length - 1].y}px, ${slots[slots.length - 1].z}px)`;
    firstCard.style.zIndex = slots[slots.length - 1].zIndex;
    
    // Move other cards forward
    for (let i = 1; i < cardsRef.current.length; i++) {
      const card = cardsRef.current[i];
      const slot = slots[i - 1];
      card.style.transform = `translate(-50%, -50%) translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px)`;
      card.style.zIndex = slot.zIndex;
    }
    
    // Rotate the refs array
    cardsRef.current = [...cardsRef.current.slice(1), cardsRef.current[0]];
  };

  useEffect(() => {
    if (cardsRef.current.length === 0) return;

    // Initial positioning
    cardsRef.current.forEach((card, i) => {
      const slot = slots[i];
      card.style.position = 'absolute';
      card.style.top = '50%';
      card.style.left = '50%';
      card.style.transform = `translate(-50%, -50%) translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px)`;
      card.style.zIndex = slot.zIndex;
      card.style.transition = 'all 0.5s ease-in-out';
    });

    if (delay > 0) {
      intervalRef.current = setInterval(moveCards, delay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cards.length, delay, slots]);

  const handleMouseEnter = () => {
    if (pauseOnHover && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && delay > 0) {
      intervalRef.current = setInterval(moveCards, delay);
    }
  };

  return (
    <div
      ref={containerRef}
      className="card-swap-container"
      style={{
        position: 'relative',
        height: '600px',
        transform: 'translate(5%, 20%)',
        transformOrigin: 'bottom right',
        perspective: '900px',
        overflow: 'visible'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((child, index) =>
        cloneElement(child, {
          key: index,
          ref: (el) => {
            if (el) cardsRef.current[index] = el;
          },
        })
      )}
    </div>
  );
};

export default CardSwap;

