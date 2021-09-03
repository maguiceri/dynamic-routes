import React from 'react'

class Carrousel extends React.Component{
    state = {               //igual a contructor.
       carrouselData:[] 
    }

    async componentDidMount(){
        const { site } = this.props.match.params;
        const data = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=auriculares&limit=5`);
        const json = await data.json();
        this.setState({
            carrouselData: json.results
        })
    }
    render(){
        return(
            <div>
                {this.state.carrouselData.map((product,key)=>{
                    return (<div key={product.id}>
                        <img src={product.thumbnail}></img>
                        <p>{product.title}</p>
                    </div>)
                })}
            </div>
        )
    }
}
export default Carrousel;