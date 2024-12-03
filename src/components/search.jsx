import "../styles/search.scss"
import close from '../assets/search/close.png'


function Search(){
    return(    
    <div className="main">
        <div className="container">
            <h1 className="search">Search</h1>

            <div className="photos">
                <input type="text"  placeholder="Search" className="text"  />
                <img src={close} alt="" className="img" />
            </div>


            <div className="bottom">
                <p className="recent">recent</p>
            </div>
            
        </div>

    </div>
    )
}
export default Search;



