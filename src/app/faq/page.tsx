import Footer from "../components/footer";
import Header from "../components/header";

export default function FAQ() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="flex flex-col items-center space-y-8">
        FAQ
      </div>
      <Footer />
    </div>
  );
}
