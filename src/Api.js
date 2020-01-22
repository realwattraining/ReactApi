import  React  from "react";
import ReactDom from "react-dom";
import StyleCustom from "./Api.css"

export default class Api extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      itemss: [],
      TempItem : [] ,
      id : [],
      isLoaded: false ,
      strSearch : "",
      timeout : 0,
      searchText : "react",
      scrolled : false,
      pagePre : 2,
      pageNext : 51,
      hight : 0,
    }
     //this.handleChange = this.handleChange.bind(this);

     
  }
  scrooler =() =>{
      if(this.state.isLoaded==true){
            //this.setState({  TempItem : this.state.items, pagePre :this.state.pagePre +50, pageNext :this.state.pageNext +50});
             setTimeout (this.api(this.state.searchText , 50 , 50), 600);
        }else{
            this.setState({ scrolled : false });
        }
 
        
  }

    componentDidMount(){  
        let isTop;
        this.api(this.state.searchText , this.state.pagePre , this.state.pageNext);
        window.addEventListener("scroll",()=>{
                  isTop = window.scrollY > 4000 ;
                  console.log(isTop);
                  console.log(window.scrollY); 
                  if(isTop==true){
                    this.setState({isLoaded : true});
                      this.api(this.state.searchText , this.state.pagePre , this.state.pageNext);
                  }  
                //   if(this.state. isLoaded)  setTimeout(this.api(this.state.searchText , 100 , 150), 600);   
                  }); 

  
    }

    
    componentWillMount() {    
       //window.removeEventListener("scroll");
    }
    
    // Create Function Get Data From api
    api =(searchvalue , pre , next) =>{   
        console.log(this.state.pagePre +"Nexxt ::" +this.state.pageNext);
        fetch('https://api.github.com/search/repositories?q='+searchvalue+"?page="+pre+"&per_page="+next)
        .then(res => res.json())
        .then((data) => {
          this.setState({ itemss:data.items  , isLoaded : true})}).catch(console.log)       
    }
   // function Event on change
    updateInputValue(evt){
        var searchText= evt.target.value;
        this.setState({strSearch: searchText});    
    try {
        if (searchText == "" || searchText==null || searchText==undefined){
            this.setState({
                itemss: [],
                searchText :"react"
            })
            return;
        }
        else{
            console.log("else",searchText);
            if(this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout( this.api(searchText , this.state.pagePre , this.state.pageNext), 600); 
        }
    } catch (error) {
       console.log(error); 
    }
  }

    

    render() {        
        var {isLoaded , itemss ,id , strSearch ,temp} = this.state;
        if (!isLoaded) {
           return <div className="App">
                <img className="loading" src="../dist/img/loading.gif"/>
           </div>
       } else{
        return (
           
            <div className = "container">
                <div className="row justify-content-center">
                     <div className="col-xl-12 col-md-12 col-sm-6 mt-1">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between" >
                            <a className="navbar-brand font-weight-bold font-white" href="#">Data API</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <form class="form-inline my-2 my-lg-0 float-right">
                                <input class="form-control mr-sm-2 w-100" placeholder="search" value={strSearch} onChange={evt => this.updateInputValue(evt)}></input>
                                {/* <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.clickSearch} type="submit">Search</button> */}
                            </form>
                        </nav>                      
                    </div>

                      <div className="col-xl-12 col-md-12 col-sm-6 float-left">                      
                         <div className="row">                         
                            {
                               this.state.itemss.map(item =>(
                           //Box show Item
                            <div class="col-xl-4 col-md-4 col-md-4">
                            <div class="card card-widget widget-user box">                                
                                <div class="widget-user-header bg-info"> 
                                    <h3 class="widget-user-username" >{item.full_name}</h3>
                                    <h5 class="widget-user-desc">{item.name}</h5>                                    
                                </div>
                                <div className="widget-user-image">
                                    <img className="img-circle elevation-2 img1" src={item.owner.avatar_url} alt="User Avatar"/>
                                </div>
                                <div className="card-footer bg-danger">
                                    <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                        <h5 class="description-header">{item.watchers}</h5>
                                        <span class="description-text"><i className= "fa fa-eye mr-1 text-primary"></i>views</span>
                                        </div>
                                    
                                    </div>
                                    
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                         <h5 class="description-header">{item.stargazers_count}</h5>
                                        <span class="description-text"><i className= "fa fa-star mr-1 text-warning"></i>star</span>
                                        </div>
                                    
                                    </div>
                                    
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                        <h5 class="description-header">{item.forks_count}</h5>
                                        <span class="description-text"><i className= "fa fa-users mr-1 text-success"></i>Counter</span>
                                        </div>                                    
                                    </div>
                                    
                                    </div>
                                
                                </div>
                            </div>
                            </div>
                           ///end code show item
                            
                            ))
                           } 

                       </div>  
                     </div>
                </div>
            </div>
        )
       }
    }
}



