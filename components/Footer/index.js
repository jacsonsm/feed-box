import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4 mt-10'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/jacson-medeiros-4838553b/'> Jacson Medeiros </a> / {' '}
                <a className='hover:underline' href='https://www.linkedin.com/in/jacson-medeiros-4838553b/'>Linkedin</a>   {' '}
                {/*<a className='hover:underline' href='/'>Github</a>*/ }
                <div className='mt-2' >
                    <img className='mx-auto inline px-32' src='./' alt=''/>
                    <img className='mx-auto inline px-32' src='./' alt=''/>
                </div>                
            </div>            
        </div>
    )
}
export default Footer