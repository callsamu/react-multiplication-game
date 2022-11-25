import { Box, VStack, Text } from "@chakra-ui/react";
import {
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb
} from "@chakra-ui/react";

import * as consts from "./consts";

type SetNumber = React.Dispatch<React.SetStateAction<number>>;
type SliderProps = {
    value: number
    onChange: (value: number) => void
}
function SliderSetting(props: SliderProps) {
    return (
        <Slider
            aria-label="slider-ex-1"
            name="multiplier"
            w="20rem"
            defaultValue={props.value}
            onChange={props.onChange}>
            <SliderMark value={0} mt="1" ml="-2.5"> 0 </SliderMark>
            <SliderMark value={100} mt="1" ml="-2.5"> 100 </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    );

}

type RangeProps = {
    maxMultiplier: number
    maxMultiplicand: number
    onMaxMultiplierChange: SetNumber
    onMaxMultiplicandChange: SetNumber
}
function RangeSettings(props: RangeProps) {
    return (
        <form>
            <VStack p="20">
                <Box m="5">
                    <Text> Max Multiplier</Text>
                    <SliderSetting
                        value={consts.INITIAL_MAX_MULTIPLIER}
                        onChange={(e) => props.onMaxMultiplierChange(e)} />
                </Box>
                <Box m="5">
                    <Text> Max Multiplicand </Text>
                    <SliderSetting
                        value={consts.INITIAL_MAX_MULTIPLICAND}
                        onChange={(e) => props.onMaxMultiplicandChange(e)} />
                </Box>
            </VStack>
        </form>
    );
}

export default RangeSettings;
