import './style.css';
import { showStories } from './modules/showStories.js';

const article = document.getElementById('section');
document.body.onload = showStories(article);
