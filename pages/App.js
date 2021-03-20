/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { Button } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import { IconButton } from "../web_modules/material-ui/index.js";
import { Box } from "../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
    item: {
        margin: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1)
    }
}));

const Module = props => {
    const styles_basic = useStyles4basic(props||{});
    const styles_basic = useStyles4basic(props || {});
    const [defaultState, setDefaultState] = React.useState({
    });

    return html`
        <${React.Fragment}>
            <${Button} variant="text" className=${styles_basic.item} key="1nuvgd0s">
            </${Button}>
            <${Button} variant="contained" color="secondary" className=${styles_basic.item} key="awuh2yfj" style=${{"width":"130.448px","height":"36px","position":"relative"}}>
                secondary
            </${Button}>
            <${Box} className=${styles_basic.container} key="9eyzigok" style=${{"width":"784px","height":"81px","position":"absolute","left":"0px","top":"170px"}}>
            </${Box}>
        </${React.Fragment}>
    `;
};

export default Module;