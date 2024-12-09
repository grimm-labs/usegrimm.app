export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen border">
      <div>
        Header
      </div>
      <div className="flex flex-col items-center space-y-8">
        <span className="border border-orange-300 text-black px-3 py-2 rounded-full font-thin bg-gray-100">
          Grimm Wallet - Smart finance from Africa to the world securely
        </span>
        <div className="text-6xl text-center w-2/3 leading-tight">
          The next generation of crypto wallet design from Africa ✌️
        </div>
        <div className="border bg-purple-600 px-4 py-2 rounded-full text-white">
          <span>Get Mobile App</span>
        </div>
        <span className="text-base font-thin w-1/3 text-center">
          “Bitcoin is the most important invention in the history of the world since the Internet.” — Roger Ver, Bitcoin angel investor, and evangelist
        </span>
      </div>
      <div className="space-y-3">
        <div className="text-base text-center space-x-4">
          <a href="/support" className="text-sm font-medium">Support</a>
          <a href="/terms" className="text-sm font-medium">Terms</a>
          <a href="/privacy" className="text-sm font-medium">Privacy</a>
        </div>
        <div className="flex justify-center">
          <span className="text-sm font-medium m-3">Grimm Finance, Inc</span>
        </div>
      </div>
    </div>
  );
}
