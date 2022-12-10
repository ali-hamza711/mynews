import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, source, author, date } = props;
  return (
    <div className='container my-4'>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source}
          </span>
        </div>
        <img src={!imageUrl ? "https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/4068455-ps-best-games-2022.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {!author ? 'unknown' : author} on {new Date(date).toUTCString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem;
