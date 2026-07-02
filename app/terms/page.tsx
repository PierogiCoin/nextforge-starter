"use client";

import { motion } from "framer-motion";
import { Scale, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
                            <Scale className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl font-black text-white px-1 tracking-tighter uppercase italic">Regulamin</h1>
                    </div>

                    <div className="space-y-8 text-sm leading-relaxed">
                        <p className="text-gray-400 mb-8">
                            <strong className="text-white">Effective Date:</strong> February 3, 2026 | 
                            <strong className="text-white ml-4">Last Updated:</strong> February 3, 2026
                        </p>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">1. Agreement to Terms</h2>
                            <p>By purchasing, accessing, or using NextForge ("the Product"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not purchase or use the Product.</p>
                            <p className="mt-2">These Terms constitute a legally binding agreement between you ("Customer", "you", "your") and NextForge ("we", "us", "our").</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">2. License Grant</h2>
                            
                            <h3 className="text-white font-bold mb-2">2.1 What You CAN Do:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>Use NextForge to create unlimited commercial and personal projects</li>
                                <li>Modify, customize, and build upon the codebase</li>
                                <li>Deploy your projects to production</li>
                                <li>Create client projects (with appropriate license tier)</li>
                                <li>Keep lifetime access to the codebase and all future updates</li>
                            </ul>

                            <h3 className="text-white font-bold mb-2">2.2 What You CANNOT Do:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li><strong>Resell:</strong> You cannot resell, redistribute, or sublicense NextForge itself as a boilerplate/template</li>
                                <li><strong>Share:</strong> You cannot share your license with others or grant access to the repository</li>
                                <li><strong>Compete:</strong> You cannot create a competing product based on NextForge</li>
                                <li><strong>Claim Authorship:</strong> You cannot remove copyright notices or claim you created NextForge</li>
                            </ul>

                            <p className="mt-4 text-indigo-400 font-bold">
                                ✅ In short: Build whatever you want with it, just don't resell the template itself.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">3. License Tiers</h2>
                            
                            <h3 className="text-white font-bold mb-2">3.1 Starter (Free/Open Source):</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>MIT License - use for any purpose</li>
                                <li>Basic features only</li>
                            </ul>

                            <h3 className="text-white font-bold mb-2">3.2 Pro License ($149):</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>One developer, unlimited projects</li>
                                <li>Commercial use allowed</li>
                                <li>Lifetime updates included</li>
                            </ul>

                            <h3 className="text-white font-bold mb-2">3.3 Pro+ License ($299):</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li>Everything in Pro</li>
                                <li>Team use (up to 5 developers)</li>
                                <li>Priority support</li>
                                <li>White-label rights (remove NextForge branding)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">4. Payment & Refunds</h2>
                            
                            <h3 className="text-white font-bold mb-2">4.1 Payment Processing:</h3>
                            <p className="mb-4">All payments are processed by Lemon Squeezy, our Merchant of Record. They handle:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>Payment processing and security</li>
                                <li>VAT/sales tax collection and remittance</li>
                                <li>EU VAT MOSS compliance</li>
                                <li>Invoicing and receipts</li>
                            </ul>

                            <h3 className="text-white font-bold mb-2">4.2 Refund Policy:</h3>
                            <p className="mb-2">We offer a <strong className="text-white">14-day money-back guarantee</strong>.</p>
                            <p className="mb-2">You may request a refund within 14 days of purchase if:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>The product doesn't work as described</li>
                                <li>You haven't significantly used or modified the codebase</li>
                                <li>You haven't deployed to production</li>
                            </ul>
                            <p className="text-gray-400">To request a refund, email: <span className="text-indigo-400">refunds@nextforge.app</span></p>
                            <p className="mt-2 text-xs text-gray-500">Note: Refunds are issued at our discretion. Abuse of the refund policy may result in denial.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">5. Updates & Support</h2>
                            
                            <h3 className="text-white font-bold mb-2">5.1 Lifetime Updates:</h3>
                            <p className="mb-2">Pro and Pro+ licenses include lifetime access to:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>Bug fixes and security patches</li>
                                <li>New features and improvements</li>
                                <li>Documentation updates</li>
                                <li>Compatibility updates (Next.js versions, etc.)</li>
                            </ul>

                            <h3 className="text-white font-bold mb-2">5.2 Support:</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li><strong>Community Support:</strong> Available to all via Discord</li>
                                <li><strong>Email Support:</strong> Pro customers (48-hour response time)</li>
                                <li><strong>Priority Support:</strong> Pro+ customers (24-hour response time)</li>
                            </ul>
                            <p className="mt-2 text-xs text-gray-500">Support covers setup and usage questions. We don't provide custom development services.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">6. Intellectual Property</h2>
                            <p className="mb-2">NextForge is proprietary software owned by us. By purchasing:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li>You receive a license to use the code (see Section 2)</li>
                                <li>You do NOT acquire ownership of the source product</li>
                                <li>All trademarks, logos, and branding remain our property</li>
                                <li>Your projects built with NextForge are yours (we claim no rights)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">7. Disclaimer of Warranties</h2>
                            <p className="mb-4 uppercase text-white font-bold">Important: Please read carefully</p>
                            <p className="mb-2">NextForge is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>Merchantability or fitness for a particular purpose</li>
                                <li>Uninterrupted, error-free, or secure operation</li>
                                <li>Accuracy or reliability of results</li>
                                <li>Compatibility with all systems and services</li>
                            </ul>
                            <p className="text-gray-400">We make no guarantees about specific revenue, business results, or success. Your results depend on your implementation and business model.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">8. Limitation of Liability</h2>
                            <p className="mb-2">To the maximum extent permitted by law:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>We are not liable for any indirect, incidental, consequential, or punitive damages</li>
                                <li>Our total liability shall not exceed the amount you paid for NextForge</li>
                                <li>We are not responsible for issues caused by third-party services (Vercel, Supabase, Lemon Squeezy, etc.)</li>
                                <li>You are responsible for backing up your data and code</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">9. User Obligations</h2>
                            <p className="mb-2">By using NextForge, you agree to:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400">
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not use NextForge for illegal or unethical purposes</li>
                                <li>Secure your account credentials and repository access</li>
                                <li>Not attempt to reverse engineer, decompile, or hack our systems</li>
                                <li>Respect the intellectual property rights of others</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">10. Termination</h2>
                            <p className="mb-2">We reserve the right to:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>Revoke your license if you violate these Terms</li>
                                <li>Deny refunds for policy violations</li>
                                <li>Discontinue support at our discretion</li>
                            </ul>
                            <p>Upon termination, you must cease using NextForge and delete all copies. Projects already built remain yours.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">11. Third-Party Services</h2>
                            <p className="mb-2">NextForge integrates with third-party services:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mb-4">
                                <li>Lemon Squeezy (payments)</li>
                                <li>Vercel (hosting)</li>
                                <li>Supabase (database)</li>
                                <li>Resend (email)</li>
                            </ul>
                            <p>You must comply with their Terms of Service. We are not responsible for their availability, pricing changes, or service issues.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">12. Modifications to Terms</h2>
                            <p>We may update these Terms periodically. Significant changes will be announced via:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-2 mb-4">
                                <li>Email notification</li>
                                <li>Website banner</li>
                                <li>GitHub repository update</li>
                            </ul>
                            <p>Continued use after changes indicates acceptance. If you don't agree, stop using NextForge.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">13. Governing Law</h2>
                            <p>These Terms are governed by the laws of [Your Country/State]. Any disputes shall be resolved in the courts of [Your Jurisdiction].</p>
                            <p className="mt-2 text-xs text-gray-500">For international customers: You agree to waive any conflicts of law principles.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">14. Severability</h2>
                            <p>If any provision of these Terms is found unenforceable, the remaining provisions remain in full effect.</p>
                        </section>

                        <section>
                            <h2 className="text-white font-black uppercase tracking-widest mb-4">15. Contact Information</h2>
                            <p className="mb-2">Questions about these Terms? Contact us:</p>
                            <ul className="list-none space-y-1 text-gray-400">
                                <li>📧 Email: legal@nextforge.app</li>
                                <li>💬 Support: support@nextforge.app</li>
                                <li>🌐 Website: https://nextforge.app</li>
                            </ul>
                        </section>

                        <div className="pt-8 border-t border-white/5">
                            <p className="text-[10px] uppercase font-black text-gray-500 mb-2">
                                Last Updated: February 3, 2026
                            </p>
                            <p className="text-xs text-gray-600 mb-4">
                                By purchasing or using NextForge, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                            </p>
                            <p className="text-xs text-indigo-400">
                                ✅ This document is written in plain English for clarity. If you have questions, we're happy to clarify.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
