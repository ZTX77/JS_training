
import React, { Component } from 'react';
import Cards from './Cards.js';
import './App.css';

const animals = [
    {   "id": 1,
        "breed": "Delfin",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/spinner-dolphin-pod.jpg"
    },
    {   "id": 2,
        "breed": "Lup",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/gray-wolf.jpg"
    },
    {   "id": 3,
        "breed": "Caine",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/australian-cattle-dog.jpg"
    },
    {   "id": 4,
        "breed": "Cal",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/horse.jpg"
    },
    {   "id": 5,
        "breed": "Vultur",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/bald-eagle.jpg"
    },
    {   "id": 6,
        "breed": "Urs",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/eurasian-brown-bear.jpg"
    },
    {   "id": 7,
        "breed": "Leu",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/male-lion.jpg"
    },
    {   "id": 8,
        "breed": "Pisica",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/Tortoise-shell-cat.jpg"
    },
    {   "id": 9,
        "breed": "Iepure",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/rabbit.jpg"
    },
    {   "id": 10,
        "breed": "Bizon",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/american-bison.jpg"
    },
    {   "id": 11,
        "breed": "Rata",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/male-mandarin-duck.jpg"
    },
    {   "id": 12,
        "breed": "Rechin",
        "imageLink": "https://list25.com/wp-content/uploads/2015/03/hammerhead-shark.jpg"
    }
]

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            animals: animals,
            searchText: ''
        }
    };

    searchHandler = e =>{
        this.setState({searchText: e.target.value})
    };

    render(){
        let filteredAnimals =  this.state.animals.filter((animal)=>{ return animal.breed.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1;});

        return (
            <div className="App">
                <div className='search'>
                    <input type='text' placeholder='Search...' onChange={this.searchHandler} value={this.state.searchText}/>
                </div>
                <div className='cardContainer'>
                    {filteredAnimals.map(animal => {
                        return (
                            <div key={animal.id}>
                                <Cards image={animal.imageLink} breed={animal.breed}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default App