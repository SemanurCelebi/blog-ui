import React, { useState } from 'react';
import '../style/blog.scss'

function Blog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Başlık:', title);
      console.log('İçerik:', content);
      // Form gönderimi burada gerçekleştirilebilir
    };
  
    return (
      <div className="blog-form">
        <h2 className="blog-form__title">Yeni Blog Yazısı Oluştur</h2>
        <form onSubmit={handleSubmit}>
          <div className="blog-form__group">
            <label htmlFor="title" className="blog-form__label">Başlık:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="blog-form__input"
              required
            />
          </div>
          <div className="blog-form__group">
            <label htmlFor="content" className="blog-form__label">İçerik:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="blog-form__textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="blog-form__button">Gönder</button>
        </form>
      </div>
    );
  }
  
  export default Blog;