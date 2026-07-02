import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'NextForge - Premium SaaS Starter Kit';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #000000, #111111)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Mesh/Glow */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-20%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'rgba(79, 70, 229, 0.2)',
                        filter: 'blur(100px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '-20%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'rgba(168, 85, 247, 0.2)',
                        filter: 'blur(100px)',
                    }}
                />

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{
                        width: 60, height: 60, background: '#4f46e5', borderRadius: 15,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20,
                        color: 'white', fontSize: 30, fontWeight: 'bold'
                    }}>NF</div>
                    <div style={{ fontSize: 60, color: 'white', fontWeight: 900, letterSpacing: '-0.05em' }}>NextForge</div>
                </div>

                <div style={{ fontSize: 32, color: '#9CA3AF', maxWidth: 800, textAlign: 'center', lineHeight: 1.4, fontWeight: 500 }}>
                    Stop building auth & payments from scratch.
                </div>

                <div style={{ fontSize: 32, color: 'white', marginTop: 10, maxWidth: 800, textAlign: 'center', lineHeight: 1.4, fontWeight: 700 }}>
                    Ship your SaaS in a weekend.
                </div>

                <div style={{ position: 'absolute', bottom: 40, display: 'flex', gap: 20 }}>
                    <div style={{ padding: '8px 16px', background: '#1f1f22', border: '1px solid #333', borderRadius: 10, color: '#e5e7eb', fontSize: 18 }}>Next.js 15</div>
                    <div style={{ padding: '8px 16px', background: '#1f1f22', border: '1px solid #333', borderRadius: 10, color: '#e5e7eb', fontSize: 18 }}>Tailwind 4</div>
                    <div style={{ padding: '8px 16px', background: '#1f1f22', border: '1px solid #333', borderRadius: 10, color: '#e5e7eb', fontSize: 18 }}>Supabase</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
