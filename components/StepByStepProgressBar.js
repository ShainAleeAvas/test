import React from "react";
import { View, useWindowDimensions } from "react-native";

export default function StepByStepProgressBar({ steps = 3, percent = 30 }) {
  const width = useWindowDimensions().width;
  const fullsection = width / steps - 30;

  const stepValue = (i) => {
    const current = 100 / steps;
    console.log(current);
    const percentRemain = current * i - percent;

    console.log(percentRemain);
    return i * (100 / steps) > percent ? 0 : fullsection;
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        width: "100%",
        height: 16,
      }}
    >
      {[...Array(steps)].map((_, i) => (
        <View
          key={"StepByStep" + i}
          style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ width: width / steps - 30 }}>
            <View
              style={{
                backgroundColor: "#60BC6A",
                borderRadius: 100,
                height: 4,
                width: stepValue(i + 1),
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 16,
              height: 16,
              width: 16,
              backgroundColor: "#C8EBCA",
            }}
          />
        </View>
      ))}
    </View>
  );
}
