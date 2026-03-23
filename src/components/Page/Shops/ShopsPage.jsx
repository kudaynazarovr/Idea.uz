import { ShopsPageLeft } from "./ShopsPageLeft";
import { ShopsPageRight } from "./ShopsPageRight";

function ShopsPage() {
    return (
        <>
            <div className="w-full h-screen px-40 py-20 flex gap-x-5 bg-white dark:bg-black text-black dark:text-white">
                <ShopsPageLeft />

                <ShopsPageRight />
            </div>
        </>
    )
}

export default ShopsPage;