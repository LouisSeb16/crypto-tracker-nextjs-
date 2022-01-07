import React from 'react'
import { styles } from '../../../styles'

const SearchBar = ({...rest}) => {
    return (
        <div className={`form-group ${styles.searchBar}`}>
            <input type="text" className={`form-control ${styles.form}`} {...rest}/>
        </div>
    )
}

export default SearchBar
