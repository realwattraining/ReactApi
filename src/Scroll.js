import React, { useState, useRef, useCallback } from 'react'
import useBookSearch from './useBookSearch'

 export default function Scroll(){
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber);

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((item, index) => {
        if (books.length === index + 1) {
          return( 
                    <>
                    <div className="bg-danger" ref={lastBookElementRef} key={item}>{item}</div> 
                       {console.log("Test ::  ",item) }

                     </>          
            )
          // return (
              
          //                   <div class="col-xl-4 col-md-4 col-md-4">
          //                   <div class="card card-widget widget-user box">                                
          //                       <div class="widget-user-header bg-info"> 
          //                           <h3 class="widget-user-username" >{item.full_name}</h3>
          //                           <h5 class="widget-user-desc">{item.name}</h5>                                    
          //                       </div>
          //                       <div className="widget-user-image">
          //                           <img className="img-circle elevation-2 img1" src={item.owner} alt="User Avatar"/>
          //                       </div>
          //                       <div className="card-footer bg-danger">
          //                           <div class="row">
          //                           <div class="col-sm-4 border-right">
          //                               <div class="description-block">
          //                               <h5 class="description-header">{item.watchers}</h5>
          //                               <span class="description-text"><i className= "fa fa-eye mr-1 text-primary"></i>views</span>
          //                               </div>
                                    
          //                           </div>
                                    
          //                           <div class="col-sm-4 border-right">
          //                               <div class="description-block">
          //                                <h5 class="description-header">{item.stargazers_count}</h5>
          //                               <span class="description-text"><i className= "fa fa-star mr-1 text-warning"></i>star</span>
          //                               </div>
                                    
          //                           </div>
                                    
          //                           <div class="col-sm-4">
          //                               <div class="description-block">
          //                               <h5 class="description-header">{item.forks_count}</h5>
          //                               <span class="description-text"><i className= "fa fa-users mr-1 text-success"></i>Counter</span>
          //                               </div>                                    
          //                           </div>
                                    
          //                           </div>
                                
          //                       </div>
          //                   </div>
          //                   </div>
          //                  ///end code show item

          // )
         
        } else {
          return <div key={item}>{item}</div>
        }
      })}
      <div className="text-primary">{loading && 'Loading...'}</div>
      <div  className="text-danger">{error && 'Error'}</div>
    </>
  )
}

