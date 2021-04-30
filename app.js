// import functions and grab DOM elements

//Happy Attribute
const userInput1 = document.getElementById('input-happy1')
const inputButton1 = document.getElementById('input-button1')
const inputValue1 = document.getElementById('input-value')
const imageDisplay1 = document.getElementById('white-space-bg1')

//Strong Attribute
const userInput2 = document.getElementById('input-strong1')
const inputButton2 = document.getElementById('input-button2')
const inputValue2 = document.getElementById('input-value')
const imageDisplay2 = document.getElementById('white-space-bg2')

//Smelly Attribute
const userInput3 = document.getElementById('input-smelly1')
const inputButton3 = document.getElementById('input-button3')
const inputValue3 = document.getElementById('input-value')
const imageDisplay3 = document.getElementById('white-space-bg3')


// functions
function getHappiness(happiness) {
    if (happiness < 4) return 'https://www.meme-arsenal.com/memes/107f8759ba3b8601bad0097c07b76335.jpg'
    if (happiness > 7) return 'https://lh6.googleusercontent.com/proxy/Xnx3X5AEghPRZ9e-pFeeFkUjcqNu65M9lBvU_g_vd7mbg7K1qz8KTqpTlDMHexSWfguBgEpTNSAiihIToNwu6mX8GDuXJUnXophjjmOS_IiLoVDvq5OsQW0RJWpPmMI=s0-d'
    return 'https://i.pinimg.com/originals/5f/39/ce/5f39ce686cff7feed1b3968e06f70183.jpg'
}

function getStrength(strength) {
    if (strength < 4) return 'https://images.squarespace-cdn.com/content/58387a94e58c622c2527f6f3/1480899288509-1LVNY4G4I39E1M0PXXCD/skinny-man.jpg?content-type=image%2Fjpeg'
    if (strength > 7) return 'http://upl.stack.com/wp-content/uploads/2018/03/29233000/Bodybuilder-STACK.jpg'
    return 'https://image.shutterstock.com/image-photo/happy-sport-man-strong-pose-260nw-319045184.jpg'
}

function getSmelly(stench) {
    if (stench < 4) return 'https://thumbs.dreamstime.com/b/cartoon-bad-smells-stench-aroma-toxic-deadly-gas-cartoon-bad-smells-stench-aroma-toxic-deadly-gas-vector-illustration-111428031.jpg'
    if (stench > 7) return 'https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg'
    return 'https://theodorless.com/wp-content/uploads/2016/05/Go-Odorless-Guarantee-_sml.png'
}
// set event listeners to update state and DOM

console.log('hello');
inputButton1.addEventListener('click', () => {
    console.log(userInput1.value);
    const happyImage = getHappiness(userInput1.value);
    imageDisplay1.src = happyImage;
    //inputValue1.textContent = userInput1.value;
    
});

inputButton2.addEventListener('click', () => {
    const strongImage = getStrength(userInput2.value);
    imageDisplay2.src = strongImage;
});

inputButton3.addEventListener('click', () => {
    const smellyImage = getSmelly(userInput3.value);
    imageDisplay3.src = smellyImage;

})