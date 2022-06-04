// Code that is responsible to get and set data for part of an appication

//commentModel
class CommentModel {
  constructor(type) {
   this.type = type;
    // get the initial list of comments of out local storage if it exists
    this.comments = readFromLS(this.type) || [];
  }
  // combine getAllComments and filterCommentsByName methods
  getComments(q = null) {
     if(q === null) {
       //no query, get all comments of the type
       return this.comments;
     } else {
       // comments for a specific post filter by name
       return this.comments.filter(el => el.name === q);
     }
  }

  addComment(postName, comment) {
    const newComment = {
      name: postName,
      comment: comment,
      date: new Date()
    };
    this.comments.push(newComment);
    writeToLS(this.type, this.comments);
  }
}

function writeToLS(key, data) {
  //we can use JSON.stringify to convert our object to a string
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  //the string from localStorage converted back to an object
  return JSON.parse(window.localStorage.getItem(key));
}

// methods to create the HTML to output our list of comments

const commentUI = `<div class="addComment">
<h2>Add a Comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;
// function renderCommentList
function renderCommentList(elements, comments) {
  //clear out comments
  elements.innerHTML = '';
  //add new list
  comments.forEach(el => {
    let item = document.createElement('li');
    item.innerHTML = `
      ${el.name}: ${el.comment}
      `;

      elements.appendChild(item);
  });
}

// comments this code handles getting the list of comments from the data source

class Comments {
  constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    this.model = new CommentModel(this.type)
    }

  addSubmitListener(postName) {
    // use element ontouchend to avoid more than one listener getting attached
    document.getElementById('commentSubmit').ontouchend = () => {
      //debugger;
      this.model.addComment(
        postName,
        document.getElementById('commentEnry').value
        );
        document.getElementById('commentEntry').value = '';
        this.showCommentList(postName);
      };
  }
  showCommentList(q = null) {
    try {
      const parent = document.getElementById(this.commentElementId);
      if(!parent) throw new Error('comment parent not found');
      // check to see if the commentUI code has been added
      if(parent.innerHTML === '') {
        parent.innerHTML = commentUI;
      }
      if (q !== null) {
        // looking at one post, show comments and new comment button
        document.querySelector('.addComment').style.display = 'block';
        this.addSubmitListener(q);
      } else {
        // no post name provided, hide comment entry
        document.querySelector('.addComment').style.display = 'none';
      }
      // get comments from the model
      let comments = this.model.getComments(q);
      if (comments === null) {
        // avoid an error if there are no comments yet
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
    } catch (error) {
      console.log(error);
    }
   }
 }

 export default Comments;

