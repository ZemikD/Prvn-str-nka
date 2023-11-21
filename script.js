function showArticle(articleId) {
    var articleContainers = document.querySelectorAll('.article-container');
    
    // Odstraní článek
    articleContainers.forEach(function(container) {
      container.style.display = 'none';
    });

    // Zobrazí vybraný článek
    var selectedArticle = document.getElementById(articleId);
    selectedArticle.style.display = 'block';
  }