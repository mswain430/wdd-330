import Hikes from './hikes.js';
import Comments from './comments.js';
// import Comments from './comments.js';
const myComments = new Comments('comment');
window.addEventListener('load', () => {
  myComments.showCommentList();
});
//on load get the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});




