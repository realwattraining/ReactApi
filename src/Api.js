import  React  from "react";
import ReactDom from "react-dom";
import StyleCustom from "./Api.css"

export default class Api extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      itemss: [],
      id : [],
      isLoaded: false ,
      search : "java",
    }
      this.handleChange = this.handleChange.bind(this);
     
  }

    componentDidMount() {
       // https://api.github.com/search/repositories?q=php'
        fetch('https://api.github.com/search/repositories?q='+this.state.shearch)
        .then(res => res.json())
        .then((data) => {
          this.setState({ itemss:data.items  , isLoaded : true})

          //console.log('item', this.state.itemss);
        })
        .catch(console.log)
    }
    handleChange = (e) =>{
        this.setState({search : e.target.search })
    }

    render() {
        const {isLoaded , itemss ,id , search} = this.state;
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
                                <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search langaue" value={this.state.search} onChange={this.handleChange} aria-label="Search"></input>
                                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
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



