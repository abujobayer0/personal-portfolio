import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="#00FFFF"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={5}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "a",
        ]}
      />
    </div>
  );
}
