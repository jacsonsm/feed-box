import React, {useState} from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div className='mx-auto text-center mt-6'>
            <PageTitle title='Contato' />
            <h1>Contato:</h1>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}
export default Contato