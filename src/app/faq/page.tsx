import { FAQItem } from "../components/faq-item";
import Footer from "../components/footer";
import Header from "../components/header";

export default function FAQ() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center">Frequently Asked Questions (FAQ)</h1>
        <p className="mt-2 text-lg text-center">Everything you need to know about our self-custodial Bitcoin wallet.</p>
      </div>
      <div className="flex flex-col">
        <FAQItem title="What is a self-custodial wallet?" content="A self-custodial wallet is a type of wallet where you have full control and ownership of your private keys. This means you are the only one with access to your funds, without relying on a third party. It’s crucial to securely back up your private keys to avoid losing access to your Bitcoin." />
        <FAQItem title="Can I buy and sell Bitcoin directly through the app?" content="Yes! Our app allows you to buy and sell Bitcoin directly, provided you complete a Know Your Customer (KYC) identity verification process. This ensures compliance with local regulations and the security of your transactions." />
        <FAQItem title="Why do I need to complete KYC to buy or sell Bitcoin?" content="KYC (Know Your Customer) verification is a legal requirement that helps prevent fraud, money laundering, and other illegal activities. It ensures a safe and regulated environment for all transactions." />
        <FAQItem title="Is my personal information secure?" content="Absolutely! We prioritize the privacy and security of your data. All personal information is securely stored and never shared with third parties without your explicit consent." />
        <FAQItem title="Is the app customizable?" content="Yes, our app is designed to be customizable. You can personalize the appearance and certain features to suit your preferences, creating a unique user experience." />
        <FAQItem title="What fees are associated with transactions?" content="We maintain transparent fees for buying, selling, and transferring Bitcoin. You can view detailed fee information within the app before completing a transaction." />
        <FAQItem title="What happens if I lose my private key?" content="As a self-custodial wallet, you are the sole owner of your private keys. If you lose them, we cannot recover them for you. We strongly recommend securely backing up your private keys in a safe place." />
        <FAQItem title="Does the app support other cryptocurrencies?" content="Currently, our app focuses exclusively on Bitcoin to provide an optimized and secure experience. However, we plan to support additional cryptocurrencies in the future." />
        <FAQItem title="Is the app available in all countries?" content="The app is accessible in most countries, but certain features, such as buying and selling Bitcoin, may be restricted depending on local regulations." />
        <FAQItem title="How can I get help if I encounter an issue?" content="Our support team is here to assist you. You can contact us directly through the app or send an email to our customer support. We’ll respond to your inquiries as quickly as possible." />
      </div>
      <Footer />
    </div>
  );
}
