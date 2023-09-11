import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { GiTie } from "react-icons/gi";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "3rem",
              color: "#b74646",
              marginRight: "10px",
            }}
          >
            <BiLogoGmail />{" "}
          </span>
          <a
            href="mailto:uzairhajra76330@gmail.com"
            style={{
              textDecoration: "underline !important",
              fontSize: "1.3rem",
            }}
          >
            uzairhajra76330@gmail.com
          </a>
        </label>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "3rem",
              color: "#11dbff",
              marginRight: "10px",
            }}
          >
            <AiOutlineTwitter />{" "}
          </span>
          <a
            href="https://twitter.com/0xJustUzair"
            style={{
              textDecoration: "underline !important",
              fontSize: "1.3rem",
            }}
          >
            0xJustUzair
          </a>
        </label>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "3rem",
              color: "#fafafa",
              marginRight: "10px",
            }}
          >
            <AiFillGithub />{" "}
          </span>
          <a
            href="https://www.github.com/JustUzair"
            style={{
              textDecoration: "underline !important",
              fontSize: "1.3rem",
            }}
          >
            JustUzair
          </a>
        </label>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "3rem",
              color: "#0953ff",
              marginRight: "10px",
            }}
          >
            <AiFillLinkedin />{" "}
          </span>
          <a
            href="https://www.linkedin.com/in/0xJustUzair"
            style={{
              textDecoration: "underline !important",
              fontSize: "1.3rem",
            }}
          >
            0xJustUzair
          </a>
        </label>

        <button
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary content-center"
          style={{
            width: "100%",
            margin: "20px auto 10px auto",
          }}
        >
          <a
            className="flex items-center justify-center"
            href="/resume/Uzair Saiyed (SCET, Surat).pdf"
            download
            type="application/pdf"
          >
            <GiTie className="w-6 h-6" />
            Download my Resume
          </a>
        </button>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
