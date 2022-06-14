import React from 'react'

const NewsItem = (props) => {

    let{title,description,imageUrl,newsUrl,date,author,source} = props
    return (
      <div className="card my-3 mx-2">
        <div style = {{position : 'absolute', right: '0', display: 'flex', justifyContent: 'center' }}>
        <span className="badge rounded-pill bg-primary"> {source} </span>
        </div>
        <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2020/11/social-media-user-4-770x433.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} On {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">Read more</a>
        </div>
      </div>
    )
  }


export default NewsItem