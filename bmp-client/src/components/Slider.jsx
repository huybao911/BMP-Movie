import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="Popular on BMP Movie" />
      <CardSlider
        data={getMoviesFromRange(20, 30)}
        title="New Releases"
      />
      <CardSlider
        data={getMoviesFromRange(30, 40)}
        title="Watch In One Weekend"
      />
      <CardSlider data={getMoviesFromRange(40, 50)} title="International TV Shows" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Action Movies" />
    </Container>
  );
}

const Container = styled.div``;
