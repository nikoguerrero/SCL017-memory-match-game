import App from './components/App.js';

const play = () => {
    btn.style.display = 'none';
    castle.style.display = 'none';
    document.getElementById('root').appendChild(App());
}

const btn = document.createElement('button');
btn.className = 'buttonPlay';
btn.innerHTML = 'Jugar!';
btn.addEventListener('click', play);
document.body.appendChild(btn);

const castle = document.createElement('img');
castle.className = 'castleOne';
castle.src = '/images/castle.png';
document.body.appendChild(castle);

