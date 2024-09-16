import { Link, Head } from '@inertiajs/react';

export default function Accueil() {
    return (
        <div className='Accueil'>
            <Head title="Accueil" />
            <p className='text-9xl text-red-700'>Antoine</p>{/* Antoine*/}
            <p className='text-3xl'>Hicham</p>{/* Hicham*/}
            <p className='text-3xl'>Amélie</p>{/* Amélie*/}
            <p className='text-3xl'>Arthur</p>{/* Arthur*/}
        </div>
    );
}
