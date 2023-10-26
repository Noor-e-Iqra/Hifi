import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import routes from "../../navigation/routes";
import { useTheme } from "react-native-paper";

// Importing custom components and data
import { CustomButton } from "../../components/customButton";
import Container from "../../components/Container";
import { Skip } from "../../components/skip";
import { grades } from "../../data";
import { Grade } from "../../components/grade";

export const GradeSelection = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  // State hook to manage the selected grade category and option
  const [selected, setSelected] = useState({ category: "", option: "" });

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      <Text style={styles.title(fonts, colors)}>What's your grade? </Text>

      {/* Mapping through grades array to render Grade components */}
      {grades.map((item, i) => (
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
  title: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 25,
    alignSelf: "flex-start",
    color: colors.gray,
    marginBottom: 10,
  }),
});
