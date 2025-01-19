import ChatBot from "@/components/chatbox/chatbox";
import Footer from "./footer";
import Header from "./header";

export default function MainLayout({ header, footer, children }) {
  return (
    <div className="quantomo font-rubik">
      <Header header={header} />
      <main className="mx-auto">
        {children}
      </main>
      <ChatBot />
      <Footer footer={footer} />
    </div>
  );
}
