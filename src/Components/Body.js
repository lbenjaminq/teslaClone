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

const Body = ({active}) => {
  return (
    <Container active={active}>
      <Section
        img={Model3}
        title={"Model 3"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        id="Model3"
        active={active}
        downArrow={"DownArrow"}
      />
      <Section
        img={ModelY}
        title={"Model Y"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        id="ModelY"
        active={active}
      />
      <Section
        img={ModelS}
        title={"Model S"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        id="ModelS"
        active={active}
      />
      <Section
        img={ModelX}
        title={"Model X"}
        subtitle={"Order Online for Touchless Delivery"}
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        id="ModelX"
        active={active}
      />
      <Section
        img={SolarPanels}
        title={"Solar Panels"}
        subtitle={"Lowest Cost Solar Panels in America"}
        leftButton="Order Now"
        rightButton="Learn More"
        active={active}
        id="SolarPanels"
      />
      <Section
        img={SolarRoof}
        title={"Solar Roof"}
        subtitle={""}
        leftButton="Order Now"
        rightButton="Learn More"
        active={active}
        id="SolarRoof"
      />
      <Section
        img={Accessories}
        title={"Accessories"}
        subtitle={"Produce Clean Energy From Your Roof"}
        leftButton="Shop Now"
        active={active}
      />
    </Container>
  );
};

export default Body;

const Container = styled.div`
  width: 100%;
`;
