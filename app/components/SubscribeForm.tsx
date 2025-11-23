'use client';

import { useActionState } from 'react';
import { subscribeUser } from '../actions';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

const initialState = {
    message: '',
    success: false,
};

export default function SubscribeForm() {
    const [state, formAction, isPending] = useActionState(subscribeUser, initialState);
    const formRef = useRef<HTMLFormElement>(null);

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

    return (
        <div className="w-full max-w-md mx-auto mt-12 relative z-20">
            <form ref={formRef} action={formAction} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                >
                    {isPending ? 'Joining...' : 'Get Notified'}
                </button>
            </form>
        </div>
    );
}
