import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const button1 = {
        style: 'danger',
        icon: 'trash-o'
    }

    const button2 = {
        style: 'success',
        icon: 'check'
    }

    const button3 = {
        style: 'warning',
        icon: 'undo'
    }

    

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : '   '}>
                    {todo.description}
                </td>
                <td>
                    <IconButton 
                        hide={todo.done}
                        style={button2.style} 
                        icon={button2.icon}
                        onClick={() => props.handleMarkAsDone(todo)} />
                    
                    <IconButton 
                        hide={!todo.done}
                        style={button3.style} 
                        icon={button3.icon}
                        onClick={() => props.handleMarkAsPending(todo)} />

                    <IconButton 
                        hide={!todo.done}
                        style={button1.style} 
                        icon={button1.icon}
                        onClick={() => props.handleRemove(todo)} />

                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}