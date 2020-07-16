import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'


const Header = () => {
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className='container mx-auto'>
                    <Link href='/'>
                        <a>
                            <img className='mx-auto cursor-pointer' src='/box2.png' alt='Feed Box' />
                        </a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-100 h-8 '>
                <div className='container mx-auto text-center'>
                <Link href='/sobre'>
                    <a className='p-2 hover:underline font-bold'>Sobre</a>
                </Link>

                <Link href='/contato'>
                    <a className='p-2 hover:underline font-bold'>Contato</a>
                </Link>

                <Link href='/pesquisa'>
                    <a className='p-2 hover:underline font-bold'>Pesquisa</a>
                </Link>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header