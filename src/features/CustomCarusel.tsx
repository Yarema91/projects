import React, { useState } from 'react'

const CustumCarusel = () => {
    const [count, setCount] = useState(0) as any;
    console.log(count);

    let images = [
        "item1",
        "item2",
        "item3"
    ]

    return (
        <>
            <button onClick={() => { setCount(count - 1) }} >prev</button>
            <button onClick={() => { setCount(count + 1) }} >next</button>
            {
                images.map((item, index) => <div key={index} style={{ height: "400px", background: "green" }}>{item}</div>).filter((i, index: number) => {
                    return  (count > images.length - 1) ? setCount(0)
                            : (count < 0) ? setCount(images.length -1)
                            : index === count
                })
            }
        </>
    )
}

export default CustumCarusel
