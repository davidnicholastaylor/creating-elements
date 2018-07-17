// const messages = document.querySelector('article');

const fragment = document.createDocumentFragment();

const notTrue = document.createElement('section');
// notTrue.className = "message"
notTrue.textContent = "I did not hit her, it's not true!";
fragment.appendChild(notTrue);

const bullshit = document.createElement('section');
// bullshit.className = "message"
bullshit.textContent = "It's bullshit!";
fragment.appendChild(bullshit);

const hit = document.createElement('section');
// hit.className = "message"
hit.textContent = "I did not hit her!";
fragment.appendChild(hit);

const naht = document.createElement('section');
// naht.className = "message"
naht.textContent = "I did NAAAHHHT!";
fragment.appendChild(naht);

const Mark = document.createElement('section');
// Mark.className = "message"
Mark.textContent = "Oh hi mark.";
fragment.appendChild(Mark);

// messages.appendChild(notTrue)
// messages.appendChild(bullshit)
// messages.appendChild(hit)
// messages.appendChild(naht)
// messages.appendChild(Mark)

document.querySelector("article").appendChild(fragment);

console.log(messages);



