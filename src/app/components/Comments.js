// src/components/Comments.js
import { useState } from 'react';

function Comments() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="comments-section">
      <h3 className="text-xl font-semibold underline decoration-1 hover:scale-y-150">Comments</h3>

      {/* Comment input form */}
      <form onSubmit={handleCommentSubmit} className="space-y-4 text-gray-600 font-bold">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:scale-110 hover:bg-green-400">
          Submit Comment
        </button>
      </form>

      {/* Display list of comments */}
      <div className="comments-list mt-4">
        {comments.length === 0 ? (
          <p className='hover:scale-y-150'>No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="comment p-2 mt-2 border-b border-gray-300">
              <p>{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
