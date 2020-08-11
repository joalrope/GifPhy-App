import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');
    const inputCat = useRef(null);

    // Maneja la entrada de nuevas categorias
    const handleInputValue = (e) => {
        setinputValue( e.target.value );
    }
    
    // Se usa en evento submit del formulario para asignar el valor de3l inputValue y se limopia el input
    const handleSubmit = (e) => {
        e.preventDefault();

        // Se valida que la categoria debe tener al menos un caracter
        if (inputValue.trim().length !== 0) {
            setCategories( categories => [inputValue, ...categories, ]);
            setinputValue('');
        }
    }
    
    // Limpia las Pantalla, al eliminar todos los elementos de categories
    const cleanCategories = () => {
        setCategories([ ]);
        inputCat.current.focus();
    }

    return (
        <div className = 'catForms'>
            <form onSubmit = { handleSubmit }>
                <input 
                    type='text'
                    value = { inputValue }
                    onChange = { handleInputValue }
                    ref = { inputCat } 
                    autoFocus
                />
            </form>
            <button onClick = { cleanCategories }>Limpiar</button>
            
        </div>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

// export default AddCategory;