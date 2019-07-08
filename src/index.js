import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.mjs'
import App from './App.js'
// register ServiceWorker via OfflinePlugin, for prod only
// import './pwa.js'

let root;

function init() {  
	root = render(html`<${App} />`, document.getElementById('app'), root)
}

init();