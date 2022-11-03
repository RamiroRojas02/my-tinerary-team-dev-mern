import {useEffect} from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='scrollToTopDivContainer'>
      <span>Top of the page</span>
      <div />
      <button className='buttonScroll'
        onClick={() => {
            console.log("se ejecuta scrollToTop")
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        Scroll To Top
      </button>
    </div>
  );
}