import {useEffect} from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    

      <button className='buttonScroll'
        onClick={() => {

          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
      >
        Scroll To Top
      </button>

  );
}