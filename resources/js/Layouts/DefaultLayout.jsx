import { Link } from '@inertiajs/react'
import i18next from 'i18next'

export default function DefaultLayout({ children }) {

    const handleChangeLanguage = (e) => {
        i18next.changeLanguage(e.target.value)
    }

    return(
        <>
            <header>
                <nav>
                    <Link href="/">Accueil</Link>
                    <select className='m-4' onChange={(e) => handleChangeLanguage(e)}>
                        <option value="fr">FR</option>
                        <option value="en">EN</option>
                    </select>
                </nav>
            </header>

            <main>{children}</main>

            {/* Put "Footer Component" below*/}

        </>
    )
}
