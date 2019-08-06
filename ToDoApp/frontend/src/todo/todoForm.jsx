import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => {

    const button1 = {
        style: "primary",
        icon: "plus"
    }

    const button2 = {
        style: "info",
        icon: "search"
    }

    const button3 = {
        style: "default",
        icon: "close"
    }

    const keyHandler = (e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>


            <Grid cols='12 9 10'>
                <input id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style={button1.style} icon={button1.icon}
                    onClick={props.handleAdd} />
                <IconButton style={button2.style} icon={button2.icon}
                    onClick={props.handleSearch} />
                <IconButton style={button3.style} icon={button3.icon}
                    onClick={props.handleClear} />
            </Grid>

        </div>

    )

}


