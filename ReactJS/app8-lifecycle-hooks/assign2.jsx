class Search extends Component{
    constructor(){
        super()
        this.state={
            list:["air","water","sun"]
        }
    }
    handleSearch=(e)=>{
        this.state.list.filter((m)=>m===e.target.value)
    }
    render(){
        return(
            <div>
                <input type="text" onChange={(e)=>this.handleSearch(e)}/>
                {this.state.list &&
                this.state.list.map((val, i) => (
                    <div key={i}>{val}</div>
                ))
                }
            </div>
        )
    }
}
export default Search