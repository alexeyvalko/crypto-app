import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent, FC, useEffect, useRef } from 'react';

type Props = {
  handleFocus(): void;
  handleBlur(): void;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  setDisplayItem(bool: boolean): void;
  isFocused: 'none' | 'flex';
};

export const SearchInput: FC<Props> = ({
  handleFocus,
  handleBlur,
  handleChange,
  setDisplayItem,
  isFocused,
}) => {
  const inputColor = useColorModeValue('gray.800', 'gray.200');
  const bgIcon = useColorModeValue('gray.500', 'gray.200');

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    setDisplayItem(true);
  };
  useEffect(() => {
    if (isFocused === 'flex') {
      inputRef?.current?.focus();
    }
  }, [isFocused]);

  return (
    <InputGroup display="flex">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        ref={inputRef}
        color={inputColor}
        autoComplete="off"
        placeholder="Search"
        size="md"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        paddingEnd="10px"
      />
      <InputRightElement width={{ base: '4.5rem', lg: 0 }}>
        <IconButton
          onClick={handleClick}
          size="sm"
          display={{ base: 'inline-flex', lg: 'none' }}
          variant="ghost"
          aria-label="Close"
          icon={<CloseIcon color={bgIcon} />}
        />
      </InputRightElement>
    </InputGroup>
  );
};
