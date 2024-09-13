import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div>
                <main className="mt-6">
                    {/* Ici le nom*/}
                    <p className='text-7xl'>Antoine</p>{/* Antoine*/}
                    <p className='text-3xl'>Hicham</p>{/* Hicham*/}
                    <p className='text-3xl'>Amélie</p>{/* Amélie*/}
                    <p className='text-3xl'>Arthur</p>{/* Arthur*/}
                </main>
            </div>
        </>
    );
}
