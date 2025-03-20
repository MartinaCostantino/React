import Color from "./color";

export default function Colors({ colors }){
    return (
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    );
  };