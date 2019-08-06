import React from 'react'
import { connect } from 'react-redux'

class Field{

    render(){
        return (
            <div>
                <label> {this.props.value} </label> <br />
                <input value={this.state.value} onChange={this.handleChange}
                />
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

export default connect(mapStateToProps)(Field)