import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type QuestionRequest = React.DispatchWithoutAction;

function NewQuestionButton({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return <Button p="5" onClick={onClick}> Go to a New Problem </Button>;
}

type AnswerProps = {
  answer: number
  userAnswer: number | null
  questionRequest: QuestionRequest
}
function AnswerPanel(props: AnswerProps) {
  const { answer, userAnswer } = props;

  const isCorrect = (answer === userAnswer);
  return (
    <Container centerContent>
      <VStack>
        <Heading color={ isCorrect ? "green" : "red" } >
          { isCorrect ? "RIGHT!" : "WRONG!" }
        </Heading>
        <Text fontSize="20"> answer was { answer } </Text>
        <NewQuestionButton onClick={() => props.questionRequest()}/>
      </VStack>
    </Container>
  );
}

export default AnswerPanel;
