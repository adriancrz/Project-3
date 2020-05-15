import MapContainer from "./MapContainer";
import React, {useState, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Styled from "styled-components";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import ReactMapGL from "react-map-gl";

export default function App() {
    const[viewport, setViewport] = useState({
        latitude:30.2672,
        longitude:97.7431,
        width: "",
        height: "",
        zoom:10
    });

    return <div>
<ReactMapGL {...viewport} mapboxApiAccessToken={ProcessingInstruction.env.REACT_APP_MAPBOX_TOKEN}>
    markers here
</ReactMapGL>

    </div>
}