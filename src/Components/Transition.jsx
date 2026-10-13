import { motion } from "framer-motion";

const Transition = () => {


  return (
<>


<motion.div className="slide-in" initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 0.5 , ease:[0.22, 1, 0.36, 0.8] }}   />


<motion.div className="slide-out" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 0.5 , ease:[0.22, 1, 0.36, 0.8] }}   />

</>


  );
};

export default Transition;