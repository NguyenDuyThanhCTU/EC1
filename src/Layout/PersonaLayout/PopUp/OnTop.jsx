import React, { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
function OnTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-5 right-5 e py-2 px-4"
          onClick={handleScrollToTop}
        >
          <BsFillArrowUpSquareFill className="text-blue-300 bg-black hover:text-blue-600 hover:bg-white rounded-2xl text-4xl" />
        </button>
      )}
    </>
  );
}

export default OnTop;
