
"use client";

import { useState } from "react";
import Link from "next/link"
import Button from "../../components/ui/Button.jsx"

const roles = [
    {
        id: "web",
        title: "WEB",
        subtitle: "DEVELOPER",
        description:
            "I build modern, responsive web experiences with a focus on clean UI, smooth interactions and practical user experience.",
        skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
        icon: "◈",
    },
    {
        id: "backend",
        title: "BACKEND",
        subtitle: "DEVELOPER",
        description:
            "I enjoy building the logic behind applications — APIs, authentication, databases and systems that make applications actually work.",
        skills: ["Node.js", "Express", "MongoDB", "JWT"],
        icon: "✦",
    },
    {
        id: "framework",
        title: "JS FRAMEWORK",
        subtitle: "DEVELOPER",
        description:
            "JavaScript is my main playground. I use modern frameworks and libraries to turn ideas into interactive applications.",
        skills: ["JavaScript", "React", "Next.js", "GSAP"],
        icon: "⬡",
    },
    {
        id: "visual",
        title: "3D/VISUAL",
        subtitle: "ANIMATOR",
        description:
            "I like experimenting with 3D, animation and visual effects to make websites feel more alive instead of static.",
        skills: ["Three.js", "GSAP", "GLTF", "Framer Motion"],
        icon: "✧",
    },
];

const journey = [
    {
        year: "01",
        title: "Started Coding",
        text: "Started exploring programming and discovered that building things with code was genuinely exciting.",
    },
    {
        year: "02",
        title: "Web Development",
        text: "Moved into HTML, CSS and JavaScript, then gradually started building complete web applications.",
    },
    {
        year: "03",
        title: "Full-Stack",
        text: "Learned how frontend, backend, APIs, authentication and databases connect together.",
    },
    {
        year: "04",
        title: "Creative Development",
        text: "Started experimenting with GSAP, Three.js, 3D models and interactive visual experiences.",
    },
];

const technologies = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "GSAP",
    "Three.js",
    "Git",
    "REST APIs",
];

