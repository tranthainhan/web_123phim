import React, { useRef } from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classNames from 'classnames';

import Col3 from "../Col3";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={2}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

const Col2 = (props) => {
    const [value, setValue] = React.useState(0);
    let refs = useRef([]);

    const handleChange = newValue => {
        setValue(newValue);
    };

    const toggleActive = location => {
        refs.current.map((item, index) => location === index ? item.classList.add('active') : item.classList.remove('active'))
    };

    return (
        <div className="col23_content">
            <div className="col2_wrap">
                {
                    props.wrap.lstCumRap.map((item, index) => {
                        return <div key={index} ref={div => refs.current[index] = div} className={classNames("session_addressCinema_wrap", { 'active': index === 0 })} onClick={() => { handleChange(index); toggleActive(index) }}>
                            <p className="titleCinema">{item.tenCumRap}</p>
                            <p className="addressCinema">{item.diaChi}</p>
                            <p className="detailCinema"><a href="/">[chi tiết]</a></p>
                        </div>
                    })
                }
            </div>


            <div className="col3_wrap">
                {
                    // console.log(props.showTimesList)
                    props.wrap.lstCumRap.map((item, index) => {
                        return <TabPanel value={value} index={index} key={index}>
                            <Col3 item={item} />
                        </TabPanel>
                    })
                }
            </div>
        </div>
    );
};

export default Col2;