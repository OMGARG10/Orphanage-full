import React from 'react'

function HeaderParents({ setIsAdding }) {
    return (
        <header>
            <h1 className=''>Orphanage Home Center</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button '>Add Parents</button>
            </div>
        </header>
    )
}

export default HeaderParents;