export default function Page() {
    const [activeRole, setActiveRole] = useState(roles[0]);

    return (
        <>
            <Button text="Home" linkHref={"/"} />
            <main className="min-h-screen  bg-[#17132f] text-white">
                {/* Background */}
                <div className="pointer-events-none fixed inset-0 -z-0">
                    <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
                    <div className="absolute right-[5%] top-[40%] h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />
                    <div className="absolute bottom-[5%] left-[30%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">

                    {/* ================= HERO ================= */}
                    <section className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                                <span className="h-px w-10 bg-cyan-400" />
                                About Me
                            </p>

                            <h1 className="max-w-4xl text-[clamp(1.75rem,7vw,4.5rem)] font-black leading-[0.95] tracking-tight">
                                I BUILD
                                <br />
                                <span className="text-cyan-400">DIGITAL</span>
                                <br />
                                EXPERIENCES.
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                                I&apos;m <span className="font-semibold text-white">Miraj Gautam</span>,
                                a developer with a high interest in technology. I enjoy turning
                                ideas into real applications and constantly learning how things
                                work under the hood.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    id="popupBtnWrapper"
                                    href="#journey"
                                    className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#111025] transition hover:-translate-y-1 hover:bg-cyan-300"
                                >
                                    My Journey
                                </a>

                                <a
                                    id="popupBtnWrapper"
                                    href="#technologies"
                                    className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition hover:-translate-y-1 hover:border-cyan-400/50"
                                >
                                    Technologies
                                </a>
                            </div>
                        </div>

                        {/* RIGHT SIDE TERMINAL */}
                        <div className="relative">
                            <div className="absolute -inset-5 rounded-3xl bg-cyan-400/5 blur-2xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#211d3d]/90 shadow-2xl backdrop-blur-xl">
                                {/* terminal header */}
                                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                                    <span className="h-3 w-3 rounded-full bg-green-400/70" />

                                    <span className="ml-auto text-xs text-white/30">
                                        miraj.js
                                    </span>
                                </div>

                                <div className="p-7 font-mono text-sm leading-8">
                                    <p>
                                        <span className="text-purple-400">const</span>{" "}
                                        <span className="text-cyan-300">developer</span>{" "}
                                        = {"{"}
                                    </p>

                                    <p className="pl-6">
                                        name:{" "}
                                        <span className="text-green-300">
                                            &quot;Miraj Gautam&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-6">
                                        passion:{" "}
                                        <span className="text-green-300">
                                            &quot;Technology&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-6">
                                        focus:{" "}
                                        <span className="text-green-300">
                                            &quot;Building&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-6">
                                        mindset:{" "}
                                        <span className="text-green-300">
                                            &quot;Keep Learning&quot;
                                        </span>
                                        ,
                                    </p>

                                    <p className="pl-6">
                                        coffee:{" "}
                                        <span className="text-orange-300">true</span>,
                                    </p>

                                    <p className="pl-6">
                                        bugs: <span className="text-orange-300">Infinity</span>
                                    </p>

                                    <p>{"};"}</p>

                                    <div className="mt-5 border-t border-white/10 pt-5 text-white/30">
                                        <span className="text-cyan-400">&gt;</span>{" "}
                                        Turning ideas into code...
                                        <span className="ml-1 animate-pulse">▌</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= ROLES ================= */}
                    <section className="mt-32">
                        <div className="mb-10">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                What I Do
                            </p>

                            <h2 className="text-4xl font-black md:text-5xl">
                                MORE THAN JUST
                                <span className="text-cyan-400"> CODE.</span>
                            </h2>

                            <p className="mt-4 max-w-xl text-white/50">
                                These are the areas I&apos;m currently exploring and building
                                with.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {roles.map((role) => {
                                const active = activeRole.id === role.id;

                                return (
                                    <button
                                        key={role.id}
                                        onClick={() => setActiveRole(role)}
                                        className={`group relative min-h-[280px] overflow-hidden rounded-3xl border p-7 text-left transition-all duration-500 ${active
                                            ? "border-cyan-400/50 bg-[#2a2549] shadow-[0_0_50px_rgba(34,211,238,0.08)]"
                                            : "border-white/10 bg-[#24203d] hover:-translate-y-2 hover:border-cyan-400/30"
                                            }`}
                                    >
                                        {/* glow */}
                                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

                                        <div className="relative">
                                            <div
                                                className={`mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border text-3xl transition ${active
                                                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                                                    : "border-white/10 bg-white/5 text-white/60 group-hover:text-cyan-300"
                                                    }`}
                                            >
                                                {role.icon}
                                            </div>

                                            <h3 className="text-xl font-black leading-tight">
                                                {role.title}
                                                <br />
                                                {role.subtitle}
                                            </h3>

                                            <div
                                                className={`mt-6 h-1 rounded-full transition-all duration-500 ${active
                                                    ? "w-12 bg-cyan-400"
                                                    : "w-6 bg-cyan-400/40 group-hover:w-12"
                                                    }`}
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Dynamic information */}
                        <div className="mt-5 rounded-3xl border border-white/10 bg-[#211d3d]/80 p-7 backdrop-blur-xl md:p-10">
                            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                                <div>
                                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                                        Currently Exploring
                                    </p>

                                    <h3 className="text-2xl font-black">
                                        {activeRole.title} {activeRole.subtitle}
                                    </h3>

                                    <p className="mt-4 max-w-2xl leading-7 text-white/50">
                                        {activeRole.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                                    {activeRole.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold text-cyan-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= JOURNEY ================= */}
                    <section id="journey" className="mt-32">
                        <div className="mb-12">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                The Journey
                            </p>

                            <h2 className="text-4xl font-black md:text-5xl">
                                HOW I GOT
                                <span className="text-cyan-400"> HERE.</span>
                            </h2>
                        </div>

                        <div className="relative ml-3 border-l border-white/10">
                            {journey.map((item, index) => (
                                <div
                                    key={item.year}
                                    className="group relative pb-12 pl-10 last:pb-0"
                                >
                                    {/* dot */}
                                    <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] transition group-hover:scale-150" />

                                    <span className="text-xs font-bold tracking-[0.25em] text-cyan-400">
                                        {item.year}
                                    </span>

                                    <h3 className="mt-2 text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-2xl leading-7 text-white/45">
                                        {item.text}
                                    </p>

                                    {index !== journey.length - 1 && (
                                        <div className="mt-8 h-px max-w-xl bg-white/5" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ================= TECHNOLOGIES ================= */}
                    <section id="technologies" className="mt-32">
                        <div className="mb-10">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                My Toolkit
                            </p>

                            <h2 className="text-4xl font-black md:text-5xl">
                                THINGS I
                                <span className="text-cyan-400"> WORK WITH.</span>
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, index) => (
                                <div
                                    key={tech}
                                    className="group rounded-2xl border border-white/10 bg-[#24203d] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                                >
                                    <span className="text-sm font-semibold text-white/70 transition group-hover:text-cyan-300">
                                        {tech}
                                    </span>

                                    <span className="ml-3 text-xs text-white/20">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ================= PHILOSOPHY ================= */}
                    <section className="mt-32">
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#24203d] p-8 md:p-14">
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

                            <div className="relative max-w-4xl">
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                                    My Philosophy
                                </p>

                                <blockquote className="mt-6 text-[clamp(1.75rem,5vw,3rem)] font-black leading-tight">
                                    &quot;I don&apos;t want to just{" "}
                                    <span className="text-cyan-400">use technology.</span>
                                    <br />
                                    I want to understand it.&quot;
                                </blockquote>

                                <p className="mt-8 max-w-2xl text-[clamp(0.95rem,2.5vw,1.125rem)] leading-relaxed text-white/45">
                                    Every project is an opportunity to learn something new.
                                    Whether it&apos;s understanding how authentication works,
                                    creating a 3D interaction, or solving a difficult programming
                                    problem, I prefer understanding the system rather than simply
                                    making it work.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ================= CTA ================= */}
                    <section className="mt-32 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                            What&apos;s Next?
                        </p>

                        <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(0.95rem,2.5vw,1.125rem)] font-black">
                            LET&apos;S BUILD
                            <br />
                            SOMETHING <span className="text-cyan-400">INTERESTING.</span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-white/45">
                            I&apos;m always interested in learning, experimenting and turning
                            interesting ideas into real projects.
                        </p>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 animate-fade-in transition-all duration-300">
                            <Link
                                id="popupBtnWrapper"
                                href={"/contact"}
                                className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md text-gray-900 font-medium rounded-full shadow-2xl border relative border-gray-100 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 group"
                            >
                                {/* Pulsing indicator dot */}
                                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />

                                <span>Get In Touch</span>

                                <svg
                                    className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}