import { nipplejs } from 'nipplejs'

const JoyStick = nipplejs.create({
    zone: 'stick',
    color: '#787777',
    size: 100,
    threshold: 0.1,  // before triggering a directional event
    fadeTime: 250,  // transition time
    multitouch: true,
    maxNumberOfNipples: 1, // when multitouch, what is too many?
    dataOnly: false,    // no dom element whatsoever
    position: {
        left: '50%',
        top: '50%',
    },               // preset position for 'static' mode
    mode: 'static',
    restOpacity: 0.5,   // opacity when not 'dynamic' and rested
    catchDistance: 1.0, // distance to recycle previous joystick in 'semi' mode
    
})

export default JoyStick