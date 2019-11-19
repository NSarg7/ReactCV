import React from 'react'

const PoweredBy = () => (
    <div className="poweredby">
        <span className="inline-text">Powered by React</span>
        <img className=' react-logo' src={require('../../assets/React-icon.svg')} alt="" />
    </div>
)

export default PoweredBy;