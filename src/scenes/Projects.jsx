import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

const Project = ({ title }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <a href="https://fullstackdashboard-moo6.onrender.com/">
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="text-2xl font-playfair">
                  {"Full Stack Dashboard"}
                </p>
                <p className="mt-7">
                  A react Fullstack Dashboard using MERN stack
                </p>
              </div>
              <img src={`../assets/project-1.jpeg`} alt={"Project 1"} />
            </motion.div>
          </a>
          <a href="https://github.com/bozzilui/ReactDashboard">
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{"Simple Dashboard"}</p>
                <p className="mt-7">
                  A simple react dashboard with just frontend capabilities
                </p>
              </div>
              <img src={`../assets/project-7.jpeg`} alt={"Project 7"} />
            </motion.div>
          </a>

          {/* ROW 2 */}
          <a href="https://github.com/bozzilui/Music_Controller">
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{"Music Controller"}</p>
                <p className="mt-7">
                  Control Spotify Music with your friends. Create a room,
                  connect your spotify account and be able to pause, play and
                  skip songs from the application
                </p>
              </div>
              <img src={`../assets/project-3.jpeg`} alt={"Project 3"} />
            </motion.div>
          </a>
          <a href="https://github.com/bozzilui/Chart-Pilot">
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{"Chart Pilot"}</p>
                <p className="mt-7">
                  Chart pilot is a simple stock charting application built using
                  flask and dash. I created this application so that creating
                  charts for your stocks can all be done seamlessly.
                </p>
              </div>
              <img src={`../assets/project-4.jpeg`} alt={"Project 4"} />
            </motion.div>
          </a>
          <a href="https://github.com/bozzilui/">
            <motion.div variants={projectVariant} className="relative">
              <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{"Github Profile"}</p>
                <p className="mt-7">
                  This is a link to my github account where you can view the
                  repositories of all my previous projects
                </p>
              </div>
              <img src={`../assets/project-5.jpeg`} alt={"Project 5"} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
