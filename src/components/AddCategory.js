import React, { useState } from 'react'

import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {
  
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = e => {
        //el input value va a ser el ultimo valor que la persona escribio
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        //validacion del submit

        if (inputValue.trim().length > 2) {
            //lo que hago es mandar el inputValue como la nueva categoria y mantener las categorias existentes
            setCategories( cats => [inputValue, ...cats] );

            //para que no se haga un doble posteo
            setInputValue('');

        }


        
        console.log('Submit hecho');
    
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type ="text"
                value = { inputValue }
                        
                 //cada vez que el input cambie
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
