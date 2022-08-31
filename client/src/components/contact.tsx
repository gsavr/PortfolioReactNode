interface ContactProps {
  openingSpace: string;
}

export const Contact: React.FC<ContactProps> = (props) => {
  const { openingSpace } = props;

  return (
    <div id="contact">
      <h1 className={`bg-secondary ${openingSpace}`}>contact me</h1>

      <div className="relative z-10 overflow-hidden  bg-secondary py-20 lg:py-[120px]">
        <div className="container mx-auto mt-10 mb-0 max-w-6xl px-6 pb-10 md:px-8">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-4/12 ">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mb-6 text-[32px] font-bold uppercase text-primary sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  LET'S GET IN TOUCH
                </h2>
                <p className="mb-9 text-2xl uppercase leading-relaxed text-secondary">
                  Have a question? <p>Want to work with me?</p>{" "}
                  <p>Write me a note!</p>
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-8/12">
              <div className="relative bg-primary p-8 shadow-2xl sm:p-12">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="name"
                      required
                      className="input"
                    />
                  </div>
                  <div className="mb-6">
                    <input type="email" placeholder="email" className="input" />
                  </div>
                  <div className="mb-6">
                    <input type="text" placeholder="phone" className="input" />
                  </div>
                  <div className="mb-6">
                    <textarea
                      /* rows="6" */
                      placeholder="message"
                      className="input resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="border-primary w-full border bg-slate-600 p-3 uppercase text-white transition hover:bg-opacity-90"
                    >
                      Message Me
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
