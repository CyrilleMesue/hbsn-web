document.addEventListener("DOMContentLoaded", function () {
  fetch('../jsons/recent-posts.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const container = document.getElementById('recent-posts-widget');

      data.posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = "post-item";

        const postTitle = document.createElement('h4');
        const postLink = document.createElement('a');
        postLink.href = post.link;
        postLink.textContent = post.title;
        postTitle.appendChild(postLink);

        const postDate = document.createElement('time');
        postDate.setAttribute('datetime', post.date);
        postDate.textContent = new Date(post.date).toLocaleDateString();

        postItem.appendChild(postTitle);
        postItem.appendChild(postDate);

        container.appendChild(postItem);
      });
    })
    .catch(error => console.error('Error loading recent posts:', error));
});
