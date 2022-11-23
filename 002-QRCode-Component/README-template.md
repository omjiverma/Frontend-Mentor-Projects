# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Frontend Mentor - QR code component solution](#frontend-mentor---qr-code-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)


## Overview

### Screenshot

![](./Screenshot%202022-11-23%20223443.png)

### Links

- Live Site URL: [Add live site URL here]([https://your-live-site-url.com](https://coruscating-moonbeam-4ec489.netlify.app/))

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox



```html
  <main>
      <div class="card">
        <img src="./images/image-qr-code.png" alt="" srcset="">
      
        <div class="card-detail">
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
  </main>  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Omji Verma</a>.
  </div>
```
```css
/* Font Family */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

:root{
    --White: hsl(0, 0%, 100%);
    --Light-gray: hsl(212, 45%, 89%);
    --Grayish-blue: hsl(220, 15%, 55%);
    --Dark-blue: hsl(218, 44%, 22%);
}
/* Body Styling */
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
    background-color: var(--Light-gray);
}
main{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Card Styling */
.card{
    width: 340px;
    background-color: var(--White);
    padding: 15px;
    border-radius: 1.8rem;
}
.card > img{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
}
.card-detail{
    margin: 2rem 1.5rem;
}
.card-detail > h2{
    color: var(--Dark-blue);
    text-align: center;
}

.card-detail > p{
    font-size: 15px;
    margin-left: 25px;
    margin-right: 25px;
    color: var(--Grayish-blue);
    text-align: center;
}

/* Attribution */
.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }
```


