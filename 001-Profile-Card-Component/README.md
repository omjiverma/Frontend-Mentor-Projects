# Frontend Mentor - Profile card component solution

- [Frontend Mentor - Profile card component solution](#frontend-mentor---profile-card-component-solution)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)



## Overview

### The challenge

- Build the project as per the designs provided by the frontend mentor

### Screenshot

![](./Screenshot%202022-11-23%20160015.png)


### Links

- Live Site URL: [Add live site URL here](https://spontaneous-macaron-e528b1.netlify.app/)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox


### What I learned
  - Adding multiple background images


```html
    <main>
        <div class="card">
            <img src="./assests/bg-pattern-card.svg" alt="">
            <div class="card-detail">
                <img src="./assests/image-victor.jpg" alt="">
                <h2>Victor Crest <span> 26</span></h2>
                <p>London</p>
                <div class="social">
                    <div class="counts">
                        <h2>80K</h2>
                        <p>Followers</p>
                    </div>

                    <div class="counts">
                        <h2>803K</h2>
                        <p>Likes</p>
                    </div>

                    <div class="counts">
                        <h2>1.4K</h2>
                        <p>Photos</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/omjiverma" target="_blank">Omji Verma</a>.
        </div>
    </main>
```
```css
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

/* Variables */
:root{
    --dark-cyan: #19a2ae;
    --desaturated-blue: #2d3248;
    --grayish-blue: #6a6f81;
    --gray: #969696;
}

/* Body Styling */
body{
    background-color: var(--dark-cyan);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
}
/* Main */
main{
    width: 100%;
    height: 100vh;
    background-image: url("./assests/bg-pattern-top.svg"), url('./assests/bg-pattern-bottom.svg');
    background-position: -16rem -30rem, 50rem 22rem;
    background-repeat: no-repeat, no-repeat;
    background-attachment:inherit inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/*  Card Styling */
.card{
    overflow: hidden;
    width: 360px;
    height: 400px;
    background-color: #fcfcfc;
    border-radius: 20px;
}
.card > img{
    width: 100%; 
}
.card-detail{
    position: relative;
    margin-top: -3rem;
}
.card-detail > img{
    border: 4px solid white;
    border-radius: 50%;
    padding: 0;
    display: block;
    margin: 0 auto;
}

.card-detail >h2 {
    font-size: 18px;
    color: var(--desaturated-blue);
    text-align: center;
}
.card-detail >h2 > span{
    color: var(--grayish-blue);
    font-weight: 500;
    padding-left: 2px;
}
.card-detail > p{
    color: var(--gray);
    font-weight: 400;
    text-align: center;
}

.social{
    display: flex;
    justify-content: space-around;
    border-top: 0.8px solid var(--gray);
}

.counts > h2{
        font-size: 18px;
        color: var(--desaturated-blue);
        text-align: center;
}

.counts > p{
    font-size: 13px;
    color: var(--gray);
    text-align: center;
}


/* Attribution */
.attribution{
    padding: 1rem 0;
    position: absolute;
    bottom: 0;
}
```


### Continued development


## Author

- Frontend Mentor - [@omjiverma](https://www.frontendmentor.io/profile/omjiverma)




