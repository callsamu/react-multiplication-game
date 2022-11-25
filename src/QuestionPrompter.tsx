import { Text } from "@chakra-ui/react";

type QuestionProps = {
  multiplier: number
  multiplicand: number
}
function QuestionPrompter(props: QuestionProps) {
  return (
    <Text fontSize="25">{ props.multiplier } * { props.multiplicand } = ?</Text>
  );
}

export default QuestionPrompter;
