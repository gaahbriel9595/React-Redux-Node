import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'
    

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    button1 = {
        style: "primary",
        icon: "plus"
    }

    button2 = {
        style: "info",
        icon: "search"
    }

    button3 = {
        style: "default",
        icon: "close"
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const {add, search, description} = this.props 
        if (e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === 'Escape') {
            this.props.clear()
        }
    }
    render() {

        const {add, search, description, clear} = this.props 

        return (
            <div role='form' className='todoForm'>


                <Grid cols='12 9 10'>
                    <input id='description'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style={this.button1.style} icon={this.button1.icon}
                        onClick={() => add(description)} />
                    <IconButton style={this.button2.style} icon={this.button2.icon}
                        onClick={() => search(description)} />
                    <IconButton style={this.button3.style} icon={this.button3.icon}
                        onClick={clear} />
                </Grid>

            </div>

        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)