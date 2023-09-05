import './style.css';

import { io } from 'socket.io-client';
import Clerk from '@clerk/clerk-js';
import router from './services/router.js';
import Home from './components/Home.ts';

window.app = {};
app.router = router;

window.addEventListener('DOMContentLoaded', () => {
  app.router.init();
});

const clerkFrontendApi = `pk_test_ZWFnZXItZnJvZy0xLmNsZXJrLmFjY291bnRzLmRldiQ`;

// document.querySelector<HTMLDivElement>('.cnt')!.innerHTML = `
//   <div
//     id="user-button"
//   ></div>
// `;

// document.querySelector<HTMLDivElement>('.cnt')!.innerHTML = `
//   <div
//     id="sign-in"
//   ></div>
// `;

// const signInComponent = document.querySelector<HTMLDivElement>('#sign-in')!;
// const clerk = new Clerk(clerkFrontendApi);
// await clerk.load();

// clerk.mountSignIn(signInComponent, {});

// const socket = io('//localhost:3000');

// window.addEventListener('DOMContentLoaded', () => {
//   socket.on('basicEmit', (socket) => {
//     console.log(socket);
//   });

//   return () => {
//     socket.close();
//   };
// });
