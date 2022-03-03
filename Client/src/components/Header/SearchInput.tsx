import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';

type Props = {
  handleFocus(): void;
  handleBlur(): void;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  setDisplayItem(bool: boolean): void;
};

export const SearchInput: FC<Props> = ({
  handleFocus,
  handleBlur,
  handleChange,
  setDisplayItem,
}) => {
  const inputColor = useColorModeValue('gray.800', 'gray.200');
  const bgIcon = useColorModeValue('gray.500', 'gray.200');

  const handleClick = () => {
    setDisplayItem(true);
  };

  return (
    <InputGroup display="flex">
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
        onChange={handleChange}
      />
      <InputRightElement width="4.5rem">
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
