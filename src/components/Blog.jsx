import React from 'react'

const Blog = () => {
    return (
        <div>
            <section className="blog-news" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
                <div className="container text-center">
                    <h2 style={{ color: '#333', fontWeight: 'bold' }}>Latest News</h2>
                    <div className="row" style={{ marginTop: '30px' }}>
                        {/* Repeat for each blog post */}
                        <div className="col-md-4">
                            <div className="news-box" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ color: '#333', fontWeight: 'bold' }}>Blog Post Title</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>A brief description of the blog post...</p>
                                <a href="/blog" className="btn btn-secondary">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-box" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ color: '#333', fontWeight: 'bold' }}>Blog Post Title</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>A brief description of the blog post...</p>
                                <a href="/blog" className="btn btn-secondary">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-box" style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ color: '#333', fontWeight: 'bold' }}>Blog Post Title</h3>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>A brief description of the blog post...</p>
                                <a href="/blog" className="btn btn-secondary">Read More</a>
                            </div>
                        </div>
                        {/* Add more blog posts similarly */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
