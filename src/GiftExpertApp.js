import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//crear componente GiftExpertApp
//Es decir, el App

export const GiftExpertApp = () => {
    
    //creamos las categorias
    //const categories = ['One punch', 'DBZ'];
    
    const [categories, setCategories] = useState(['Trending']);

   /* const handleAdd = () =>{ */
        /*Esto estaria mal ya que cambiamos el estado del componente y de pasar a ser un array queda en un string('naruto') */
        // setCategories('Naruto');        
        
        //esto es usar este operador para mantener las categorias que ya estan y agregar la que queremos
        /*
        setCategories(cats => ['Naruto', ...cats])
    }*/

    return (
        <>
          <h2>GiftExpertApp</h2>  
            <AddCategory setCategories = { setCategories } />

            <hr/>


            <ol>
                { 
                    categories.map( category => (
                    //la key sirve para que react sepa que elemento esta iterando
                     <GifGrid 
                                key = { category }
                                category = { category }
                                
                            />
                        ))
                }
            </ol>
        </>
    )
}
