import { Link } from '@inertiajs/react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next';

import logo from '../../../public/img/logo-rect.jpg'

export default function Header() {

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (e) => {
        i18next.changeLanguage(e.target.value)
        // Add cookie
    }

    return (
        <header className='w-full bg-[#041a37] flex-nowrap'>
            <div className='flex items-center justify-between'>
                {/* Menu*/}
                <svg className='mx-4' width="34" height="34" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                  <path d="M3 6 H21 M3 12 H21 M3 18 H21"/>
                </svg>

                <img className='w-2/6 hidden sm:block' src={logo} alt="logo-rect-img" />

                <div className='flex items-center justify-evenly'>
                    {/* User*/}
                    <Link href='/compte'>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#929292" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </Link>


                    {/* Panier*/}
                    <Link href='/panier'>
                        <svg className='ml-4' width="28" height="28" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
                          <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1
                                   M10 20.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0
                                   M18 20.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                        </svg>
                    </Link>

                    {/* Langue*/}
                    <select className='m-4 bg-[#041a37] border-none text-white' onChange={(e) => handleChangeLanguage(e)}>
                        <option value="fr">FR</option>
                        <option value="en">EN</option>
                    </select>
                </div>

            </div>
        </header>
    );
}
