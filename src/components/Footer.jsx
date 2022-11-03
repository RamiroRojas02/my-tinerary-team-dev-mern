import React from 'react'
import ScrollToTop from './ScrollToTop'
export default function Footer() {
  return (
    <div className='divFooter'>
        <div className='divFooterChild'><span>Sites</span> 
        <a href="/Cities">Cities</a>
        <a href="/hotels">Hotels</a>
        </div>
        <div className='divFooterChild'><span>Contact Us</span>
        <a href="#">email:nicolasgonzalolopez@hotmail.com</a>
        <a href="#">WhatsApp:+549-114321-1234</a>
        </div>
        <div className='divFooterChild'><span>Created By:</span>
        <p>Lopez Nicolas & Ramiro Rojas</p>
        </div>
        <div className='divFooterChild'>
           <ScrollToTop/>
        </div>
    </div>
  )
}
