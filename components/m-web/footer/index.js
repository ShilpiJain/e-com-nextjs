import React from 'react';
import footer from "css/footer.css";

export default function Footer() {
  return (
    <div className='container'>
      <div className='textac pb20'>Quick Links</div>
      <div className='flex ac gridJa'>
      <div className='flex footGap mb40'>
        <div>Our mission</div>
        <div>about us</div>
        <div>shop</div>
        <div>RefundPolicy</div>
        <div>privacy policy</div>
        <div>terms and condition</div>
        <div>legal menntions</div>
        </div>
        </div>
        <div className='textac mb20 '>Do not miss our new products and limited collections !</div>
       <div className='textac'><input className='inputField' placeholder='Email' type='email'/></div> 
    </div>
  )
}
