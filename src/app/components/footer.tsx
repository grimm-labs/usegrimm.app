"use client"

import Link from "next/link";
import { Modal } from "./modal";
import { Donation } from "./donation";
import { useState } from "react";

export default function Footer() {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    return (
        <footer>
            <Modal isOpen={isDonationModalOpen} content={<Donation />} onClose={ () => setIsDonationModalOpen(false) }  />
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="border-t pt-2 border-gray-100">
                    <div className="flex h-16 items-center justify-between">
                        <p className="text-sm text-gray-500">&copy; 2022. Grimm Tech. All rights reserved.</p>
                        <ul className="flex flex-wrap justify-start gap-4 text-sm sm:mt-0 lg:justify-end">
                            <li>
                                <Link href={"/terms"} className="text-gray-500 transition hover:opacity-75">Terms</Link>
                            </li>
                            <li>
                                <Link href={"/privacy"} className="text-gray-500 transition hover:opacity-75">Privacy</Link>
                            </li>
                            <li>
                                <button className="text-gray-500 transition hover:opacity-75">Contact Us</button>
                            </li>
                            <li>
                                <button onClick={() => setIsDonationModalOpen(true)} className="text-gray-500 transition hover:opacity-75">Donate</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
