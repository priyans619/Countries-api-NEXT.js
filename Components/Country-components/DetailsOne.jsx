import Col from "react-bootstrap//Col";
import { motion } from 'framer-motion'
import style from "styles/singlecountry.module.scss";

export default function DetailsOne({detailsOne}) {

    const { nativeName, region, subregion, population, capital } = detailsOne;
    return (
    <Col xs={12} md={6} className={`${style.descCol1}`}>
      <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          className="country-key fs-7 fw-bold"
        >    
            Native Name:{""}
            <span className="fs-6 country-value">
            {nativeName ? nativeName : "No Native Name"}
            </span>
        </motion.p>
        



    </Col>
    
    
    
    
    
        );

}