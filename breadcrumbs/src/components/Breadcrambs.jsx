import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrambs = () => {
    const { pathname } = useLocation();
    const pathNames = pathname.split('/').filter(x => x)
    let breadcrumbsPath = ''
    return (
        <div className='breadcrumbs'>
            {pathNames.length > 0 && <Link to="/">Home</Link>}
            {
                pathNames.map((name, index) => {
                    breadcrumbsPath += `/${name}`
                    console.log(breadcrumbsPath)
                    const isLast = index === pathNames.length - 1;

                    return isLast ? <span> / {name}</span> : (
                        <span><Link key={breadcrumbsPath} to={breadcrumbsPath}> / {name}</Link></span>
                    )
                })


            }
        </div>
    )
}

export default Breadcrambs