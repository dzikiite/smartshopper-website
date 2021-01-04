import anime from 'animejs/lib/anime.es.js';

export const titleAnimation = () => {
    anime({
        targets: 'h1',
        translateX: 250,
        duration: 3000,
    })
}

export const loginButtonAnimation = (el, text) => {
    anime({
        targets: `#${text}`,
        scale: 1.2,
        borderRadius: 0,
        duration: 1000,
        elasticity: 2000,
    })
    
    el.addEventListener('mouseout', () => {
        anime({
            targets: 'button',
            scale: 1,
            borderRadius: '8px',
            duration: 1000,
            elasticity: 2000,
        })
    })
}