'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { subscribeUser } from '../actions';
import { toast } from 'sonner';

const initialState = {
    message: '',
    success: false,
};

export default function SubscribeForm() {
    const [state, formAction, isPending] = useActionState(subscribeUser, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const [placeholder, setPlaceholder] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const texts = ["Be the first to experience it...", "Get Exclusive Updates..."];

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast.success(state.message);
                formRef.current?.reset();
            } else {
                toast.error(state.message);
            }
        }
    }, [state.message, state.success]);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            if (charIndex < currentText.length) {
                timeout = setTimeout(() => {
                    setPlaceholder((prev) => prev + currentText[charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 100);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2000);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setPlaceholder((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                }, 50);
            } else {
                setIsTyping(true);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isTyping, textIndex]);

    return (
        <div className="w-full max-w-md mx-auto mt-12 relative z-20">
            <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <input
                        type="email"
                        name="email"
                        placeholder={placeholder}
                        required
                        className="relative w-full px-6 py-3 rounded-full bg-black/80 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 backdrop-blur-xl transition-all"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                >
                    {isPending ? 'Joining...' : 'Get Notified'}
                </button>
            </form>
        </div>
    );
}
