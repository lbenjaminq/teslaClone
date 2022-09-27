import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Model3 from "../images/model-3.jpg";
import ModelY from "../images/model-y.jpg";
import ModelS from "../images/model-s.jpg";
import ModelX from "../images/model-x.jpg";
import SolarPanels from "../images/solar-panel.jpg";
import SolarRoof from "../images/solar-roof.jpg";
import Accessories from "../images/accessories.jpg";

const Body = () => {
  return (
    <Container>
      <Section
        img={Model3}
        title={"Model 3"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        img={ModelY}
        title={"Model Y"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        img={ModelS}
        title={"Model S"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        img={ModelX}
        title={"Model X"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        img={SolarPanels}
        title={"Solar Panels"}
        subtitle={"Lowest Cost Solar Panels in America"}
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        img={SolarRoof}
        title={"Solar Roof"}
        subtitle={""}
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        img={Accessories}
        title={"Accessories"}
        subtitle={"Produce Clean Energy From Your Roof"}
        leftButton="Shop Now"
      />
    </Container>
  );
};

export default Body;

const Container = styled.div`
  width: 100%;
`;
