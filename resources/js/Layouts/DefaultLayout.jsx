import { Link } from '@inertiajs/react'

export default function DefaultLayout({ children }) {
    return(
        <>
            <header>
                <nav>
                    <Link href="/">Accueil</Link>
                </nav>
            </header>

            <main>{children}</main>

            {/* Put "Footer Component" below*/}

        </>
    )
}
