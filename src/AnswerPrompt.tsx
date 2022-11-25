import { Button, HStack, NumberInput, NumberInputField } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

type SetAnswer = React.Dispatch<React.SetStateAction<number | null>>;

function AnswerPrompt(props: { submitAnswer: SetAnswer }) {
  const [answer, setAnswer] = useState(0);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    props.submitAnswer(answer);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack p="5">
        <NumberInput p-left="5">
          <NumberInputField onChange={(e) => setAnswer(Number.parseInt(e.target.value))}/>
        </NumberInput>
        <Button p="5" type="submit" value="submit"> Submit </Button>
      </HStack>
    </form>
  );
}
