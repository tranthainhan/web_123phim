import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from "react-redux";
import { getCinema } from "../../Actions/Cinema";
import { getShowTimes } from "../../Actions/Cinema";
import _ from "lodash";
import "./style.scss";

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
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'auto',
        width: '60%',
        margin: 'auto',
        marginTop: '30px',
    },
    tabs: {
        border: `1px solid #ebebec`,
        width: '10%',
    },
}));

function Session(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [filterShowTimesList, setFilterShowTimesList] = useState([]);

    useEffect(() => {
        if (_.isEmpty(props.cinemaList)) {
            props.getCinema();
            props.getShowTimes('GP09');
        }
        // else {
        //     onClickLogo(props.cinemaList[0].maHeThongRap);
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.cinemaList]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onClickLogo = (maRap) => {
        const filterList = props.showTimesList.filter((item) => {
            return item.maHeThongRap === maRap
        })

        setFilterShowTimesList([
            filterList
        ]);
    }

    const toggleActive = (index) => {
        setValue({
            value: index,
        })
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {
                    props.cinemaList.map((item, index) => {
                        return <img className="session_logoCinema" src={item.logo} alt="" onClick={() => { onClickLogo(item.maHeThongRap) }} />
                    })
                }
            </Tabs>

            {
                // console.log(filterShowTimesList)
                filterShowTimesList.map((wrap) => {
                    return wrap.map((item) => {
                        return <TabPanel value={value} index={value}>
                            {
                                item.lstCumRap.map((film) => {
                                    return <div className="session_addressCinema_wrap">
                                        <p className="titleCinema">{film.tenCumRap}</p>
                                        <p className="addressCinema">{film.diaChi}</p>
                                        <p className="detailCinema">[chi tiết]</p>
                                    </div>
                                })
                            }
                        </TabPanel>
                    })
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cinemaList: state.cinemaList,
        showTimesList: state.showTimes,
    }
}

export default connect(mapStateToProps, { getCinema, getShowTimes })(Session);