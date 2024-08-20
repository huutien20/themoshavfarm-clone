import { Loader } from 'lucide-react';

function Button({
    children,
    variant = 'primary',
    size = 'm',
    isLoading = false,
    isDisabled = false,
    className = '',
    ...props
}) {
    const baseStyle =
        'flex items-center justify-center gap-1 border border-transparent rounded-lg font-semibold focus:outline-none transition ease-in-out duration-150';
    const variants = {
        primary: 'bg-primary text-white !border-primary hover:bg-primary_hover hover:!border-primary_hover',
        secondary: 'bg-secondary text-white !border-secondary hover:bg-secondary_hover hover:!border-secondary_hover',
        danger: 'bg-red-500 text-white !border-red-500 hover:bg-red-600 hover:!border-red-600',
        outline: 'bg-white text-primary !border-primary hover:bg-primary hover:text-white',
    };

    const sizes = {
        s: 'px-3 py-1 text-sm',
        m: 'px-4 py-2 text-base',
        l: 'px-6 py-3 text-lg',
    };

    const sizeLoader = {
        s: 14,
        m: 16,
        l: 18,
    };

    const buttonClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${
        isDisabled || isLoading & 'opacity-50 cursor-not-allowed'
    } ${className}`;

    return (
        <button className={buttonClasses} disabled={isDisabled || isLoading} {...props}>
            {isLoading ? <Loader className="animate-spin" size={sizeLoader[size]} /> : children}
        </button>
    );
}

export default Button;
