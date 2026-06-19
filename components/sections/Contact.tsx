"use client";

import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="cl:py-32 mx-auto flex h-full max-w-contentContainer flex-col items-center justify-center gap-6 py-10"
    >
      <p className="flex items-center font-codeFont text-lg font-semibold tracking-wide text-textGreen">
        06. What&apos;s Next?
      </p>
      <h2 className="font-titleFont text-2xl font-semibold sm:text-3xl lgl:text-4xl">
        Let&apos;s get in touch
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        My inbox is always open and looking for new opportunities <br /> Whether you have a question
        or just want to say hi, I&apos;ll do my best to get back to you!
      </p>
      
      {/* Direct link to Gmail compose window */}
      <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=muneeburrehmansiddiqui98@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex h-14 w-40 items-center justify-center rounded-md border border-textGreen font-titleFont text-sm tracking-wider text-textGreen duration-300 hover:bg-hoverColor"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;