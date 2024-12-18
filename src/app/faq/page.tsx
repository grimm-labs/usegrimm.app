import { FAQItem } from "../components/faq-item";
import Footer from "../components/footer";
import Header from "../components/header";

export default function FAQ() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <FAQItem title="title" content="content" />
      </div>
      <Footer />
    </div>
  );
}
