import { useRef, useState } from "react";
import { sendEmail } from "../services/emailjs";
import { Modal } from "../components/modal";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { animateH1 /* animatefromBottom */ } from "../assets/animation";
import { Spinner } from "../components/spinner";
import circleG from "../images/circle-g.svg";
import circleB from "../images/circle-b.svg";

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [open, setOpen] = useState(false);

  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    // offset - starts when start of element meets bottom(end) of viewport - ends when start of element meets top(start) of viewport
    offset: ["start end", "start start"],
  });
  //add spring effect
  const scrollYspring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.00001,
  });
  // starts at 50% of viewport, ends at 80%
  const formY = useTransform(scrollYspring, [0.1, 0.6], ["80%", "0%"]);
  const decorationY = useTransform(scrollYspring, [0, 1], ["90%", "-2%"]);
  const writeMeOpacity = useTransform(
    scrollYspring,
    [0.5, 0.9],
    ["0%", "100%"]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(name, email, phone, message);
    setSending(true);
    setTimeout(() => {
      setOpen(true);
      setSending(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1250);
  };

  return (
    <div id="contact" ref={contactRef}>
      <div className={`bg-secondary`}>
        <motion.h1
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          variants={animateH1}
          className={`bg-secondary pt-20 pb-0 lg:pb-14`}
        >
          contact me
        </motion.h1>
      </div>
      <Modal open={open} setOpen={setOpen} />
      <div className="relative z-10 overflow-x-hidden overflow-y-hidden bg-secondary pt-0 pb-20 md:pt-10 lg:py-12">
        <div className="container mx-auto mt-10 mb-0 max-w-6xl px-6 pb-10 md:px-8">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-4/12 ">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mb-6 text-[28px] font-bold uppercase text-primary sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  LET'S CONNECT
                </h2>
                <motion.div
                  style={{ opacity: writeMeOpacity }}
                  className="mb-9 text-2xl uppercase leading-relaxed text-secondary"
                >
                  <p> Have a question?</p> <p>Want to work with me?</p>{" "}
                  <p>Write me a note!</p>
                </motion.div>
              </div>
            </div>
            <motion.div className="w-full px-4 lg:w-8/12" style={{ y: formY }}>
              <div className="relative rounded bg-primary p-8 shadow-2xl dark:bg-[#465162] sm:p-12">
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
                      className={`form-button  ${
                        sending ? "bg-[#8bd8bd] shadow-2xl" : "bg-[#3c77b9]"
                      }`}
                    >
                      {/* old color button bg-[#243665] */}
                      {sending ? (
                        <>
                          <Spinner /> Sending ...
                        </>
                      ) : (
                        "Message Me"
                      )}
                    </button>
                  </div>
                </form>
                <div>
                  <motion.span
                    style={{ y: decorationY }}
                    className="absolute -top-10 -right-9 z-[-1]"
                  >
                    <img src={circleG} alt="" className="hidden dark:block" />
                    <img src={circleB} alt="" className="dark:hidden" />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
