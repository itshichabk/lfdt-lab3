import { Link, Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Accueil() {

    const [t, i18n] = useTranslation("global");

    return (
        <div className='Accueil'>
            <Head title="Accueil" />
            <p className='text-3xl text-red-700'>Antoine</p>{/* Antoine*/}
            <p className='text-3xl'>Hicham</p>{/* Hicham*/}
            <p className='text-3xl'>Amélie</p>{/* Amélie*/}
            <p className='text-3xl'>Arthur</p>{/* Arthur*/}

            <p className='mt-6'>{t("Accueil.body")}</p>
            <p className='mt-6'>{t("Accueil.np")}</p>
            <p className='mt-6'>{t("Test.the")}</p>
            <p className='mt-6'>{t("Test.trap", {count: 1})}</p>
            <p className='mt-6'>{t("Test.traps", {count: 100})}</p>
            <p className='mt-6'>{t("Test.name", {count: 10, name: "Antoine"})}</p>
        </div>
    );
}
