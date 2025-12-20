import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const animatePath = (path: SVGPathElement, triggerSelector: string) => {
  const pathLine = path.getTotalLength();
  path.style.strokeDasharray = pathLine.toString();
  path.style.strokeDashoffset = pathLine.toString();
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
};
export const initScrollPath = () => {
  const svg = document.querySelector(".svgContain svg");
  if (svg) {
    const path = svg.querySelector("path");
    if (path) {
      animatePath(path as SVGPathElement, ".svgContain");
    }
  }
  const svgOur = document.querySelector(".ourLine svg");
  if (svgOur) {
    const paths = svgOur.querySelectorAll("path.half_line");
    paths.forEach((path) => {
      animatePath(path as SVGPathElement, ".ourLine");
    });
  }
  const ourSvgSmol = document.querySelector(".ourSvg svg");
  if (ourSvgSmol) {
    const path = ourSvgSmol.querySelector("path");
    if (path) {
      animatePath(path as SVGPathElement, ".ourSvg");
    }
  }
  const haverstSvg = document.querySelector(".haverstSvg svg");
  if (haverstSvg) {
    const paths = haverstSvg.querySelectorAll("path.half_line");
    paths.forEach((path) => {
      animatePath(path as SVGPathElement, ".haverstSvg");
    });
  }
  const farmerLine = document.querySelector(".farmerLine svg");
  if (farmerLine) {
    const paths = farmerLine.querySelectorAll("path");
    paths.forEach((path) => {
      animatePath(path as SVGPathElement, ".farmerLine");
    });
  }
  const rafineSvg = document.querySelector(".rafineSvg");
  if (rafineSvg) {
    const path = rafineSvg.querySelector("path");
    if (path) {
      animatePath(path as SVGPathElement, ".rafineSvg");
    }
  }
  const beanLineSvg = document.querySelector(".beanLineSvg");
  if (beanLineSvg) {
    const path = beanLineSvg.querySelector("path");
    if (path) {
      animatePath(path as SVGPathElement, ".beanLineSvg");
    }
  }
  const beanSvg = document.querySelector(".beanSvg svg");
  if (beanSvg) {
    const paths = beanSvg.querySelectorAll("path");
    paths.forEach((path) => {
      animatePath(path as SVGPathElement, ".beanSvg");
    });
  }
  const fusionLineSvg = document.querySelector(".fusionLineSvg");
  if (fusionLineSvg) {
    const path = fusionLineSvg.querySelector("path");
    if (path) {
      animatePath(path as SVGPathElement, ".fusionLineSvg");
    }
  }
  const fusionSvg = document.querySelector(".fusionSvg svg");
  if (fusionSvg) {
    const paths = fusionSvg.querySelectorAll("path");
    paths.forEach((path) => {
      animatePath(path as SVGPathElement, ".fusionSvg");
    });
  }
  const discoverLineSvg = document.querySelector(".discoverLineSvg");
  if (discoverLineSvg) {
    const path = discoverLineSvg.querySelector("path");
    if (path) {
      animatePath(path as SVGPathElement, ".discoverLineSvg");
    }
  }
};
