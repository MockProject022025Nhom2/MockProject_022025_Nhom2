export const Button = ({ children, className, ...props }) => {
    return (
        <button
            className={`px-4 py-3 rounded-lg text-white font-semibold transition-all ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
