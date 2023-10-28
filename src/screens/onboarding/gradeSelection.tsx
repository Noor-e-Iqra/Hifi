import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import routes from "../../navigation/routes";
import { useTheme } from "react-native-paper";

// Importing custom components and data
import CustomButton from "../../components/customButton";
import Container from "../../components/container";
import Skip from "../../components/skip";
import { grades } from "../../data";
import Grade from "../../components/grade";
import { globalStyles } from "../../theme/styles";

interface GradeSelectionProps {
  navigation: any;
}

export const GradeSelection: React.FC<GradeSelectionProps> = ({
  navigation,
}) => {
  
  const { colors, fonts } = useTheme();
  // State hook to manage the selected grade category and option
  const [selected, setSelected] = useState<{
    category: string;
    option: string;
  }>({ category: "", option: "" });

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      <Text style={[globalStyles.heading(fonts, colors), styles.text]}>
        What's your grade?
      </Text>

      {/* Mapping through grades array to render Grade components */}
      {grades.map((item: any, i: number) => (
        <Grade
          key={i}
          item={item}
          selected={selected}
          setSelected={setSelected}
        />
      ))}

      {/* Next button */}
      <CustomButton
        text={"Next"}
        disabled={selected.option == ""}
        btnStyle={{ marginTop: "30%", width: "80%" }}
        onPress={() => navigation.navigate(routes.province_selection)}
      />

      {/* Skip */}
      <Skip navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
