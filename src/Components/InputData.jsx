import React, { useState } from 'react'

const InputData = ({ handleShoot }) => {
    const [num, setNum] = useState()

    const submitbtn = (e) => {
        e.preventDefault()
        handleShoot(num)
        setNum('')
    }

    return (
        <div>
            <form className='inputDiv' onSubmit={submitbtn}>
                <input type="number"  onChange={(e) => { setNum(parseInt(e.target.value)) }} max='5' min='1' placeholder="Enter Number between 1-5" />
                <input type="submit" value='Shoot' />
            </form>
        </div>
    )
}

export default InputData