import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import "./contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = e.target;
    const templateParams = {
      from_name: formData.email.value,
      user_name: formData.name.value,
      to_name: "atmjobayer0@gmail.com",
      message: formData.message.value,
    };

    emailjs
      .send(
        "service_hc9j2be",
        "template_v8j9v5f",
        templateParams,
        "DuhVsiWa7FFLEkdnA"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks for contact me!");
          formData.reset();
        },
        (error) => {
          toast.success("Sorry, There are some problem!");
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="container max-w-7xl relative my-24 mx-auto md:px-6"
    >
      {" "}
      <span className="max-w-[1300px]  md:h-[100vh]  h-60 bg-gradient-to-r  opacity-30 from-blue-800 to-blue-800 rounded absolute filter blur-[200px] -z-10 top-[300px] md:top-[150px] left-10"></span>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block roundedLg bg-[#161f42b0] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="flex flex-col md:flex-row">
              <div className="mb-12  shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="relative mb-6" data-te-inputWrapper-init>
                    <input
                      type="text"
                      name="name"
                      className=" border block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] border-gray-600 px-3 leading-[1.6] outline-none transition-all duration-200 easeLinear "
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative mb-6" data-te-inputWrapper-init>
                    <input
                      type="email"
                      name="email"
                      className="peer  block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] border-gray-600 outline-none transition-all  border-gray-600duration-200 easeLinear focus:placeholder:opacity-100 peer-focus:text-primary data-motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not"
                      id="exampleInput91"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative mb-6" data-te-inputWrapper-init>
                    <textarea
                      name="message"
                      className="peer block min-h-[auto] w-full rounded border border-gray-600 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 easeLinear focus:placeholder:opacity-100 data-motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn flex gap-2 items-center py-2 px-10"
                  >
                    Send <AiOutlineSend />
                  </button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <AiOutlineMail className="text-2xl" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:textWhite">Email</p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          atmjobayer0@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full  ">
                    <div className="flex md:ml-6 items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:textWhite">
                          Telephone
                        </p>

                        <p className="text-neutral-500 dark:text-neutral-200">
                          +880 1303 463436
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
