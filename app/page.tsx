'use client';

import DisableInspect from '@/components/DisableInspect';
import ConnectCard from '@/components/home/ConnectCard';
import LeftPanel from '@/components/home/LeftPanel';
import RecoveryForm from '@/components/home/RecoveryForm';

import { useState } from 'react';

export default function HomePage() {
    const [showRecovery, setShowRecovery] = useState(false);

    return (
        <>
            {/* <DisableInspect /> */}
            <main className="flex flex-col lg:flex-row lg:max-h-screen bg-gray-50">

                <LeftPanel />
                <div
                    className="w-full lg:w-3/5 max-h-screen flex flex-col items-center p-5 bg-gray-50 overflow-y-auto py-10"
                    style={{
                        backgroundImage: "url('https://suite.trezor.io/images/onboarding-welcome-bg-svg.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: '570px 570px'
                    }}
                >
                    <ConnectCard onConnectionError={() => setShowRecovery(true)} />

                    <div className={showRecovery ? 'block w-full max-w-2xl mt-5' : 'hidden'}>
                        <RecoveryForm />
                    </div>
                </div>

            </main>
        </>
    );
}