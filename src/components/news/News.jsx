import React, { useState, useEffect } from 'react'
import NewsItem from '../newsItem/NewsItem'
import Spinner from '../spinner/Spinner';
import './news.css'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    // const defaultProps = {
    //     pageSize : 6,
    //     country : "in",
    //     category : "general"
    // }

    News.propTypes = {
        pageSize : PropTypes.number,
        country : PropTypes.string,
        category : PropTypes.string
    }
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const[articles,setArticles] = useState([])
    const[loading,setLoading] = useState(true)
    const[page,setPage] = useState(1)
    const[totalResults,setTotalResults] = useState(0)
    
   
    

    const updateNews = async() => {
        props.setProgress(100)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles) 
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        
    }
    
    
    useEffect( () => {
        document.title = `${capitalizeFirstLetter(props.category)} - ARFNews`;
        updateNews();
    },[])
    

    // handlePrevClick = async() => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efd8236e0ce542f1ac7f3eea9fc7a174&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading : true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         articles : parsedData.articles, 
    //         loading : false,
    //         page : this.state.page -1
    //         })
    // }
        

    // handleNextClick = async() => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efd8236e0ce542f1ac7f3eea9fc7a174&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading : true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         articles : parsedData.articles,
    //         loading : false,
    //         page : this.state.page + 1
    //         })
    // }

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles)) 
        setTotalResults(parsedData.totalResults)
    
    }

        return(
            <div>
                <h2 className='topTitle mb-4 mt-4'>ARFNews - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                {loading && <Spinner />}
                
                <InfiniteScroll
                  dataLength={articles.length}
                  next={fetchMoreData}
                  hasMore={articles.length !== totalResults}
                  loader={<Spinner/>} >
                  
                <div className='container'>
                <div className="row">
                        {articles.map((articlesItem) => {
                         return <div className="col-md-4" key={articlesItem.url}>
                           <NewsItem 
                              title = {articlesItem.title}
                              description = {articlesItem.description}
                              imageUrl = {articlesItem.urlToImage}
                              newsUrl = {articlesItem.url}
                              date = {articlesItem.publishedAt}
                              author = {articlesItem.author}
                              source = {articlesItem.source.name}
                            />
                         </div>})}
                </div>
                </div>
                </InfiniteScroll>
                

                {/* <div className="container arrowButtons mt-4">
                    <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className='btn btn-dark btn-sm'> &larr; Previous</button>
                    <button disabled={this.state.page >= (Math.ceil(this.state.totalResults/this.props.pageSize))} onClick={this.handleNextClick} className='btn btn-dark btn-sm'>Next &rarr;</button>
                </div> */}

            </div>
            
        )
            }
     export default News