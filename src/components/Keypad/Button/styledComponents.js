import styled from "styled-components";
const orange = ["/", "*", "-", "+", "="];
const lightGrey = ["c", "%", "Del"];

export const StyleButton = styled.input`
  /* background-color: #171717; */
  background-color: ${props => {
    if (orange.includes(props.value)) {
      return "#e48800";
    }
    if (lightGrey.includes(props.value)) {
      return "#9e9e9e";
    } else {
      return " #171717";
    }
  }};
  height: 50px;
  width: ${props => (props.value === "0" ? "100px" : "50px")};
  border-radius: 25px;
  color: #fff;
  font-size: 14px;
  margin: 2px;
  padding: 2px;
`;
