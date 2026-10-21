
import React from 'react';

const Loader = ({ text, size = "md", fullScreen = false }) => {
    // Size mapping for the spinner ring
    const sizeClasses = {
        sm: "w-6 h-6 border-2",
        md: "w-10 h-10 border-3",
        lg: "w-16 h-16 border-4",
    };

    const spinnerContent = (
        <div className="flex flex-col items-center justify-center gap-3">
            {/* Animated Spinner Ring */}
            <div
                className={`animate-spin rounded-full border-indigo-600 border-t-transparent ${sizeClasses[size]}`}
            />
            {/* Pulsing Loading Text */}
            <p className="text-sm font-medium text-gray-600 animate-pulse tracking-wide">
                {text}
            </p>
        </div>
    );

    // If fullScreen is true, wrap it in a fixed overlay with a blur effect
    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                {spinnerContent}
            </div>
        );
    }

    return spinnerContent;
};

export default Loader;