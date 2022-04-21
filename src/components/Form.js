import React, {Component} from 'react';
import axios from 'axios';
import { SearchBox } from './search-box/search-box.component';
import { CardList } from './card-list/card-list.component';

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            TVDrama: [{ 
                id: 'kdw1',
                name: '',
                status: '',
                premiered: '',
                ended: '',
                genres: '',
                pic: null,
                summary: ''
            }],
            searchField: ''

        }
    }

    componentDidMount(){
        fetch('https://api.tvmaze.com/shows')
            .then(response => response.json())
            .then(shows => this.setState({TVDrama: shows}));
    }

    

    handleNameChange = event  => {
        this.setState({
            name: event.target.value
        })

    }

    handleStatusChange = event  => {
        this.setState({
            status: event.target.value
        })

    }

    handlePremieredChange = event  => {
        this.setState({
            premiered: event.target.value
        })

    }

    handleEndedChange = event  => {
        this.setState({
            ended: event.target.value
        })

    }

    handleGenresChange = event => {
        this.setState({
            genres: event.target.value
        })
    }

    handlePictureChange = event => {
        this.setState({pic:event.target.value})
        console.log(event.target.files[0]);

    }

    handleSummaryChange = event => {
        this.setState({
            summary: event.target.value
        })

    }

    handleChange = event => {
        this.setState({
            searchField: event.target.value
        });
    }

    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.status} ${this.state.premiered} ${this.state.ended}  ${this.state.genres} ${this.state.pic} ${this.state.summary}`)
        event.preventDefault()

        
    }

    render(){
        const {TVDrama, searchField} = this.state;
        const filteredTVDrama = TVDrama.filter(drama =>
            drama.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>TV-GUIDE !!!</h1>

                <div>
                    <label>Name Of TV Show:  </label>
                    <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                    />

                    &nbsp;
                    &nbsp;

                    <label>Status Of TV Show:  </label>
                    <input 
                    type='text' 
                    value={this.state.status} 
                    onChange={this.handleStatusChange}
                    />

                    &nbsp;
                    &nbsp;

                    <label>Premiered:  </label>
                    <input 
                    type='date' 
                    value={this.state.premiered} 
                    onChange={this.handlePremieredChange}
                    />

                    &nbsp;
                    &nbsp;

                    <label>Ended:  </label>
                    <input 
                    type='date' 
                    value={this.state.ended} 
                    onChange={this.handleEndedChange}
                    />

                </div>
                <br/>

                <div>
                    <label>Genres:  </label>
                    <input 
                    type='text' 
                    value={this.state.genres} 
                    onChange={this.handleGenresChange}
                    />

                    &nbsp;
                    &nbsp;

                    <label>Summary of TV Show:  </label>
                    <textarea 
                    value={this.state.summary}
                    onChange={this.handleSummaryChange}>
                        
                    </textarea>

                    &nbsp;
                    &nbsp;

                    <label>TV Show Image:  </label>
                    <input 
                    type='file'
                    onChange={this.handlePictureChange}
                    />

                    &nbsp;
                    &nbsp;

                    <button type="submit">SUBMIT</button>
               
        
                </div>

                <br/>

                
                <div className='App' >

                    <SearchBox
                       placeholder='SEARCH TV-GUIDE!!!'
                       handleChange={event => this.setState({ searchField: event.target.value})}
                    />
                    
                    <CardList TVDrama={filteredTVDrama}/>
            

                    
                </div>
                

            </form>
        )
    }
}

export default Form