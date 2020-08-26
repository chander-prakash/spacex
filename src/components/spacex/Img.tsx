import React from 'react'

interface PropsI {
    src?: string,
    alt?: string,
    name: string,
}

const Img = ({ src, alt, name }: PropsI) => {
    return (
        <img src={src ?? 'images/not_available.png'}
            alt={alt ?? name} />
    )
}

export default Img
