import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex flex-col items-center space-y-8">
        <span className="text-orange-600 px-4 py-2 rounded-full font-thin bg-orange-50 border border-orange-600">
          <span className="font-semibold text-sm text-white bg-orange-600 py-1 px-2 rounded-full">Grimm App</span> - The Bitcoin superapp for Financial Freedom
        </span>
        <div className="text-6xl text-center w-2/3 leading-tight">
          The <span className="font-semibold text-green-600">next generation</span> of Bitcoin use cases design from <span className="font-semibold text-orange-600">Africa</span> ✌️
        </div>
        <div>
          <button className="border bg-green-600 px-4 py-2 rounded-full text-white">Download Grimm App</button>
        </div>
        <span className="text-base font-thin w-1/3 text-center">
          “Bitcoin is the most important invention in the history of the world since the Internet.” — <span><span className="font-semibold">Roger Ver</span> • Bitcoin angel investor, and evangelist</span>
        </span>
      </div>
      <Footer />
    </div>
  );
}
