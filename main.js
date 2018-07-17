const messages = document.querySelector('article');

const notTrue = document.createElement('section');
notTrue.className = "message"
notTrue.textContent = "I did not hit her, it's not true!"

const bullshit = document.createElement('section');
bullshit.className = "message"
bullshit.textContent = "It's bullshit!"

const hit = document.createElement('section');
hit.className = "message"
hit.textContent = "I did not hit her!"

const naht = document.createElement('section');
naht.className = "message"
naht.textContent = "I did NAAAHHHT!"

const Mark = document.createElement('section');
Mark.className = "message"
Mark.textContent = "Oh hi mark."

messages.appendChild(notTrue)
messages.appendChild(bullshit)
messages.appendChild(hit)
messages.appendChild(naht)
messages.appendChild(Mark)

console.log(messages)



