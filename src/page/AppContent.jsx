import { Layout } from 'antd';
import { Carousel1 } from '../components/Carousel/Carousel1';
import ProductCart from '../components/Goods/ProductCart';
import { useOutletContext } from "react-router-dom";


const { Content } = Layout;

function AppContent() {
    const { search } = useOutletContext();
    return (
        <>
            <Content className='w-full px-40 py-5 max-xl:px-20 max-md:px-15 bg-white dark:bg-black text-black dark:text-white'>
                <div className='w-full h-full'>
                    <Carousel1 />
                    <ProductCart search={search} />
                </div>
            </Content>
        </>
    )
}

export default AppContent