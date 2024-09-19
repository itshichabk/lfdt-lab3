import { Link, Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Panier({ auth }) {

    const [t, i18n] = useTranslation("global");

    return (
        <div className='Panier'>
            <Head title="Panier" />
        </div>
    );
}
