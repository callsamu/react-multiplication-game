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
          <Slider
            aria-label="slider-ex-1"
            name="multiplier"
            w="20rem"
            defaultValue={INITIAL_MAX_MULTIPLIER}
            onChange={(e) => props.onMaxMultiplierChange(e)}>
            <SliderMark value={0} mt="1" ml="-2.5"> 0 </SliderMark>
            <SliderMark value={100} mt="1" ml="-2.5"> 100 </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box m="5">
          <Text> Max Multiplicand </Text>
          <Slider
            aria-label="slider-ex-1"
            w="20rem"
            defaultValue={INITIAL_MAX_MULTIPLICAND}
            onChange={(e) => props.onMaxMultiplicandChange(e)}>
            <SliderMark value={0} mt="1" ml="-2.5"> 0 </SliderMark>
            <SliderMark value={100} mt="1" ml="-2.5"> 100 </SliderMark>

            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </VStack>
    </form>
  );
}
