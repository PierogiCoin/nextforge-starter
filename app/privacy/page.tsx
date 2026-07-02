"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#030307] text-gray-300 font-medium p-4 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-10" />

            <div className="max-w-4xl mx-auto relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors mb-12 uppercase text-[10px] font-black tracking-widest">
                    <ArrowLeft className="w-4 h-4" /> Powrót do strony głównej
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-12 rounded-[3rem] border border-white/10 bg-black/40 backdrop-blur-3xl glass-morphism"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl font-black text-white px-1 tracking-tighter uppercase italic">Polityka Prywatności</h1>
                    </div>

                    <div className="space-y-8 text-sm leading-relaxed">
                        <p className="text-gray-400 mb-8">
                            <strong className="text-white">Effective Date:</strong> February 3, 2026 | 
                            <strong className="text-white ml-4">Last Updated:</strong> February 3, 2026
                        </p>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">1. Introduction</h2>
                            <p>This Privacy Policy describes how NextForge ("we", "us", or "our") collects, uses, and protects your personal information when you use our website and services. We are committed to protecting your privacy and complying with GDPR, CCPA, and other applicable data protection laws.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">2. Data Controller</h2>
                            <p>The data controller responsible for your personal information is NextForge. For any privacy-related questions, contact us at:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                <li>Email: privacy@nextforge.app</li>
                                <li>Website: https://nextforge.app</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">3. Information We Collect</h2>
                            <p className="mb-4">We collect the following types of information:</p>
                            
                            <h3 className="text-white font-bold mb-2">3.1 Information You Provide:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li><strong>Account Information:</strong> Email address, name when you create an account</li>
                                <li><strong>Payment Information:</strong> Processed securely by Lemon Squeezy (we never store card details)</li>
                                <li><strong>Communication Data:</strong> When you contact us or subscribe to our newsletter</li>
                            </ul>

                            <h3 className="text-white font-bold mb-2">3.2 Automatically Collected Information:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, device information</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, operating system</li>
                                <li><strong>Cookies:</strong> We use essential and analytics cookies (see Cookie Policy below)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">4. How We Use Your Information</h2>
                            <p className="mb-2">We use your information to:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li>Provide and maintain our services</li>
                                <li>Process payments and deliver products</li>
                                <li>Send transactional emails (order confirmations, receipts)</li>
                                <li>Respond to support requests</li>
                                <li>Send marketing communications (with your consent)</li>
                                <li>Improve our website and services</li>
                                <li>Prevent fraud and ensure security</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">5. Legal Basis for Processing (GDPR)</h2>
                            <p className="mb-2">We process your data based on:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li><strong>Contract Performance:</strong> To provide services you've purchased</li>
                                <li><strong>Consent:</strong> For marketing emails and optional cookies</li>
                                <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud</li>
                                <li><strong>Legal Obligations:</strong> To comply with tax and accounting laws</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">6. Third-Party Services</h2>
                            <p className="mb-2">We share data with trusted third parties:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li><strong>Lemon Squeezy:</strong> Payment processing (they are a Merchant of Record)</li>
                                <li><strong>Vercel:</strong> Hosting and infrastructure</li>
                                <li><strong>Supabase:</strong> Database and authentication</li>
                                <li><strong>Resend:</strong> Email delivery service</li>
                                <li><strong>Analytics:</strong> Vercel Analytics or Plausible (privacy-friendly)</li>
                            </ul>
                            <p className="mt-2">These services have their own privacy policies and comply with GDPR.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">7. Data Retention</h2>
                            <p>We retain your data for as long as:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-2">
                                <li>Your account is active</li>
                                <li>Required for legal, tax, or accounting purposes (typically 7 years for financial records)</li>
                                <li>You can request deletion at any time (see Your Rights below)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">8. Your Rights</h2>
                            <p className="mb-2">Under GDPR and CCPA, you have the right to:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li><strong>Access:</strong> Request a copy of your personal data</li>
                                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                                <li><strong>Data Portability:</strong> Receive your data in a machine-readable format</li>
                                <li><strong>Object:</strong> Object to processing for marketing purposes</li>
                                <li><strong>Withdraw Consent:</strong> Unsubscribe from emails anytime</li>
                            </ul>
                            <p className="mt-2">To exercise these rights, email: <span className="text-indigo-400">privacy@nextforge.app</span></p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">9. Cookies</h2>
                            <p className="mb-2">We use cookies for:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li><strong>Essential:</strong> Authentication, security (always active)</li>
                                <li><strong>Analytics:</strong> Understanding usage patterns (can be opted out)</li>
                            </ul>
                            <p className="mt-2">You can manage cookie preferences in your browser settings.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">10. Security</h2>
                            <p>We implement industry-standard security measures:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-2">
                                <li>SSL/TLS encryption for all data transmission</li>
                                <li>Secure cloud infrastructure (Vercel, Supabase)</li>
                                <li>Regular security audits and updates</li>
                                <li>Limited access to personal data (need-to-know basis)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">11. International Data Transfers</h2>
                            <p>Your data may be transferred to and processed in countries outside your residence. We ensure adequate safeguards through:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-2">
                                <li>Standard Contractual Clauses (EU approved)</li>
                                <li>Service providers with GDPR-compliant practices</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">12. Children's Privacy</h2>
                            <p>Our services are not directed to children under 16. We do not knowingly collect data from children. If you're a parent and believe we've collected your child's data, contact us immediately.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">13. Changes to This Policy</h2>
                            <p>We may update this policy periodically. We'll notify you of significant changes via email or website notice. Continued use after changes indicates acceptance.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">14. Contact Us</h2>
                            <p>For privacy questions or to exercise your rights:</p>
                            <ul className="list-none space-y-1 text-gray-400 mt-2">
                                <li>📧 Email: privacy@nextforge.app</li>
                                <li>🌐 Website: https://nextforge.app</li>
                                <li>⏱️ Response time: Within 30 days (GDPR requirement)</li>
                            </ul>
                        </section>

                        <div className="pt-8 border-t border-white/5">
                            <p className="text-[10px] uppercase font-black text-gray-500 mb-2">
                                Last Updated: February 3, 2026
                            </p>
                            <p className="text-xs text-gray-600">
                                By using NextForge, you acknowledge that you have read and understood this Privacy Policy.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
