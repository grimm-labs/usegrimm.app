export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="border-t pt-4 border-gray-100">
                    <div className="flex h-16 items-center justify-between">
                        <p className="text-sm text-gray-500">&copy; 2022. Grimm Technologies. All rights reserved.</p>
                        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-sm sm:mt-0 lg:justify-end">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75">Terms</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75">Privacy</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75">Donate</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
