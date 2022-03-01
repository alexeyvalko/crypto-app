import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";

type Props = {
  handleFocus(): void;
  handleBlur(): void;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;

};

export const SearchInput: FC<Props> = ({handleFocus, handleBlur, handleChange }) => {
  const inputColor = useColorModeValue('gray.800', 'gray.200');
  return (
    <InputGroup maxWidth="320px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          color={inputColor}
          autoComplete="off"
          placeholder="Search"
          size="md"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleChange}
        />
      </InputGroup>
  );
};