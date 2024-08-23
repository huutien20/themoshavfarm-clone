import { ChevronUp } from 'lucide-react';
import images from '~/assets/images';

function FloatingActionButtons() {
    return (
        <>
            <div className="fixed bottom-4 right-4 flex items-center justify-center w-[90px] h-[90px] cursor-pointer z-[99999]">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e60808] animate-ring">
                    <img className="object-cover h-6 w-6" src={images.phoneRing} alt="phone ring" />
                </div>
                <div className="absolute -z-10 rounded-full w-[65px] h-[65px] bg-[#e60808b3] animate-zoomPhone"></div>
            </div>
            <div className="fixed bottom-[116px] right-4 flex items-center justify-center w-[90px] h-[90px] cursor-pointer z-[99999]">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2196f3] animate-ring">
                    <img className="object-cover h-6 w-6" src={images.zaloRing} alt="zalo ring" />
                </div>
                <div className="absolute -z-10 rounded-full w-[65px] h-[65px] bg-[#2196f3b3] animate-zoomZalo"></div>
            </div>
            <div className="fixed bottom-8 left-8 p-2 flex items-center justify-center cursor-pointer z-[99999] bg-white text-black shadow-md">
                <img className="h-6 px-2 rounded-sm" src={images.flag} alt="flag" />
                <span className="text-xl px-1">VI</span>
                <ChevronUp size={20} />
            </div>
        </>
    );
}

export default FloatingActionButtons;
