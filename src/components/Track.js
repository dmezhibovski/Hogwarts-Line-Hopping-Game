import React from 'react';

class Track extends React.Component{
    constructor(props){
        super(props);
        this.state={hasTrain:false};
    }

    render(){
        return(
            <div class='track'>
                <img src='https://www.transparentpng.com/thumb/railroad-tracks/AcBwzv-railroad-tracks-transparent-picture.png'></img>
            </div>
        );
    }
}
export default Track;