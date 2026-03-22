import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import { useState } from 'react';


function AppLoyaut() {
    const [search, setSearch] = useState("")
    return (
        <>
            <Layout className='w-full h-screen grid grid-rows-[auto_1fr_auto] bg-white dark:bg-black text-black dark:text-white'>

                <header className='w-full row-start-1'>
                    <AppHeader search={search} setSearch={setSearch} />
                </header>

                <main className='row-start-2 overflow-auto'>
                    <AppContent search={search} />
                    <AppFooter />
                </main>

            </Layout>
        </>
    )
}

export default AppLoyaut