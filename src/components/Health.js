import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './../style/Health.css'

export default class Health extends Component {
    constructor(props) {
        super(props)
        this.state = {
            health: this.props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ health: nextProps.value });  
    }

    render() {
        return (
            <div className='Health text-center'>
                Damage Dealt
                <ProgressBar 
                    now={this.state.health}
                    label={
                        this.state.health <= 25 || this.state.health > 75
                        ?
                        <h1 className='text-left pl-1 py-0'>
                            {this.state.health}
                        </h1>
                        :
                        <h1 className='text-left pl-1 py-0 text-dark'>
                            {this.state.health}%
                        </h1>
                    }
                    variant= {
                        this.state.health > 75
                        ? 'success'
                        : this.state.health > 25
                        ? 'warning'
                        : 'danger'
                    }
                    style={{ height: 50 }} />
            </div>
        )
    }
}
