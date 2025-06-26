// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 遅延させて確実に描画後にスクロール
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // アニメーションスクロール（optional）
      });
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
