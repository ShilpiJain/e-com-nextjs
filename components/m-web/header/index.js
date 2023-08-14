import React from 'react';
import header from "css/header.css";

export default function Header() {
  return (
    <div className='container flex gridJs ac'>
      <div className='flex navGap ac'>
        <img src='https://devhero.shop/cdn/shop/files/devhero-logo-header-h159_417994b4-f7be-413c-bc91-59726b351679.png?v=1649506105&width=120'></img>
        <div className='navText'><a href='/'>unisex</a></div>
        <div><a href='/'>men</a></div>
        <div><a href='/'>women</a></div>
        <div><a href='/'>All</a></div>
        <div><a href='/'>products</a></div>
        <div><a href='/'>women</a></div>
      </div>
      <div>
        <div>
          <img className='searchIcon cursor' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' />
        </div>
      </div>
    </div>
  )
}
