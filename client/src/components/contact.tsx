import circleG from "../images/circle-g.svg";
import circleB from "../images/circle-b.svg";
import { useState } from "react";
import { sendEmail } from "../services/emailjs";
import { Modal } from "./modal";

interface ContactProps {
  openingSpace: string;
}

export const Contact: React.FC<ContactProps> = (props) => {
  const { openingSpace } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(name, email, phone, message);
    setOpen(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div className="mt-10 bg-secondary pt-10 pb-20">
        <div className={`bg-secondary`}>
          <h1 className={`bg-secondary ${openingSpace} pt-20 pb-0 lg:pb-14`}>
            contact me
          </h1>
        </div>
        <Modal open={open} setOpen={setOpen} />
        <div className="relative z-10 overflow-x-hidden bg-secondary pt-0 pb-20 md:pt-10 lg:py-12">
          <div className="container mx-auto mt-10 mb-0 max-w-6xl px-6 pb-10 md:px-8">
            <div className="-mx-4 flex flex-wrap lg:justify-between">
              <div className="w-full px-4 lg:w-4/12 ">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2 className="mb-6 text-[28px] font-bold uppercase text-primary sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    LET'S GET IN TOUCH
                  </h2>
                  <div className="mb-9 text-2xl uppercase leading-relaxed text-secondary">
                    <p> Have a question?</p> <p>Want to work with me?</p>{" "}
                    <p>Write me a note!</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-8/12">
                <div className="relative bg-primary p-8 shadow-2xl dark:bg-[#465162] sm:p-12">
                  <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                      handleSubmit(e)
                    }
                  >
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="input"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="phone (optional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows={4}
                        placeholder="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input resize-none"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="form-button bg-[#243665]"
                      >
                        Message Me
                      </button>
                    </div>
                  </form>
                  <div>
                    <span className="absolute -top-10 -right-9 z-[-1]">
                      <img src={circleG} alt="" className="hidden dark:block" />
                      <img src={circleB} alt="" className="dark:hidden" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
