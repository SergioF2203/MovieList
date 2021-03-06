import React from 'react';
import ReactDOM from 'react-dom';

const movie = {
    title: "Avenges",
    vote_avenges: 10.5,
    image: "https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683.jpg",
    overview: "the best form the best"
};

function Image(props) {
    return(
        <img src={props.src} alt={props.alt}/>
    )
}

/*
function MovieItem(props) {
    console.log("props = ", props);
    const {data:{title, vote_avenges, image}} = props;
    return(
        <div>
            <Image src={image} alt={title}/>
            <p>{title}</p>
            <p>{vote_avenges}</p>
        </div>
    )
}
*/

class MovieItem extends React.Component{
    state = {
        show: false
    };

    toggleOverview = ()=> this.setState({show: !this.state.show});

    render(){
        console.log(this);
        const {data:{title, vote_avenges, image, overview}} = this.props;
        return(
            <div>
                <Image src={image} alt={title}/>
                <p>{title}</p>
                <p>{vote_avenges}</p>
                <button type='button' onClick={this.toggleOverview}>
                    {this.state.show ? "HIDE" : "SHOW"}
                </button>
                {this.state.show === true? <p>{overview}</p>:null}
            </div>
        )
    }
}

function  App() {
    return (
        <div>
            <MovieItem data={movie}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));