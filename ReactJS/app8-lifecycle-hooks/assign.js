class MapList extends Component{
    constructor(){
        super()
        this.state={
            names:["sony","suchi","murali"]
        }
    }
    render(){
        return(
            <div>
                {this.state.names.map((name)=>{
                    return {name}
                })}
            </div>
        )
    }
}
export default MapList