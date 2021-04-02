import React from 'react';

export default class NASAPictureOfTheDay extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pictureData: null
        }
    }

    componentDidMount() {
        // GET po defaultu
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(jsonString => jsonString.json())
            .then(obj => this.setState({pictureData: obj}));
        
        /*
        // primjer za post
        fetch('neki url', { 
                method: 'POST', 
                body: JSON.stringify(nekiObjektSPodacima), 
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        */
    }    

    render() {
        if(!this.state.pictureData) {
            return <h1>Please wait... loading...</h1>
        }
        const { title, url, explanation } = this.state.pictureData;
        return <div style={styles.centerStuff}>
            <h1>{title}</h1>
            <img src={url} alt={title} width={750} />
            <p>{explanation}</p>
        </div>;
    }
}

const styles = {
    centerStuff: {
        textAlign: 'center'
    },
    makeItGoRight: {
        textAlign: 'right',
        color: 'green'
    },
    container: {
        display: 'flex'
    }
}