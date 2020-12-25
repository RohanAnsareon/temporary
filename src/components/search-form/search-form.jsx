import React from 'react'
import './search-form.css'

const SearchFormComponent=()=>{
    return(
        <div>
        <h4 className="search-header">Axtarış</h4>
        <div>
          <form className="search-form">
            <input
              type="text"
              placeholder="Ad, Soyad"
              className="search-input"
            />
            <input
              type="text"
              placeholder="Struktur"
              className="search-input"
            />
            <input
              type="text"
              placeholder="Vəzifə"
              className="search-input"
            />
            <div>
              <button className="search-btn">Axtar</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default SearchFormComponent;