import { styled } from "styled-components";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Heading = styled.h1`
  text-transform: uppercase;
  color: orange;
`;

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Heading>Where is my HRM? :(</Heading>
      <button onClick={() => alert("oh no, it works?")}>
        Clicking me doesn't work
      </button>
    </div>
  );
}
