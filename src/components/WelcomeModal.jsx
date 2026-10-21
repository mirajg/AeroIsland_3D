"use client";

import React, { useEffect, useRef, useState } from "react";

export default function WelcomeModal({ onClose }) {
    const modalRef = useRef(null);
    const animationRef = useRef(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const modal = modalRef.current;

        if (!modal) return;

        let position = -window.innerHeight - 300;
        let velocity = 0;

        const gravity = 1.2;
        const bounce = 0.55;
        const minVelocity = 0.8;

        setVisible(true);

        let lastTime = performance.now();

        const animate = (currentTime) => {
            const delta = Math.min(
                (currentTime - lastTime) / 16.67,
                2
            );

            lastTime = currentTime;

            // Gravity
            velocity += gravity * delta;

            // Movement
            position += velocity * delta;

            // Collision with the bottom
            if (position >= 0) {
                position = 0;

                // Reverse velocity and lose energy
                velocity = -velocity * bounce;

                // Small squash on impact
                modal.style.transform =
                    "translateY(0) scaleX(1.04) scaleY(0.96) rotate(0deg)";

                requestAnimationFrame(() => {
                    if (modal) {
                        modal.style.transform =
                            "translateY(0) scaleX(1) scaleY(1) rotate(0deg)";
                    }
                });
            } else {
                const rotation = Math.min(velocity * 0.25, 8);

                const scale =
                    1 - Math.min(Math.abs(velocity) * 0.002, 0.04);

                modal.style.transform = `
                    translateY(${position}px)
                    rotate(${rotation}deg)
                    scale(${scale})
                `;
            }

            // Stop when bounce becomes tiny
            if (
                position === 0 &&
                Math.abs(velocity) < minVelocity
            ) {
                modal.style.transform =
                    "translateY(0) rotate(0deg) scale(1)";

                return;
            }

            animationRef.current =
                requestAnimationFrame(animate);
        };

        animationRef.current =
            requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const handleClose = () => {
        const modal = modalRef.current;

        if (!modal) {
            onClose();
            return;
        }

        let position = 0;
        let velocity = -2;

        const exit = () => {
            velocity -= 1;
            position += velocity;

            modal.style.transform = `
                translateY(${position}px)
                rotate(${velocity * 0.3}deg)
            `;

            if (position < -window.innerHeight) {
                onClose();
                return;
            }

            requestAnimationFrame(exit);
        };

        requestAnimationFrame(exit);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
                }`}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-zinc-700/60 bg-white/95 dark:bg-zinc-900/95 p-7 text-center shadow-[0_30px_100px_rgba(0,0,0,0.45)] will-change-transform"
            >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative">

                    {/* Icon */}
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/20 to-yellow-500/10 text-5xl shadow-[0_10px_30px_rgba(245,158,11,0.15)]">
                        ✈️
                    </div>

                    {/* Label */}
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-500 dark:text-amber-400">
                        Welcome Aboard
                    </p>

                    {/* Title */}
                    <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
                        Welcome to AeroIsland 3D
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                        Explore the floating interactive world.
                        Use your{" "}
                        <strong className="text-zinc-900 dark:text-white">
                            Arrow Keys
                        </strong>
                        ,{" "}
                        <strong className="text-zinc-900 dark:text-white">
                            mouse drag
                        </strong>
                        , or{" "}
                        <strong className="text-zinc-900 dark:text-white">
                            touch
                        </strong>{" "}
                        to rotate the island.
                    </p>

                    {/* Controls */}
                    <div className="mt-5 flex justify-center gap-2">
                        <span className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                            ← →
                        </span>

                        <span className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                            Drag
                        </span>

                        <span className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                            Touch
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        onClick={handleClose}
                        className="group mt-7 w-full cursor-pointer rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30 active:translate-y-0 active:scale-[0.98]"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Start Exploring
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </button>

                    {/* Footer */}
                    <p className="mt-4 text-[11px] text-zinc-400 dark:text-zinc-500">
                        Your journey begins here
                    </p>
                </div>
            </div>
        </div>
    );
}