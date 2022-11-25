import { Container, VStack } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";

import QuestionPrompter from "./QuestionPrompter";
import RangeSettings from "./RangeSettings";
import AnswerPrompt from "./AnswerPrompt";
import AnswerPanel from "./AnswerPanel";

import * as consts from "./consts";

function randomNumber(max: number) {
  return Math.floor(Math.random() * max + 1);
}

function MultiplicationGame() {
  const [maxMultiplier, setMaxMultiplier] = useState(consts.INITIAL_MAX_MULTIPLIER);
  const [maxMultiplicand, setMaxMultiplicand] = useState(consts.INITIAL_MAX_MULTIPLICAND);

  const [answer, setAnswer] = useState<number | null>(null)
  const [request, requestQuestion] = useReducer((x) => x + 1, 0);

  const [multiplier, setMultiplier] = useState(0);
  const [multiplicand, setMultiplicand] = useState(0);

  useEffect(() => {
    setMultiplier(randomNumber(maxMultiplier));
    setMultiplicand(randomNumber(maxMultiplicand));
    setAnswer(null);
  }, [maxMultiplier, maxMultiplicand, request]);


  return (
    <Container centerContent>
      <RangeSettings
        maxMultiplier={maxMultiplier}
        maxMultiplicand={maxMultiplicand}
        onMaxMultiplierChange={setMaxMultiplier}
        onMaxMultiplicandChange={setMaxMultiplicand}
      />
      {
        answer === null ?
          <VStack>
            <QuestionPrompter
              multiplier={multiplier}
              multiplicand={multiplicand} />
            <AnswerPrompt submitAnswer={setAnswer} />
          </VStack>
        :
          <AnswerPanel answer={multiplier * multiplicand}
            userAnswer={answer}
            questionRequest={requestQuestion} />
      }
    </Container>
  );
}

export default MultiplicationGame;
