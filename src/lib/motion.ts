import gsap from "gsap";
import SplitType from "split-type";

export const cinematicReveal = (el: string | HTMLElement, delay = 0, y = 30) => {
  const target = typeof el === "string" ? document.querySelectorAll(el) : el;
  return gsap.from(target, {
    opacity: 0,
    y,
    filter: "blur(10px)",
    duration: 1.5,
    stagger: 0.2,
    ease: "expo.out",
    delay,
    clearProps: "all"
  });
};

export const splitTextReveal = (el: string | HTMLElement, type: "chars" | "words" | "lines" = "chars", delay = 0) => {
  const split = new SplitType(el as HTMLElement, { types: type });
  const targets = type === "chars" ? split.chars : type === "words" ? split.words : split.lines;

  return gsap.from(targets, {
    opacity: 0,
    y: 40,
    filter: "blur(20px)",
    stagger: 0.05,
    duration: 1.5,
    ease: "expo.out",
    delay,
    clearProps: "all"
  });
};

export const imageParallax = (trigger: string | HTMLElement, image: string | HTMLElement, amount = 20) => {
  return gsap.to(image, {
    yPercent: amount,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

export const spatialTransition = (container: string | HTMLElement) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true
    }
  });
};
