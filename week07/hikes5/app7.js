import Hikes from './hikes.js';
import CommentModel from './comments.js';
// import Comments from './comments.js';
/*const comments = new comments('comment');
window.addEventListener('load', () => {
  comments.showCommentList();
}); */
//on load get the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});




