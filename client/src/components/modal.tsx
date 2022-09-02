import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { open, setOpen } = props;
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden  bg-primary text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-primary px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-primary sm:mx-0 sm:h-10 sm:w-10">
                      <EnvelopeOpenIcon
                        className="h-12 w-12 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium uppercase leading-6 text-secondary"
                      >
                        Thank You
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-secodary text-sm">
                          I will get back to you as soon as possible.
                        </p>
                        <p className="pt-2 text-xs">
                          Please check your email for confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className=" mt-3 inline-flex w-full  justify-center border border-gray-300 bg-primary px-4 py-2 text-base font-medium text-secondary shadow-sm transition duration-300  hover:bg-[#8bd8bd] hover:bg-primary focus:outline-none dark:hover:text-slate-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
