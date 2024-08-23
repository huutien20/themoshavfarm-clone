function StandardBox({ iconURL, heading, desc }) {
    return (
        <div className="w-full md:w-1/3 h-auto padding-common flex flex-col items-center">
            <img src={iconURL} alt={heading} className="w-[90px] h-[90px] object-cover rounded-full" />
            <p className="text-[20px] leading-8 text-primary font-bold mt-4">{heading}</p>
            <p className="text-[16px] leading-[26px] text-center">{desc}</p>
        </div>
    );
}

export default StandardBox;
