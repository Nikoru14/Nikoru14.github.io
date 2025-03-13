import { motion } from "framer-motion";

const FadeInSection = ({ children, id }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }} // Optional: Fade out when leaving view
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
        >
            {children}
        </motion.section>
    );
};

export default FadeInSection;
