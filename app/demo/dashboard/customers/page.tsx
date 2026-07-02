"use client";

import { motion } from "framer-motion";
import { Search, Filter, MoreHorizontal, Download, UserPlus, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const customers = [
    { name: "Anna Kowalska", email: "anna@example.com", status: "Active", plan: "Pro", spent: "$1,200", date: "2024-01-12" },
    { name: "Piotr Nowak", email: "piotr@test.com", status: "Active", plan: "Enterprise", spent: "$5,400", date: "2024-01-10" },
    { name: "Janina Wójcik", email: "janina@domain.com", status: "Churned", plan: "Basic", spent: "$20", date: "2023-12-28" },
    { name: "Krzysztof Bąk", email: "kriss@studio.com", status: "Active", plan: "Pro", spent: "$990", date: "2024-01-15" },
    { name: "Ewa Ziętek", email: "ewa@agency.pl", status: "Inactive", plan: "Free", spent: "$0", date: "2024-01-05" },
    { name: "Marek Jurek", email: "marek@tech.io", status: "Active", plan: "Enterprise", spent: "$8,250", date: "2024-01-20" },
    { name: "Ola Dąbrowska", email: "ola@design.com", status: "Active", plan: "Pro", spent: "$1,150", date: "2024-01-18" },
];

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight mb-2">Customers</h1>
                    <p className="text-gray-400 text-sm">Manage your user base and permissions.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="secondary" className="text-xs h-10 bg-white/5 border-white/10 hover:bg-white/10">
                        <Download className="w-4 h-4 mr-2" /> Export
                    </Button>
                    <Button glow className="text-xs h-10">
                        <UserPlus className="w-4 h-4 mr-2" /> Add Customer
                    </Button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden"
            >
                {/* Filters */}
                <div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search customers..."
                            className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-gray-300 hover:text-white flex items-center gap-2">
                            <Filter className="w-3 h-3" /> Status
                        </button>
                        <button className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-gray-300 hover:text-white flex items-center gap-2">
                            <Filter className="w-3 h-3" /> Plan
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/[0.02] border-b border-white/5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Plan</th>
                                <th className="px-6 py-4">Total Spent</th>
                                <th className="px-6 py-4">Joined</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {customers.map((customer, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-white/[0.02] transition-colors group"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-xs font-bold text-indigo-400">
                                                {customer.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{customer.name}</div>
                                                <div className="text-xs text-gray-500">{customer.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${customer.status === "Active"
                                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                : customer.status === "Churned"
                                                    ? "bg-red-500/10 text-red-400 border-red-500/20"
                                                    : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                            }`}>
                                            {customer.status === "Active" && <CheckCircle2 className="w-3 h-3" />}
                                            {customer.status === "Churned" && <XCircle className="w-3 h-3" />}
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-300">{customer.plan}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-mono text-white">{customer.spent}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-gray-500">{customer.date}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination mock */}
                <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                    <span>Showing 1-7 of 128 results</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5">Next</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
