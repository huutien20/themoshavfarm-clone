import images from '~/assets/images';

function PhoneRing() {
    return (
        <div className="fixed bottom-0 right-0 flex items-center justify-center w-[90px] h-[90px] cursor-pointer z-[99999]">
            <img className="w-10 h-10 rounded-full bg-red-600 animate-ring" src={images.phoneRing} alt="phone ring" />
            <div className="absolute -z-10 rounded-full w-[65px] h-[65px] bg-red-400 shadow-phoneRing animate-zoom"></div>
        </div>
    );
}

export default PhoneRing;
