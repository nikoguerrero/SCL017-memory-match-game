import App from './components/App.js';

const play = () => {
    btn.style.display = 'none';
    document.getElementById('root').appendChild(App());
}

const btn = document.createElement('button');
btn.innerHTML = 'Jugar';
btn.addEventListener('click', play);
document.body.appendChild(btn);
