import '../styles/blogs.css'
import data from './data.json'

export default function Blogs() {
    return (
        <div className="blog-container" id='blogs'>
            {
                data.blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <img src={blog.images} alt={blog.title} className="blog-image" />
                        <div className="blog-info">
                            <p className="blog-meta">{blog.author} • {blog.date}</p>
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-description">{blog.description}</p>
                            <div className="blog-tags">
                                {blog.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="blog-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}