/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

export default function Logo({url, className}) {
    return (
        <>
            <Link to="/" className={className}>
                <img src={url} alt="logo" />
            </Link>
        </>
    )
}
