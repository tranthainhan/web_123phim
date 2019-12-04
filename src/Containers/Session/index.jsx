import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
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
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [liValue, setLiValue] = React.useState(0);
    const [filterShowTimesList, setFilterShowTimesList] = useState([]);
    const [filterAddressList, setFilterAddressList] = useState([]);

    useEffect(() => {
        if (_.isEmpty(props.cinemaList)) {
            props.getCinema();
            props.getShowTimes('GP09');
        }
        else {
            onClickLogo(props.cinemaList[0].maHeThongRap);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.cinemaList]);

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    const onClickLogo = (maRap) => {
        const filterList = props.showTimesList.filter((item) => {
            return item.maHeThongRap === maRap
        })

        setFilterShowTimesList([
            filterList
        ]);
    }

    const onClickAddress = (maCumRap) => {
        const filterList = filterShowTimesList.map((wrap) => {
            return wrap.map((item) => {
                return item.lstCumRap.filter((film) => {
                    return film.maCumRap === maCumRap
                })
            })
        })

        setFilterAddressList(filterList);
    }

    const toggleActiveCol1 = (index) => {
        setValue1(index);
    }

    const toggleActiveCol2 = (index) => {
        setValue2(index);
    }

    const toggleActiveLi = (index) => {
        setLiValue(index);
    }

    const convertTime = (time) => {
        var d = new Date(time + 'Z');
        return d.getUTCHours() + ":" + d.getUTCMinutes();
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value1}
                onChange={handleChange1}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {
                    props.cinemaList.map((item, index) => {
                        return <img className={index === value1 ? "session_logoCinema active" : "session_logoCinema"} src={item.logo} alt="" onClick={() => { onClickLogo(item.maHeThongRap); toggleActiveCol1(index) }} />
                    })
                }
            </Tabs>

            {
                // console.log(filterShowTimesList)
                filterShowTimesList.map((wrap) => {
                    return wrap.map((item) => {
                        return <TabPanel className="wrap23" value={value1} index={value1}>
                            <div className="wrap23_content">
                                <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value2}
                                    onChange={handleChange2}
                                    aria-label="Vertical tabs example"
                                    className="colum2"
                                >
                                    {
                                        item.lstCumRap.map((film, index) => {
                                            return <div className={index === value2 ? "session_addressCinema_wrap active" : "session_addressCinema_wrap"} onClick={() => { onClickAddress(film.maCumRap); toggleActiveCol2(index) }}>
                                                <p className="titleCinema">{film.tenCumRap}</p>
                                                <p className="addressCinema">{film.diaChi}</p>
                                                <p className="detailCinema"><a href="/">[chi tiết]</a></p>
                                            </div>
                                        })
                                    }
                                </Tabs>

                                {
                                    filterAddressList.map((wrap1) => {
                                        return wrap1.map((wrap2) => {
                                            return wrap2.map((item) => {
                                                return item.danhSachPhim.map((film) => {
                                                    return <TabPanel className="colum3" value={value2} index={value2}>
                                                        <div className="colum3_wrap">
                                                            <div className="title" ><p>{film.tenPhim}</p></div>
                                                            <ul className="showTimes_wrap">
                                                                {
                                                                    film.lstLichChieuTheoPhim.map((item, index) => {
                                                                        const prefix = '2019-01-01T';
                                                                        if (item.ngayChieuGioChieu.slice(0, 11) === prefix) {
                                                                            return <li key={index} onClick={() => { toggleActiveLi(index) }} className={index === liValue ? "showTimes active" : "showTimes"}>{convertTime(item.ngayChieuGioChieu)}</li>
                                                                        }
                                                                    })
                                                                }
                                                            </ul>
                                                        </div>
                                                    </TabPanel>
                                                })
                                            })
                                        })
                                    })
                                }
                            </div>
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